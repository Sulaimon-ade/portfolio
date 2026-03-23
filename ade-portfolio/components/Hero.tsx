"use client";

import { useEffect, useRef } from "react";

const stats = [
  { num: "4+", label: "Products shipped" },
  { num: "3+", label: "Client websites delivered" },
  { num: "Full-stack", label: "React · Node.js · PostgreSQL" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-16 max-w-6xl mx-auto">
      {/* Availability tag */}
      <div
        className="inline-flex items-center gap-2 mb-8 w-fit px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
        style={{ background: "rgba(255,214,0,0.08)", border: "1px solid rgba(255,214,0,0.2)", color: "var(--yellow)" }}
      >
        <span className="pulse-dot w-2 h-2 rounded-full" style={{ background: "var(--yellow)" }} />
        Available for new projects
      </div>

      {/* Headline */}
      <h1
        className="font-syne font-extrabold leading-[1.07] tracking-tight mb-6"
        style={{ fontSize: "clamp(2.6rem, 7vw, 5.2rem)", maxWidth: "14ch" }}
      >
        I Build Digital Products That Solve{" "}
        <em className="not-italic" style={{ color: "var(--yellow)" }}>Real Problems</em>
      </h1>

      {/* Sub */}
      <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--muted)", maxWidth: "42ch" }}>
        Full-stack developer building scalable web and mobile apps for startups and businesses across Nigeria and beyond.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => scrollTo("#projects")}
          className="font-syne font-bold px-8 py-3.5 rounded-lg text-base hover:opacity-85 transition-opacity cursor-pointer"
          style={{ background: "var(--yellow)", color: "#000", border: "none" }}
        >
          View My Work ↓
        </button>
        <button
          onClick={() => scrollTo("#contact")}
          className="btn-ghost-hover font-medium px-8 py-3.5 rounded-lg text-base cursor-pointer"
          style={{ background: "none", border: "1px solid var(--border)", color: "var(--text)" }}
        >
          Start a Project →
        </button>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-x-12 gap-y-6 mt-16 pt-12" style={{ borderTop: "1px solid var(--border)" }}>
        {stats.map((s, i) => (
          <div key={i}>
            <div className="font-syne font-extrabold text-3xl mb-1" style={{ color: "var(--yellow)" }}>{s.num}</div>
            <div className="text-xs" style={{ color: "var(--muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
