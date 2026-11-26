import type { Metadata } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { UtilityTopBar } from "@/components/UtilityTopBar";
import { TAGLINE } from "@/lib/constants";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: {
    default: "HomeLoanAgents",
    template: "%s · HomeLoanAgents",
  },
  description:
    "HomeLoanAgents is a licensed mortgage lender and a trade name of United Fidelity Funding Corp., NMLS #34381. Buy or refinance with AI agents that organize your file and human mortgage professionals and underwriters who review and decide.",
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
    <html lang="en" className="theme-marketing">
      <body className={`${interTight.variable} ${fraunces.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="site-shell">
          <UtilityTopBar />
          <SiteHeader />
          <main className="site-main" id="main">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}