import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { solutions, solutionHref } from "@/lib/content";
import { SolutionPage } from "@/components/solution-page";
export const dynamicParams = false;
export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = solutions.find((s) => s.slug === slug);
  if (!s) return {};
  return {
    title:
      s.name === "School Management"
        ? "Classveew · School Management in Bahrain"
        : `${s.name} in Bahrain & the GCC`,
    description: s.description,
    alternates: { canonical: solutionHref(slug) },
    openGraph: {
      title: s.name,
      description: s.description,
      url: solutionHref(slug),
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = solutions.find((s) => s.slug === slug);
  if (!s) notFound();
  return <SolutionPage solution={s} />;
}
