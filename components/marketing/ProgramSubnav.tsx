"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type ProgramSubnavItem = { id: string; label: string };

type ProgramSubnavProps = {
  items: ProgramSubnavItem[];
  cta?: { href: string; label: string };
};

export function ProgramSubnav({ items, cta }: ProgramSubnavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="subnav" aria-label="On this page">
      <div className="wrap">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={activeId === item.id ? "on" : undefined}
            onClick={() => setActiveId(item.id)}
          >
            {item.label}
          </Link>
        ))}
        {cta ? (
          <Link href={cta.href} className="btn btn-primary sn-cta">
            {cta.label}
          </Link>
        ) : null}
      </div>
    </nav>
  );
}