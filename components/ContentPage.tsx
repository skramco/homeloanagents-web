import type { ReactNode } from "react";
import Link from "next/link";

type ContentPageProps = {
  title: string;
  lead?: string;
  children: ReactNode;
  cta?: { href: string; label: string };
};

export function ContentPage({ title, lead, children, cta }: ContentPageProps) {
  return (
    <article className="content-page">
      <header className="content-page-header">
        <h1>{title}</h1>
        {lead ? <p className="content-page-lead">{lead}</p> : null}
      </header>
      <div className="content-page-body">{children}</div>
      {cta ? (
        <div className="content-page-cta">
          <Link href={cta.href} className="btn btn-primary">
            {cta.label}
          </Link>
        </div>
      ) : null}
    </article>
  );
}