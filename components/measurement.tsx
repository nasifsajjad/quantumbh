"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { measure } from "@/lib/measurement";
export function Measurement() {
  const path = usePathname();
  useEffect(() => {
    if (path.startsWith("/solutions/"))
      measure("product_view", { solution: path.split("/").pop() || "" });
    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLAnchorElement>(
        'a[href^="/contact"]',
      );
      if (!target) return;
      const url = new URL(target.href);
      measure(
        url.searchParams.get("intent") === "demo"
          ? "demo_interest"
          : "service_interest",
        {
          solution: url.searchParams.get("solution") || "Not selected",
          from: path,
        },
      );
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, [path]);
  return process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true" ? (
    <Analytics
      beforeSend={(event) => {
        const url = new URL(event.url);
        url.search = "";
        return { ...event, url: url.toString() };
      }}
    />
  ) : null;
}
