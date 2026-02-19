# Reward Programs — Backend Rework

## Overview

The reward programs backend was reworked to support a full program lifecycle (create, configure, launch, schedule, deactivate, archive) with type-specific data models. The first program type fully implemented is **Cashback**. Welcome, Birthday, and Referral will follow using the same patterns.

### Key design principle

**The backend is step-agnostic.** There is no concept of "Step 1", "Step 2", etc. on the backend. The frontend owns the wizard flow entirely. The backend exposes a single save-draft endpoint per program type that accepts all fields — the frontend can call it at any point (after each step, on blur, on "Save Draft" button, etc.) sending only the fields it wants to persist.

---

## Program Types

```
WELCOME      — one-time bonus for new clients
BIRTHDAY     — annual birthday bonus
REFERRAL     — referrer/referee bonus
CASHBACK     — % or flat bonus on qualifying transactions
```

Each type will have its own:
- Save-draft endpoint (`PUT /{uuid}/cashback`, `PUT /{uuid}/welcome`, etc.)
- Request DTO with type-specific fields
- Database tables for type-specific rules

Shared across all types: `reward_programs` table (common fields), `program_weekly_schedules` (time windows), status lifecycle, launch/deactivate/archive flow.

---

## Program Lifecycle (State Machine)

```
                  ┌─────────────────────────────────────┐
                  │                                     │
    POST /draft   │    PUT /{uuid}/cashback              │
   ───────────►  DRAFT  ◄──────────────────┘            │
                  │                                     │
                  │  POST /{uuid}/launch                │
                  │  { immediate: true }                 │
                  ├──────────────────────► ACTIVE ───────┤
                  │                          │          │
                  │  POST /{uuid}/launch     │          │
                  │  { immediate: false }    │ (auto    │
                  ├──────► SCHEDULED ────────┘ on date) │
                  │            │                        │
                  │            │  POST /{uuid}/deactivate
                  │            ├────────────────────────►│
                  │                                     │
                  │       POST /{uuid}/deactivate       │
                  │  ACTIVE ────────────────► INACTIVE   │
                  │                              │      │
                  │                 POST /{uuid}/archive │
                  │                              │      │
                  │                          ARCHIVED    │
                  │                                     │
                  │  DELETE /{uuid}  (DRAFT only)       │
                  └─────────────────────────────────────┘
```

| Transition | Trigger |
|---|---|
| `→ DRAFT` | `POST /draft` — pre-generates UUID |
| `DRAFT → ACTIVE` | `POST /launch` with `immediate: true` |
| `DRAFT → SCHEDULED` | `POST /launch` with `immediate: false` (startDate must be in future) |
| `SCHEDULED → ACTIVE` | **Automatic** — scheduler runs every 60s, activates when `startDate` arrives |
| `ACTIVE → INACTIVE` | `POST /deactivate` (manual) **or** automatic when `endDate` passes |
| `SCHEDULED → INACTIVE` | `POST /deactivate` (manual cancel) |
| `INACTIVE → ARCHIVED` | `POST /archive` |
| `DRAFT → (deleted)` | `DELETE /{uuid}` |
| `INACTIVE → (deleted)` | `DELETE /{uuid}` |
| `ARCHIVED → (deleted)` | `DELETE /{uuid}` |

The `RewardProgramScheduler` (`@Scheduled`, 60s interval) handles:
- `SCHEDULED → ACTIVE` when `start_date <= now`
- `ACTIVE → INACTIVE` when `end_date` is set and `end_date <= now`

---

## API Endpoints

Base: `GET/POST/PUT/DELETE /api/v1/reward-programs`

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| `GET` | `/slots` | SUDO, ADMIN, MANAGER | One slot per program type with status |
| `POST` | `/draft` | SUDO, ADMIN | Create draft, returns UUID (idempotent) |
| `GET` | `/` | SUDO, ADMIN, MANAGER | List all programs (lightweight) |
| `GET` | `/{uuid}` | SUDO, ADMIN, MANAGER | Full program details |
| `PUT` | `/{uuid}/cashback` | SUDO, ADMIN | Save cashback draft (all fields optional) |
| `POST` | `/{uuid}/launch` | SUDO, ADMIN | Launch/schedule (accepts full program data inline) |
| `POST` | `/{uuid}/deactivate` | SUDO, ADMIN | Deactivate |
| `POST` | `/{uuid}/archive` | SUDO, ADMIN | Archive |
| `DELETE` | `/{uuid}` | SUDO, ADMIN | Delete (DRAFT, INACTIVE, ARCHIVED) |

### Typical flows

**Flow A — Fill form and launch directly (no save-draft needed):**

```
1. POST /draft  { "type": "CASHBACK" }                  → returns { uuid, type, status: "DRAFT" }
2. POST /{uuid}/launch  { "immediate": true, "name": "...", "cashbackType": "...", ... }
                                                         → saves data + launches in one call
```

**Flow B — Save draft now, finish later:**

```
1. POST /draft  { "type": "CASHBACK" }                  → returns { uuid }
2. PUT  /{uuid}/cashback  { name, cashbackType, ... }   → saves partial data
   ... user leaves, comes back later ...
3. GET  /{uuid}                                         → reload saved state
4. POST /{uuid}/launch  { "immediate": true }           → launches with existing draft data
```

The launch endpoint accepts all program data fields inline. If provided, they are persisted before validation runs. If omitted, the existing draft data is used as-is.

---

## Save Cashback Draft — Request Body

`PUT /api/v1/reward-programs/{uuid}/cashback`

All fields are **optional**. Only provided fields are updated; `null` means "don't touch" (except `endDate` which can be explicitly `null` for ongoing programs).

```json
{
  "name": "Summer Cashback",
  "description": "5% back on all purchases",

  "cashbackType": "PERCENTAGE",
  "cashbackValue": 5.00,
  "minSpendAmount": 0,
  "eligibilityType": "ALL",
  "redeemLimitPercent": 50,
  "bonusLifespanDays": 90,

  "startDate": "2025-03-01T00:00:00",
  "endDate": null,

  "weeklySchedules": [
    { "dayOfWeek": "MONDAY", "enabled": true, "startTime": "08:00", "endTime": "22:00" },
    { "dayOfWeek": "TUESDAY", "enabled": true, "startTime": "08:00", "endTime": "22:00" },
    { "dayOfWeek": "WEDNESDAY", "enabled": false, "startTime": null, "endTime": null }
  ],

  "tiers": [
    { "name": "Bronze", "minAmount": 0, "maxAmount": 100, "extraEarningPercent": 0, "sortOrder": 0 },
    { "name": "Silver", "minAmount": 101, "maxAmount": 500, "extraEarningPercent": 1, "sortOrder": 1 },
    { "name": "Gold", "minAmount": 501, "maxAmount": null, "extraEarningPercent": 2, "sortOrder": 2 }
  ]
}
```

### Field reference

| Field | Type | Description |
|-------|------|-------------|
| `name` | String | Program display name |
| `description` | String | Free-text description |
| `cashbackType` | `PERCENTAGE` \| `BONUS_POINTS` | How cashback is calculated |
| `cashbackValue` | BigDecimal | For PERCENTAGE: % rate. For BONUS_POINTS: points earned per threshold |
| `pointsSpendThreshold` | BigDecimal | For BONUS_POINTS only: spend amount per point unit (e.g. 1000 = earn `cashbackValue` points per 1000 tg) |
| `minSpendAmount` | BigDecimal | Minimum tx amount to qualify (0 = any) |
| `eligibilityType` | `ALL` \| `SPECIFIC_ITEMS` \| `SPECIFIC_CATEGORIES` \| `SPECIFIC_SERVICES` | What txs qualify (only `ALL` for now) |
| `redeemLimitPercent` | Integer (1-100) | Max % of tx that can be covered by bonuses (e.g., 50 or 100) |
| `bonusLifespanDays` | Integer \| null | Days until bonus expires (null = never) |
| `startDate` | DateTime | When program becomes active |
| `endDate` | DateTime \| null | When program ends (null = ongoing) |
| `weeklySchedules` | Array | Per-day time windows (7 entries max) |
| `tiers` | Array \| null | Tier config; empty array clears tiers, null leaves unchanged |

---

## Response — RewardProgramResponse

Returned by `GET /{uuid}`, `PUT /{uuid}/cashback`, and all lifecycle endpoints.

```json
{
  "uuid": "550e8400-e29b-41d4-a716-446655440000",
  "type": "CASHBACK",
  "status": "DRAFT",
  "name": "Summer Cashback",
  "description": "5% back on all purchases",
  "startDate": "2025-03-01T00:00:00",
  "endDate": null,
  "weeklySchedules": [
    { "dayOfWeek": "MONDAY", "enabled": true, "startTime": "08:00:00", "endTime": "22:00:00" }
  ],
  "cashbackRule": {
    "cashbackType": "PERCENTAGE",
    "cashbackValue": 5.00,
    "minSpendAmount": 0.00,
    "eligibilityType": "ALL",
    "redeemLimitPercent": 50,
    "bonusLifespanDays": 90
  },
  "cashbackTiers": [
    { "id": 1, "name": "Bronze", "minAmount": 0, "maxAmount": 100, "extraEarningPercent": 0, "sortOrder": 0 },
    { "id": 2, "name": "Silver", "minAmount": 101, "maxAmount": 500, "extraEarningPercent": 1, "sortOrder": 1 }
  ],
  "createdAt": "2025-02-16T10:00:00",
  "updatedAt": "2025-02-16T10:30:00"
}
```

---

## Database Schema (V35)

### Modified table: `reward_programs`

New columns added:

| Column | Type | Notes |
|--------|------|-------|
| `name` | VARCHAR(255) | nullable |
| `description` | TEXT | nullable |
| `start_date` | TIMESTAMP | nullable |
| `end_date` | TIMESTAMP | nullable (null = ongoing) |
| `created_by_user_id` | BIGINT FK → users | nullable |

Existing columns unchanged: `id`, `uuid`, `type`, `status`, `bonus_type_id`, `created_at`, `updated_at`, `version`.

### New table: `program_weekly_schedules`

Generic (not cashback-specific) — reused by all program types.

| Column | Type | Notes |
|--------|------|-------|
| `id` | BIGSERIAL PK | |
| `program_id` | BIGINT FK → reward_programs | ON DELETE CASCADE |
| `day_of_week` | VARCHAR(10) | MONDAY..SUNDAY |
| `enabled` | BOOLEAN | default false |
| `start_time` | TIME | nullable |
| `end_time` | TIME | nullable |
| | | UNIQUE(program_id, day_of_week) |

### New table: `cashback_program_rules`

One-to-one with `reward_programs` (for CASHBACK type).

| Column | Type | Notes |
|--------|------|-------|
| `id` | BIGSERIAL PK | |
| `program_id` | BIGINT FK → reward_programs | UNIQUE, ON DELETE CASCADE |
| `cashback_type` | VARCHAR(20) | PERCENTAGE \| BONUS_POINTS |
| `cashback_value` | DECIMAL(19,2) | base earning rate |
| `points_spend_threshold` | DECIMAL(19,2) | for BONUS_POINTS: earn cashback_value per this amount |
| `min_spend_amount` | DECIMAL(19,2) | default 0 |
| `eligibility_type` | VARCHAR(30) | default ALL |
| `redeem_limit_percent` | INTEGER | default 100 |
| `bonus_lifespan_days` | INTEGER | nullable (null = no expiry) |

### New table: `cashback_tiers`

Many-per-program, optional.

| Column | Type | Notes |
|--------|------|-------|
| `id` | BIGSERIAL PK | |
| `program_id` | BIGINT FK → reward_programs | ON DELETE CASCADE |
| `name` | VARCHAR(100) | e.g., "Bronze", "Silver" |
| `min_amount` | DECIMAL(19,2) | lower bound of tier |
| `max_amount` | DECIMAL(19,2) | nullable (null = unlimited) |
| `extra_earning_percent` | DECIMAL(5,2) | extra % on top of base |
| `sort_order` | INTEGER | display/evaluation order |

---

## Cashback Calculation at Payment Time

When a payment is completed, `EventBonusServiceImpl.processPaymentBonuses()` delegates to `CashbackCalculationService.processPaymentCashback()`, which:

1. Looks for an **ACTIVE** cashback `RewardProgram`
2. Checks if current time falls within the **weekly schedule** window
3. Checks if payment amount meets **minimum spend**
4. Calculates bonus: `base rate + applicable tier extra`
   - `PERCENTAGE` → `paymentAmount * totalRate / 100`
   - `BONUS_POINTS` → `floor(paymentAmount / pointsSpendThreshold) * totalRate` (e.g. 3500 tg / 1000 threshold = 3 units × 1 point = 3 points)
5. Sets expiration based on `bonusLifespanDays`
6. Saves a `BonusGranted` event

If no active cashback program exists, falls back to legacy `BASIC_CASHBACK` bonus type for backward compatibility.

### Tier qualification

Tiers are evaluated based on the client's **total historical spend** (sum of all COMPLETED payments). The tier where `minAmount <= totalSpend <= maxAmount` provides `extraEarningPercent` added on top of the base `cashbackValue`.

---

## Launch Validation

Before a program can be launched (`POST /{uuid}/launch`), the service validates:

- Program **name** must be set
- For CASHBACK type:
  - **cashbackRule** must exist
  - **cashbackType** must be set
  - **cashbackValue** must be set

If validation fails, a `409 CONFLICT` response is returned with a list of missing fields.

For scheduled launch (`immediate: false`):
- `startDate` must be set
- `startDate` must be in the future

---

## File Inventory

### New files

| File | Purpose |
|------|---------|
| `db/migration/V35__rework_reward_programs_add_cashback.sql` | Schema migration |
| `domain/CashbackType.java` | Enum: PERCENTAGE, BONUS_POINTS |
| `domain/EligibilityType.java` | Enum: ALL, SPECIFIC_ITEMS, SPECIFIC_CATEGORIES, SPECIFIC_SERVICES |
| `domain/ProgramWeeklySchedule.java` | JPA entity |
| `domain/CashbackProgramRule.java` | JPA entity |
| `domain/CashbackTier.java` | JPA entity |
| `repository/ProgramWeeklyScheduleRepository.java` | Spring Data repo |
| `repository/CashbackProgramRuleRepository.java` | Spring Data repo |
| `repository/CashbackTierRepository.java` | Spring Data repo |
| `common/dto/reward/SaveCashbackProgramDraftRequest.java` | Single save-draft DTO |
| `common/dto/reward/WeeklyScheduleEntry.java` | Nested DTO for schedule input |
| `common/dto/reward/CashbackTierEntry.java` | Nested DTO for tier input |
| `common/dto/reward/LaunchCashbackProgramRequest.java` | Launch with inline data DTO |
| `common/dto/reward/RewardProgramResponse.java` | Full program response |
| `common/dto/reward/RewardProgramListItem.java` | Lightweight list item |
| `common/dto/reward/CashbackProgramRuleResponse.java` | Rule section of response |
| `common/dto/reward/CashbackTierResponse.java` | Tier section of response |
| `common/dto/reward/WeeklyScheduleResponse.java` | Schedule section of response |
| `common/exception/InvalidProgramStateException.java` | 409 for bad state transitions |
| `service/CashbackCalculationService.java` | Interface for payment-time calculation |
| `service/impl/CashbackCalculationServiceImpl.java` | Schedule + rules + tiers logic |
| `service/impl/RewardProgramScheduler.java` | SCHEDULED→ACTIVE, ACTIVE→INACTIVE cron |

### Modified files

| File | Change |
|------|--------|
| `domain/RewardProgramStatus.java` | Added SCHEDULED, INACTIVE, ARCHIVED |
| `domain/RewardProgram.java` | Added name, description, dates, JPA relationships |
| `repository/RewardProgramRepository.java` | Added lifecycle query methods |
| `common/dto/RewardProgramSlotDto.java` | Added name field |
| `service/RewardProgramService.java` | Replaced per-step methods with `saveCashbackDraft` |
| `service/impl/RewardProgramServiceImpl.java` | Full rework |
| `controller/RewardProgramController.java` | Replaced step endpoints with single save |
| `service/impl/EventBonusServiceImpl.java` | Delegates cashback to CashbackCalculationService |
| `config/ExceptionHandlerConfig.java` | Registered InvalidProgramStateException handler |

---

## Extending to Other Program Types

When adding Welcome/Birthday/Referral support:

1. Create a type-specific rules table (e.g., `welcome_program_rules`)
2. Create the JPA entity and repository
3. Create a `SaveWelcomeProgramDraftRequest` DTO with that type's fields
4. Add `saveWelcomeDraft(UUID, SaveWelcomeProgramDraftRequest)` to `RewardProgramService`
5. Add `PUT /{uuid}/welcome` endpoint to the controller
6. The `RewardProgram` entity, lifecycle endpoints, scheduler, and status machine are shared — no changes needed

Each program type gets its own save-draft endpoint and DTO. The backend never needs to know about frontend wizard steps.
