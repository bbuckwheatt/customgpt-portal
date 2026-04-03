import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import SearchableTools from "@/components/SearchableTools";

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/" aria-label="CustomGPT Home">
            <span className="brand-mark">
              <Image
                src="/Logo.svg"
                alt="CustomGPT"
                width={80}
                height={24}
                priority
              />
            </span>
            <span className="brand-text">CustomGPT Portal</span>
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <SearchableTools />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} CustomGPT. All rights reserved.
            <span className="credit">
              Built by Cameron Powell, Solutions Engineer at CustomGPT
            </span>
          </p>
          <div className="footer-links">
            <a href="https://customgpt.ai/contact-us/" aria-label="Contact">
              Contact
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://customgpt.ai/privacy-policy/"
              aria-label="Privacy"
            >
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
