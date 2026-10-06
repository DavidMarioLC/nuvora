const heroEntranceStyles = `
/* Start the hero with CSS, before hydration can replay visible content.
   Independent translate preserves portrait centering and card rotations. */
@keyframes hero-entry {
  from {
    filter: blur(var(--entrance-blur, 12px));
    opacity: 0;
    translate: 0 8px;
  }
  to {
    filter: blur(0px);
    opacity: 1;
    translate: 0 0;
  }
}
@keyframes hero-heading-entry {
  from {
    filter: blur(var(--entrance-blur, 12px));
    opacity: 0;
    translate: 0 8px;
  }
  to {
    filter: blur(0px);
    opacity: 1;
    translate: 0 0;
  }
}
@keyframes hero-fade {
  from {
    opacity: 0.85;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: no-preference) {
  .header > .logo,
  .header-actions > * {
    animation: hero-entry 0.25s var(--ease-out, cubic-bezier(0.23, 1, 0.32, 1)) backwards;
  }
  .header-actions > :first-child {
    animation-delay: 300ms;
  }
  .header-actions > :nth-child(2),
  .header-actions > .menu-toggle {
    animation-delay: 350ms;
  }
  .hero-copy > .version-pill,
  .hero-copy > p,
  .hero-copy > .signup-hero,
  .hero-copy > .social-proof,
  .hero-visual > .portrait-circle,
  .hero-visual > .floating-growth,
  .hero-visual > .expert-card,
  .hero-visual > .float-icon {
    animation: hero-entry 0.8s var(--ease-out, cubic-bezier(0.23, 1, 0.32, 1)) backwards;
  }
  .hero-copy > h1 {
    animation: hero-heading-entry 0.8s var(--ease-out, cubic-bezier(0.23, 1, 0.32, 1)) 80ms backwards;
  }
  .hero-copy > p {
    animation-delay: 160ms;
  }
  .hero-copy > .signup-hero {
    animation-delay: 240ms;
  }
  .hero-copy > .social-proof {
    animation-delay: 320ms;
  }
  .hero-visual > .portrait-circle {
    animation-delay: 400ms;
  }
  .hero-visual > .floating-growth {
    animation-delay: 480ms;
  }
  .hero-visual > .expert-card {
    animation-delay: 560ms;
  }
  .hero-visual > .float-icon {
    animation-delay: 640ms;
  }
}
@media (min-width: 651px) and (prefers-reduced-motion: no-preference) {
  .header .navigation > a {
    animation: hero-entry 0.25s var(--ease-out, cubic-bezier(0.23, 1, 0.32, 1)) backwards;
  }
  .header .navigation > a:nth-child(1) { animation-delay: 50ms; }
  .header .navigation > a:nth-child(2) { animation-delay: 100ms; }
  .header .navigation > a:nth-child(3) { animation-delay: 150ms; }
  .header .navigation > a:nth-child(4) { animation-delay: 200ms; }
  .header .navigation > a:nth-child(5) { animation-delay: 250ms; }
}
@media (max-width: 650px) and (prefers-reduced-motion: no-preference) {
  .navigation[data-motion="pointer"].is-open > a {
    filter: blur(0px);
    transition: opacity 150ms var(--ease-out, cubic-bezier(0.23, 1, 0.32, 1)),
      filter 150ms var(--ease-out, cubic-bezier(0.23, 1, 0.32, 1)),
      transform 150ms var(--ease-out, cubic-bezier(0.23, 1, 0.32, 1));
  }
  .navigation[data-motion="pointer"].is-open > a:nth-child(2) { transition-delay: 30ms; }
  .navigation[data-motion="pointer"].is-open > a:nth-child(3) { transition-delay: 60ms; }
  .navigation[data-motion="pointer"].is-open > a:nth-child(4) { transition-delay: 90ms; }
  .navigation[data-motion="pointer"].is-open > a:nth-child(5) { transition-delay: 120ms; }
  .navigation[data-motion="pointer"].is-open > a:focus {
    filter: none;
    transition: none;
  }
  @starting-style {
    .navigation[data-motion="pointer"].is-open > a:not(:focus) {
      filter: blur(var(--entrance-blur, 12px));
      opacity: 0;
      transform: translateY(8px);
    }
  }
}
@media (prefers-reduced-motion: reduce) {
  /* Narrow exception: keep only the gentle hero fade, with no translation. */
  .hero-copy > .version-pill,
  .hero-copy > p,
  .hero-copy > .signup-hero,
  .hero-copy > .social-proof,
  .hero-visual > .portrait-circle,
  .hero-visual > .floating-growth,
  .hero-visual > .expert-card,
  .hero-visual > .float-icon {
    animation: hero-fade 0.15s var(--ease-out, cubic-bezier(0.23, 1, 0.32, 1)) backwards !important;
  }
}
`;

// Inline critical motion CSS precedes the hero even before hydration.
export default function HeroEntranceStyles() {
  return <style>{heroEntranceStyles}</style>;
}
