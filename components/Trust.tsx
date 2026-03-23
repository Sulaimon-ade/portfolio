"use client";

import { useScrollReveal } from "./useScrollReveal";
import SectionHeader from "./SectionHeader";

const trustItems = [
  {
    icon: "⚙",
    title: "Scalable Architecture",
    desc: "Systems designed to grow with your product — clean APIs, structured databases, maintainable codebases.",
  },
  {
    icon: "🎯",
    title: "Real-World Products",
    desc: "I've built live, functioning platforms — not just tutorial projects. Real users, real problems solved.",
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    desc: "I move quickly without cutting corners. MVPs delivered on schedule, ready to iterate.",
  },
  {
    icon: "🎨",
    title: "Strong UI + Backend",
    desc: "End-to-end ownership — I handle everything from pixel-perfect UI to server logic and database design.",
  },
];

export default function Trust() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="trust" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader
        tag="Why work with me"
        title="Product-focused, not just code-focused"
        sub="I don't just write code — I think about the problems your users have, and build systems that solve them properly."
      />

      <div
        ref={ref}
        className="grid gap-px rounded-xl overflow-hidden"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          background: "var(--border)",
          border: "1px solid var(--border)",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {trustItems.map((item, i) => (
          <div
            key={i}
            className="p-8"
            style={{
              background: "var(--bg)",
              transitionDelay: `${i * 80}ms`,
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-base"
              style={{ background: "rgba(255,214,0,0.1)" }}
            >
              {item.icon}
            </div>
            <h3 className="font-syne font-bold text-base mb-2">{item.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
