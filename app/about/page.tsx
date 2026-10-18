import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactCTA } from "@/components/ui";
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
      <section className="about-hero container">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>About</span>
        </div>
        <div className="about-opening">
          <div>
            <span className="eyebrow">Quantum Software Solutions</span>
            <Heading lines={["A local company.", "A practical purpose."]} />
          </div>
          <p>
            Business software for the accounts, people and operations that keep
            organisations moving.
          </p>
        </div>
      </section>
      <div className="about-panorama" data-parallax="0.1">
        <Image
          src="/images/bahrain.webp"
          alt="Illustrative view of the Manama waterfront, Bahrain"
          fill
          priority
          sizes="100vw"
          className="parallax-image"
        />
      </div>
      <section className="about-story section-pad">
        <div className="container about-story-grid">
          <div className="established" data-reveal>
            <span className="eyebrow">Established in Bahrain</span>
            <span className="established-year">2026</span>
          </div>
          <div data-reveal>
            <h2>
              Here for the
              <br />
              everyday work.
            </h2>
            <p>
              Quantum Software Solutions WLL is a Bahrain-based software company
              serving organisations in Bahrain and the GCC.
            </p>
            <p>
              We provide cloud business systems, custom software development,
              and AI solutions and support. Our focus is simple: useful software
              that helps your organisation work more efficiently.
            </p>
          </div>
        </div>
      </section>
      <section className="purpose-section section-pad">
        <div className="container purpose-grid" data-stagger>
          <article data-reveal>
            <span className="eyebrow">Our mission</span>
            <h2>Make work simpler.</h2>
            <p>
              Provide reliable cloud software that simplifies operations,
              improves productivity and supports organisational growth.
            </p>
          </article>
          <article data-reveal>
            <span className="eyebrow">Our vision</span>
            <h2>
              Help the region
              <br />
              work better.
            </h2>
            <p>
              Become a trusted regional provider of intelligent software that
              improves how businesses and institutions operate.
            </p>
          </article>
        </div>
      </section>
      <section className="office-section section-pad">
        <div className="container office-grid">
          <div data-reveal>
            <span className="eyebrow">Our office</span>
            <h2>
              Find us in
              <br />
              Al Hidd.
            </h2>
          </div>
          <div data-reveal>
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
