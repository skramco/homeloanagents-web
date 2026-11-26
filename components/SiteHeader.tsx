"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { headerNavLinks } from "@/lib/headerNav";
import { UffPhoneLink } from "@/components/UffPhone";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path
        stroke="currentColor"
        d="M6.5 4.5h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 4 1.5v3A2 2 0 0 1 17.5 19 14.5 14.5 0 0 1 4.5 6a2 2 0 0 1 2-1.5z"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header-marketing ${open ? "is-open" : ""}`}>
      <div className="header-marketing-row">
        <Link href="/" className="logo-link-marketing" onClick={() => setOpen(false)}>
          <Image
            src="/brand/homeloanagents-icon-color.svg"
            alt=""
            width={46}
            height={46}
            priority
            className="logo-icon-marketing"
            aria-hidden
          />
          <span className="logo-wordmark-marketing" aria-hidden>
            <span className="logo-wordmark-home">HomeLoan</span>
            <span className="logo-wordmark-agents">Agents</span>
          </span>
          <span className="sr-only">HomeLoanAgents</span>
        </Link>

        <nav className="nav-marketing" aria-label="Primary">
          {headerNavLinks.map((item) => (
            <Link key={item.href} href={item.href} className="nav-marketing-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-marketing-end">
          <a href="tel:+18559532453" className="nav-marketing-phone">
            <PhoneIcon />
            <span className="nav-phone-label">(855) 953-2453</span>
          </a>
          <Link href="/get-started" className="btn btn-marketing">
            Get started
          </Link>
          <button
            type="button"
            className="menu-toggle-marketing"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-nav-panel"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="mobile-nav-panel" id="mobile-nav-panel" hidden={!open}>
        {headerNavLinks.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <UffPhoneLink className="mobile-nav-phone" />
        <Link href="/get-started" className="btn btn-marketing" onClick={() => setOpen(false)}>
          Get started
        </Link>
      </div>
    </header>
  );
}