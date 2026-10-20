import { socialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactCTA, TextLink } from "@/components/ui";
import { Heading } from "@/components/heading";
import { company, solutions, solutionHref } from "@/lib/content";
const social = socialMetadata(
  "about",
  "About Quantum",
  "A Bahrain-based business software company, established in 2026.",
);
export const metadata: Metadata = {
  ...social,
  title: "About Quantum · Bahrain-Based Business Software",
  description:
    "Meet Quantum Software Solutions WLL, established in Bahrain in 2026. Cloud business systems, custom software development and AI solutions for Bahrain and the GCC.",
  alternates: { canonical: "/about" },
  openGraph: { ...social.openGraph, url: "/about" },
};
const groups = [
  {
    title: "Business systems",
    text: "Software for the records and transactions behind daily business operations.",
    slugs: ["erp-accounting", "hr-management", "sales-automation"],
  },
  {
    title: "Healthcare & education",
    text: "Management systems for the administrative work of hospitals, clinics and schools.",
    slugs: ["hospital-management", "school-management"],
  },
  {
    title: "Development & AI",
    text: "Custom software and AI-related solutions and support around organisational requirements.",
    slugs: ["software-development", "ai-solutions-support"],
  },
];
export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <div className="about-opening">
            <div>
              <span className="eyebrow">Quantum Software Solutions</span>
              <Heading
                lines={["Business software.", "A Bahrain-based company."]}
              />
            </div>
            <div>
              <p>
                Quantum Software Solutions WLL is a software and technology
                company based in Bahrain. We provide cloud business systems,
                custom software development, and AI solutions and support for
                organisations in Bahrain and the GCC.
              </p>
              <p>
                Established in 2026, we focus on a practical purpose: helping
                businesses and institutions organise their information and run
                day-to-day operations more efficiently.
              </p>
              <TextLink href="/#solutions">Explore our solutions</TextLink>
            </div>
          </div>
          <div className="company-facts">
            <div>
              <span>Established</span>
              <strong>2026</strong>
            </div>
            <div>
              <span>Based in</span>
              <strong>Al Hidd, Bahrain</strong>
            </div>
            <div>
              <span>Serving</span>
              <strong>Bahrain & GCC</strong>
            </div>
            <div>
              <span>Our focus</span>
              <strong>Business software</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="about-offerings section-pad">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="eyebrow">What we provide</span>
            <h2>Several business needs. One software company.</h2>
            <p>
              Explore our operational systems, or talk to us about a requirement
              specific to your organisation.
            </p>
          </div>
          <div className="offering-grid" data-stagger>
            {groups.map((group) => (
              <article key={group.title} data-reveal>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <ul>
                  {group.slugs.map((slug) => {
                    const s = solutions.find((s) => s.slug === slug)!;
                    return (
                      <li key={slug}>
                        <Link href={solutionHref(slug)}>
                          {slug === "school-management"
                            ? "Classveew · School Management"
                            : s.name}
                          <ArrowUpRight size={17} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="about-approach section-pad">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="eyebrow">How we approach the work</span>
            <h2>Start with the organisation. Keep the software useful.</h2>
            <div className="offset-copy">
              <p>
                Business software has a clear job: help people manage the
                information and tasks their work depends on. We put that
                practical purpose at the centre of our offering.
              </p>
            </div>
          </div>
          <div className="principle-grid" data-stagger>
            <article data-reveal>
              <span className="small-index">01</span>
              <h3>Understand the operational need.</h3>
              <p>
                Start with the work your team does, the records it manages and
                what needs to improve. Use those requirements to guide the
                software discussion.
              </p>
            </article>
            <article data-reveal>
              <span className="small-index">02</span>
              <h3>Keep information accessible.</h3>
              <p>
                Cloud access and centrally managed information are central to
                our product direction, helping organisations avoid unnecessary
                local infrastructure complexity.
              </p>
            </article>
            <article data-reveal>
              <span className="small-index">03</span>
              <h3>Keep the conversation local.</h3>
              <p>
                Speak with a Bahrain-based company serving the wider GCC, with
                an understanding of the business context in which your
                organisation operates.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="purpose-section">
        <div className="container purpose-grid" data-stagger>
          <article data-reveal>
            <span className="eyebrow">Our mission</span>
            <h2>Make everyday operations simpler.</h2>
            <p>
              Provide smart, reliable cloud software that simplifies operations,
              improves productivity and supports organisational growth.
            </p>
          </article>
          <article data-reveal>
            <span className="eyebrow">Our vision</span>
            <h2>Help businesses across the region work better.</h2>
            <p>
              Become a strong regional provider of intelligent software that
              improves how businesses and institutions operate.
            </p>
          </article>
        </div>
      </section>
      <section className="about-location section-pad" id="company-details">
        <div className="container regional-grid">
          <div className="regional-image" data-parallax="0.06">
            <Image
              src="/images/bahrain.webp"
              alt="Illustrative view of the waterfront in Manama, Bahrain"
              fill
              sizes="(max-width:800px) 100vw,40vw"
              className="parallax-image"
            />
          </div>
          <div className="regional-copy" data-reveal>
            <span className="eyebrow">Company & office details</span>
            <h2>Find us in Al Hidd.</h2>
            <p>{company.name}</p>
            <address>
              {company.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <a
              className="text-link"
              href={company.mapHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
              <ArrowUpRight size={18} />
            </a>
            <dl className="company-contact-list">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </dd>
              </div>
              <div>
                <dt>Telephone</dt>
                <dd>
                  <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Commercial Registration</dt>
                <dd>{company.cr}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <ContactCTA
        title="Talk to Quantum about your organisation."
        description="Ask about a business system, discuss a software requirement or get to know our company."
        label="Contact Quantum"
        href="/contact"
      />
    </>
  );
}
