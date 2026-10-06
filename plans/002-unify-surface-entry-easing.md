# 002 — Reuse the shared entry easing for modal and menu

- **Status**: IMPLEMENTED
- **Commit**: 9d9959f
- **Severity**: MEDIUM
- **Category**: Easing & duration; cohesion & tokens
- **Estimated scope**: 1 file, one CSS declaration

## Problem

In `/Users/davidmariolc/playground/landing-test/app/globals.css:3426`, the modal and mobile menu use the built-in `ease-out`, whereas the new hero and scroll entrances use the stronger shared curve. Current code:

```css
.demo-dialog[open],
.navigation.is-open {
  animation: surface-enter 0.2s ease-out;
}
```

## Target

Reuse the existing token, preserving the 200 ms duration and the entry keyframes:

```css
.demo-dialog[open],
.navigation.is-open {
  animation: surface-enter 0.2s var(--ease-out);
}
```

The exact existing token is:

```css
:root {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
}
```

## Repo conventions to follow

The token lives at `app/globals.css:4`. `components/entrance-animations.tsx:13` reads it with `getComputedStyle(document.documentElement).getPropertyValue("--ease-out").trim()`. The token and component are currently uncommitted changes on top of 9d9959f; preserve them. Do not introduce a second easing system.

## Steps

1. Read `/Users/davidmariolc/playground/landing-test/AGENTS.md` and the relevant CSS guide in `node_modules/next/dist/docs/` before editing.
2. Verify that `--ease-out` exists with the exact value above.
3. Replace only the `ease-out` keyword in the surface-entry declaration with `var(--ease-out)`.
4. Verify that duration, selectors, keyframes and the surrounding reduced-motion media query are unchanged.

## Boundaries

- Do not modify modal/menu markup, focus management, exit behavior, scale or duration.
- Do not change hero or scroll animation code, or add dependencies.
- Preserve all other uncommitted changes and the existing design.
- If the token or declaration differs from these excerpts, stop and report the drift.

## Verification

`pnpm lint` and `git diff --check` passed. Browser inspection confirmed both the login modal and mobile menu compute `cubic-bezier(0.23, 1, 0.32, 1)` and `0.2s`. Escape dismisses both; the menu restores focus to Open menu. Slow-motion playback and an OS-level reduced-motion check are still pending; the existing CSS suppression was preserved.

From `/Users/davidmariolc/playground/landing-test`:

- Run `pnpm lint` and `git diff --check`; both must pass.
- Open the login modal. Check computed `animation-timing-function` is `cubic-bezier(0.23, 1, 0.32, 1)` and duration is `0.2s`.
- At a viewport where mobile navigation is available, open the menu and confirm the same computed curve and duration.
- Confirm Escape still dismisses both surfaces and focus behaves as before.
- Enable reduced motion: the existing CSS suppresses these surface animations; it must continue to do so.
- Feel-check both entries at 20% playback in DevTools: entry should start promptly and settle smoothly without changing the final size or position. Keyboard-triggered behavior remains a separate audit concern, outside this plan.
- **Done when**: both surfaces use the existing shared curve, retain 200 ms duration and keep existing interaction behavior.
