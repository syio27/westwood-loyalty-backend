# Bonus Flow Redesign – Plan

## 1. Current Flow (As-Is)

### 1.1 Data Model

| Entity        | Purpose                    | Key fields                                                                 |
|---------------|----------------------------|-----------------------------------------------------------------------------|
| **BonusGranted** | One grant per payment/manual | `bonusAmount`, `paymentTransaction`, `expiresAt`, `grantReason`            |
| **BonusUsed**    | One event per payment that used bonus | `bonusAmount`, `paymentTransaction`, `originalPaymentAmount`, `finalPaymentAmount` |
| **BonusRevoked** | One per refund/manual revoke | `bonusAmount`, `originalBonusGranted`, `paymentTransaction` (refund tx)   |

- **BonusUsed has no link to which grant(s) were consumed.** It is a global “used X” event.
- **BonusRevoked** always references one `originalBonusGranted` and revokes that grant **in full** (for payment refunds).

### 1.2 Balance Calculation (BonusMapper + replay)

- Load all events for client **by createdAt ASC**.
- **First pass:**  
  - Revoked grants: collect `originalBonusGranted.id` from each `BonusRevoked` (and manual revoke amount).  
  - Revoked grant IDs are excluded from “accumulated”.
- **Second pass:**  
  - `totalAccumulated` = sum of **non-revoked, non-expired** `BonusGranted.bonusAmount`.  
  - `totalUsed` = sum of all `BonusUsed.bonusAmount`.  
  - `manualRevokes` = sum of `BonusRevoked.bonusAmount` where `originalBonusGranted == null`.
- **Balance:**  
  `currentBalance = totalAccumulated - totalUsed - manualRevokes` (floored at 0).

So: **balance = (sum of active grants) − (sum of all uses) − (manual revokes)**.  
“Use” is not tied to any specific grant.

### 1.3 Where Events Are Created

| Action                    | Where                    | What is created                                                                 |
|---------------------------|--------------------------|----------------------------------------------------------------------------------|
| Payment completes (cashback) | EventBonusService        | One or more `BonusGranted` (e.g. BASIC_CASHBACK)                                |
| Draft payment completed with bonus | PaymentServiceImpl.completeDraftPayment | One `BonusUsed` with `bonusAmount` = request bonus; **no link to grants**       |
| Payment refunded          | PaymentServiceImpl.refundPayment | For **each** `BonusGranted` by that payment: one `BonusRevoked` (full grant amount) |
| Manual grant              | BonusServiceImpl         | One `BonusGranted` (no payment)                                                 |
| Manual revoke             | BonusServiceImpl         | One `BonusRevoked` (no originalBonusGranted; direct deduction)                  |

### 1.4 Client Balance Check Before Use

- `PaymentServiceImpl.completeDraftPayment` calls `calculateClientBonusBalance(clientId)` (replays events as above) and checks `balance >= bonusAmountUsed`.
- So we only allow use if the **replayed** balance is sufficient; we still don’t record **which** grants were used.

---

## 2. The Bug (Concrete Example)

**Scenario:**

1. **Grant A:** Payment #1 → `BonusGranted` 2000.
2. **Grant B:** Payment #2 → `BonusGranted` 500.  
   Balance = 2500.
3. **Use:** Customer pays with 500 bonus → one `BonusUsed(500)`.  
   Balance = 2500 − 500 = 2000.  
   We do **not** record whether that 500 came from Grant A or B.
4. **Refund:** Payment #2 (the one that created Grant B) is refunded.  
   We create `BonusRevoked(originalBonusGranted = B, bonusAmount = 500)`.

**Current balance logic:**

- Active grants: only A (2000). B is fully excluded (revoked).
- Total used: 500.
- **Balance = 2000 − 500 = 1500.** ✓ (correct by coincidence if the 500 was “from” B)

**Worse scenario (negative balance):**

1. **Grant A:** Payment #1 → `BonusGranted` 500.  
   Balance = 500.
2. **Use:** Customer uses 500 bonus → `BonusUsed(500)`.  
   Balance = 0.
3. **Refund:** Payment #1 is refunded.  
   We create `BonusRevoked(originalBonusGranted = A, bonusAmount = 500)`.

**Current balance logic:**

- Active grants: none (A is revoked).
- Total used: 500.
- **Balance = 0 − 500 = −500** → then floored to 0 in code, but logically wrong: we have “revoked” the very grant that was already fully consumed, so we are effectively double-subtracting (grant removed + use still counted).

So:

- We **revoke the full grant** on refund.
- We **never reduce “used”** by the part that came from that grant.
- Result: **refund can make balance go negative (or wrong) when the used bonus had come from the refunded payment’s grant.**

---

## 3. Root Cause

- **Use is global:** `BonusUsed` does not record which `BonusGranted`(s) it consumed.
- **Revoke is per-grant and full:** On refund we revoke the **entire** grant amount, regardless of how much of that grant was already used.

So we need either:

- To **allocate each use to specific grant(s)** (e.g. FIFO), and when revoking a grant only revoke the **unused** part, or  
- To **reduce “used”** when revoking a grant by the amount that had been consumed from that grant (which again requires knowing allocation).

Both directions require **grant-level consumption tracking**.

---

## 4. Design Options

### Option A: Allocation at use time (recommended)

**Idea:** When the user uses bonus, we decide **which grant(s)** the amount comes from (e.g. FIFO by `createdAt`, or by expiry first). We persist that allocation. Revoke only affects the **remaining** amount on that grant.

**Option A1 – New table `bonus_consumption` (allocation records)**

- New entity: e.g. `BonusConsumption` (or `BonusUsedAllocation`):  
  `bonusGrantedId`, `amount`, `paymentTransactionId` (the payment where bonus was used), `createdAt`.
- When completing a payment with bonus:
  1. Load client’s **non-revoked, non-expired** grants ordered by FIFO (e.g. `createdAt ASC`, or expiry first).
  2. Allocate `bonusAmountUsed` across grants (take from first grant until exhausted, then next, etc.).
  3. For each consumed slice: insert `BonusConsumption(grantId, amount, paymentTxId)`.
  4. Keep **one** `BonusUsed` for the payment (for history/display and existing DTOs) with total amount; optionally link it to consumptions or leave as summary.

- **Balance:**  
  For each non-revoked grant: `remaining = grant.bonusAmount - sum(consumption where grantId = grant.id)`.  
  `currentBalance = sum(remaining)` over non-revoked, non-expired grants (and subtract manual revokes as today).

- **Refund:**  
  For each `BonusGranted` by the refunded payment:  
  - `consumed = sum(consumption for this grant)`.  
  - `remaining = grant.bonusAmount - consumed`.  
  - Create **one** `BonusRevoked` with `originalBonusGranted = that grant`, `bonusAmount = remaining` (only revoke what’s left).  
  - No need to “reverse” BonusUsed: the grant is partially/fully revoked, and balance already uses grant minus consumption, so revoking the remaining is correct.

- **Pros:** Clear audit trail (which grant was used where), correct refund semantics, no negative balance from this bug.  
- **Cons:** New table and migration; balance query becomes “per-grant remaining” (can be done in app or with a DB view/query).

**Option A2 – BonusUsed references grant(s) via detail table**

- Same idea as A1, but the “consumption” is the main record: e.g. `BonusUsed` stays as the payment-level event, and we add `BonusUsedAllocation( bonusUsedId, bonusGrantedId, amount )`.  
- Balance and refund logic same as A1.  
- Slightly more normalized (each use has N allocation rows).

**Recommendation:** Implement **Option A1** (or A2; they are equivalent for balance/refund). Prefer A1 if we want to query “consumptions per grant” without going through BonusUsed.

### Option B: Mutable “remaining” on grant

- Add `remaining_amount` (or similar) on `BonusGranted`. On use: decrement from grants (FIFO). On refund: revoke only `remaining_amount` of that grant (and set to 0 or mark revoked).
- **Pros:** Simple balance = sum(remaining_amount).  
- **Cons:** Moves away from event-sourcing style (mutable state, harder to replay/audit).

### Option C: Keep events, add “reverse use” on revoke

- Keep current model. When we create `BonusRevoked` for a grant, we also create a “negative” or “reversal” use event for the amount that was **already consumed** from this grant. So we need to know consumed-from-this-grant, which again requires allocation at use time.  
- So we still need allocation (Option A); then we can either revoke remaining (A1) or revoke full + reverse use (C). A1 is simpler and one source of truth.

---

## 5. Recommended Direction: Option A1 (Grant-level consumption)

### 5.1 New / Changed Artifacts

1. **New table + entity: `bonus_consumption`**
   - `id` (PK)
   - `bonus_granted_id` (FK → bonus_granted) — which grant was consumed
   - `amount` (how much from that grant)
   - `payment_transaction_id` (FK → payment_transactions) — payment where bonus was used
   - `created_at`
   - Optional: `bonus_used_id` (FK → bonus_used) if we want to link to the existing BonusUsed event.

2. **Complete draft payment (use bonus)**
   - Input: `clientId`, `bonusAmountUsed`, `paymentTxId`, etc.
   - Load grants: non-revoked, non-expired, ordered e.g. by `createdAt ASC` (FIFO).
   - Allocate `bonusAmountUsed` across grants; insert one `BonusConsumption` per slice.
   - Create one `BonusUsed` as today (for backward compatibility and UI).

3. **Balance calculation**
   - **Option (a):** In app: load all non-revoked, non-expired grants; for each, `remaining = grant.bonusAmount - sum(consumptions for this grant)`; balance = sum(remaining) - manualRevokes.  
   - **Option (b):** Single query / view that does the same (e.g. `SUM(grant.amount - COALESCE(consumed, 0))`).

4. **Refund**
   - For each `BonusGranted` by the refunded payment:
     - `consumed = sum(BonusConsumption where bonus_granted_id = this grant)`.
     - `remaining = grant.bonusAmount - consumed`.
     - If `remaining > 0`: create `BonusRevoked(originalBonusGranted = this grant, bonusAmount = remaining)`.
     - If `remaining == 0`: optionally create no revoke event, or revoke 0 (no-op); no new row is fine.

5. **Manual revoke**
   - Unchanged: one `BonusRevoked` with `originalBonusGranted = null`, `bonusAmount = X`.  
   - Balance = sum(grant remaining) - manualRevokes (already correct).

6. **History / reporting**
   - Client bonus history: can keep current event list; optionally add “consumed from grant X” in DTOs where relevant.
   - Analytics: total used = sum(BonusUsed) or sum(BonusConsumption); by grant = sum(BonusConsumption group by grant).

### 5.2 FIFO Rule

- Consume from oldest grant first (`BonusGranted.createdAt ASC`).  
- Optional: consider `expiresAt` (e.g. consume soon-to-expire first); can be a follow-up.

### 5.3 Migration / Backfill

- **New DB:** Add `bonus_consumption` table; no backfill.
- **Existing DB:**  
  - Add table.  
  - Backfill: for each existing `BonusUsed`, we don’t know which grant it came from. Options:  
    - **Conservative:** Leave old `BonusUsed` without allocations. Balance logic: for “grants that have no consumptions”, treat full amount as available; for “grants that have consumptions”, use remaining. So old data: all grants count fully, minus all BonusUsed. That’s current behavior. Then new uses create consumptions. Refunds: for old grants we can still revoke full amount (current behavior) or, if we want to avoid negative, revoke min(grant.amount, grant.amount - already_used_from_this_grant). But we don’t have “already_used_from_this_grant” for old data. So for **pre-migration** BonusUsed we have two choices:  
    - **(1)** Don’t backfill: treat all past use as “unallocated”. Refund of an old grant: revoke full amount; balance might still go negative if that grant was already fully used (current bug). So we only fix **new** uses/refunds.  
    - **(2)** Backfill heuristically: for each BonusUsed (chronologically), allocate to grants in FIFO order. Then we have allocation for history; refund logic can use it and avoid negative.  
- **Recommendation:** Implement (1) first (no backfill), fix going forward; optionally add (2) later for historical consistency.

### 5.4 Implementation Order

1. **DB + entity:** Add `bonus_consumption` table and `BonusConsumption` entity; repository.
2. **Allocation service:** `allocateBonusUse(clientId, amount, paymentTxId)` → returns list of (grantId, amount); persists `BonusConsumption` rows.
3. **PaymentServiceImpl:** In `completeDraftPayment`, after validating balance, call allocation service, then create `BonusUsed` as today.
4. **BonusMapper (or new helper):** Balance = sum over non-revoked grants of (grant.amount - sum(consumption for grant)) - manualRevokes. Update `calculateBalanceDto` and any other balance calculation (e.g. `PaymentServiceImpl.calculateClientBonusBalance`).
5. **Refund:** In `refundPayment`, for each grant by refunded payment: compute consumed, remaining; create `BonusRevoked` only for `remaining`.
6. **Tests:** Unit tests for allocation (FIFO), balance with consumptions, refund with partial/fully used grant.
7. **Optional:** Backfill script for old BonusUsed (FIFO allocation).

---

## 6. Summary

| Current issue | Fix |
|---------------|-----|
| Use not tied to grants | Allocate each use to specific grant(s) (FIFO) and store in `bonus_consumption`. |
| Refund revokes full grant | Revoke only **remaining** (grant amount − consumed from that grant). |
| Balance can go negative on refund | With allocation + revoke-remaining, balance stays consistent and non-negative. |

**Next step:** Implement Option A1 (table + entity, allocation in `completeDraftPayment`, balance formula, refund revoke-remaining), then test and deploy.
