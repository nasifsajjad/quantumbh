import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactCTA, TextLink } from "@/components/ui";
import { Heading } from "@/components/heading";
import { company } from "@/lib/content";
export const metadata: Metadata = {
  title: "About Quantum · Bahrain-Based Business Software",
  description:
    "Quantum Software Solutions WLL. Established in Bahrain in 2026, providing practical business software for Bahrain and the GCC.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About Quantum" },
};
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
              <Heading lines={["Practical software.", "A local partner."]} />
            </div>
            <div>
              <p>
                We’re a Bahrain-based software company with a straightforward
                purpose: help organisations run their day-to-day operations more
                efficiently.
              </p>
              <p>
                Established in 2026, Quantum Software Solutions WLL brings cloud
                business systems, custom software development, and AI solutions
                and support together for businesses in Bahrain and the GCC.
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
              <strong>Bahrain</strong>
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
      <section className="about-story section-pad">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="eyebrow">Intelligent simplicity</span>
            <h2>Business software should make the working day easier.</h2>
            <div className="offset-copy">
              <p>
                Every organisation has information to manage, people to support
                and decisions to make. We focus on software that gives those
                everyday responsibilities more structure.
              </p>
              <p>
                Our portfolio covers ERP and accounting, HR management, hospital
                management, school management through Classveew, and sales
                automation. For requirements shaped around a particular
                business, we also offer software development and AI solutions
                and support.
              </p>
              <p>
                Cloud access and centrally managed information are central to
                our approach. The goal is practical: useful systems, clearer
                operations and a local company to talk to.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="purpose-section">
        <div className="container purpose-grid" data-stagger>
          <article data-reveal>
            <span className="eyebrow">Our mission</span>
            <h2>Make work simpler.</h2>
            <p>
              Provide smart, reliable cloud software that simplifies operations,
              improves productivity and supports organisational growth.
            </p>
          </article>
          <article data-reveal>
            <span className="eyebrow">Our vision</span>
            <h2>Help the region work better.</h2>
            <p>
              Become a trusted regional provider of intelligent software that
              improves how businesses and institutions operate.
            </p>
          </article>
        </div>
      </section>
      <section className="about-location section-pad">
        <div className="container regional-grid">
          <div className="regional-image" data-parallax="0.06">
            <Image
              src="/images/bahrain.webp"
              alt="Illustrative view of the Manama waterfront, Bahrain"
              fill
              sizes="(max-width: 800px) 100vw, 40vw"
              className="parallax-image"
            />
          </div>
          <div className="regional-copy" data-reveal>
            <span className="eyebrow">Our office</span>
            <h2>
              Based in Al Hidd.
              <br />
              Looking across the GCC.
            </h2>
            <p>
              We serve businesses and institutions in Bahrain and the wider Gulf
              region, with a focus on practical software and local
              understanding.
            </p>
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
              View on Google Maps
              <ArrowUpRight size={18} />
            </a>
            <p className="office-legal">
              {company.name}
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
