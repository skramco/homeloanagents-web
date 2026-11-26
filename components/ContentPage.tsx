import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type HeroImage = { src: string; alt: string };

type ContentPageProps = {
  title: string;
  lead?: string;
  children: ReactNode;
  cta?: { href: string; label: string };
  heroImage?: HeroImage;
};

export function ContentPage({ title, lead, children, cta, heroImage }: ContentPageProps) {
  return (
    <article className="content-page">
      {heroImage ? (
        <header className="page-hero-photo">
          <div className="page-hero-photo-copy">
            <h1>{title}</h1>
            {lead ? <p className="content-page-lead">{lead}</p> : null}
          </div>
          <div className="page-hero-photo-media">
            <Image src={heroImage.src} alt={heroImage.alt} width={1200} height={900} priority sizes="(max-width: 980px) 100vw, 50vw" />
          </div>
        </header>
      ) : (
        <header className="content-page-header">
          <h1>{title}</h1>
          {lead ? <p className="content-page-lead">{lead}</p> : null}
        </header>
      )}
      <div className="content-page-body">{children}</div>
      {cta ? (
        <div className="content-page-cta">
          <Link href={cta.href} className="btn btn-marketing">
            {cta.label}
          </Link>
        </div>
      ) : null}
    </article>
  );
}