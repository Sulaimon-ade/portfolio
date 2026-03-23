"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.92)" : "rgba(10,10,10,0.6)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-syne font-black text-lg tracking-tight">
          Suleiman<span style={{ color: "var(--yellow)" }}>.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="nav-link-hover text-sm font-medium cursor-pointer"
                style={{ color: "var(--muted)", background: "none", border: "none" }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav("#contact")}
          className="hidden md:inline-block font-syne font-bold text-sm px-5 py-2.5 rounded-lg hover:opacity-85 transition-opacity cursor-pointer"
          style={{ background: "var(--yellow)", color: "#000", border: "none" }}
        >
          Start a Project
        </button>

        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none" }}
        >
          <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: "var(--text)", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
          <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: "var(--text)", opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: "var(--text)", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
        </button>
      </div>

      <div className="md:hidden overflow-hidden transition-all duration-300" style={{ maxHeight: menuOpen ? "300px" : "0", borderTop: menuOpen ? "1px solid var(--border)" : "none" }}>
        <div className="px-6 py-4 flex flex-col gap-4" style={{ background: "var(--bg2)" }}>
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => handleNav(link.href)} className="text-left text-sm font-medium cursor-pointer nav-link-hover" style={{ color: "var(--muted)", background: "none", border: "none" }}>
              {link.label}
            </button>
          ))}
          <button onClick={() => handleNav("#contact")} className="font-syne font-bold text-sm px-4 py-2.5 rounded-lg w-full text-center cursor-pointer mt-2 hover:opacity-85 transition-opacity" style={{ background: "var(--yellow)", color: "#000", border: "none" }}>
            Start a Project
          </button>
        </div>
      </div>
    </nav>
  );
}
