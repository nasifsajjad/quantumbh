import { socialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
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
            Business software · Bahrain & GCC
          </span>
          <Heading
            lines={["Business software", "for Bahrain", "and the GCC."]}
          />
          <div className="hero-bottom">
            <p>
              Quantum Software Solutions provides cloud business systems, custom
              software development, and AI solutions and support. Software for
              your accounts, people and everyday operations, from a
              Bahrain-based technology partner.
            </p>
            <Link href={demoHref()} className="button button-gold hero-cta">
              Request a demo
              <ArrowUpRight size={25} />
            </Link>
            <a href="#solutions" className="hero-explore">
              Explore our solutions
              <ArrowDown size={16} />
            </a>
          </div>
        </div>
        <div className="hero-visual" data-parallax="0.06">
          <Image
            src="/images/software-editorial.webp"
            alt="Illustrative accounting software on a laptop in a sunlit workspace"
            fill
            priority
            fetchPriority="high"
            quality={90}
            sizes="(max-width: 800px) 100vw, 50vw"
            className="parallax-image"
          />
          <span className="hero-image-caption">
            Illustrative product visual
          </span>
          <div className="hero-note">
            <span className="eyebrow">A clearer working day</span>
            <ul>
              <li>
                <span className="check-disc" aria-hidden="true">
                  <Check size={17} />
                </span>
                <span>Accounts, inventory and financial reporting</span>
              </li>
              <li>
                <span className="check-disc" aria-hidden="true">
                  <Check size={17} />
                </span>
                <span>People, payroll, attendance and leave</span>
              </li>
              <li>
                <span className="check-disc" aria-hidden="true">
                  <Check size={17} />
                </span>
                <span>Systems for healthcare and education</span>
              </li>
              <li>
                <span className="check-disc" aria-hidden="true">
                  <Check size={17} />
                </span>
                <span>Custom software and practical AI support</span>
              </li>
            </ul>
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
