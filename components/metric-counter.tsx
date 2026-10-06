"use client";

import { animate } from "motion";
import { useEffect, useRef } from "react";

interface MetricCounterProps {
  decimal?: boolean;
  delay?: number;
  smallSuffix?: boolean;
  suffix: string;
  value: number;
}

export default function MetricCounter({
  delay = 0,
  decimal = false,
  smallSuffix = false,
  suffix,
  value,
}: MetricCounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const number = numberRef.current;
    if (!number) {
      return;
    }
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Keep server-rendered values on restored scroll positions and deep links.
    if (
      preference.matches ||
      number.getBoundingClientRect().top < innerHeight
    ) {
      return;
    }
    const curve = getComputedStyle(document.documentElement)
      .getPropertyValue("--ease-out")
      .match(/[\d.]+/g)
      ?.map(Number);
    if (curve?.length !== 4) {
      return;
    }
    const ease: [number, number, number, number] = [
      curve[0],
      curve[1],
      curve[2],
      curve[3],
    ];
    let animation: ReturnType<typeof animate> | undefined;
    function finish() {
      animation?.stop();
      if (number) {
        number.textContent = String(value);
      }
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }
        observer.disconnect();
        animation = animate(0, value, {
          delay,
          duration: 1.6,
          ease,
          onComplete: finish,
          onUpdate: (current) => {
            const increment = decimal
              ? Math.floor(current * 10) / 10
              : Math.floor(current);
            number.textContent = String(increment);
          },
        });
      },
      { threshold: 0.12 }
    );
    number.textContent = "0";
    observer.observe(number);
    function handlePreference() {
      if (preference.matches) {
        observer.disconnect();
        finish();
      }
    }
    preference.addEventListener("change", handlePreference);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", handlePreference);
      finish();
    };
  }, [decimal, delay, value]);

  return (
    <strong>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
      <span aria-hidden="true" className="metric-visual">
        <span ref={numberRef}>{value}</span>
        <span className={smallSuffix ? "metric-suffix" : undefined}>
          {suffix}
        </span>
      </span>
    </strong>
  );
}
