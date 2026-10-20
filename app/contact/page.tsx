import { socialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { Heading } from "@/components/heading";
import { company } from "@/lib/content";
const social = socialMetadata(
  "contact",
  "Contact Quantum",
  "Request a demonstration or discuss your software requirements.",
);
export const metadata: Metadata = {
  ...social,
  title: "Contact & Request a Demo",
  description:
    "Contact Quantum Software Solutions in Bahrain. Request a product demonstration or discuss your software requirements at sales@quantumbh.net or +973 3216 6628.",
  alternates: { canonical: "/contact" },
  openGraph: { ...social.openGraph, url: "/contact" },
};
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string; solution?: string }>;
}) {
  const params = await searchParams;
  return (
    <>
      <section className="contact-page container">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Contact</span>
        </div>
        <div className="contact-page-grid">
          <div className="contact-intro">
            <span className="eyebrow">Contact & demonstrations</span>
            <Heading lines={["Talk to Quantum."]} />
            <p className="contact-lead">
              Request a product demonstration, discuss a custom software project
              or ask about a solution. Tell us what your organisation needs, and
              give the conversation a useful starting point.
            </p>
            <div className="contact-direct">
              <a href={`mailto:${company.email}`}>
                <span>{company.email}</span>
                <ArrowUpRight size={21} />
              </a>
              <a href={`tel:${company.phoneHref}`}>
                <span>{company.phone}</span>
                <ArrowUpRight size={21} />
              </a>
            </div>
            <div className="contact-office">
              <span className="eyebrow">Our office · Bahrain</span>
              <address className="contact-address">
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
                <ArrowUpRight size={17} />
              </a>
              <p className="contact-company">
                {company.name}
                <br />
                CR {company.cr}
              </p>
            </div>
          </div>
          <EnquiryForm
            key={`${params.intent}:${params.solution}`}
            intent={params.intent || ""}
            solution={params.solution || ""}
          />
        </div>
      </section>
      <section className="contact-next-section">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="eyebrow">What happens next</span>
            <h2>A simple way to start the conversation.</h2>
          </div>
          <div className="principle-grid" data-stagger>
            <article data-reveal>
              <span className="small-index">01</span>
              <h3>Prepare your enquiry.</h3>
              <p>
                Select a solution or choose “Help me choose”. Include any
                requirements you would like Quantum to consider.
              </p>
            </article>
            <article data-reveal>
              <span className="small-index">02</span>
              <h3>Review and send.</h3>
              <p>
                The form prepares an email draft. Review it and send it from
                your email app, or copy the enquiry into your preferred email
                service.
              </p>
            </article>
            <article data-reveal>
              <span className="small-index">03</span>
              <h3>Discuss your requirements.</h3>
              <p>
                Use your enquiry to explain the product you want to explore or
                the work you need help with. You can also contact us directly by
                phone or email.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section id="privacy" className="enquiry-privacy">
        <div className="container privacy-grid">
          <h2>Privacy & enquiries</h2>
          <p>
            The form prepares an email draft on your device. Your details are
            shared with Quantum when you send the email. For questions about an
            enquiry or your information, contact{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
            {process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true" && (
              <span className="analytics-disclosure">
                We use Vercel Web Analytics to measure page visits and website
                interactions. Enquiry form contents are excluded from these
                analytics events.
              </span>
            )}
          </p>
        </div>
      </section>
    </>
  );
}
