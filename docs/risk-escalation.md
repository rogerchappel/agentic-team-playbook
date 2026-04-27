# Risk Escalation

Agents can inspect risky areas and propose a plan, but should not make risky changes without explicit human approval.

## Stop Before Touching

- auth
- security
- payments
- billing
- Stripe
- production data
- data deletion
- migrations
- secrets
- environment variables
- public API compatibility
- licensing
- telemetry/privacy behaviour
- destructive commands
- production configuration
- major dependency upgrades

## Production Data Work

Require:

- dry-run mode where feasible
- idempotent upserts
- idempotency key
- validation before write
- run logs
- failure report
- rollback or recovery notes
- no deletes unless explicitly approved

## Good Escalation

```md
Risk level: high

This touches production billing and a database migration.

I can inspect and draft a plan, but I need explicit approval before editing these files:

- `db/migrations/...`
- `src/billing/...`

Recommended plan:
1. add migration in a feature branch
2. add tests for existing billing states
3. run migration locally against a copy
4. prepare rollback SQL
```
