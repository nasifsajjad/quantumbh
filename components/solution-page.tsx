import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { ContactCTA, FAQ, SectionLabel, TextLink } from "./ui";
import { ProductExplorer } from "./product-explorer";
import {
  demoHref,
  solutionHref,
  solutions,
  type Solution,
} from "@/lib/content";
export function SolutionPage({ solution: s }: { solution: Solution }) {
  const isERP = s.slug === "erp-accounting";
  const isSchool = s.slug === "school-management";
  const isAI = s.slug === "ai-solutions-support";
  const isService = s.category === "services" || s.slug === "sales-automation";
  const related = solutions
    .filter((item) => item.slug !== s.slug && item.category === s.category)
    .slice(0, 3);
  return (
    <>
      <section className={`solution-hero ${isAI ? "solution-hero-dark" : ""}`}>
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
              <h1>
                {s.title}
                <br />
                <span>{s.accent}</span>
              </h1>
              <p className="solution-lead">{s.description}</p>
              <div className="solution-hero-actions">
                <Link
                  href={demoHref(s.name)}
                  className={`button ${isAI ? "button-gold" : "button-dark"}`}
                >
                  {isService ? "Talk to our team" : "Request a demo"}
                  <ArrowUpRight size={18} />
                </Link>
                <a href="#overview" className="subtle-link">
                  Take a closer look
                  <ArrowDown size={17} />
                </a>
              </div>
            </div>
            {isERP ? (
              <div className="solution-hero-photo">
                <Image
                  src="/images/software-editorial.webp"
                  alt="Conceptual accounting interface displayed on a laptop"
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 800px) 100vw, 44vw"
                />
                <span>CONCEPTUAL PRODUCT VISUAL</span>
              </div>
            ) : (
              <div
                className={`solution-scope-art ${isSchool ? "school-scope" : ""} ${isService ? "service-scope" : ""}`}
              >
                <div className="scope-art-top">
                  <span className="eyebrow">
                    {isSchool
                      ? "SCHOOL MANAGEMENT BY QUANTUM"
                      : isService
                        ? "START WITH WHAT MATTERS"
                        : "THE EVERYDAY, BETTER ORGANISED"}
                  </span>
                  <span className="scope-plus">+</span>
                </div>
                {isSchool ? (
                  <>
                    <div className="classveew-wordmark">
                      Classveew<span>.</span>
                    </div>
                    <p className="classveew-note">
                      A clearer view of school life.
                    </p>
                    <div className="school-scope-list">
                      Admissions. Attendance. Timetables.
                      <br />
                      Gradebook. Communication.
                    </div>
                    <span className="scope-bottom">
                      CURRENTLY SERVING SCHOOLS IN BAHRAIN
                    </span>
                  </>
                ) : isService ? (
                  <>
                    <div className="service-art-words">
                      Your business.
                      <br />
                      Your processes.
                      <br />
                      <span>Your priorities.</span>
                    </div>
                    <div className="service-art-footer">
                      <span>THE STARTING POINT IS YOU.</span>
                      <span>Q / 2026</span>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="scope-art-title">
                      One working day.
                      <br />A clearer view.
                    </h2>
                    <div className="scope-art-list">
                      {s.modules.map((m, i) => (
                        <a href={`#module-${i}`} key={m.title}>
                          <span>0{i + 1}</span>
                          {m.title}
                          <ArrowUpRight size={16} />
                        </a>
                      ))}
                    </div>
                    <span className="scope-bottom">
                      PRACTICAL SOFTWARE. REAL BUSINESS NEEDS.
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="solution-overview section-pad" id="overview">
        <div className="container">
          <SectionLabel number="01 / THE BIGGER PICTURE">
            {s.eyebrow}
          </SectionLabel>
          <div className="overview-grid" data-reveal>
            <h2>{s.intro}</h2>
            <div>
              <p>{s.detail}</p>
              <div className="audience">
                <span className="eyebrow">WHO IT’S FOR</span>
                <ul>
                  {s.audience.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isERP && <ProductExplorer compact />}
      <section className="modules-section section-pad">
        <div className="container">
          <SectionLabel number="02 / IN FOCUS">
            {isService ? "LET’S TALK ABOUT THE REQUIREMENTS" : "WHAT IT COVERS"}
          </SectionLabel>
          <div className="modules-intro" data-reveal>
            <h2>
              {isService
                ? "A useful place\nto begin."
                : "The essentials.\nWorking together."}
            </h2>
            <p>
              {isService
                ? "Your business needs shape the conversation. Explore the areas to discuss with our team."
                : "Explore the confirmed capabilities and find the areas most relevant to your organisation."}
            </p>
          </div>
          <div className="module-list">
            {s.modules.map((m, i) => (
              <article
                data-reveal
                key={m.title}
                id={`module-${i}`}
                className="module-row"
              >
                <span className="module-index">0{i + 1}</span>
                <h3>{m.title}</h3>
                <div>
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
      <section className="outcomes-section section-pad">
        <div className="container">
          <SectionLabel number="03 / THE PRACTICAL DIFFERENCE">
            {isService ? "A CONVERSATION WITH PURPOSE" : "WHY IT MATTERS"}
          </SectionLabel>
          <div className="outcomes-grid">
            {s.outcomes.map((o, i) => (
              <article key={o.title} data-reveal>
                <span className="outcome-num">0{i + 1}</span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FAQ items={s.faqs} />
      <section className="related-section section-pad">
        <div className="container">
          <SectionLabel>ALSO WORTH EXPLORING</SectionLabel>
          <div className="related-grid">
            {related.map((r) => (
              <Link
                className="related-link"
                key={r.slug}
                href={solutionHref(r.slug)}
              >
                <h3>{r.name}</h3>
                <p>{r.short}</p>
                <ArrowUpRight size={24} />
              </Link>
            ))}
          </div>
          <div className="related-footer">
            <TextLink href="/#solutions">Explore all solutions</TextLink>
          </div>
        </div>
      </section>
      <ContactCTA solution={s.name} />
    </>
  );
}
