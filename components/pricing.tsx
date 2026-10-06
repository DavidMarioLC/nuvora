"use client";

import { Check, Plus } from "lucide-react";
import { useState } from "react";
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

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  return (
    <>
      <div className="billing-toggle">
        <button
          aria-pressed={!yearly}
          className={yearly ? "" : "active"}
          onClick={() => setYearly(false)}
          type="button"
        >
          Monthly
        </button>
        <button
          aria-pressed={yearly}
          className={yearly ? "active" : ""}
          onClick={() => setYearly(true)}
          type="button"
        >
          Yearly <span>Save 20%</span>
        </button>
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => (
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
              {plan.price === 0
                ? "No credit card required"
                : yearly
                  ? `Billed yearly · $${(plan.price * 0.8 * 12).toFixed(2)} per user`
                  : "Billed monthly · cancel anytime"}
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
