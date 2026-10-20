import Image from "next/image";
import Link from "next/link";
export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${inverse ? "brand-inverse" : ""}`}
      aria-label="Quantum Software Solutions home"
    >
      <Image
        src={`/brand/quantum-logo${inverse ? "-light" : ""}.svg`}
        width={245}
        height={64}
        alt=""
        priority
      />
    </Link>
  );
}
