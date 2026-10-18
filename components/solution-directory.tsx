"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { solutionHref, solutions } from "@/lib/content";
const groups = [
  {
    name: "Business systems",
    description: "Bring the core work of your business into better order.",
    slugs: ["erp-accounting", "hr-management", "sales-automation"],
  },
  {
    name: "Healthcare & education",
    description:
      "Software for the people and processes behind your institution.",
    slugs: ["hospital-management", "school-management"],
  },
  {
    name: "Software development & AI",
    description: "Start with a business need. Discuss a solution around it.",
    slugs: ["software-development", "ai-solutions-support"],
  },
];
export function SolutionDirectory() {
  const [active, setActive] = useState(0);
  function selectByKey(e: React.KeyboardEvent<HTMLButtonElement>, i: number) {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const next =
      e.key === "Home"
        ? 0
        : e.key === "End"
          ? 2
          : (i + (e.key === "ArrowDown" ? 1 : 2)) % 3;
    setActive(next);
    document.getElementById(`solution-tab-${next}`)?.focus();
  }
  return (
    <section id="solutions" className="solution-directory section-pad">
      <div className="container">
        <div className="section-intro" data-reveal>
          <span className="eyebrow">Our solutions</span>
          <h2>Software for the work that matters.</h2>
          <p>
            From your accounts to your people, explore practical systems and
            services for businesses and institutions in Bahrain and the GCC.
          </p>
        </div>
        <div className="directory-grid" data-reveal>
          <div
            className="directory-tabs"
            role="tablist"
            aria-label="Solution categories"
            aria-orientation="vertical"
          >
            {groups.map((g, i) => (
              <button
                key={g.name}
                id={`solution-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-controls={`solution-group-${i}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => selectByKey(e, i)}
              >
                {g.name}
                <ArrowUpRight size={20} />
              </button>
            ))}
          </div>
          <div className="directory-content">
            {groups.map((g, i) => (
              <div
                key={g.name}
                id={`solution-group-${i}`}
                role="tabpanel"
                aria-labelledby={`solution-tab-${i}`}
                hidden={active !== i}
                tabIndex={0}
                className="directory-panel"
              >
                <p className="directory-description">{g.description}</p>
                {g.slugs.map((slug) => {
                  const s = solutions.find((s) => s.slug === slug)!;
                  return (
                    <Link
                      key={slug}
                      href={solutionHref(slug)}
                      className="directory-solution"
                    >
                      <div>
                        <h3>{s.name}</h3>
                        <p>{s.short}</p>
                      </div>
                      <ArrowUpRight size={23} />
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <Link className="full-width-link" href="/contact">
          <span>
            Not sure which solution fits? Let’s talk about your business.
          </span>
          <ArrowUpRight size={25} />
        </Link>
      </div>
    </section>
  );
}
