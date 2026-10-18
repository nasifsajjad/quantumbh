import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { ContactCTA, FAQ, TextLink } from "./ui";
import { Heading } from "./heading";
import { ProductExplorer } from "./product-explorer";
import {
  demoHref,
  solutionHref,
  solutions,
  type Solution,
} from "@/lib/content";
export function SolutionPage({ solution: s }: { solution: Solution }) {
  const school = s.slug === "school-management";
  const erp = s.slug === "erp-accounting";
  const service = s.category === "services" || s.slug === "sales-automation";
  const href = service
    ? `/contact?solution=${encodeURIComponent(s.name)}`
    : demoHref(s.name);
  const related = solutions
    .filter((item) => item.slug !== s.slug && item.category === s.category)
    .slice(0, 3);
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
                <Link href={href} className="button button-gold">
                  {service ? "Talk to our team" : "Request a demo"}
                  <ArrowUpRight size={23} />
                </Link>
              </div>
              {school && (
                <span className="school-use-note">
                  Currently serving schools in Bahrain.
                </span>
              )}
            </div>
            <aside className="solution-at-a-glance">
              <span className="eyebrow">
                {service ? "A useful starting point" : "At a glance"}
              </span>
              <h2>
                {service
                  ? "Start with your business."
                  : "The essentials, together."}
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
          </div>
          <nav className="page-nav" aria-label="On this page">
            <a href="#overview">Overview</a>
            <a href="#capabilities">
              {service ? "How we can help" : "Capabilities"}
            </a>
            {erp && <a href="#product-preview">Product preview</a>}
            <a href="#solution-enquiry">
              {service ? "Discuss your requirements" : "Explore with Quantum"}
            </a>
          </nav>
        </div>
      </section>
      <section className="capabilities-section section-pad" id="overview">
        <div className="container">
          <div className="capabilities-intro" data-reveal>
            <div>
              <span className="eyebrow">
                {service
                  ? "Your requirements, understood"
                  : "Designed around everyday work"}
              </span>
              <h2>{s.intro}</h2>
            </div>
            <div>
              <p>{s.detail}</p>
              <div className="audience">
                <span>For</span>
                <ul className="audience-list">
                  {s.audience.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="capability-grid" id="capabilities" data-stagger>
            {s.modules.map((m, i) => (
              <article
                id={`module-${i}`}
                key={m.title}
                className="capability-card"
                data-reveal
              >
                <span className="capability-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                  {m.items.length > 0 && (
                    <ul>
                      {m.items.map((item) => (
                        <li key={item}>
                          <Check size={15} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {erp && <ProductExplorer compact />}
      {school && (
        <section className="classveew-section">
          <div className="container classveew-grid">
            <div className="classveew-image">
              <Image
                src="/images/education.webp"
                alt="Illustrative school scene with a teacher supporting students"
                fill
                sizes="(max-width: 800px) 100vw, 40vw"
              />
            </div>
            <div data-reveal>
              <span className="eyebrow">Classveew in Bahrain</span>
              <h2>
                School information.
                <br />A more connected day.
              </h2>
              <p>
                Classveew is currently serving schools in Bahrain. Bring your
                admissions, attendance, timetable and gradebook requirements to
                a demonstration, and explore how the platform supports your
                school.
              </p>
              <TextLink href={href}>Meet Classveew</TextLink>
            </div>
          </div>
        </section>
      )}
      <section className="solution-enquiry section-pad" id="solution-enquiry">
        <div className="container enquiry-guidance-grid">
          <div data-reveal>
            <span className="eyebrow">Explore with Quantum</span>
            <h2>
              {service
                ? "Tell us what you want to improve."
                : "See how it fits your organisation."}
            </h2>
          </div>
          <div data-reveal>
            <p>
              {service
                ? "The most useful conversation starts with your current way of working. Share the tasks, information and business priorities you want to address, and we’ll discuss the relevant capabilities with you."
                : "A demonstration is a chance to focus on the work your team actually does. Tell us which areas matter most, so you can explore the relevant functionality and ask the questions specific to your organisation."}
            </p>
            <ul className="enquiry-checklist">
              <li>
                <Check size={17} />
                Your current processes and requirements
              </li>
              <li>
                <Check size={17} />
                {service
                  ? "The scope and functionality to confirm"
                  : "The capabilities you want to see"}
              </li>
              <li>
                <Check size={17} />
                Setup and support to discuss with Quantum
              </li>
            </ul>
            <TextLink href={href}>
              {service
                ? "Discuss your requirements"
                : "Arrange a demonstration"}
            </TextLink>
          </div>
        </div>
      </section>
      <FAQ
        items={s.faqs}
        title={`More about ${school ? "Classveew" : s.name}.`}
      />
      <section className="related-section">
        <div className="container">
          <h2 data-reveal>Also from Quantum.</h2>
          <div className="related-grid" data-stagger>
            {related.map((r) => (
              <Link
                className="related-link"
                href={solutionHref(r.slug)}
                key={r.slug}
                data-reveal
              >
                <div>
                  <h3>{r.name}</h3>
                  <p>{r.short}</p>
                </div>
                <ArrowUpRight size={23} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA solution={s.name} />
    </>
  );
}
