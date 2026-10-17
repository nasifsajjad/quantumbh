import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
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
  number,
}: {
  children: React.ReactNode;
  number?: string;
}) {
  return (
    <div className="section-label">
      <span className="eyebrow">{children}</span>
      {number && <span className="section-number">{number}</span>}
    </div>
  );
}
export function FAQ({
  items,
  title = "A little more clarity.",
}: {
  items: { question: string; answer: string }[];
  title?: string;
}) {
  return (
    <section className="faq-section section-pad">
      <div className="container faq-grid">
        <div data-reveal>
          <span className="eyebrow">GOOD QUESTIONS</span>
          <h2>{title}</h2>
          <p>Something else on your mind?</p>
          <TextLink href="/contact">Talk to our team</TextLink>
        </div>
        <div className="faq-list" data-reveal>
          {items.map((item, i) => (
            <details key={item.question}>
              <summary>
                <span className="faq-index">0{i + 1}</span>
                <span>{item.question}</span>
                <Plus size={21} />
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
          <span className="eyebrow">LET’S MAKE WORK SIMPLER</span>
          <h2>
            Good software.
            <br />
            Starts with a<br />
            <span>conversation.</span>
          </h2>
        </div>
        <div className="cta-aside" data-reveal>
          <p>
            Tell us what your business needs.
            <br />
            We’ll talk through the possibilities.
          </p>
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
