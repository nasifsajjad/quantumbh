import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
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
      <section className="solution-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/#solutions">Solutions</Link>
            <span>/</span>
            <span>{s.name}</span>
          </div>
          <div className="solution-hero-grid">
            <div className="solution-hero-copy">
              <span className="eyebrow">{s.eyebrow}</span>
              <Heading lines={school ? [s.title] : [s.title, s.accent]} />
              {school && <p className="school-tagline">{s.accent}</p>}
              <p className="solution-lead">{s.description}</p>
              <div className="solution-primary-action">
                <Link href={enquiryHref(s)} className="button button-gold">
                  {s.kind === "product" ? "Request a demo" : s.cta}
                  <ArrowUpRight size={23} />
                </Link>
              </div>
              {school && (
                <span className="school-use-note">
                  Classveew is a Quantum school-management platform.
                </span>
              )}
            </div>
            <aside className="solution-at-a-glance">
              <span className="eyebrow">
                {s.kind === "product" ? "Core capabilities" : "On this page"}
              </span>
              <h2>
                {s.kind === "product"
                  ? school
                    ? "The school day, organised."
                    : "What the system covers."
                  : "Explore the offering."}
              </h2>
              <ul>
                {s.kind === "product"
                  ? s.modules.map((m, i) => (
                      <li key={m.title}>
                        <a href={`#module-${i}`}>
                          <span>{m.title}</span>
                          <ArrowDown size={16} />
                        </a>
                      </li>
                    ))
                  : sections.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`}>
                          <span>{item.label}</span>
                          <ArrowDown size={16} />
                        </a>
                      </li>
                    ))}
              </ul>
            </aside>
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
            {s.kind === "product" ? "Your demonstration" : "Your enquiry"}
          </span>
          <h2>{s.enquiryTitle}</h2>
        </div>
        <div data-reveal>
          <p>{s.enquiryText}</p>
          <ul className="enquiry-checklist">
            {s.enquiryPoints.map((point) => (
              <li key={point}>
                <Check size={17} />
                {point}
              </li>
            ))}
          </ul>
          <Link href={enquiryHref(s)} className="button button-dark">
            {s.cta}
            <ArrowUpRight size={21} />
          </Link>
        </div>
      </div>
    </section>
  );
}
