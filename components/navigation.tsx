"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import DemoButton from "./demo-button";

const links = [
  ["Home", "#home"],
  ["Features", "#features"],
  ["Pages", "#journey"],
  ["Blog", "#stories"],
  ["Contact", "#contact"],
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a aria-label="Vehtvz home" className="logo" href="#home">
        <svg
          aria-hidden="true"
          fill="none"
          height="30"
          viewBox="0 0 32 32"
          width="30"
        >
          <path
            d="M6 19a10 10 0 1 1 5 6M6 19l-2 7 7-2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d="m11 13 5 7 5-10"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </svg>
        Vehtvz
      </a>
      <nav
        aria-label="Main navigation"
        className={open ? "navigation is-open" : "navigation"}
        id="main-navigation"
      >
        {links.map(([title, href]) => (
          <a href={href} key={title} onClick={() => setOpen(false)}>
            {title}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a
          aria-label="Explore features"
          className="search-button"
          href="#features"
        >
          <Search aria-hidden="true" size={18} strokeWidth={1.7} />
        </a>
        <DemoButton
          className="button button-white login-button"
          label="Log in"
          login
        />
        <button
          aria-controls="main-navigation"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          type="button"
        >
          {open ? (
            <span>×</span>
          ) : (
            <>
              <i />
              <i />
              <i />
            </>
          )}
        </button>
      </div>
    </header>
  );
}
