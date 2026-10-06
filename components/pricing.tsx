"use client";

import { Check, Plus } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import DemoButton from "./demo-button";

const plans = [
  {
    description: "A fresh start for your big ideas.",
    features: [
      "Up to 3 team members",
      "Basic campaign analytics",
      "3 active projects",
      "1 GB storage",
      "Email support",
      "Essential integrations",
    ],
    name: "Forever Free",
    price: 0,
  },
  {
    description: "Everything you need to go further.",
    features: [
      "Unlimited team members",
      "Advanced campaign insights",
      "Unlimited projects",
      "100 GB storage",
      "Priority support",
      "Custom automations",
    ],
    name: "Enterprise",
    price: 15,
  },
  {
    description: "More possibilities for growing teams.",
    features: [
      "Up to 15 team members",
      "Detailed campaign analytics",
      "25 active projects",
      "25 GB storage",
      "Priority email support",
      "Premium integrations",
    ],
    name: "Business Pack",
    price: 9,
  },
];

const mobilePlans = [plans[1], plans[0], plans[2]];
const mobileQuery = "(max-width: 650px)";
function subscribeLayout(onChange: () => void) {
  const query = window.matchMedia(mobileQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
function getMobileLayout() {
  return window.matchMedia(mobileQuery).matches;
}
function getServerLayout() {
  return false;
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const mobile = useSyncExternalStore(
    subscribeLayout,
    getMobileLayout,
    getServerLayout
  );
  function billingDescription(price: number) {
    if (price === 0) {
      return "No credit card required";
    }
    if (yearly) {
      return `Billed yearly · $${(price * 0.8 * 12).toFixed(2)} per user`;
    }
    return "Billed monthly · cancel anytime";
  }
  function selectMonthly() {
    setYearly(false);
  }
  function selectYearly() {
    setYearly(true);
  }
  return (
    <>
      <div className="billing-toggle">
        <button
          aria-pressed={!yearly}
          className={yearly ? "" : "active"}
          onClick={selectMonthly}
          type="button"
        >
          Monthly
        </button>
        <button
          aria-pressed={yearly}
          className={yearly ? "active" : ""}
          onClick={selectYearly}
          type="button"
        >
          Yearly <span>Save 20%</span>
        </button>
      </div>
      <div className="pricing-grid">
        {(mobile ? mobilePlans : plans).map((plan) => (
          <article
            className={`price-card ${plan.name === "Enterprise" ? "featured" : ""}`}
            key={plan.name}
          >
            {plan.name === "Enterprise" && (
              <div className="popular-label">MOST POPULAR</div>
            )}
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <div className="price">
              <strong>${yearly ? plan.price * 0.8 : plan.price}</strong>
              <span>
                {plan.price === 0 ? "free forever" : "/ user, per month"}
              </span>
            </div>
            <small className="billing-detail">
              {billingDescription(plan.price)}
            </small>
            <DemoButton
              className={`button ${plan.name === "Enterprise" ? "button-white" : "button-purple"}`}
              label={plan.price === 0 ? "Start for free" : "Choose this plan"}
              plan={plan.name}
            />
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span>
                    <Check aria-hidden="true" size={14} strokeWidth={1.8} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <details>
              <summary>
                See all features{" "}
                <span>
                  <Plus aria-hidden="true" size={14} strokeWidth={1.8} />
                </span>
              </summary>
              <p>
                {plan.name === "Forever Free"
                  ? "Includes our essential reporting dashboard and community resources."
                  : "Includes custom dashboards, shared workspaces, exportable reports, and onboarding support."}
              </p>
            </details>
          </article>
        ))}
      </div>
    </>
  );
}
