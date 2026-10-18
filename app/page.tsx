import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ContactCTA, TextLink } from "@/components/ui";
import { Heading } from "@/components/heading";
import { SolutionDirectory } from "@/components/solution-directory";
import { demoHref } from "@/lib/content";
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};
export default function Home() {
  return (
    <>
      <section className="home-hero container">
        <div className="hero-topline">
          <span>Bahrain based. GCC focused.</span>
        </div>
        <div className="hero-heading-grid">
          <Heading lines={["Less admin.", "More business."]} />
          <div className="hero-introduction">
            <p>
              Cloud software for your accounts, people and everyday operations.
            </p>
            <Link href={demoHref()} className="button button-dark">
              Request a demo
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
        <div className="hero-image-stage" data-parallax="0.1">
          <Image
            src="/images/workplace.webp"
            alt="An editorial scene of professionals reviewing work in a sunlit office"
            fill
            priority
            quality={90}
            sizes="(max-width: 800px) 100vw, 92vw"
            className="parallax-image"
          />
          <Link
            className="hero-scroll"
            href="#solutions"
            aria-label="Explore Quantum solutions"
          >
            <ArrowDown size={21} />
          </Link>
        </div>
      </section>
      <section className="home-introduction section-pad">
        <div className="container introduction-grid">
          <span className="eyebrow" data-reveal>
            Meet Quantum
          </span>
          <div data-reveal>
            <h2>
              Business software.
              <br />A local partner.
            </h2>
            <div className="introduction-bottom">
              <p>
                We’re a Bahrain-based software company bringing finance, people
                and operations into better order. Ready-made business systems.
                Custom software when you need it.
              </p>
              <TextLink href="/about">About Quantum</TextLink>
            </div>
          </div>
        </div>
      </section>
      <SolutionDirectory />
      <section className="sector-section section-pad">
        <div className="container">
          <div className="section-heading-row" data-reveal>
            <h2>
              Hospitals. Clinics.
              <br />
              Classrooms.
            </h2>
          </div>
          <div className="sector-cards" data-stagger>
            <Link
              href="/solutions/hospital-management"
              className="sector-card"
              data-reveal
            >
              <div className="sector-image" data-parallax="0.07">
                <Image
                  src="/images/healthcare.webp"
                  alt="An illustrative clinic scene with a healthcare professional managing appointment information"
                  fill
                  sizes="(max-width: 800px) 100vw, 46vw"
                  className="parallax-image"
                />
                <span className="image-link-label">
                  Explore
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <div className="sector-card-heading">
                <span>Healthcare</span>
                <ArrowUpRight size={24} />
              </div>
              <h3>Hospital Management.</h3>
              <p>Patient records. Appointments. Billing. Pharmacy.</p>
            </Link>
            <Link
              href="/solutions/school-management"
              className="sector-card"
              data-reveal
            >
              <div className="sector-image" data-parallax="0.07">
                <Image
                  src="/images/education.webp"
                  alt="An illustrative school scene with a teacher supporting students in a sunlit classroom"
                  fill
                  sizes="(max-width: 800px) 100vw, 46vw"
                  className="parallax-image"
                />
                <span className="image-link-label">
                  Explore
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <div className="sector-card-heading">
                <span>Classveew · School management</span>
                <ArrowUpRight size={24} />
              </div>
              <h3>Meet Classveew.</h3>
              <p>School management, currently serving schools in Bahrain.</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="bahrain-section">
        <div className="bahrain-image" data-parallax="0.12">
          <Image
            src="/images/bahrain.webp"
            alt="Illustrative view across the waterfront in Manama, Bahrain"
            fill
            sizes="100vw"
            className="parallax-image"
          />
        </div>
        <div className="container bahrain-content">
          <div className="bahrain-panel" data-reveal>
            <span className="eyebrow">Close to your business</span>
            <h2>Based in Bahrain.</h2>
            <p>
              A local team to talk to. A portfolio of software for the way
              businesses in Bahrain and the GCC work.
            </p>
            <TextLink href="/about">Get to know us</TextLink>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
