"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { solutionHref, solutions } from "@/lib/content";
export function SolutionDirectory() {
  const [category, setCategory] = useState<"systems" | "services">("systems");
  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
      e.preventDefault();
      const next =
        e.key === "Home"
          ? "systems"
          : e.key === "End"
            ? "services"
            : category === "systems"
              ? "services"
              : "systems";
      setCategory(next);
      document.getElementById(`${next}-tab`)?.focus();
    }
  };
  return (
    <section id="solutions" className="solution-directory section-pad">
      <div className="container">
        <div className="section-label">
          <span className="eyebrow">OUR SOLUTIONS</span>
          <span className="section-number">02 / A CONNECTED PORTFOLIO</span>
        </div>
        <div className="directory-grid">
          <div data-reveal>
            <h2>
              The right tools.
              <br />
              For the way
              <br />
              <span>you work.</span>
            </h2>
            <p>
              From everyday operations to the systems
              <br className="desktop-break" /> you need next. Find your starting
              point.
            </p>
            <Link href="/contact" className="text-link text-link-light">
              Not sure? Let’s talk
              <ArrowUpRight size={19} />
            </Link>
          </div>
          <div className="directory-content" data-reveal>
            <div
              className="directory-tabs"
              role="tablist"
              aria-label="Solution categories"
            >
              <button
                role="tab"
                id="systems-tab"
                tabIndex={category === "systems" ? 0 : -1}
                onKeyDown={handleKey}
                aria-controls="directory-panel"
                aria-selected={category === "systems"}
                onClick={() => setCategory("systems")}
              >
                Business systems <span>05</span>
              </button>
              <button
                role="tab"
                id="services-tab"
                tabIndex={category === "services" ? 0 : -1}
                onKeyDown={handleKey}
                aria-controls="directory-panel"
                aria-selected={category === "services"}
                onClick={() => setCategory("services")}
              >
                Development & AI <span>02</span>
              </button>
            </div>
            <div
              id="directory-panel"
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={`${category}-tab`}
              className="directory-rows"
              key={category}
            >
              {solutions
                .filter((s) => s.category === category)
                .map((s, i) => (
                  <Link
                    key={s.slug}
                    href={solutionHref(s.slug)}
                    className="directory-row"
                  >
                    <span className="row-number">0{i + 1}</span>
                    <div>
                      <h3>{s.name}</h3>
                      <p>{s.short}</p>
                    </div>
                    <ArrowUpRight size={25} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
