import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "./brand";
import { company, solutionHref, solutions } from "@/lib/content";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand inverse />
            <p>
              Empowering progress through
              <br />
              intelligent simplicity.
            </p>
            <span className="eyebrow">BAHRAIN BASED. GCC FOCUSED.</span>
          </div>
          <div className="footer-nav">
            <span className="footer-label">Explore</span>
            <Link href="/">Home</Link>
            <Link href="/about">About Quantum</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact?intent=demo">Request a demo</Link>
          </div>
          <div className="footer-solutions">
            <span className="footer-label">Our solutions</span>
            {solutions.map((s) => (
              <Link key={s.slug} href={solutionHref(s.slug)}>
                {s.name}
              </Link>
            ))}
          </div>
          <div className="footer-contact">
            <span className="footer-label">Let’s talk</span>
            <a href={`mailto:${company.email}`}>
              {company.email}
              <ArrowUpRight size={16} />
            </a>
            <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            <address>
              {company.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          Quantum<span>+</span>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Quantum Software Solutions WLL
          </span>
          <span>CR {company.cr}</span>
          <Link href="/contact#privacy">Privacy & enquiries</Link>
          <a href="#top" className="back-top">
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
