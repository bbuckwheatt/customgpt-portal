import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://customgpt-demos.vercel.app"),
  title: "CustomGPT Tools Portal",
  description: "Explore live demos and calculators built with CustomGPT.",
  openGraph: {
    title: "CustomGPT Tools Portal",
    description: "Explore live demos and tools built with and for CustomGPT.",
    type: "website",
    images: ["/cgpt.png"],
  },
  icons: { icon: "/cgpt.png" },
};

// Inline script runs before React hydration to set theme and prevent FOUC
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var s=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t||s);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
