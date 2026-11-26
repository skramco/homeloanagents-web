"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buyMega, drawerSections, loansMega, primaryNavSimple, refiMega } from "@/lib/megaMenuNav";
import { UFF_CONSUMER_PHONE, UFF_CONSUMER_PHONE_TEL } from "@/lib/constants";
import { HeaderScrollEffect } from "./HeaderScrollEffect";

function Chevron() {
  return (
    <svg className="chev" viewBox="0 0 10 10" aria-hidden>
      <path
        d="M2 3.5 5 6.5 8 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MegaPanel({ id, column }: { id: string; column: typeof buyMega }) {
  return (
    <div className="mega" id={id}>
      <div>
        <h4>{column.title}</h4>
        <ul>
          {column.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <b>{link.title}</b>
                <span>{link.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {column.feature ? (
        <div className="mega-feature">
          <span className="eyebrow">{column.feature.eyebrow}</span>
          <strong>{column.feature.amount}</strong>
          <p>{column.feature.body}</p>
          <Link href={column.feature.href}>{column.feature.hrefLabel}</Link>
        </div>
      ) : null}
    </div>
  );
}

export function MarketingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMega, setExpandedMega] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const toggleMega = (id: string) => {
    setExpandedMega((cur) => (cur === id ? null : id));
  };

  const closeMega = () => setExpandedMega(null);

  return (
    <>
      <HeaderScrollEffect />
      <header className="site-header">
        <div className="wrap">
          <Link className="brand" href="/" aria-label="HomeLoanAgents home" onClick={() => setMenuOpen(false)}>
            <Image
              src="/brand/homeloanagents-icon-color.svg"
              alt=""
              width={42}
              height={42}
              priority
              className="brand-icon"
              aria-hidden
            />
            <span className="brand-wordmark" aria-hidden>
              <span className="brand-wordmark-home">HomeLoan</span>
              <span className="brand-wordmark-agents">Agents</span>
            </span>
          </Link>
          <ul className="nav" aria-label="Primary">
            <li>
              <button
                type="button"
                className={`nav-link${expandedMega === "m-buy" ? " active" : ""}`}
                aria-expanded={expandedMega === "m-buy"}
                data-mega="m-buy"
                onClick={() => toggleMega("m-buy")}
              >
                Buy <Chevron />
              </button>
              <MegaPanel id="m-buy" column={buyMega} />
            </li>
            <li>
              <button
                type="button"
                className={`nav-link${expandedMega === "m-refi" ? " active" : ""}`}
                aria-expanded={expandedMega === "m-refi"}
                data-mega="m-refi"
                onClick={() => toggleMega("m-refi")}
              >
                Refinance <Chevron />
              </button>
              <MegaPanel id="m-refi" column={refiMega} />
            </li>
            <li>
              <button
                type="button"
                className={`nav-link${expandedMega === "m-loans" ? " active" : ""}`}
                aria-expanded={expandedMega === "m-loans"}
                data-mega="m-loans"
                onClick={() => toggleMega("m-loans")}
              >
                Loan options <Chevron />
              </button>
              <div className="mega mega-2col" id="m-loans" style={{ gridTemplateColumns: "1fr" }}>
                <MegaLoansColumn column={loansMega} />
              </div>
            </li>
            {primaryNavSimple.map((item) => (
              <li key={item.href}>
                <Link className="nav-link" href={item.href} onClick={closeMega}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="header-cta">
            <a className="tel" href={UFF_CONSUMER_PHONE_TEL}>
              {UFF_CONSUMER_PHONE}
            </a>
            <Link className="btn btn-primary btn-sm" href="/get-started">
              Get started
            </Link>
          </div>
          <button
            type="button"
            className="menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
          </button>
        </div>
      </header>

      <nav className="drawer" aria-label="Mobile">
        {drawerSections.map((section) => (
          <details key={section.title}>
            <summary>{section.title}</summary>
            <ul>
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
        <Link href="/pricing" onClick={() => setMenuOpen(false)}>
          Pricing <span aria-hidden>→</span>
        </Link>
        <Link href="/how-it-works" onClick={() => setMenuOpen(false)}>
          How it works <span aria-hidden>→</span>
        </Link>
        <Link href="/learn" onClick={() => setMenuOpen(false)}>
          Learn <span aria-hidden>→</span>
        </Link>
        <Link href="/licensing" onClick={() => setMenuOpen(false)}>
          About &amp; licensing <span aria-hidden>→</span>
        </Link>
        <div className="d-cta">
          <Link className="btn btn-primary btn-lg" href="/get-started" onClick={() => setMenuOpen(false)}>
            Get started
          </Link>
          <a className="btn btn-ghost btn-lg" href={UFF_CONSUMER_PHONE_TEL}>
            Call {UFF_CONSUMER_PHONE}
          </a>
        </div>
        <p className="d-legal">HomeLoanAgents is a DBA of United Fidelity Funding, NMLS #34381. Equal Housing Opportunity.</p>
      </nav>

      <MegaMenuEffects expandedId={expandedMega} onClose={closeMega} />
    </>
  );
}

function MegaLoansColumn({ column }: { column: typeof loansMega }) {
  return (
    <div>
      <h4>{column.title}</h4>
      <ul>
        {column.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <b>{link.title}</b>
              <span>{link.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MegaMenuEffects({ expandedId, onClose }: { expandedId: string | null; onClose: () => void }) {
  useEffect(() => {
    const menus = Array.from(document.querySelectorAll<HTMLElement>(".mega"));
    menus.forEach((menu) => menu.classList.remove("open"));
    if (expandedId) {
      const menu = document.getElementById(expandedId);
      menu?.classList.add("open");
    }
  }, [expandedId]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest(".mega") && !t.closest("[data-mega]")) onClose();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        document.body.classList.remove("menu-open");
      }
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return null;
}