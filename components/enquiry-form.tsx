"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { solutions } from "@/lib/content";
export function EnquiryForm({
  intent,
  solution,
}: {
  intent: string;
  solution: string;
}) {
  const [kind, setKind] = useState(
    intent === "demo" ? "Request a demo" : "General enquiry",
  );
  const [draft, setDraft] = useState<{
    subject: string;
    body: string;
    mailto: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `${kind} — ${data.get("solution") || "Quantum Software Solutions"}`;
    const body = `Hello Quantum team,\n\nI would like to ${kind === "Request a demo" ? "request a demo" : "discuss an enquiry"}.\n\nName: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\nSolution: ${data.get("solution") || "Please advise"}\n\n${data.get("message")}\n\nKind regards,\n${data.get("name")}`;
    setDraft({
      subject,
      body,
      mailto: `mailto:sales@quantumbh.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    });
    setTimeout(
      () =>
        document.getElementById("enquiry-ready")?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
          block: "center",
        }),
      50,
    );
  }
  return (
    <div className="enquiry-form-wrap">
      <div className="enquiry-tabs" role="group" aria-label="Enquiry type">
        {["Request a demo", "General enquiry"].map((k) => (
          <button
            key={k}
            type="button"
            aria-pressed={kind === k}
            onClick={() => {
              setKind(k);
              setDraft(null);
            }}
          >
            {k}
          </button>
        ))}
      </div>
      <form
        onSubmit={submit}
        onChange={() => {
          if (draft) setDraft(null);
        }}
      >
        <div className="form-row">
          <label htmlFor="name">
            Your name <span>*</span>
            <input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Full name"
              required
              maxLength={120}
            />
          </label>
          <label htmlFor="email">
            Work email <span>*</span>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              required
              maxLength={254}
            />
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="company">
            Company / organisation <span>*</span>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              placeholder="Your organisation"
              required
              maxLength={160}
            />
          </label>
          <label htmlFor="phone">
            Phone <small>(optional)</small>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+973"
              maxLength={40}
            />
          </label>
        </div>
        <label htmlFor="solution">
          I’m interested in <span>*</span>
          <select
            id="solution"
            name="solution"
            defaultValue={
              solutions.some((s) => s.name === solution) ? solution : ""
            }
            required
          >
            <option value="" disabled>
              Select a solution
            </option>
            {solutions.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Help me choose">Help me choose</option>
          </select>
        </label>
        <label htmlFor="message">
          How can we help? <span>*</span>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us what you’re looking for."
            rows={4}
            required
            maxLength={4000}
          />
        </label>
        <label className="consent-label">
          <input name="consent" type="checkbox" required />
          <span>
            I agree to share these details with Quantum.{" "}
            <a href="#privacy">Privacy</a>
          </span>
        </label>
        <button type="submit" className="button button-dark form-submit">
          Create email draft
          <ArrowUpRight size={19} />
        </button>
        <p className="form-delivery-note">
          <Mail size={15} />
          Review and send your enquiry through your email app.
        </p>
      </form>
      {draft && (
        <div className="enquiry-ready" id="enquiry-ready" role="status">
          <div className="enquiry-ready-title">
            <Check size={20} />
            <h3>Your enquiry is ready.</h3>
          </div>
          <p>
            Open your email app to review and send it to{" "}
            <strong>sales@quantumbh.net</strong>. Nothing has been sent yet.
          </p>
          <div className="enquiry-ready-actions">
            <a className="button button-dark" href={draft.mailto}>
              Open email draft
              <ArrowUpRight size={17} />
            </a>
            <button
              type="button"
              className="copy-enquiry"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(
                    `To: sales@quantumbh.net\nSubject: ${draft.subject}\n\n${draft.body}`,
                  );
                  setCopied(true);
                } catch {
                  setCopied(false);
                  document.getElementById("draft-content")?.focus();
                }
              }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}{" "}
              {copied ? "Copied" : "Copy enquiry"}
            </button>
          </div>
          <details className="draft-details">
            <summary>View enquiry text</summary>
            <textarea
              id="draft-content"
              readOnly
              aria-label="Your prepared enquiry"
              value={`Subject: ${draft.subject}\n\n${draft.body}`}
              rows={12}
            />
          </details>
        </div>
      )}
    </div>
  );
}
