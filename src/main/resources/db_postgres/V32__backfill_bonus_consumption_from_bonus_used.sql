-- Backfill bonus_consumption for BonusUsed events that have no consumption rows (payments
-- completed before consumption-based logic was deployed). Allocates used amount FIFO across
-- non-revoked grants and inserts PAYMENT_USE consumption rows so balance matches reality.
-- PostgreSQL-only (DO $$ block); loaded only when flyway.locations includes db_postgres (prod).
DO $$
DECLARE
  used_rec RECORD;
  remaining_amt DECIMAL(19, 2);
  grant_rec RECORD;
  consumed_so_far DECIMAL(19, 2);
  to_take DECIMAL(19, 2);
BEGIN
  FOR used_rec IN
    SELECT be.id AS used_event_id,
           be.client_id,
           be.bonus_amount,
           be.created_at AS used_created_at,
           bu.payment_transaction_id
    FROM bonus_used bu
    JOIN bonus_events be ON be.id = bu.id
    WHERE NOT EXISTS (
      SELECT 1 FROM bonus_consumption bc
      WHERE bc.payment_transaction_id = bu.payment_transaction_id
    )
  LOOP
    remaining_amt := used_rec.bonus_amount;

    FOR grant_rec IN
      SELECT bg.id AS grant_id,
             be_g.bonus_amount AS grant_amount
      FROM bonus_granted bg
      JOIN bonus_events be_g ON be_g.id = bg.id
      WHERE be_g.client_id = used_rec.client_id
        AND be_g.event_type = 'GRANTED'
        AND be_g.created_at <= used_rec.used_created_at
        AND NOT EXISTS (
          SELECT 1 FROM bonus_revoked br
          JOIN bonus_events br_be ON br_be.id = br.id
          WHERE br.original_bonus_granted_id = bg.id
            AND br_be.created_at <= used_rec.used_created_at
        )
      ORDER BY be_g.created_at ASC
    LOOP
      EXIT WHEN remaining_amt <= 0;

      consumed_so_far := COALESCE(
        (SELECT SUM(amount) FROM bonus_consumption WHERE bonus_granted_id = grant_rec.grant_id),
        0
      );
      to_take := LEAST(
        grant_rec.grant_amount - consumed_so_far,
        remaining_amt
      );

      IF to_take > 0 THEN
        INSERT INTO bonus_consumption (
          bonus_granted_id,
          amount,
          consumption_type,
          payment_transaction_id,
          manual_revoke_id,
          created_at,
          updated_at,
          version
        ) VALUES (
          grant_rec.grant_id,
          to_take,
          'PAYMENT_USE',
          used_rec.payment_transaction_id,
          NULL,
          NOW(),
          NOW(),
          0
        );
        remaining_amt := remaining_amt - to_take;
      END IF;
    END LOOP;
  END LOOP;
END $$;
