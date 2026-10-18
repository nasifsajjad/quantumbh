import { FAQ } from "./ui";
import { ProductExplorer } from "./product-explorer";
import { ServicePage } from "./service-page";
import { SolutionHero, SolutionEnquiry } from "./solution-shell";
import type { Solution } from "@/lib/content";
import { Check } from "lucide-react";
export function SolutionPage({ solution: s }: { solution: Solution }) {
  if (s.kind === "service") return <ServicePage solution={s} />;
  const sections = [
    { id: "overview", label: "Who it is for" },
    { id: "capabilities", label: "Capabilities" },
    { id: "product-preview", label: "Software preview" },
    { id: "questions", label: "Questions" },
    { id: "solution-enquiry", label: "Request a demo" },
  ];
  return (
    <>
      <SolutionHero solution={s} sections={sections} />
      <section className="capabilities-section section-pad" id="overview">
        <div className="container">
          <div className="capabilities-intro" data-reveal>
            <div>
              <span className="eyebrow">
                {s.slug === "school-management"
                  ? "School administration"
                  : "Who it is for"}
              </span>
              <h2>{s.intro}</h2>
            </div>
            <div>
              <p>{s.detail}</p>
              <p className="audience-introduction">{s.audienceIntro}</p>
              <ul className="audience-list">
                {s.audience.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="capabilities-heading" id="capabilities" data-reveal>
            <span className="eyebrow">
              {String(s.modules.length).padStart(2, "0")} core areas
            </span>
            <h2>
              {s.slug === "school-management"
                ? "What Classveew covers."
                : "What you can manage."}
            </h2>
          </div>
          <div className="capability-grid" data-stagger>
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
      <ProductExplorer product={s.preview} compact />
      <FAQ
        id="questions"
        title={
          s.slug === "school-management"
            ? "Questions about Classveew."
            : `Questions about ${s.name}.`
        }
        items={s.faqs}
      />
      <SolutionEnquiry solution={s} />
    </>
  );
}
