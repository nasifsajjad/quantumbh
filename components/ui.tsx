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
export function FAQ({
  items,
  title = "A few things you might want to know.",
}: {
  items: { question: string; answer: string }[];
  title?: string;
}) {
  if (!items.length) return null;
  return (
    <section className="faq-section section-pad">
      <div className="container">
        <div className="section-intro" data-reveal>
          <span className="eyebrow">Frequently asked questions</span>
          <h2>{title}</h2>
        </div>
        <div className="faq-list" data-reveal>
          {items.map((item) => (
            <details key={item.question} name="faq">
              <summary>
                {item.question}
                <span className="accordion-symbol" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ContactCTA({ solution }: { solution?: string }) {
  return (
    <section className="contact-cta">
      <div className="container cta-grid">
        <div data-reveal>
          <span className="eyebrow">Your next step</span>
          <h2>
            Better software.
            <br />A clearer working day.
          </h2>
        </div>
        <div className="cta-aside" data-reveal>
          <p>
            Tell us what your organisation needs. We’ll help you explore the
            right solution.
          </p>
          <Link href={demoHref(solution)} className="button button-dark">
            Request a demo
            <ArrowUpRight size={23} />
          </Link>
          <a href="mailto:sales@quantumbh.net" className="cta-email">
            sales@quantumbh.net
          </a>
        </div>
      </div>
    </section>
  );
}
