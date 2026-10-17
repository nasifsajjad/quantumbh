import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function NotFound() {
  return (
    <section className="not-found container">
      <span className="eyebrow">404 / A SMALL DETOUR</span>
      <h1>
        Let’s get you
        <br />
        <span>back on track.</span>
      </h1>
      <p>The page you’re looking for isn’t here.</p>
      <Link href="/" className="button button-dark">
        Back to Quantum
        <ArrowUpRight size={19} />
      </Link>
    </section>
  );
}
