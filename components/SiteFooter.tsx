import Link from "next/link";
import Image from "next/image";
import { AI_DISCLOSURE, FOOTER_LEGAL, NMLS_CONSUMER_ACCESS } from "@/lib/constants";

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

        <div className="footer-links">
          <Link href="/licensing">Licensing &amp; disclosures</Link>
          <a href={NMLS_CONSUMER_ACCESS} target="_blank" rel="noopener noreferrer">
            NMLS Consumer Access
          </a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>

        <p className="footer-eho" role="img" aria-label="Equal Housing Opportunity">
          <span className="eho-icon" aria-hidden="true">
            ⌂
          </span>{" "}
          Equal Housing Opportunity
        </p>

        <p className="footer-legal">{FOOTER_LEGAL}</p>
      </div>
    </footer>
  );
}