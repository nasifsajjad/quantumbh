import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Heading } from "./heading";
import { PageNav } from "./page-nav";
import { enquiryHref, type Solution } from "@/lib/content";
export function SolutionHero({
  solution: s,
  sections,
}: {
  solution: Solution;
  sections: { id: string; label: string }[];
}) {
  const school = s.slug === "school-management";
  return (
    <>
      <section
        className={`solution-hero solution-hero-${s.preview || s.slug} ${s.kind === "service" ? "service-hero" : ""}`}
      >
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/#solutions">Solutions</Link>
            <span>/</span>
            <span>{school ? "Classveew" : s.name}</span>
          </div>
          <div className="solution-hero-grid">
            <div className="solution-hero-copy">
              <span className="eyebrow">{s.eyebrow}</span>
              <Heading lines={school ? ["Classveew"] : [s.title, s.accent]} />
              {school && (
                <p className="school-tagline">School management by Quantum.</p>
              )}
              <p className="solution-lead">{s.description}</p>
              <div className="solution-primary-action">
                <Link href={enquiryHref(s)} className="button button-dark">
                  {s.kind === "product" ? "Request a demo" : s.cta}
                  <ArrowUpRight size={22} />
                </Link>
              </div>
              {school && (
                <span className="classveew-proof">
                  <i aria-hidden="true" />
                  Currently serving schools in Bahrain.
                </span>
              )}
            </div>
            {s.kind === "product" ? (
              <aside className="solution-at-a-glance">
                <span className="eyebrow">Core capabilities</span>
                <h2>
                  {school
                    ? "The school day, organised."
                    : "What the system covers."}
                </h2>
                <ul>
                  {s.modules.map((m, i) => (
                    <li key={m.title}>
                      <a href={`#module-${i}`}>
                        <span>{m.title}</span>
                        <ArrowDown size={16} />
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            ) : (
              <div className="service-hero-note">
                <span className="eyebrow">
                  {s.slug === "software-development"
                    ? "Business software"
                    : s.slug === "ai-solutions-support"
                      ? "AI solutions & AI support"
                      : "Sales operations"}
                </span>
                <p>
                  {s.slug === "software-development"
                    ? "Your processes. Your information. Your requirements."
                    : s.slug === "ai-solutions-support"
                      ? "Start with the work you need help with."
                      : "A closer look at the work around a sale."}
                </p>
                <a href="#overview" className="text-link">
                  Explore the service
                  <ArrowDown size={18} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
      <PageNav items={sections} />
    </>
  );
}
export function SolutionEnquiry({ solution: s }: { solution: Solution }) {
  return (
    <section
      id="solution-enquiry"
      className="solution-enquiry contact-cta section-pad"
    >
      <div className="container enquiry-guidance-grid">
        <div data-reveal>
          <span className="eyebrow">
            {s.kind === "product" ? "Request a demonstration" : "Get in touch"}
          </span>
          <h2>{s.enquiryTitle}</h2>
        </div>
        <div data-reveal>
          <p>{s.enquiryText}</p>
          <Link href={enquiryHref(s)} className="button button-dark">
            {s.cta}
            <ArrowUpRight size={21} />
          </Link>
          <a className="cta-email" href="mailto:sales@quantumbh.net">
            sales@quantumbh.net
          </a>
        </div>
      </div>
    </section>
  );
}
