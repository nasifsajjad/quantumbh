import { socialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ContactCTA, FAQ, TextLink } from "@/components/ui";
import { Heading } from "@/components/heading";
import { SolutionDirectory } from "@/components/solution-directory";
import { ProductExplorer } from "@/components/product-explorer";
import { ProductCanvas } from "@/components/product-canvas";
import { productPreviews } from "@/lib/product-previews";
import { demoHref, homeFaqs } from "@/lib/content";
const social = socialMetadata(
  "quantum",
  "Quantum Software Solutions",
  "Cloud business software for Bahrain and the GCC.",
);
export const metadata: Metadata = {
  ...social,
  alternates: { canonical: "/" },
  openGraph: { ...social.openGraph, url: "/" },
};
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow">
            Quantum Software Solutions
          </span>
          <Heading
            lines={["Business software", "for Bahrain", "and the GCC."]}
          />
          <div className="hero-bottom">
            <p>
              Cloud business systems, custom software development, and AI
              solutions and support. A Bahrain-based partner for the systems
              behind your daily operations.
            </p>
            <div className="hero-actions">
              <Link href={demoHref()} className="button button-dark hero-cta">
                Request a demo
                <ArrowUpRight size={22} />
              </Link>
              <a href="#solutions" className="hero-explore">
                Explore solutions
                <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-disciplines">
              <span>Finance</span>
              <span>People</span>
              <span>Operations</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <Image
              src="/images/quantum-workspace.webp"
              alt="Generated editorial scene of a laptop displaying a conceptual business software interface"
              fill
              priority
              fetchPriority="high"
              quality={90}
              sizes="(max-width:800px) 100vw,50vw"
            />
          </div>
          <div className="hero-photo-footer">
            <Link href="/solutions/erp-accounting">
              ERP & Accounting
              <ArrowUpRight size={18} />
            </Link>
            <span>Illustrative software scene</span>
          </div>
        </div>
      </section>
      <SolutionDirectory />
      <div className="home-product-section">
        <ProductExplorer />
      </div>
      <section className="hr-spotlight section-pad">
        <div className="container hr-spotlight-grid">
          <div data-reveal>
            <span className="eyebrow">HR Management</span>
            <h2>The records behind your people.</h2>
            <p>
              Employee information, payroll, attendance and leave. Keep the
              regular work of HR administration in order.
            </p>
            <div className="hr-functions">
              <span>Employee records</span>
              <span>Payroll</span>
              <span>Attendance</span>
              <span>Leave</span>
            </div>
            <TextLink href="/solutions/hr-management">
              Explore HR Management
            </TextLink>
          </div>
          <div className="hr-spotlight-preview" data-reveal>
            <ProductCanvas
              product="hr"
              brand="Quantum"
              view={productPreviews.hr.views[1]}
              compact
            />
          </div>
        </div>
      </section>
      <section className="industry-section section-pad">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="eyebrow">Healthcare & education</span>
            <h2>Software for the work behind your institution.</h2>
            <p>
              Hospitals, clinics and schools have their own administrative
              needs. Explore the systems built for these areas.
            </p>
          </div>
          <div className="institution-grid" data-stagger>
            <article data-reveal>
              <span className="eyebrow">Hospital Management</span>
              <h3>Organise the administration behind care.</h3>
              <p>
                Keep patient records, appointments, billing and pharmacy
                operations in order. Quantum’s Hospital Management System is
                intended for hospitals, clinics and their administration teams.
              </p>
              <ul>
                <li>Patient records & appointments</li>
                <li>Billing & pharmacy operations</li>
              </ul>
              <TextLink href="/solutions/hospital-management">
                Explore Hospital Management
              </TextLink>
            </article>
            <article data-reveal>
              <span className="eyebrow">Classveew · School Management</span>
              <h3 className="classveew-wordmark">
                Classveew<span>School management by Quantum</span>
              </h3>
              <p>
                Admissions, attendance, timetables, gradebook and parent-teacher
                communication. One platform for the daily work of school
                administration.
              </p>
              <div className="classveew-proof">
                <span aria-hidden="true" />
                Currently serving schools in Bahrain.
              </div>
              <ul>
                <li>School administration & daily records</li>
                <li>Parent-teacher communication</li>
              </ul>
              <TextLink href="/solutions/school-management">
                Meet Classveew
              </TextLink>
            </article>
          </div>
        </div>
      </section>
      <section className="regional-section">
        <div className="container regional-grid">
          <div className="regional-image" data-parallax="0.06">
            <Image
              src="/images/bahrain.webp"
              alt="Illustrative view across the waterfront in Manama, Bahrain"
              fill
              sizes="(max-width:800px) 100vw,40vw"
              className="parallax-image"
            />
            <span>Illustrative view of Bahrain</span>
          </div>
          <div className="regional-copy" data-reveal>
            <span className="eyebrow">About Quantum</span>
            <h2>A Bahrain-based software partner.</h2>
            <p>
              Quantum Software Solutions WLL serves businesses and institutions
              in Bahrain and the wider GCC. We focus on useful software that
              helps teams organise information and manage their everyday work.
            </p>
            <p>
              From cloud business systems to custom software and AI support, our
              aim is straightforward: make business operations simpler, with a
              local company you can speak to.
            </p>
            <TextLink href="/about">Get to know Quantum</TextLink>
          </div>
        </div>
      </section>
      <FAQ id="questions" title="Before you get in touch." items={homeFaqs} />
      <ContactCTA />
    </>
  );
}
