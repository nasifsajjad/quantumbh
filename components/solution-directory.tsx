"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { solutionHref, solutions } from "@/lib/content";
const images: Record<string, { src: string; alt: string; label?: string }> = {
  "erp-accounting": {
    src: "/images/software-editorial.webp",
    alt: "Illustrative accounting software shown on a laptop",
    label: "Illustrative product visual",
  },
  "hr-management": {
    src: "/images/workplace.webp",
    alt: "An editorial workplace scene",
  },
  "hospital-management": {
    src: "/images/healthcare.webp",
    alt: "An illustrative healthcare administration scene",
  },
  "school-management": {
    src: "/images/education.webp",
    alt: "An illustrative classroom scene",
  },
  "sales-automation": {
    src: "/images/workplace.webp",
    alt: "An editorial business scene",
  },
  "software-development": {
    src: "/images/workplace.webp",
    alt: "An editorial scene of people discussing their work",
  },
  "ai-solutions-support": {
    src: "/images/workplace.webp",
    alt: "An editorial workplace scene",
  },
};
export function SolutionDirectory() {
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState(0);
  return (
    <section id="solutions" className="solution-directory section-pad">
      <div className="container">
        <div className="section-heading-row" data-reveal>
          <div>
            <span className="eyebrow">Our solutions</span>
            <h2>
              Built for your
              <br />
              working day.
            </h2>
          </div>
          <Link href="/contact" className="text-link">
            Find your fit
            <ArrowUpRight size={19} />
          </Link>
        </div>
        <div className="solution-showcase">
          <div className="solution-accordion" data-reveal>
            {solutions.map((s, i) => (
              <div
                className={`solution-accordion-item ${active === i ? "active" : ""}`}
                key={s.slug}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={active === i}
                    aria-controls={`solution-content-${i}`}
                    onClick={() => {
                      setActive((current) => (current === i ? -1 : i));
                      setPreview(i);
                    }}
                  >
                    <span className="solution-list-index" aria-hidden="true">
                      0{i + 1}
                    </span>
                    <span>{s.name}</span>
                    {active === i ? <Minus size={19} /> : <Plus size={19} />}
                  </button>
                </h3>
                <div
                  id={`solution-content-${i}`}
                  hidden={active !== i}
                  className="solution-accordion-content"
                >
                  <p>{s.short}</p>
                  <Link href={solutionHref(s.slug)} className="text-link">
                    Explore solution
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="solution-preview-image" data-reveal>
            {solutions.map((s, i) => {
              const img = images[s.slug];
              return (
                <div
                  key={s.slug}
                  className={`solution-image-slide ${preview === i ? "active" : ""}`}
                  aria-hidden={preview !== i}
                >
                  <Image
                    src={img.src}
                    alt={preview === i ? img.alt : ""}
                    fill
                    sizes="(max-width: 800px) 100vw, 46vw"
                  />
                  {img.label && (
                    <span className="image-caption">{img.label}</span>
                  )}
                  <div className="solution-image-title">
                    <span>{s.name}</span>
                    <Link
                      href={solutionHref(s.slug)}
                      aria-label={`Explore ${s.name}`}
                      tabIndex={preview === i ? 0 : -1}
                    >
                      <ArrowUpRight size={25} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
