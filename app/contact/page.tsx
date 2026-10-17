import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { company } from "@/lib/content";
export const metadata: Metadata = {
  title: "Contact & Request a Demo",
  description:
    "Talk to Quantum Software Solutions in Bahrain. Request a software demo or contact sales at sales@quantumbh.net or +973 3216 6628.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Let’s talk · Quantum Software Solutions",
  },
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
            <span className="eyebrow">LET’S TALK</span>
            <h1>
              Your next step.
              <br />
              <span>Made simpler.</span>
            </h1>
            <p className="contact-lead">
              A question, a demo, or a business need you want to talk through.
              We’re ready to listen.
            </p>
            <div className="contact-direct">
              <a href={`mailto:${company.email}`}>
                <Mail size={20} />
                <span>
                  <small>EMAIL US</small>
                  {company.email}
                </span>
                <ArrowUpRight size={19} />
              </a>
              <a href={`tel:${company.phoneHref}`}>
                <Phone size={20} />
                <span>
                  <small>CALL US</small>
                  {company.phone}
                </span>
                <ArrowUpRight size={19} />
              </a>
            </div>
            <div className="contact-office">
              <MapPin size={20} />
              <div>
                <span className="eyebrow">BASED IN BAHRAIN</span>
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
                  View area on Google Maps
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
          <EnquiryForm
            intent={params.intent || ""}
            solution={params.solution || ""}
          />
        </div>
      </section>
      <section id="privacy" className="enquiry-privacy">
        <div className="container privacy-grid">
          <div>
            <span className="eyebrow">PRIVACY & ENQUIRIES</span>
            <h2>
              A clear conversation
              <br />
              starts with trust.
            </h2>
          </div>
          <div>
            <p>
              This form prepares an email enquiry on your device. The details
              are not submitted to Quantum until you send the email through your
              email app.
            </p>
            <p>
              Share only the information needed to discuss your requirements.
              Please do not include passwords, patient records, employee
              records, or other confidential business data.
            </p>
            <p>
              For questions about an enquiry or the information you share,
              contact{" "}
              <a href="mailto:sales@quantumbh.net">sales@quantumbh.net</a>.
            </p>
            <span className="privacy-company">
              Quantum Software Solutions WLL · CR {company.cr}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
