# How bonus use and expiry are linked to reward programs

Analytics for "how many bonuses are granted, used, expired" are scoped by **reward program** via the grant.

## Linkage

1. **Granted**  
   Each `bonus_granted` row has `reward_program_id` (nullable for legacy data). When we create a grant from a reward program (welcome, cashback), we set `bonusGranted.setRewardProgram(program)`.

2. **Used (consumption)**  
   There is no `reward_program_id` on `bonus_consumption`. Use is linked to the program **through the grant**:
   - `bonus_consumption.bonus_granted_id` → `bonus_granted.id`
   - `bonus_granted.reward_program_id` → reward program  
   So "amount used for program X" = sum of consumption amounts where the consumption’s grant has `reward_program_id = X`.  
   We also have a `bonus_used` event per payment (total amount used in that payment), but it is not linked to a specific grant or program; **per-program use** is always derived from `bonus_consumption` + `bonus_granted.reward_program_id`.

3. **Expired**  
   There is no separate "expiry event" table. A grant is treated as expired when:
   - `bonus_granted.expiresAt` is in the past, and
   - the grant has not been revoked.  
   So "amount expired for program X" = sum of (grant amount − already consumed) for grants with `reward_program_id = X` and `expiresAt` in the report period.  
   Expiry is therefore also linked to the reward program only via **the grant’s** `reward_program_id`.

## Report DTO (per reward program)

For a chosen reward program and period, the bonus-type report returns:

| Field               | Meaning |
|---------------------|--------|
| `totalGranted`      | Total amount granted in period. |
| `grantCount`        | Number of grant events in period. |
| `spentAmount`       | Total amount consumed (used) in period. |
| `consumptionCount`  | Number of consumption (use) events in period. |
| `burnedAmount`      | Amount that expired in period (unused portion of grants whose `expiresAt` fell in the period). |
| `expiredGrantCount` | Number of grants that expired in period. |
| `inCirculation`     | Amount still active (not used, not expired, not revoked). |

All of these are filtered by `bonus_granted.reward_program_id` for the selected program.
