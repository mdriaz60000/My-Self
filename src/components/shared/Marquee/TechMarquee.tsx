const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Tailwind CSS",
  "Express",
  "NestJS",
  "Docker",
  "AWS",
];

export default function TechMarquee() {
  const row = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-paper/10 bg-[#100e0c] py-4">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-10 pr-10">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 text-[11px] uppercase tracking-[0.35em] text-paper/35"
          >
            {item}
            <span className="text-gold/70">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
