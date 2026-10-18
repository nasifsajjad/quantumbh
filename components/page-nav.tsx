"use client";
import { useEffect, useRef, useState } from "react";
export function PageNav({ items }: { items: { id: string; label: string }[] }) {
  const navRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(items[0]?.id);
  const ids = items.map((i) => i.id).join("|");
  useEffect(() => {
    const sections = ids
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    let frame = 0;
    const root = document.documentElement;
    const measure = () => {
      const height = window.matchMedia("(min-width: 801px)").matches
        ? navRef.current?.getBoundingClientRect().height || 0
        : 0;
      root.style.setProperty("--section-nav-height", `${height}px`);
    };
    const observer = new ResizeObserver(measure);
    if (navRef.current) observer.observe(navRef.current);
    measure();
    const update = () => {
      frame = 0;
      const headerHeight =
        parseFloat(
          getComputedStyle(root).getPropertyValue("--header-height"),
        ) || 65;
      const threshold =
        (window.matchMedia("(min-width: 801px)").matches
          ? navRef.current?.getBoundingClientRect().bottom || headerHeight
          : headerHeight) + 32;
      let current = sections[0]?.id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold)
          current = section.id;
      }
      if (current) setActive(current);
    };
    const tick = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const resize = () => {
      measure();
      tick();
    };
    update();
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      root.style.removeProperty("--section-nav-height");
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", resize);
    };
  }, [ids]);
  return (
    <div className="page-nav-wrap" ref={navRef}>
      <nav className="page-nav container" aria-label="On this page">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? "location" : undefined}
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
