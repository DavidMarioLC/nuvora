"use client";

import { ArrowUpRight, Mail, X } from "lucide-react";
import { useId, useRef, useState } from "react";

export default function EmailSignup({
  variant,
}: {
  variant: "hero" | "footer";
}) {
  const [submitted, setSubmitted] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const dialogTitle = useId();
  return (
    <div className={`signup-wrap signup-${variant}`}>
      <form
        className="email-form"
        onSubmit={(event) => {
          event.preventDefault();
          if (variant === "hero") {
            dialog.current?.showModal();
          } else {
            setSubmitted(true);
          }
        }}
      >
        <Mail aria-hidden="true" size={18} strokeWidth={1.5} />
        <input
          aria-label={
            variant === "hero"
              ? "Your email address to get started"
              : "Newsletter email address"
          }
          autoComplete="email"
          placeholder="Your email address"
          required
          type="email"
        />
        <button
          aria-label={
            variant === "footer" ? "Subscribe to newsletter" : undefined
          }
          type="submit"
        >
          {variant === "hero" ? (
            "Get Started"
          ) : (
            <ArrowUpRight aria-hidden="true" size={22} strokeWidth={1.5} />
          )}
        </button>
      </form>
      {submitted && (
        <p className="form-message" role="status">
          Thanks for your interest! This preview doesn’t create a subscription.
        </p>
      )}
      <dialog
        aria-labelledby={dialogTitle}
        className="demo-dialog"
        ref={dialog}
      >
        <button
          aria-label="Close dialog"
          className="dialog-close"
          onClick={() => dialog.current?.close()}
          type="button"
        >
          <X aria-hidden="true" size={18} strokeWidth={2} />
        </button>
        <span className="eyebrow">LET’S GROW TOGETHER</span>
        <h2 id={dialogTitle}>Find your perfect fit.</h2>
        <p>
          Start with the tools your team needs today. Compare our plans and see
          what your next chapter could look like.
        </p>
        <small className="preview-note">
          This is a demo. Your email has not been sent or saved.
        </small>
        <a
          className="button button-purple"
          href="#pricing"
          onClick={() => dialog.current?.close()}
        >
          Explore the plans
        </a>
      </dialog>
    </div>
  );
}
