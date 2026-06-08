# This is my Version of HillNest

A calmer, more modern take on HillNest built as a full-stack mountain homestay platform.

The goal was not to stack more UI on top. It was to make the whole experience feel lighter, more reactive, and easier to read.

## What changed

- Reworked the public UI into a borderless glass style instead of heavy boxed cards.
- Converted the main image assets to WebP for faster loading.
- Made the homepage gallery the center of the experience instead of a separate side path.
- Tuned scroll reactions, nav highlights, gallery controls, and section visibility so the page feels alive but not noisy.
- Simplified room, amenities, footer, auth, and chat surfaces so the layout breathes more.
- Kept the code structure lean by pushing repeated visual rules into shared UI primitives.

## Open / Close

<details>
<summary>Open the project shape</summary>

```text
Project-F/
├── frontend/   Next.js app
├── backend/    API + services
├── frontend/public/   Optimized assets
└── README.md   This story
```

</details>

<details>
<summary>Open the design direction</summary>

- Borderless glass instead of framed boxes
- Smooth motion instead of rough transitions
- Dark mountain palette with soft contrast
- Reactive sections that respond to scroll and view state
- Minimal structure, cleaner text, less visual noise

</details>

<details>
<summary>Open the local setup</summary>

```bash
cd frontend
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

</details>

<details>
<summary>Open the note on the build</summary>

HillNest is still the same project at the core:

- guest browsing
- room discovery
- bookings
- auth flows
- admin tooling
- backend support

What changed is the tone. It now feels less like a template and more like a product with a point of view.

</details>

## In one line

HillNest, but rewritten to feel cleaner, more reactive, and more intentionally designed.
