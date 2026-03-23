"use client";

import { useScrollReveal } from "./useScrollReveal";

const WHATSAPP_NUMBER = "2347040082577";
const EMAIL = "iservicesintegratedltd@gmail.com";

export default function CTA() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-6 py-28 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <p className="text-xs font-bold uppercase mb-5 inline-block" style={{ color: "var(--yellow)", letterSpacing: "2.5px" }}>
          Let&apos;s work together
        </p>
        <h2
          className="font-syne font-extrabold leading-tight tracking-tight mb-5"
          style={{ fontSize: "clamp(2rem, 6vw, 3.8rem)", letterSpacing: "-1.5px" }}
        >
          Got an idea or project?{" "}
          <br className="hidden sm:block" />
          <em className="not-italic" style={{ color: "var(--yellow)" }}>Let&apos;s build it.</em>
        </h2>
        <p className="text-base mb-10" style={{ color: "var(--muted)" }}>
          Reach out on WhatsApp — I usually respond within a few hours.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-syne font-bold px-8 py-3.5 rounded-lg text-sm hover:opacity-85 transition-opacity"
            style={{ background: "#25D366", color: "#fff" }}
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="btn-ghost-hover inline-flex items-center gap-2.5 font-medium px-8 py-3.5 rounded-lg text-sm"
            style={{ border: "1px solid var(--border)", color: "var(--text)", background: "none" }}
          >
            ✉ Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
