# 001 — Limit button hover movement to fine pointers

- **Status**: IMPLEMENTED
- **Commit**: 9d9959f
- **Severity**: MEDIUM
- **Category**: Accessibility
- **Estimated scope**: 1 file, two CSS edits

## Problem

In `/Users/davidmariolc/playground/landing-test/app/globals.css:123`, hover movement applies regardless of pointer capabilities. Touch browsers can activate hover during a tap. Current code:

```css
.button:hover {
  box-shadow: 0 5px 16px #4714781a;
  transform: translateY(-2px);
}
```

## Target

Preserve the existing desktop movement and visual design. Keep the shadow in the original rule, but apply the positional change only when hover is available, the pointer is fine, and reduced motion is not requested:

```css
.button:hover {
  box-shadow: 0 5px 16px #4714781a;
}

/* Inside the existing matching media query: */
.button:hover {
  transform: translateY(-2px);
}
```

The existing media query is:

```css
@media (hover: hover) and (pointer: fine) and (
  prefers-reduced-motion: no-preference
) {
  /* Existing card, arrow and social-icon hover rules remain here. */
}
```

## Repo conventions to follow

The same file already gates `.button:hover > svg` inside that media query near line 3438. Extend that block. Keep existing transitions at 200 ms and the 150 ms press feedback unchanged. The reduced-motion `.button:hover { transform: none; }` rule near line 3466 remains unchanged.

## Steps

1. Read `/Users/davidmariolc/playground/landing-test/AGENTS.md` and the relevant CSS guide in `node_modules/next/dist/docs/` before editing.
2. In `app/globals.css`, remove only `transform: translateY(-2px)` from the unconditional `.button:hover` rule.
3. Add `.button:hover { transform: translateY(-2px); }` inside the existing three-condition hover media query.
4. Check the diff for exactly these changes; retain all colors, dimensions, shadows and focus styles.

## Boundaries

- Do not modify JSX, dependencies, hero/scroll animations or other hover behavior.
- Do not gate `:active`: press feedback must work on touch.
- Do not remove the reduced-motion overrides or change the design.
- The working tree includes hero/scroll animation changes not yet committed. Preserve them.
- If the excerpts or matching media query have changed, stop and report the drift.

## Verification

Implementation verified with `pnpm lint` and `git diff --check`. Source inspection confirms translation exists only in the gated hover media query and the reduced-motion override remains. A physical touch-device feel check and coarse-pointer emulation are still pending.

From `/Users/davidmariolc/playground/landing-test`:

- Run `pnpm lint` and `git diff --check`; both must pass.
- On desktop with a fine pointer, hover a Get Started button: the existing 2 px upward movement and shadow remain.
- With touch/coarse-pointer emulation, confirm the matching media query is false and tapping does not produce the hover translation. Existing press feedback remains available.
- With reduced motion enabled, hovering causes no positional movement.
- Feel-check the desktop transition at 20% playback in the DevTools Animations panel, and check taps on a real touch device for sticky hover movement.
- **Done when**: desktop hover is preserved, coarse pointers do not receive hover translation, and keyboard focus remains visible.
