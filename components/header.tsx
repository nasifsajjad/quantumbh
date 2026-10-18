"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Brand } from "./brand";
import { demoHref, solutionHref, solutions } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const path = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const solutionRef = useRef<HTMLButtonElement>(null);
  const mobileRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
    setMobile(false);
  }, [path]);
  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && (open || mobile)) {
        setOpen(false);
        setMobile(false);
        (mobile ? mobileRef : solutionRef).current?.focus();
      }
    };
    const outside = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("click", outside);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("click", outside);
    };
  }, [mobile, open]);
  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    const surfaces = document.querySelectorAll<HTMLElement>("main, footer");
    surfaces.forEach((el) => {
      el.inert = mobile;
    });
    const trap = (e: KeyboardEvent) => {
      if (!mobile || e.key !== "Tab") return;
      const focusable = Array.from(
        headerRef.current?.querySelectorAll<HTMLElement>("a[href],button") ||
          [],
      ).filter((el) => el.offsetParent !== null);
      const first = focusable[0],
        last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      }
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", trap);
    return () => {
      document.body.style.overflow = "";
      surfaces.forEach((el) => {
        el.inert = false;
      });
      document.removeEventListener("keydown", trap);
    };
  }, [mobile]);
  return (
    <>
      <header
        className={`site-header ${open ? "dropdown-active" : ""}`}
        ref={headerRef}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) {
            setOpen(false);
            setMobile(false);
          }
        }}
        onBlur={(e) => {
          if (
            e.relatedTarget &&
            !e.currentTarget.contains(e.relatedTarget as Node)
          )
            setOpen(false);
        }}
      >
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/" aria-current={path === "/" ? "page" : undefined}>
              Home
            </Link>
            <Link
              href="/about"
              aria-current={path === "/about" ? "page" : undefined}
            >
              About
            </Link>
            <button
              ref={solutionRef}
              className={`nav-solutions ${open ? "is-open" : ""}`}
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="solutions-menu"
            >
              Solutions <ChevronDown size={15} />
            </button>
            <Link
              href="/contact"
              aria-current={path === "/contact" ? "page" : undefined}
            >
              Contact
            </Link>
          </nav>
          <div className="header-actions">
            <Link href={demoHref()} className="button button-gold header-cta">
              Request a demo <ArrowUpRight size={17} />
            </Link>
          </div>
          <button
            className="mobile-toggle"
            ref={mobileRef}
            onClick={() => setMobile(!mobile)}
            aria-label={mobile ? "Close navigation" : "Open navigation"}
            aria-expanded={mobile}
            aria-controls="mobile-navigation"
          >
            {mobile ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="mega-menu" id="solutions-menu">
            <div className="mega-intro">
              <span className="eyebrow">Solutions</span>
              <p>Software for your working day.</p>
              <Link
                href="/#solutions"
                onClick={() => setOpen(false)}
                className="text-link"
              >
                Explore all solutions <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="mega-group">
              <span className="eyebrow">Business systems</span>
              {solutions
                .filter((s) => s.category === "systems")
                .map((s) => (
                  <Link key={s.slug} href={solutionHref(s.slug)}>
                    <span>{s.name}</span>
                    <ArrowUpRight size={17} />
                  </Link>
                ))}
            </div>
            <div className="mega-group">
              <span className="eyebrow">Development & AI</span>
              {solutions
                .filter((s) => s.category === "services")
                .map((s) => (
                  <Link key={s.slug} href={solutionHref(s.slug)}>
                    <span>{s.name}</span>
                    <ArrowUpRight size={17} />
                  </Link>
                ))}
              <p className="mega-note">
                Not sure where to start?
                <br />
                <Link href="/contact">Talk to our team.</Link>
              </p>
            </div>
          </div>
        )}
        {mobile && (
          <nav
            className="mobile-navigation"
            id="mobile-navigation"
            aria-label="Mobile navigation"
          >
            <Link onClick={() => setMobile(false)} href="/">
              Home
            </Link>
            <Link href="/about" onClick={() => setMobile(false)}>
              About Quantum
            </Link>
            <span className="eyebrow">SOLUTIONS</span>
            {solutions.map((s) => (
              <Link
                key={s.slug}
                className="mobile-solution"
                href={solutionHref(s.slug)}
                onClick={() => setMobile(false)}
              >
                {s.name}
                <ArrowUpRight size={17} />
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobile(false)}>
              Contact
            </Link>
            <Link
              className="button button-gold"
              href={demoHref()}
              onClick={() => setMobile(false)}
            >
              Request a demo
              <ArrowUpRight size={18} />
            </Link>
            <span className="mobile-location">Bahrain based. GCC focused.</span>
          </nav>
        )}
      </header>
      {open && (
        <div
          className="menu-scrim"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
