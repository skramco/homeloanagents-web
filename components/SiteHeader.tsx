"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/licensing", label: "Licensing" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo-link" onClick={() => setOpen(false)}>
          <Image
            src="/brand/homeloanagents-lockup-mono-white.svg"
            alt="HomeLoanAgents"
            width={200}
            height={36}
            priority
            className="logo-lockup"
          />
        </Link>

        <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/get-started" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Get started
          </Link>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}