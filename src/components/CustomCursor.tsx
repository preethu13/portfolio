import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    let rx = 0, ry = 0, dx = 0, dy = 0;
    let raf = 0;
    const move = (e: MouseEvent) => {
      dx = e.clientX; dy = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${dx - 6}px, ${dy - 6}px, 0)`;
    };
    const loop = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 22}px, ${ry - 22}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const over = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      if (t) { setHover(true); setLabel(t.dataset.cursor || null); }
      else { setHover(false); setLabel(null); }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 rounded-full bg-[var(--ink)] mix-blend-difference"
      />
      <div
        ref={ring}
        className={`pointer-events-none fixed left-0 top-0 z-[100] flex h-11 w-11 items-center justify-center rounded-full ink-border bg-[var(--sun)] transition-[width,height,background] duration-200 ${
          hover ? "h-16 w-16 bg-[var(--pop)]" : ""
        }`}
      >
        {label && (
          <span className="text-[10px] font-bold uppercase tracking-wide text-[var(--ink)]">{label}</span>
        )}
      </div>
    </>
  );
}
