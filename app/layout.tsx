import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0a1b",
  width: "device-width",
  initialScale: 1,
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

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var s=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t||s);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
