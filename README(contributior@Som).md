# Contributor Overview: Som

## Summary

HillNest is a full-stack homestay booking platform built for both guests and operators. My contribution focused on the foundational development work, the security engineering layer, and the recent UI refresh that made the project more production-ready, safer to operate, and easier to extend.

This note is written as a contributor-facing record of the work I helped shape across the customer app, backend services, admin platform, Docker setup, and security hardening.

---

## My Role

I worked as a full-stack collaborator with a strong security engineering focus.

My responsibilities centered on:
- auth and session architecture
- backend hardening
- safe API response design
- validation and access control
- Docker and local environment reliability
- admin-side cleanup and stability
- test coverage for security-sensitive behavior
- homepage and navigation UI cleanup
- glassmorphism gallery and route consolidation
- documentation updates for the latest major release

---

## Tech Stack

### Core Stack

- Frontend: Next.js 15, TypeScript, React
- Customer backend: Node.js, Express, MongoDB, Mongoose
- Admin backend: Node.js, Express, PostgreSQL, Prisma
- Infrastructure: Docker, Docker Compose
- Caching / rate controls: Redis

### Security Stack

- Authentication: JWT access tokens, refresh tokens, `httpOnly` cookies
- Authorization: RBAC, protected route middleware
- API protection: `helmet`, `trust proxy`, request size limits, rate limiting
- Input safety: validation middleware, regex escaping, ObjectId checks
- Payment safety: server-side Razorpay verification
- Testing: Node test runner, security regression tests, saved security logs
- Observability: audit logging, admin security monitoring, structured logs

---

## Development Contributions

### Base Application Flow

- Helped stabilize the customer login, profile, booking, and room exploration flow.
- Kept the guest-facing pages aligned with the main product journey described in the root [README.md](/Users/pradhumna/Project-F/README.md).
- Supported the UI flow used for browsing rooms, starting bookings, and returning to the dashboard after auth.

### Full-Stack Collaboration

- Worked across the frontend, customer backend, admin backend, and shared config files.
- Kept the customer app and admin app separated so each could evolve independently.
- Supported Docker-based startup so the full stack could be run locally in one setup.

### Room Discovery

- Added a dev-time room seed path so the Explore Rooms experience could render real data instead of only fallback cards.
- This improved the local demo path and made the room browsing flow more representative of production behavior.

### Admin Cleanup

- Cleaned up the first batch of admin lint issues.
- Improved the admin login, dashboard, monitoring, and shared table components.
- Kept the remaining backlog separate for future cleanup passes.

### UI Refresh and Route Consolidation

- Reworked the homepage gallery into a fullscreen immersive section on the home page itself.
- Redirected the standalone gallery route back to `/#gallery` so the experience stays in one place.
- Updated the navbar so it stays transparent and blurred instead of flashing white on scroll.
- Tuned the navbar text and active-state styling so links remain readable in the glassmorphism theme.
- Applied the calmer glass palette across the homepage, auth screens, and shared surfaces.
- Updated login and register to use translucent blurred cards instead of static color blocks.
- Preserved the Open Sans font setup and removed the heavier display styling that no longer fit the calmer UI.
- Marked the root README as a major update so the docs match the scale of the UI change.

---

## Security Engineering Contributions

### Authentication and Session Safety

- Migrated customer auth away from browser storage and into `httpOnly` cookie-based sessions.
- Added refresh-token handling so sessions could be renewed without exposing raw tokens in the UI.
- Updated auth middleware so protected routes can accept the correct session source while staying tightly controlled.

### Backend Hardening

- Added `helmet` to improve HTTP security headers.
- Added `cookie-parser` and `trust proxy` support for safer session and proxy handling.
- Added body size limits and API rate limiting to reduce abuse risk.
- Sanitized profile responses so only safe user fields are returned.
- Escaped room search input and validated numeric filters before applying them.
- Strengthened payment verification with safer server-side checks.

### Security Testing

- Added regression tests for security-sensitive behavior.
- Created a security test runner that saves logs locally for audit and review.
- Tagged saved security logs with `SOM` so the test history can be traced back to my work.
- Kept the security architecture write-up aligned with the latest repo state and split-service layout.

### Operational Security

- Helped make the Docker setup more reliable for backend and admin services.
- Fixed env handling so the containerized services could boot cleanly.
- Improved developer-facing documentation so the setup matches the actual runtime behavior.

---

## Security Test Matrix

This section lists the security-focused tests and checks that support the hardening work.

| Test Area | What It Verifies | Result | Evidence |
|---|---|---|---|
| Auth response safety | Public profile payloads do not leak secret fields | Pass | `backend/tests/securityHardening.test.js` |
| Production auth flow | Verification data is not exposed in production mode | Pass | `backend/tests/securityHardening.test.js` |
| Payment integrity | Razorpay order/signature handling stays server-side and strict | Pass | `backend/tests/payment-and-routes.test.js` |
| Booking access control | Protected booking routes respect auth and role checks | Pass | `backend/tests/payment-and-routes.test.js` |
| Input validation | Registration, room, and booking payloads are rejected when invalid | Pass | `backend/tests/validationMiddleware.test.js` |
| Security logging | Security test output is written to a preserved log file | Pass | `run-logs/security-test-SOM.log` |
| Security runner | Security tests can be executed through one repeatable command | Pass | `backend/scripts/run-security-tests.js` |

<details>
<summary>Authentication and response-safety checks</summary>

| Test | What it checks | Status |
|---|---|---|
| `getProfile only returns the public user fields` | Confirms private fields stay hidden in profile responses | Pass |
| `registerUser does not expose a verification devUrl in production` | Ensures production auth responses do not leak dev-only verification URLs | Pass |

</details>

<details>
<summary>Validation, booking, and payment checks</summary>

| Test | What it checks | Status |
|---|---|---|
| `verifyPayment rejects mismatched Razorpay order details` | Blocks tampered payment data before booking confirmation | Pass |
| `verifyPayment blocks overlapping paid bookings` | Prevents duplicate or overlapping paid booking states | Pass |
| `createOrder blocks bookings when the room is already unavailable` | Rejects booking creation for unavailable rooms | Pass |
| `updateBooking rejects user-driven status changes` | Stops users from forcing privileged booking status updates | Pass |
| `validateRegister rejects weak registration data` | Rejects invalid account registration payloads | Pass |
| `validateRoom normalizes valid room payloads` | Confirms room payloads are validated and normalized correctly | Pass |
| `validateBooking rejects invalid booking date ranges` | Blocks impossible or malformed booking dates | Pass |

</details>

<details>
<summary>Security log and runner</summary>

| Artifact | Purpose | Status |
|---|---|---|
| `backend/scripts/run-security-tests.js` | Runs the security suite and captures the output | Ready |
| `run-logs/security-test-SOM.log` | Saved audit trail for the most recent security test run | Present |
| `npm run security:test` | Single command for rerunning the security suite | Ready |

</details>

---

## Architecture Foundations

The project now has a more deliberate structure:

- Customer frontend handles the guest experience.
- Customer backend handles booking, room access, auth, and payments.
- Admin backend handles internal operations, roles, security, monitoring, and moderation.
- Shared security rules are enforced in middleware and tests, not only in UI code.

Reference docs:
- [README.md](/Users/pradhumna/Project-F/README.md)
- [frontend/README.md](/Users/pradhumna/Project-F/frontend/README.md)
- [SECURITY_ARCHITECTURE.md](/Users/pradhumna/Project-F/SECURITY_ARCHITECTURE.md)

---

## Key Files I Worked On

```text
backend/server.js                     # backend bootstrap, security headers, limits, rate limiting
backend/controllers/authController.js # cookie auth, refresh, logout
backend/middleware/authMiddleware.js  # protected route checks
backend/controllers/profileController.js # safe profile shape
backend/controllers/roomController.js  # room filtering and regex safety
backend/controllers/paymentController.js # payment verification hardening
backend/scripts/run-security-tests.js  # security log runner
backend/tests/securityHardening.test.js # security regression checks
frontend/src/services/authService.ts   # cookie-backed auth flow
frontend/src/app/components/auth/AuthForm.tsx # login/register flow cleanup
frontend/src/app/components/ui/gallery/FullscreenGallery.tsx # fullscreen gallery and title motion
frontend/src/app/components/ui/layout/Navbar.tsx # transparent scroll-aware navigation
frontend/src/app/sections/GalleryAndTestimonials.tsx # homepage gallery embedding
frontend/src/app/login/page.tsx       # glass auth shell
frontend/src/app/register/page.tsx    # glass auth shell
frontend/src/app/globals.css          # palette, motion, blur, and font tokens
frontend/src/app/user/page.tsx         # dashboard session handling
frontend/src/app/bookings/page.tsx     # bookings session handling
frontend/src/app/booking/BookingPageClient.tsx # booking auth bootstrap
frontend/src/app/components/ui/payment/PaymentButton.tsx # booking payment auth flow
frontend/src/app/admin/login/page.tsx   # admin login cleanup
frontend/src/app/admin/page.tsx         # admin dashboard cleanup
frontend/src/app/admin/monitoring/page.tsx # monitoring cleanup
frontend/src/components/admin/DataTable.tsx # shared table cleanup
backend/config/seedRooms.js             # dev-time room seeding
docker-compose.yml                      # local stack orchestration
backend/admin/prisma/seed.ts            # admin seed data and credentials
```

---

## Impact

The result is a platform that is easier to run locally, safer to operate, and better prepared for production-style workflows. The biggest improvements were not just feature additions, but the security and architecture changes that reduced risk and made the system more trustworthy.

It also now carries a major UI release note in the main README so the recent gallery, navbar, auth, and palette changes are documented as part of the current release rather than buried in commit history.

---

## Notes

- This file is intentionally separate from the main README.
- It exists to describe my contribution clearly as a development and security engineering collaborator.
- The work here is based on the actual repo history and the code changes made in this workspace.
