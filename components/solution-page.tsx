import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { ContactCTA } from "./ui";
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
      <section
        className={`solution-hero ${school ? "school-hero" : ""} ${s.slug === "ai-solutions-support" ? "ai-hero" : ""}`}
      >
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
              <Link href={href} className="button button-dark">
                {service ? "Talk to our team" : "Request a demo"}
                <ArrowUpRight size={19} />
              </Link>
              {school && (
                <span className="school-use-note">
                  Currently serving schools in Bahrain.
                </span>
              )}
            </div>
            <div className="solution-hero-photo" data-parallax="0.08">
              <Image
                src={s.media.src}
                alt={s.media.alt}
                fill
                priority
                quality={90}
                sizes="(max-width: 800px) 100vw, 47vw"
                className="parallax-image"
              />
              {s.media.caption && (
                <span className="image-caption">{s.media.caption}</span>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="capabilities-section section-pad" id="overview">
        <div className="container">
          <div className="capabilities-intro" data-reveal>
            <h2>{s.intro}</h2>
            <div>
              <p>{s.detail}</p>
              <ul className="audience-list">
                {s.audience.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="capability-grid" data-stagger>
            {s.modules.map((m, i) => (
              <article
                id={`module-${i}`}
                key={m.title}
                className="capability-card"
                data-reveal
              >
                <span className="capability-number">0{i + 1}</span>
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
              </article>
            ))}
          </div>
        </div>
      </section>
      {erp && <ProductExplorer compact />}

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
                <h3>{r.name}</h3>
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
