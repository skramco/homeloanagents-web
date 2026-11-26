import Link from "next/link";
import Image from "next/image";
import { FooterDisclosure } from "@/components/FooterDisclosure";
import { AI_DISCLOSURE, NMLS_CONSUMER_ACCESS } from "@/lib/constants";

const footerCols = [
  {
    title: "Buy",
    links: [
      { href: "/buy", label: "Buying a home" },
      { href: "/buy/first-time-homebuyers", label: "First-time buyers" },
      { href: "/buy/pre-approval", label: "Pre-approval" },
    ],
  },
  {
    title: "Refinance",
    links: [
      { href: "/refinance", label: "Overview" },
      { href: "/refinance/rate-and-term", label: "Rate-and-term" },
      { href: "/refinance/cash-out", label: "Cash-out" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/learn", label: "Learning center" },
      { href: "/calculators", label: "Calculators" },
      { href: "/why-homeloanagents", label: "Why HomeLoanAgents" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <Link href="/" className="footer-logo">
            <Image
              src="/brand/homeloanagents-wordmark-color.svg"
              alt="HomeLoanAgents"
              width={244}
              height={36}
              className="footer-wordmark"
            />
          </Link>
          <p className="footer-ai">{AI_DISCLOSURE}</p>
        </div>

        <div className="footer-columns">
          {footerCols.map((col) => (
            <div key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-links">
          <Link href="/licensing">Licensing &amp; disclosures</Link>
          <a href={NMLS_CONSUMER_ACCESS} target="_blank" rel="noopener noreferrer">
            NMLS Consumer Access
          </a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>

        <FooterDisclosure />
      </div>
    </footer>
  );
}