"use client";

import { useScrollReveal } from "./useScrollReveal";
import SectionHeader from "./SectionHeader";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Tailwind CSS",
  "REST APIs",
  "TypeScript",
  "Git",
  "Vercel",
];

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div
        ref={ref}
        className="grid gap-16 items-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {/* Avatar */}
        <div
          className="rounded-2xl flex items-center justify-center font-syne font-black select-none"
          style={{
            aspectRatio: "1",
            background: "var(--bg3)",
            border: "1px solid var(--border)",
            fontSize: "clamp(3rem, 5vw, 5rem)",
            color: "rgba(255,214,0,0.12)",
            letterSpacing: "-4px",
            maxWidth: "420px",
          }}
        >
          <img src="/GidadoFatima.png" alt="image" /> 
        </div>

        {/* Text */}
        <div>
          <SectionHeader
            tag="About me"
            title="The developer behind the work"
          />
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "var(--muted)" }}
          >
            I&apos;m Suleiman Adeniyi — a full-stack developer,
            focused on building real-world digital products. I help startups and
            businesses turn ideas into scalable applications that actually work.
          </p>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "var(--muted)" }}
          >
            I care about clean architecture, fast delivery, and products that
            users genuinely enjoy. I&apos;ve worked across the full stack — from
            database schema design to polished front-end UI — and I bring that
            end-to-end perspective to every project.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-bold px-3 py-1.5 rounded-md font-syne"
                style={{
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  color: "#ccc",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
