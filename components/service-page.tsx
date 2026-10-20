import { SolutionHero, SolutionEnquiry } from "./solution-shell";
import { serviceContent, type Solution } from "@/lib/content";
export function ServicePage({ solution: s }: { solution: Solution }) {
  const data = serviceContent[s.slug];
  const sections = [
    { id: "overview", label: "The offering" },
    {
      id: "business-needs",
      label:
        s.slug === "ai-solutions-support"
          ? "Solutions & support"
          : "Business needs",
    },
    { id: "your-requirements", label: "Your requirements" },
    { id: "solution-enquiry", label: "Get in touch" },
  ];
  return (
    <div className={`service-page service-${s.slug}`}>
      <SolutionHero solution={s} sections={sections} />
      <section id="overview" className="service-overview section-pad">
        <div className="container">
          <div className="capabilities-intro" data-reveal>
            <div>
              <span className="eyebrow">{s.eyebrow}</span>
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
          <div className="service-context" id="business-needs">
            <div className="section-intro" data-reveal>
              <span className="eyebrow">{data.sectionLabel}</span>
              <h2>{data.contextTitle}</h2>
            </div>
            <div className="service-context-grid" data-stagger>
              {(s.slug === "ai-solutions-support"
                ? s.modules.map((m) => ({
                    title: m.title,
                    text: m.description,
                  }))
                : data.situations
              ).map((item, i) => (
                <article key={item.title} data-reveal>
                  <span className="small-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="your-requirements"
        className="requirements-section section-pad"
      >
        <div className="container requirements-grid">
          <div data-reveal>
            <span className="eyebrow">Before we talk</span>
            <h2>{data.discussionTitle}</h2>
            <p>{data.discussionIntro}</p>
          </div>
          <div className="starting-steps" data-reveal>
            {data.topics.map((topic, i) => (
              <details key={topic.title} name="requirements" open={i === 0}>
                <summary>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="requirement-title">{topic.title}</span>
                  <span className="accordion-symbol" aria-hidden="true" />
                </summary>
                <div>
                  <p>{topic.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <SolutionEnquiry solution={s} />
    </div>
  );
}
