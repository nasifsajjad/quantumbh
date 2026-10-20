import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { solutionHref, solutions } from "@/lib/content";
const groups = [
  {
    title: "Business systems",
    description: "Accounts, employees and sales administration.",
    slugs: ["erp-accounting", "hr-management", "sales-automation"],
  },
  {
    title: "Healthcare & education",
    description: "The daily work behind hospitals, clinics and schools.",
    slugs: ["hospital-management", "school-management"],
  },
  {
    title: "Development & AI",
    description: "Software and assistance around a business requirement.",
    slugs: ["software-development", "ai-solutions-support"],
  },
];
export function SolutionDirectory() {
  return (
    <section id="solutions" className="solution-directory section-pad">
      <div className="container">
        <div className="index-heading" data-reveal>
          <div>
            <span className="eyebrow">Our solutions</span>
            <h2>Find your starting point.</h2>
          </div>
          <p>
            Business systems and software services for the work your
            organisation needs to manage.
          </p>
        </div>
        <div className="solution-index" data-stagger>
          {groups.map((group, i) => (
            <div className="solution-group" key={group.title} data-reveal>
              <div className="solution-group-heading">
                <span className="small-index">0{i + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <div className="solution-group-links">
                {group.slugs.map((slug) => {
                  const s = solutions.find((s) => s.slug === slug)!;
                  return (
                    <Link
                      className="solution-index-link"
                      key={slug}
                      href={solutionHref(slug)}
                    >
                      <div>
                        <h4>
                          {slug === "school-management"
                            ? "Classveew · School Management"
                            : s.name}
                        </h4>
                        <p>{s.short}</p>
                      </div>
                      <ArrowUpRight size={21} />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="directory-help">
          <p>Not sure which system fits?</p>
          <Link href="/contact" className="text-link">
            Tell us what you need
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
