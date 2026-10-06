# Animation improvement plans

Baseline commit: `9d9959f`. Plans were checked against the working tree, which also contains uncommitted hero/scroll animation changes and the shared `--ease-out` token. Preserve those changes when implementing.

| Order | Plan | Severity | Status |
| --- | --- | --- | --- |
| 1 | [Limit button hover movement to fine pointers](001-gate-button-hover.md) | MEDIUM | IMPLEMENTED |
| 2 | [Reuse the shared entry easing for modal and menu](002-unify-surface-entry-easing.md) | MEDIUM | IMPLEMENTED |

Execute plan 001 first, then 002. They are independent but both edit `app/globals.css`; apply them sequentially. Plan 002 requires the existing working-tree `--ease-out` token.

Both source corrections are implemented. Verification results and pending device/feel checks are recorded in each plan. Changes have not been committed.
