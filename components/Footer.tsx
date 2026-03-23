const socialLinks = [
  { label: "GitHub", href: "https://github.com/sulaimon-ade" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adeniyi-okunoye-5717882ba/" },
  { label: "Twitter", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 py-8 max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4" style={{ borderTop: "1px solid var(--border)" }}>
      <p className="text-xs" style={{ color: "var(--muted)" }}>
        © {year} <span style={{ color: "var(--yellow)" }}>Suleiman Adeniyi</span>. Built with intention.
      </p>
      <div className="flex gap-6">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="footer-link-hover text-xs" style={{ color: "var(--muted)" }}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
