"use client";
import { track } from "@vercel/analytics";
export type MeasurementEvent =
  | "product_view"
  | "demo_interest"
  | "service_interest"
  | "preview_tab"
  | "preview_expand"
  | "enquiry_draft_prepared"
  | "enquiry_email_opened"
  | "enquiry_copied";
export function measure(
  event: MeasurementEvent,
  properties: Record<string, string | number> = {},
) {
  // Only product names and UI actions are allowed here. Never include form contents or contact details.
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("quantum:measurement", { detail: { event, properties } }),
  );
  if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true")
    track(event, properties);
}
