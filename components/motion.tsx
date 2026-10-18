"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
export function Motion() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let teardown = () => {};
    function setup() {
      teardown();
      if (preference.matches) {
        document
          .querySelectorAll(".will-reveal")
          .forEach((el) => el.classList.add("revealed"));
        return;
      }
      let routeAnimation: Animation | undefined;
      if (previousPath.current && previousPath.current !== pathname) {
        routeAnimation = document
          .querySelector("main")
          ?.animate([{ opacity: 0.55 }, { opacity: 1 }], {
            duration: 340,
            easing: "cubic-bezier(.2,.7,.2,1)",
          });
      }
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
      );
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (el.getBoundingClientRect().top < innerHeight - 40) {
          el.classList.add("revealed");
          return;
        }
        el.classList.add("will-reveal");
        if (el.parentElement?.hasAttribute("data-stagger"))
          el.style.setProperty(
            "--reveal-delay",
            `${Math.min(Array.from(el.parentElement.children).indexOf(el) * 75, 225)}ms`,
          );
        observer.observe(el);
      });
      const scenes = Array.from(
        document.querySelectorAll<HTMLElement>("[data-parallax]"),
      );
      let frame = 0;
      function draw() {
        frame = 0;
        const height = innerHeight;
        const travel = document.documentElement.scrollHeight - height;
        document.documentElement.style.setProperty(
          "--reading-progress",
          String(travel > 0 ? scrollY / travel : 0),
        );
        document
          .querySelector(".site-header")
          ?.classList.toggle("is-scrolled", scrollY > 40);
        if (innerWidth < 800) return;
        scenes.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < height) {
            const amount = Number(el.dataset.parallax || 0.08);
            const offset = Math.max(
              -55,
              Math.min(55, (height / 2 - rect.top - rect.height / 2) * amount),
            );
            el.style.setProperty("--parallax-y", `${offset}px`);
          }
        });
      }
      const tick = () => {
        if (!frame) frame = requestAnimationFrame(draw);
      };
      window.addEventListener("scroll", tick, { passive: true });
      window.addEventListener("resize", tick);
      draw();
      teardown = () => {
        routeAnimation?.cancel();
        observer.disconnect();
        cancelAnimationFrame(frame);
        window.removeEventListener("scroll", tick);
        window.removeEventListener("resize", tick);
        scenes.forEach((el) => el.style.removeProperty("--parallax-y"));
      };
    }
    setup();
    previousPath.current = pathname;
    preference.addEventListener("change", setup);
    return () => {
      teardown();
      preference.removeEventListener("change", setup);
    };
  }, [pathname]);
  return null;
}
