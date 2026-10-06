"use client";

import { X } from "lucide-react";
import { useId, useRef } from "react";

export default function DemoButton({
  label,
  className = "button button-purple button-small",
  login = false,
  plan,
}: {
  label: string;
  className?: string;
  login?: boolean;
  plan?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const dialogTitle = useId();
  function openDialog() {
    dialog.current?.showModal();
  }
  function closeDialog() {
    dialog.current?.close();
  }
  let title = "A little help. A lot of growth.";
  if (login) {
    title = "Your next chapter starts here.";
  } else if (plan) {
    title = `Meet your ${plan} plan.`;
  }
  return (
    <>
      <button className={className} onClick={openDialog} type="button">
        {label}
      </button>
      <dialog
        aria-labelledby={dialogTitle}
        className="demo-dialog"
        ref={dialog}
      >
        <button
          aria-label="Close dialog"
          className="dialog-close"
          onClick={closeDialog}
          type="button"
        >
          <X aria-hidden="true" size={18} strokeWidth={2} />
        </button>
        <span className="eyebrow">WELCOME TO VEHTVZ</span>
        <h2 id={dialogTitle}>{title}</h2>
        <p>
          {login
            ? "This is a preview of the Vehtvz platform. Account access will be available when the service launches."
            : "Explore an all-in-one workspace for smarter campaigns, connected teams, and meaningful progress."}
        </p>
        {plan ? (
          <div className="dialog-plan">
            Selected plan <strong>{plan}</strong>
            <small>Plan selection is a preview; no payment is collected.</small>
          </div>
        ) : null}
        {/* biome-ignore lint/a11y/useValidAnchor: The link navigates to features while dismissing the preview dialog. */}
        <a
          className="button button-purple"
          href="#features"
          onClick={closeDialog}
        >
          Explore the features
        </a>
      </dialog>
    </>
  );
}
