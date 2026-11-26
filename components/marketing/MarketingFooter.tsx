import Image from "next/image";
import Link from "next/link";
import { FooterDisclosure } from "@/components/FooterDisclosure";
import { NMLS_CONSUMER_ACCESS } from "@/lib/constants";

const year = new Date().getFullYear();

export function MarketingFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="f-top">
          <div className="f-brand">
            <Link href="/" aria-label="HomeLoanAgents home">
              <Image
                src="/brand/homeloanagents-lockup-reversed.svg"
                alt="HomeLoanAgents"
                width={125}
                height={40}
              />
            </Link>
            <p>
              A licensed mortgage lender. AI agents process the file; licensed mortgage professionals and human
              underwriters supervise every loan.
            </p>
          </div>
          <div className="f-col">
            <h4>Buy</h4>
            <ul>
              <li>
                <Link href="/loans/conventional">Conventional</Link>
              </li>
              <li>
                <Link href="/loans/fha">FHA</Link>
              </li>
              <li>
                <Link href="/loans/va">VA</Link>
              </li>
              <li>
                <Link href="/loans/jumbo">Jumbo</Link>
              </li>
              <li>
                <Link href="/buy/pre-approval">Check your readiness</Link>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h4>Refinance</h4>
            <ul>
              <li>
                <Link href="/refinance/rate-and-term">Rate-and-term</Link>
              </li>
              <li>
                <Link href="/refinance/cash-out">Cash-out</Link>
              </li>
              <li>
                <Link href="/loans/fixed">Fixed-rate</Link>
              </li>
              <li>
                <Link href="/loans/arm-vs-fixed">Adjustable-rate</Link>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/pricing">Pricing &amp; why us</Link>
              </li>
              <li>
                <Link href="/how-it-works">How it works</Link>
              </li>
              <li>
                <Link href="/licensing">About &amp; licensing</Link>
              </li>
              <li>
                <a href="tel:+18559532453">Contact</a>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h4>Learn</h4>
            <ul>
              <li>
                <Link href="/learn/how-a-flat-origination-fee-works">How a flat fee works</Link>
              </li>
              <li>
                <Link href="/learn">Learning center</Link>
              </li>
              <li>
                <Link href="/calculators">Calculators</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="f-legal">
          <FooterDisclosure />
        </div>

        <div className="f-bottom">
          <span>&copy; {year} United Fidelity Funding Corp.</span>
          <div className="links">
            <a href={NMLS_CONSUMER_ACCESS} target="_blank" rel="noopener noreferrer">
              NMLS Consumer Access
            </a>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/licensing">Licensing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}