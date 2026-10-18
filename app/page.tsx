import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { ContactCTA, FAQ, TextLink } from "@/components/ui";
import { Heading } from "@/components/heading";
import { SolutionDirectory } from "@/components/solution-directory";
import { ProductExplorer } from "@/components/product-explorer";
import { demoHref, homeFaqs } from "@/lib/content";
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
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
                <span className="check-disc">
                  <Check size={17} />
                </span>
                <span>Accounts, inventory and financial reporting</span>
              </li>
              <li>
                <span className="check-disc">
                  <Check size={17} />
                </span>
                <span>People, payroll, attendance and leave</span>
              </li>
              <li>
                <span className="check-disc">
                  <Check size={17} />
                </span>
                <span>Systems for healthcare and education</span>
              </li>
              <li>
                <span className="check-disc">
                  <Check size={17} />
                </span>
                <span>Custom software and practical AI support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="scope-strip container">
        <p>Accounts. People. Day-to-day operations.</p>
        <span>Based in Bahrain · Serving the GCC</span>
      </div>
      <SolutionDirectory />
      <div className="home-product-section">
        <ProductExplorer />
      </div>
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
              <h3>Bring school information together.</h3>
              <p>
                Manage admissions, attendance, timetables, gradebook and
                parent-teacher communication. Classveew is Quantum’s
                school-management platform, currently serving schools in
                Bahrain.
              </p>
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
            <span>Kingdom of Bahrain</span>
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
