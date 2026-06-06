# Security Architecture

## Goal

This architecture keeps customer auth, admin access, audit trails, and test evidence separated so a failure in one layer does not cascade into the rest of the app.

## Recommended Layout

```text
Client
  -> CDN / WAF
  -> Reverse Proxy / TLS termination
  -> Web Frontend
  -> Customer API
  -> Admin API
  -> Datastores
  -> Audit + Security Logs
```

## Core Principles

- Keep customer and admin sessions separate.
- Use `httpOnly` cookies for browser sessions.
- Keep access tokens short-lived and refresh tokens rotated.
- Require MFA for admin logins.
- Validate every request at the edge and again in the application.
- Return only the minimum user fields needed by the UI.
- Log security events with structured metadata and a stable actor name.

## Layered Controls

| Layer | Control | Why it matters |
|---|---|---|
| Edge | WAF, TLS, reverse proxy | Blocks noisy attacks before they reach the app |
| Session | `httpOnly` cookies, `SameSite`, refresh rotation | Reduces token theft and session replay risk |
| Identity | RBAC, admin MFA, account lockout | Limits what a compromised account can do |
| Input | Validation, regex escaping, ObjectId checks | Prevents malformed input and injection-style bugs |
| App | Rate limits, body size limits, safe response shaping | Shrinks the attack surface |
| Data | Parameterized queries, minimal projections | Prevents data leakage and unsafe access |
| Logging | Audit logs, security logs, correlation IDs | Makes detection and incident review possible |
| Testing | Security regression tests, CI gate, saved reports | Catches regressions before deployment |

## Failure Strategy

If a security test fails:

1. Keep the branch state intact.
2. Save the test output to a log artifact.
3. Include the actor name `SOM` in the log header.
4. Fix the failing control before merging.
5. Re-run the security test and compare the new log.

## Repo-Specific Notes

- Customer auth is already cookie-based.
- Admin auth is isolated behind its own service and audit trail.
- Security-sensitive responses are already trimmed to safe fields.
- The new security test runner writes logs locally so failures are preserved for review.
