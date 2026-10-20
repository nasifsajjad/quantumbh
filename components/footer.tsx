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
              Business software.
              <br />
              Bahrain & the GCC.
            </p>
            <div className="footer-company-links">
              <Link href="/about">About Quantum</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="footer-solutions">
            <span className="footer-label">Business systems</span>
            {solutions
              .filter((s) => s.category === "systems")
              .map((s) => (
                <Link key={s.slug} href={solutionHref(s.slug)}>
                  {s.slug === "school-management"
                    ? "Classveew · School Management"
                    : s.name}
                </Link>
              ))}
          </div>
          <div className="footer-nav">
            <span className="footer-label">Development & AI</span>
            {solutions
              .filter((s) => s.category === "services")
              .map((s) => (
                <Link key={s.slug} href={solutionHref(s.slug)}>
                  {s.name}
                </Link>
              ))}
            <Link href="/contact?intent=demo">Request a demo</Link>
          </div>
          <div className="footer-contact">
            <span className="footer-label">Speak with Quantum</span>
            <a href={`mailto:${company.email}`}>
              {company.email}
              <ArrowUpRight size={17} />
            </a>
            <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            <address>
              {company.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Quantum Software Solutions WLL
          </span>
          <span>CR {company.cr}</span>
          <Link href="/contact#privacy">Privacy</Link>
          <a href="#top" className="back-top">
            Back to top
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
