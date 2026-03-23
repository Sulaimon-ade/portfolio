"use client";

import { useScrollReveal } from "./useScrollReveal";
import SectionHeader from "./SectionHeader";

interface Project {
  name: string;
  desc: string;
  features: string[];
  tech: string[];
  isLive?: boolean;
  isFeatured?: boolean;
  demoUrl?: string;
  projectUrl?: string;
  badge?: string;
}

const projects: Project[] = [
  {
    name: "ToolsNG",
    desc: "A web platform providing essential business tools tailored for Nigerian users — tax calculators, invoice generators, and financial utilities. Built because most financial tools don't account for Nigerian tax law, pricing, or context.",
    features: ["Tax Calculators", "Invoice Generation", "Financial Utilities", "Nigerian market-focused"],
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    isLive: true,
    isFeatured: true,
    demoUrl: "https://toolsng.com",
    projectUrl: "https://github.com/sulaimon-ade/toolsng",
  },
  {
    name: "iMarket",
    desc: "A virtual marketplace letting users explore physical Nigerian markets, compare prices, and negotiate with sellers — all before they leave the house.",
    features: ["Virtual Market Browse", "Price Comparison", "Seller Negotiation"],
    tech: ["React", "Node.js", "PostgreSQL"],
    badge: "Marketplace",
    projectUrl: "https://github.com/sulaimon-ade/imarket",
  },
  {
    name: "iFeel",
    desc: "A telemedicine platform enabling online consultations, diagnostic review, and health record management — bringing accessible healthcare to more people.",
    features: ["Online Consultations", "Diagnostics Review", "Health Records"],
    tech: ["React", "Express", "PostgreSQL"],
    badge: "Health Tech",
    projectUrl: "https://github.com/sulaimon-ade/ifeel",
  },
  {
    name: "Invoice App",
    desc: "A smart invoice generator for businesses — clean professional previews, customizable templates, and exportable PDFs. Built for freelancers and small businesses.",
    features: ["Invoice Generator", "PDF Export", "Professional Templates"],
    tech: ["React", "Node.js", "Tailwind CSS"],
    badge: "Business Tool",
    projectUrl: "https://millyinvoice.vercel.app/",
  },
];

function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const { ref, visible } = useScrollReveal();
  const hoverClass = project.isFeatured ? "featured-hover" : "hover-lift card-hover";

  return (
    <div
      ref={ref}
      className={`${hoverClass} rounded-2xl p-8 flex flex-col`}
      style={{
        background: project.isFeatured
          ? "linear-gradient(135deg, rgba(255,214,0,0.04) 0%, var(--card) 60%)"
          : "var(--card)",
        border: project.isFeatured
          ? "1px solid rgba(255,214,0,0.25)"
          : "1px solid var(--border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
        <h3 className="font-syne font-extrabold text-xl">{project.name}</h3>
        <div className="flex gap-2 flex-wrap">
          {project.isLive && (
            <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "rgba(0,200,100,0.1)", color: "#00c864", border: "1px solid rgba(0,200,100,0.2)" }}>
              ● Live
            </span>
          )}
          {project.isFeatured && (
            <span className="text-xs font-bold px-3 py-1 rounded-full font-syne" style={{ background: "rgba(255,214,0,0.12)", color: "var(--yellow)", border: "1px solid rgba(255,214,0,0.2)" }}>
              ★ Featured
            </span>
          )}
          {project.badge && !project.isFeatured && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#1c1c1c", color: "#888", border: "1px solid #242424" }}>
              {project.badge}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>{project.desc}</p>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.features.map((f) => (
          <span key={f} className="text-xs px-3 py-1 rounded-md" style={{ background: "#1c1c1c", border: "1px solid #242424", color: "#aaa" }}>
            {f}
          </span>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-7">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-bold px-2.5 py-1 rounded font-syne" style={{ background: "rgba(255,214,0,0.08)", border: "1px solid rgba(255,214,0,0.12)", color: "var(--yellow)" }}>
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-auto flex-wrap">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-syne font-bold text-xs px-5 py-2.5 rounded-lg hover:opacity-85 transition-opacity"
            style={{ background: "var(--yellow)", color: "#000" }}
          >
            Live Demo ↗
          </a>
        )}
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-hover inline-flex items-center gap-1.5 font-syne font-semibold text-xs px-5 py-2.5 rounded-lg"
            style={{ border: "1px solid var(--border)", color: "var(--text)", background: "none" }}
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}

function OtherWorkCard() {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className="hover-lift card-hover rounded-2xl p-8 flex flex-col"
      style={{
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: "opacity 0.6s ease 200ms, transform 0.6s ease 200ms",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-base" style={{ background: "rgba(255,214,0,0.1)" }}>
          📁
        </div>
        <h3 className="font-syne font-bold text-base">Client Websites & More</h3>
      </div>
      <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
        I&apos;ve also built static and dynamic websites for clients — landing pages,
        business sites, and custom web solutions. More work lives on my GitHub,
        including open-source tools and experiments.
      </p>
      <div className="flex gap-3 mt-auto flex-wrap">
        <a
          href="https://github.com/sulaimon-ade"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost-hover inline-flex items-center gap-1.5 font-syne font-semibold text-xs px-5 py-2.5 rounded-lg"
          style={{ border: "1px solid var(--border)", color: "var(--text)", background: "none" }}
        >
          GitHub ↗
        </a>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
          className="btn-ghost-hover inline-flex items-center gap-1.5 font-syne font-semibold text-xs px-5 py-2.5 rounded-lg"
          style={{ border: "1px solid var(--border)", color: "var(--text)", background: "none" }}
        >
          Ask About Client Work →
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeader tag="Featured work" title="Products I've Built" sub="Each project was built to solve a real problem — not to pad a portfolio." />

      {/* Featured */}
      <ProjectCard project={featured} />

      {/* 2-col grid */}
      <div className="grid gap-6 mt-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {rest.map((project, i) => (
          <ProjectCard key={project.name} project={project} delay={i * 80} />
        ))}
        <OtherWorkCard />
      </div>
    </section>
  );
}
