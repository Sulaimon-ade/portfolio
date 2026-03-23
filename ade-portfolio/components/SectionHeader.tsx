interface SectionHeaderProps {
  tag: string;
  title: string;
  sub?: string;
}

export default function SectionHeader({ tag, title, sub }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p
        className="text-xs font-bold uppercase tracking-widest mb-3"
        style={{ color: "var(--yellow)", letterSpacing: "2.5px" }}
      >
        {tag}
      </p>
      <h2
        className="font-syne font-extrabold tracking-tight mb-4"
        style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.5px" }}
      >
        {title}
      </h2>
      {sub && (
        <p className="text-base leading-relaxed" style={{ color: "var(--muted)", maxWidth: "50ch" }}>
          {sub}
        </p>
      )}
    </div>
  );
}
