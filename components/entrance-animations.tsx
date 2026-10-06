"use client";

import { useEffect } from "react";

const groups = [
  { items: ":scope > *", scope: ".section-heading" },
  { items: ":scope > .feature-card", scope: ".feature-grid" },
  {
    items: ".benefit-copy > *, :scope > :not(.benefit-copy)",
    scope: ".benefit-card",
  },
  { items: ":scope > div", scope: ".stats-grid" },
  {
    items: ":scope > .team-photo, .journey-copy > *, :scope > .journey-person",
    scope: ".journey-card",
  },
  { items: ".billing-toggle, .price-card", scope: ".pricing-section" },
  { items: ".testimonial-photo, .testimonial-copy > *", scope: ".testimonial" },
  { items: ":scope > *", scope: ".footer-heading" },
  { items: ":scope > div", scope: ".footer-grid" },
  { items: ":scope > p", scope: ".footer-bottom" },
];

export default function EntranceAnimations() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const active = new Map<HTMLElement, Animation>();
    const pending = new Map<HTMLElement, { delay: number; opacity: string }>();
    const easing = getComputedStyle(document.documentElement)
      .getPropertyValue("--ease-out")
      .trim();
    const blur = getComputedStyle(document.documentElement)
      .getPropertyValue("--entrance-blur")
      .trim();

    function restore(element: HTMLElement) {
      const original = pending.get(element);
      if (original) {
        element.style.opacity = original.opacity;
        pending.delete(element);
      }
    }

    function reveal(element: HTMLElement, delay: number) {
      if (element.contains(document.activeElement)) {
        restore(element);
        return;
      }
      const reduced = preference.matches;
      const base = getComputedStyle(element).transform;
      const transform = base === "none" ? "" : base;
      // No persistent styles: finishing restores the responsive CSS transform.
      const animation = element.animate(
        reduced
          ? [{ opacity: 0.85 }, { opacity: 1 }]
          : [
              {
                filter: `blur(${blur})`,
                opacity: 0,
                transform: `translateY(8px) ${transform}`.trim(),
              },
              { filter: "blur(0px)", opacity: 1, transform: base },
            ],
        {
          delay: reduced ? 0 : delay,
          duration: reduced ? 150 : 800,
          easing,
          // Focus cancels the reveal immediately, including its delay.
          fill: "backwards",
        }
      );
      active.set(element, animation);
      animation.onfinish = () => {
        active.delete(element);
        animation.cancel();
        restore(element);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!(entry.target instanceof HTMLElement && entry.isIntersecting)) {
            continue;
          }
          const settings = pending.get(entry.target);
          if (!settings) {
            continue;
          }
          observer.unobserve(entry.target);
          reveal(entry.target, settings.delay);
        }
      },
      { threshold: 0.12 }
    );
    for (const group of groups) {
      for (const scope of document.querySelectorAll(group.scope)) {
        scope
          .querySelectorAll<HTMLElement>(group.items)
          .forEach((item, index) => {
            // Leave already painted content and restored deep links undisturbed.
            if (item.getBoundingClientRect().top < window.innerHeight) {
              return;
            }
            pending.set(item, {
              delay: Math.min(index, 4) * 80,
              opacity: item.style.opacity,
            });
            if (!preference.matches) {
              item.style.opacity = "0";
            }
            observer.observe(item);
          });
      }
    }

    function finishOnFocus(event: FocusEvent) {
      if (!(event.target instanceof Element)) {
        return;
      }
      const entranceItem = event.target.closest(
        ".hero-copy > *, .header > .logo, .header .navigation > a, .header-actions > *"
      );
      for (const animation of entranceItem?.getAnimations() ?? []) {
        animation.cancel();
      }
      for (const element of pending.keys()) {
        if (element.contains(event.target)) {
          active.get(element)?.cancel();
          active.delete(element);
          restore(element);
          observer.unobserve(element);
        }
      }
    }
    function cancelActive() {
      for (const [element, animation] of active) {
        animation.cancel();
        restore(element);
      }
      active.clear();
      // Reveal anything that moved into view during a responsive layout change.
      for (const element of pending.keys()) {
        if (
          preference.matches ||
          element.getBoundingClientRect().top < window.innerHeight
        ) {
          restore(element);
          observer.unobserve(element);
        }
      }
    }
    document.addEventListener("focusin", finishOnFocus);
    preference.addEventListener("change", cancelActive);
    window.addEventListener("resize", cancelActive);
    return () => {
      observer.disconnect();
      cancelActive();
      for (const element of pending.keys()) {
        restore(element);
      }
      document.removeEventListener("focusin", finishOnFocus);
      preference.removeEventListener("change", cancelActive);
      window.removeEventListener("resize", cancelActive);
    };
  }, []);

  return null;
}
