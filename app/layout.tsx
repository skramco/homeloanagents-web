import type { Metadata } from "next";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { fraunces, interTight, jetbrainsMono } from "@/lib/fonts";
import { TAGLINE } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HomeLoanAgents",
    template: "%s · HomeLoanAgents",
  },
  description:
    "HomeLoanAgents is a licensed mortgage lender and a DBA of United Fidelity Funding Corp., NMLS #34381. Buy or refinance with AI agents that organize your file and human mortgage professionals and underwriters who review and decide.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "HomeLoanAgents",
    description: TAGLINE,
    siteName: "HomeLoanAgents",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="site-shell">
          <MarketingHeader />
          <main className="site-main" id="main">
            {children}
          </main>
          <MarketingFooter />
        </div>
      </body>
    </html>
  );
}