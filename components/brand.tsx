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
        src="/images/quantum-mark.png"
        alt=""
        width={48}
        height={48}
        priority
      />
      <span>
        Quantum<span className="brand-descriptor">SOFTWARE SOLUTIONS</span>
      </span>
    </Link>
  );
}
