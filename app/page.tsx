import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, MapPin } from "lucide-react";
import { ContactCTA, FAQ, SectionLabel, TextLink } from "@/components/ui";
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
          <div className="hero-eyebrow">
            <span className="eyebrow">SOFTWARE FOR THE WAY YOU WORK</span>
            <span className="hero-edition">BAHRAIN / GCC</span>
          </div>
          <h1>
            Business
            <br />
            software.
            <br />
            <span>
              A simpler way
              <br />
              forward.
            </span>
          </h1>
          <div className="hero-bottom">
            <p>
              Bring clarity to your operations.
              <br />
              Practical business software, built around
              <br className="wide-break" /> what matters to you.
            </p>
            <div className="hero-buttons">
              <Link href={demoHref()} className="button button-gold">
                Request a demo
                <ArrowUpRight size={19} />
              </Link>
              <Link href="#solutions" className="hero-explore">
                Explore solutions
                <ArrowDown size={17} />
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/images/software-editorial.webp"
            alt="Conceptual accounting software on a laptop in a sunlit workspace"
            fill
            priority
            quality={90}
            sizes="(max-width: 800px) 100vw, 48vw"
            className="hero-photo"
          />
          <div className="hero-image-caption">
            A QUANTUM PERSPECTIVE · CONCEPTUAL PRODUCT VISUAL
          </div>
          <div className="hero-visual-note">
            <span className="eyebrow">LESS COMPLEXITY. MORE CLARITY.</span>
            <p>
              Good business.
              <br />
              Better connected.
            </p>
            <div className="hero-note-footer">
              <span>Finance. People. Operations.</span>
              <span className="note-plus">+</span>
            </div>
          </div>
        </div>
      </section>
      <section className="intro-section section-pad">
        <div className="container">
          <SectionLabel number="01 / THE QUANTUM APPROACH">
            INTELLIGENT SIMPLICITY
          </SectionLabel>
          <div className="intro-heading" data-reveal>
            <h2>
              Complex operations.
              <br />
              <span>Clearer possibilities.</span>
            </h2>
            <div>
              <p>
                You have a business to run. Your software should make that
                easier.
              </p>
              <p>
                We’re Quantum Software Solutions. A Bahrain-based software
                company helping organisations bring more structure, visibility,
                and simplicity to their day-to-day work.
              </p>
              <TextLink href="/about">Get to know Quantum</TextLink>
            </div>
          </div>
          <div className="principle-grid" data-reveal>
            <article>
              <span className="small-index">01</span>
              <h3>Business comes first.</h3>
              <p>
                Software focused on real operational needs, from your accounts
                to your people.
              </p>
            </article>
            <article>
              <span className="small-index">02</span>
              <h3>Clarity by design.</h3>
              <p>
                Cloud-based systems that put useful business information within
                reach.
              </p>
            </article>
            <article>
              <span className="small-index">03</span>
              <h3>Closer to your business.</h3>
              <p>
                A local point of contact in Bahrain, with a focus on the wider
                GCC.
              </p>
            </article>
          </div>
        </div>
      </section>
      <SolutionDirectory />
      <ProductExplorer />
      <section className="industry-section section-pad">
        <div className="container">
          <SectionLabel number="BUILT FOR REAL WORK">
            DIFFERENT SECTORS. SHARED NEED FOR CLARITY.
          </SectionLabel>
          <div className="section-heading-row" data-reveal>
            <h2>
              Every organisation
              <br />
              has its own rhythm.
            </h2>
            <p>
              Find software that understands
              <br />
              the work behind your working day.
            </p>
          </div>
          <div className="industry-grid" data-reveal>
            <Link href="/solutions/erp-accounting" className="industry-item">
              <span className="industry-index">01 / BUSINESS</span>
              <h3>
                Keep your
                <br />
                business moving.
              </h3>
              <p>
                For retail, wholesale, manufacturing, and service businesses. A
                clearer view of finance and operations.
              </p>
              <span className="industry-link">
                ERP & Accounting
                <ArrowUpRight size={20} />
              </span>
            </Link>
            <Link
              href="/solutions/hospital-management"
              className="industry-item"
            >
              <span className="industry-index">02 / HEALTHCARE</span>
              <h3>
                Organise the
                <br />
                day behind care.
              </h3>
              <p>
                Patient records, appointments, billing, and pharmacy operations
                for hospitals and clinics.
              </p>
              <span className="industry-link">
                Hospital Management
                <ArrowUpRight size={20} />
              </span>
            </Link>
            <Link href="/solutions/school-management" className="industry-item">
              <span className="industry-index">03 / EDUCATION</span>
              <h3>
                A clearer view
                <br />
                of school life.
              </h3>
              <p>
                Meet Classveew. School-management software currently serving
                schools in Bahrain.
              </p>
              <span className="industry-link">
                Discover Classveew
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="regional-section">
        <div className="regional-image" data-reveal>
          <Image
            src="/images/bahrain.webp"
            alt="An illustrative editorial view of the Manama waterfront in Bahrain"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <span className="regional-caption">
            <MapPin size={14} />
            KINGDOM OF BAHRAIN
          </span>
        </div>
        <div className="regional-copy" data-reveal>
          <span className="eyebrow">
            LOCAL UNDERSTANDING. REGIONAL OUTLOOK.
          </span>
          <h2>
            Rooted in Bahrain.
            <br />
            <span>Ready for the GCC.</span>
          </h2>
          <p>
            We believe useful technology begins with understanding the people
            and businesses it serves.
          </p>
          <p>
            From our base in Al Hidd, we work with organisations looking for
            practical software and a local technology partner they can speak to.
          </p>
          <TextLink href="/about">A little more about us</TextLink>
        </div>
      </section>
      <FAQ items={homeFaqs} />
      <ContactCTA />
    </>
  );
}
