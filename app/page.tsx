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
const sectors = [
  {
    label: "Business",
    title: "Keep finance and operations in order.",
    text: "Accounting, stock and transaction management for retail, wholesale, manufacturing and service businesses. Keep the information behind everyday decisions in view.",
    href: "/solutions/erp-accounting",
    link: "ERP & Accounting",
  },
  {
    label: "Healthcare",
    title: "Support the work behind patient care.",
    text: "Organise patient records, appointments, billing and pharmacy operations. Practical hospital-management software for hospitals, clinics and their administration teams.",
    href: "/solutions/hospital-management",
    link: "Hospital Management",
  },
  {
    label: "Education",
    title: "Bring the school day together.",
    text: "Manage admissions, attendance, timetables, gradebook and parent-teacher communication with Classveew, Quantum’s platform currently serving schools in Bahrain.",
    href: "/solutions/school-management",
    link: "Discover Classveew",
  },
];
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow">
            Business software · Bahrain & GCC
          </span>
          <Heading
            lines={["Business software.", "A simpler way", "forward."]}
          />
          <div className="hero-bottom">
            <p>
              Cloud software for your accounts, people and operations. Quantum
              brings practical business systems, custom software development and
              AI solutions together through one Bahrain-based technology
              partner.
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
        <p>Finance. People. Operations.</p>
        <span>Cloud business software. Local understanding.</span>
      </div>
      <SolutionDirectory />
      <section className="approach-section section-pad">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="eyebrow">The Quantum approach</span>
            <h2>Useful software starts with the way your business works.</h2>
            <div className="offset-copy">
              <p>
                You have a business to run. Your software should help you keep
                track of the details, make sense of information and get everyday
                work done.
              </p>
              <p>
                We’re Quantum Software Solutions, a Bahrain-based company
                focused on practical cloud systems. From finance and HR to
                hospital and school administration, our portfolio helps
                organisations put their operations in better order.
              </p>
              <TextLink href="/about">Get to know Quantum</TextLink>
            </div>
          </div>
          <div className="principle-grid" data-stagger>
            <article data-reveal>
              <span className="small-index">01</span>
              <h3>Business comes first.</h3>
              <p>
                Start with the work that needs to be done. Choose a system
                around the records, processes and people that matter to your
                organisation.
              </p>
            </article>
            <article data-reveal>
              <span className="small-index">02</span>
              <h3>Information within reach.</h3>
              <p>
                Cloud-based software keeps business information centrally
                managed and accessible, with less reliance on unnecessary local
                infrastructure.
              </p>
            </article>
            <article data-reveal>
              <span className="small-index">03</span>
              <h3>A local point of contact.</h3>
              <p>
                Speak with a Bahrain-based software company that understands the
                local business context and serves the wider GCC.
              </p>
            </article>
          </div>
        </div>
      </section>
      <ProductExplorer />
      <section className="industry-section section-pad">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="eyebrow">Software for your organisation</span>
            <h2>Different sectors. Specific needs.</h2>
            <p>
              Find a system that supports the daily work of your business or
              institution.
            </p>
          </div>
          <div className="industry-grid" data-stagger>
            {sectors.map((s) => (
              <article key={s.label} data-reveal>
                <span className="eyebrow">{s.label}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <TextLink href={s.href}>{s.link}</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="starting-section section-pad">
        <div className="container starting-grid">
          <div data-reveal>
            <span className="eyebrow">Where to begin</span>
            <h2>Let’s find the right starting point.</h2>
            <p>
              Looking for an existing business system, or something built around
              your own requirements? Tell us what you want to improve.
            </p>
            <TextLink href="/contact">Talk to our team</TextLink>
          </div>
          <div className="starting-steps" data-reveal>
            <details open name="starting-point">
              <summary>
                <span>01</span>Share your day-to-day challenges
                <span className="accordion-symbol" aria-hidden="true" />
              </summary>
              <div>
                <p>
                  Tell us how your organisation works, where information gets
                  difficult to manage and which tasks take up your team’s time.
                </p>
              </div>
            </details>
            <details name="starting-point">
              <summary>
                <span>02</span>Explore the relevant software
                <span className="accordion-symbol" aria-hidden="true" />
              </summary>
              <div>
                <p>
                  Look at the systems that match your needs. Request a
                  demonstration of a product, or discuss a custom software or AI
                  requirement with Quantum.
                </p>
              </div>
            </details>
            <details name="starting-point">
              <summary>
                <span>03</span>Agree what comes next
                <span className="accordion-symbol" aria-hidden="true" />
              </summary>
              <div>
                <p>
                  Confirm the functionality, setup, scope and support your
                  organisation needs before deciding on the next step.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="regional-section">
        <div className="container regional-grid">
          <div className="regional-image" data-parallax="0.06">
            <Image
              src="/images/bahrain.webp"
              alt="Illustrative view of the Manama waterfront in Bahrain"
              fill
              sizes="(max-width: 800px) 100vw, 40vw"
              className="parallax-image"
            />
            <span>Kingdom of Bahrain</span>
          </div>
          <div className="regional-copy" data-reveal>
            <span className="eyebrow">
              Local understanding. Regional outlook.
            </span>
            <h2>
              Rooted in Bahrain.
              <br />
              Here for the GCC.
            </h2>
            <p>
              From our base in Al Hidd, we work with businesses and institutions
              looking for useful software and a technology partner they can
              speak to.
            </p>
            <p>
              Our focus is straightforward: simpler operations, clearer
              information and systems that support the everyday work.
            </p>
            <TextLink href="/about">More about Quantum</TextLink>
          </div>
        </div>
      </section>
      <FAQ items={homeFaqs} />
      <ContactCTA />
    </>
  );
}
