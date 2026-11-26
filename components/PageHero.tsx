import type { ReactNode } from "react";

type PageHeroProps = {
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
};

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-glow" aria-hidden />
      <div className="page-hero-content">
        <h1>{title}</h1>
        {subtitle ? <p className="page-hero-sub">{subtitle}</p> : null}
        {children}
      </div>
    </section>
  );
}