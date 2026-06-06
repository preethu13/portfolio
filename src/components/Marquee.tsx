export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y-[3px] border-[var(--ink)] bg-[var(--primary)] py-3 text-[var(--primary-foreground)]">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-5">
        {doubled.map((t, i) => (
          <span key={i} className="font-display text-2xl uppercase tracking-wide">
            {t} <span className="mx-3">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
