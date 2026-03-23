"use client";

import { useScrollReveal } from "./useScrollReveal";
import SectionHeader from "./SectionHeader";

const services = [
  { num: "01", title: "Web Development", desc: "Business websites, landing pages, and web apps. Fast, responsive, and built to convert visitors into customers." },
  { num: "02", title: "MVP Development", desc: "Got a startup idea? I'll build your minimum viable product quickly so you can test, validate, and ship." },
  { num: "03", title: "Full-Stack Systems", desc: "REST APIs, admin dashboards, database design, authentication — the complete backend stack, built to scale." },
  { num: "04", title: "UI Implementation", desc: "Have a design but need it built? I'll turn your Figma or concept into clean, pixel-perfect code." },
];

export default function Services() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader tag="What I build" title="Services" sub="Whether you need a clean landing page or a full product — I can handle it." />
      <div
        ref={ref}
        className="grid gap-5"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {services.map((s, i) => (
          <div
            key={s.num}
            className="service-card-hover rounded-xl p-7 flex flex-col"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              transitionDelay: `${i * 60}ms`,
            }}
          >
            <span className="font-syne font-bold text-xs mb-4" style={{ color: "var(--yellow)", letterSpacing: "2px" }}>{s.num}</span>
            <h3 className="font-syne font-bold text-base mb-2">{s.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
