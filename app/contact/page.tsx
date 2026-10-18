import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { Heading } from "@/components/heading";
import { company } from "@/lib/content";
export const metadata: Metadata = {
  title: "Contact & Request a Demo",
  description:
    "Contact Quantum Software Solutions in Bahrain. Request a software demo at sales@quantumbh.net or +973 3216 6628.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact Quantum" },
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
            <span className="eyebrow">Contact Quantum</span>
            <Heading lines={["Let’s talk."]} />
            <p className="contact-lead">
              A demo, a question or something you want to build. We’d like to
              hear it.
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
            <address className="contact-address">
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
              <ArrowUpRight size={17} />
            </a>
          </div>
          <EnquiryForm
            key={`${params.intent}:${params.solution}`}
            intent={params.intent || ""}
            solution={params.solution || ""}
          />
        </div>
      </section>
      <section id="privacy" className="enquiry-privacy">
        <div className="container privacy-grid">
          <h2>Privacy & enquiries</h2>
          <p>
            The form prepares an email draft on your device. Your details are
            shared with Quantum when you send it through your email app. For
            questions, contact{" "}
            <a href="mailto:sales@quantumbh.net">sales@quantumbh.net</a>.
          </p>
        </div>
      </section>
    </>
  );
}
