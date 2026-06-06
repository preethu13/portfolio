import { useTheme } from "./ThemeProvider";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(95%,900px)] -translate-x-1/2">
      <nav className="flex items-center justify-between gap-4 rounded-full ink-border bg-[var(--card)] px-5 py-2.5 shadow-comic">
        <a href="#top" data-cursor="home" className="font-display text-xl">
          PJD
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-cursor="go"
                className="rounded-full px-3 py-1.5 text-sm font-semibold transition hover:bg-[var(--sun)] hover:text-[var(--ink)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggle}
          data-cursor={theme === "light" ? "night" : "day"}
          aria-label="Toggle theme"
          className="grid h-9 w-9 place-items-center rounded-full ink-border bg-[var(--accent)] text-lg shadow-comic-sm transition active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}
