import localFont from "next/font/local";

export const interTight = localFont({
  src: [
    { path: "../public/fonts/inter-tight-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/inter-tight-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/inter-tight-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/inter-tight-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter-tight",
  display: "swap",
});

export const fraunces = localFont({
  src: [
    { path: "../public/fonts/fraunces-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/fraunces-latin-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../public/fonts/fraunces-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/fraunces-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

export const jetbrainsMono = localFont({
  src: [
    { path: "../public/fonts/jetbrains-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/jetbrains-mono-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/jetbrains-mono-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});