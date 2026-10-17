import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ContactCTA, SectionLabel, TextLink } from "@/components/ui";
import { company } from "@/lib/content";
export const metadata: Metadata = {
  title: "About Quantum · Bahrain-Based Business Software",
  description:
    "Meet Quantum Software Solutions WLL. Established in Bahrain in 2026, providing practical business software for organisations across Bahrain and the GCC.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About Quantum" },
};
export default function About() {
  return (
    <>
      <section className="about-hero container">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>About Quantum</span>
        </div>
        <span className="eyebrow">A LITTLE ABOUT US</span>
        <h1>
          Progress through
          <br />
          <span>intelligent simplicity.</span>
        </h1>
        <div className="about-hero-bottom">
          <span>
            BAHRAIN BASED.
            <br />
            GCC FOCUSED.
          </span>
          <p>
            We’re Quantum Software Solutions. We believe business software
            should bring clarity to your day, and make the important work easier
            to manage.
          </p>
        </div>
      </section>
      <section className="about-panorama">
        <Image
          src="/images/bahrain.webp"
          alt="Illustrative morning view across the Manama waterfront in Bahrain"
          fill
          priority
          sizes="100vw"
        />
        <div className="about-panorama-caption">
          <span>
            <MapPin size={15} />
            KINGDOM OF BAHRAIN
          </span>
          <span>OUR HOME. OUR STARTING POINT.</span>
        </div>
      </section>
      <section className="about-story section-pad">
        <div className="container">
          <SectionLabel number="01 / WHO WE ARE">
            SOFTWARE WITH A PRACTICAL PURPOSE
          </SectionLabel>
          <div className="overview-grid" data-reveal>
            <h2>
              A local company.
              <br />A clear focus.
            </h2>
            <div>
              <p>
                Established in 2026, Quantum Software Solutions WLL is a
                Bahrain-based software and technology company serving businesses
                and organisations in Bahrain and the wider GCC.
              </p>
              <p>
                Our focus is practical business software: systems that help
                organisations manage their finances, people, information, and
                day-to-day operations.
              </p>
              <p>
                From ERP and accounting to school management, healthcare
                systems, software development, and AI, we bring several
                business-software areas together through one company.
              </p>
            </div>
          </div>
          <div className="company-facts" data-reveal>
            <div>
              <span>Established</span>
              <strong>2026</strong>
            </div>
            <div>
              <span>Based in</span>
              <strong>Bahrain</strong>
            </div>
            <div>
              <span>Our focus</span>
              <strong>The GCC</strong>
            </div>
            <div>
              <span>Commercial Registration</span>
              <strong>197818-1</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="purpose-section section-pad">
        <div className="container">
          <SectionLabel number="02 / WHAT GUIDES US">
            PURPOSE, WITH BOTH FEET ON THE GROUND
          </SectionLabel>
          <div className="purpose-grid">
            <article data-reveal>
              <span className="eyebrow">OUR MISSION</span>
              <h2>
                Make the day-to-day
                <br />
                work simpler.
              </h2>
              <p>
                Provide smart, reliable cloud software that helps organisations
                simplify operations, improve productivity, and support their
                growth.
              </p>
            </article>
            <article data-reveal>
              <span className="eyebrow">OUR VISION</span>
              <h2>
                Help the region
                <br />
                work better.
              </h2>
              <p>
                Become a trusted regional provider of intelligent cloud
                solutions that improve how businesses and institutions operate.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section-pad about-approach">
        <div className="container">
          <SectionLabel number="03 / OUR APPROACH">
            KEEPING THE IMPORTANT THINGS IN FOCUS
          </SectionLabel>
          <div className="section-heading-row" data-reveal>
            <h2>
              Good software begins
              <br />
              with understanding.
            </h2>
            <TextLink href="/#solutions">Explore our solutions</TextLink>
          </div>
          <div className="principle-grid" data-reveal>
            <article>
              <span className="small-index">01</span>
              <h3>Practical by purpose.</h3>
              <p>
                Focus on the everyday work of your business and the systems that
                help it run.
              </p>
            </article>
            <article>
              <span className="small-index">02</span>
              <h3>Simplicity matters.</h3>
              <p>
                Make useful information accessible and bring more structure to
                operational work.
              </p>
            </article>
            <article>
              <span className="small-index">03</span>
              <h3>Closer to the context.</h3>
              <p>
                Bring a Bahrain-based perspective to the needs of businesses and
                institutions across the GCC.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="office-section">
        <div className="container office-grid">
          <div>
            <span className="eyebrow">FIND US IN BAHRAIN</span>
            <h2>
              Let’s talk,
              <br />
              <span>locally.</span>
            </h2>
          </div>
          <div>
            <address>
              {company.address.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </address>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=Building%202004%20Road%201527%20Block%20115%20Al%20Hidd%20Bahrain"
              target="_blank"
              rel="noopener noreferrer"
            >
              View area on Google Maps
              <ArrowUpRight size={18} />
            </a>
            <p>
              Quantum Software Solutions WLL
              <br />
              CR {company.cr}
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
