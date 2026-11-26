"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/lib/navigation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo-link" onClick={() => setOpen(false)}>
          <Image
            src="/brand/homeloanagents-icon-color.svg"
            alt=""
            width={48}
            height={48}
            priority
            className="logo-icon"
            aria-hidden
          />
          <span className="logo-wordmark" aria-hidden>
            <span className="logo-wordmark-home">HomeLoan</span>
            <span className="logo-wordmark-agents">Agents</span>
          </span>
          <span className="sr-only">HomeLoanAgents</span>
        </Link>

        <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Main">
          <ul className="nav-list">
            {primaryNav.map((group) =>
              group.children ? (
                <li key={group.label} className="nav-item has-children">
                  <span className="nav-group-label">{group.label}</span>
                  <ul className="nav-submenu">
                    {group.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="nav-sublink" onClick={() => setOpen(false)}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={group.label} className="nav-item">
                  <Link href={group.href!} className="nav-link" onClick={() => setOpen(false)}>
                    {group.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <Link href="/get-started" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Get Started
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