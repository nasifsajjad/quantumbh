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
  id,
  title = "A few things you might want to know.",
}: {
  items: { question: string; answer: string }[];
  title?: string;
  id?: string;
}) {
  if (!items.length) return null;
  return (
    <section id={id} className="faq-section section-pad">
      <div className="container">
        <div className="section-intro" data-reveal>
          <span className="eyebrow">Frequently asked questions</span>
          <h2>{title}</h2>
        </div>
        <div className="faq-list" data-reveal>
          {items.map((item) => (
            <details key={item.question} name="faq">
              <summary>
                <span>{item.question}</span>
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
export function ContactCTA({
  solution,
  title = "Find the right software for your organisation.",
  description = "Tell us what you need to manage. Explore a product demonstration or discuss your requirements with Quantum.",
  label = "Request a demo",
  href,
}: {
  solution?: string;
  title?: string;
  description?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="contact-cta">
      <div className="container cta-grid">
        <div data-reveal>
          <span className="eyebrow">Get in touch</span>
          <h2>{title}</h2>
        </div>
        <div className="cta-aside" data-reveal>
          <p>{description}</p>
          <Link
            href={href || demoHref(solution)}
            className="button button-dark"
          >
            {label}
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
