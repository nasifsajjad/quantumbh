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
              Bahrain based.
              <br />
              GCC focused.
            </p>
          </div>
          <div className="footer-nav">
            <span className="footer-label">Quantum</span>
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact?intent=demo">Request a demo</Link>
          </div>
          <div className="footer-solutions">
            <span className="footer-label">Solutions</span>
            {solutions.map((s) => (
              <Link key={s.slug} href={solutionHref(s.slug)}>
                {s.name}
              </Link>
            ))}
          </div>
          <div className="footer-contact">
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
