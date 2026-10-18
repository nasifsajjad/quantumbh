import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { demoHref } from "@/lib/content";
export function TextLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link href={href} className={`text-link ${light ? "text-link-light" : ""}`}>
      {children}
      <ArrowUpRight size={19} />
    </Link>
  );
}
export function SectionLabel({
  children,
}: {
  children: React.ReactNode;
  number?: string;
}) {
  return (
    <div className="section-label">
      <span className="eyebrow">{children}</span>
    </div>
  );
}
export function ContactCTA({ solution }: { solution?: string }) {
  return (
    <section className="contact-cta">
      <div className="container cta-grid">
        <h2 data-reveal>Let’s talk.</h2>
        <div className="cta-aside" data-reveal>
          <Link href={demoHref(solution)} className="button button-dark">
            Request a demo
            <ArrowUpRight size={19} />
          </Link>
          <a href="mailto:sales@quantumbh.net" className="cta-email">
            sales@quantumbh.net
          </a>
        </div>
      </div>
    </section>
  );
}
