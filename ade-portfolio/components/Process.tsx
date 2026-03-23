"use client";

import { useScrollReveal } from "./useScrollReveal";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    num: "01",
    title: "Understand the Idea",
    desc: "We talk. I ask the right questions to understand your users, business model, and what success looks like.",
  },
  {
    num: "02",
    title: "Plan & Design",
    desc: "System design, architecture decisions, UI wireframes — so we both know what's being built before a line of code is written.",
  },
  {
    num: "03",
    title: "Build Fast",
    desc: "Development in focused sprints. Regular updates so you're never in the dark about progress.",
  },
  {
    num: "04",
    title: "Launch & Iterate",
    desc: "Ship to production. Gather feedback. Improve. Real products don't stop at v1.",
  },
];

export default function Process() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="process" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader
        tag="How I work"
        title="My Process"
        sub="No guesswork. No wasted time. Just a clear path from idea to launch."
      />

      <div
        ref={ref}
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {steps.map((step, i) => (
          <div key={step.num} className="relative p-8 pl-0">
            {/* Connector line */}
            {i < steps.length - 1 && (
              <span
                className="hidden lg:block absolute right-0 top-9 text-lg"
                style={{ color: "var(--border)" }}
              >
                →
              </span>
            )}
            {/* Big number */}
            <div
              className="font-syne font-extrabold leading-none mb-4"
              style={{
                fontSize: "3.5rem",
                color: "rgba(255,214,0,0.1)",
                letterSpacing: "-2px",
              }}
            >
              {step.num}
            </div>
            <h3 className="font-syne font-bold text-sm mb-2">{step.title}</h3>
            <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
