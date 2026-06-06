import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/Nav";
import { AvatarFollow } from "@/components/AvatarFollow";
import { Marquee } from "@/components/Marquee";
import { Reveal, SectionTitle, TiltCard } from "@/components/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Preetham JDS — AI / ML Engineer & Data Storyteller" },
      {
        name: "description",
        content:
          "Portfolio of Preetham Jostan D Souza — AIML undergrad building agentic AI, ML systems and data dashboards.",
      },
      { property: "og:title", content: "Preetham JDS — AI / ML Engineer" },
      { property: "og:description", content: "Agentic AI, ML & data analytics projects by an AIML student." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Nav />
      <main id="top" className="relative overflow-x-clip">
        <Hero />
        <Marquee items={["Data Analysis", "Machine Learning", "Agentic AI", "LLMs", "AI Automation", "AIML"]} />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-6 pb-16 pt-32 md:grid-cols-2 md:pt-36">
      <div className="relative">
        <div className="speech-bubble mb-6 inline-block px-4 py-2 text-sm font-semibold">
          Hey, I'm Preetham 👋
        </div>
        <h1 className="font-display text-6xl leading-[0.95] md:text-8xl">
          I teach <span className="text-[var(--primary)]">machines</span> to{" "}
          <span className="relative inline-block">
            <span className="relative z-10">think.</span>
            <span className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-[var(--sun)]" />
          </span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-[var(--muted-foreground)]">
          B.E. in AI &amp; ML. I turn messy data into dashboards humans actually read. My expertise centers on end-to-end{" "}
          <strong className="text-[var(--foreground)]">Data Analysis</strong>, backed by a strong foundation in training{" "}
          <strong className="text-[var(--foreground)]">ML models</strong> and deploying autonomous{" "}
          <strong className="text-[var(--foreground)]">Agentic AI systems</strong> to automate complex workflows.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            data-cursor="peek"
            className="rounded-full ink-border bg-[var(--primary)] px-6 py-3 font-bold text-[var(--primary-foreground)] shadow-comic transition active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            See my work →
          </a>
          <a
            href="#contact"
            data-cursor="say hi"
            className="rounded-full ink-border bg-[var(--card)] px-6 py-3 font-bold shadow-comic-sm transition hover:bg-[var(--sun)]"
          >
            Let's talk
          </a>
        </div>

        <div className="mt-10 flex items-center gap-6 text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
          <span>B.E - AIML</span>
          <span className="h-3 w-px bg-current" />
          <span>3+ AI Projects</span>
          <span className="h-3 w-px bg-current" />
          <span>Open to roles</span>
        </div>
      </div>

      <div className="relative">
        <AvatarFollow />
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle kicker="// about" title="The human behind the agents" />
      <div className="grid gap-8 md:grid-cols-3">
        <Reveal>
          <div className="rounded-2xl ink-border bg-[var(--card)] p-6 shadow-comic">
            <div className="mb-3 text-4xl">🎓</div>
            <h3 className="font-display text-2xl">Student</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              B.E. in AIML at St Joseph Engineering College, Mangaluru. Class of 2027.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl ink-border bg-[var(--sun)] p-6 text-[var(--ink)] shadow-comic">
            <div className="mb-3 text-4xl">🤖</div>
            <h3 className="font-display text-2xl">Builder</h3>
            <p className="mt-2 text-sm">
              Passionate about blending Data Analytics, Machine Learning, LLMs, and Agentic AI to create intelligent products that solve real-world problems.
            </p>
          </div>
        </Reveal>
        <Reveal delay={240}>
          <div className="rounded-2xl ink-border bg-[var(--card)] p-6 shadow-comic">
            <div className="mb-3 text-4xl">📊</div>
            <h3 className="font-display text-2xl">Analyst</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Interned as a Data Analyst at Codec Technologies — Power BI dashboards, SQL queries, actionable insights.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SKILLS ---------- */
const skillGroups = [
  {
    title: "Roles I'm hunting",
    color: "var(--pop)",
    items: ["Data Analyst", "AI Engineer", "ML Engineer", "Agentic AI Developer"],
  },
  {
    title: "Languages",
    color: "var(--accent)",
    items: ["Python", "SQL", "Java", "C++"],
  },
  {
    title: "AI / ML",
    color: "var(--leaf)",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "LangChain", "LangGraph", "RAG", "LLMs"],
  },
  {
    title: "Data & BI",
    color: "var(--sun)",
    items: ["Pandas", "NumPy", "Matplotlib", "Power BI", "Tableau", "Excel", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "Tools",
    color: "var(--card)",
    items: ["Git", "GitHub", "FastAPI", "VS Code", "Jupyter", "MATLAB", "n8n"],
  },
];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle kicker="// toolbox" title="Stuff I Use to Build Things" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 80}>
            <TiltCard className="h-full rounded-2xl ink-border p-5 shadow-comic" >
              <div style={{ background: g.color }} className="-m-5 mb-4 rounded-t-xl border-b-[3px] border-[var(--ink)] px-5 py-3">
                <h3 className="font-display text-xl text-[var(--ink)]">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    data-cursor="✦"
                    className="rounded-full ink-border bg-[var(--card)] px-3 py-1 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-[var(--sun)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- PROJECTS ---------- */
const projects = [
  {
    title: "Agentic RAG for Insurance Assessment",
    tag: "Agentic AI",
    stack: ["Python", "LangChain", "FastAPI", "RAG", "PostgreSQL", "LLMs"],
    blurb:
      "An assessment platform that grills insurance agents with context-aware questions and auto-scores answers using retrieval-augmented agents over policy documents.",
    color: "var(--sun)",
    emoji: "🧠",
  },
  {
    title: "Missing Person Detection",
    tag: "Computer Vision",
    stack: ["FaceNet", "ArcFace", "RetinaFace", "OpenCV", "FastAPI"],
    blurb:
      "Deep-learning face matching across uploaded photos and CCTV footage. Cut manual verification time with an automated reporting pipeline.",
    color: "var(--accent)",
    emoji: "🔍",
  },
  {
    title: "AI Receptionist for Clinics",
    tag: "Voice AI · Freelance",
    stack: ["Whisper", "LLMs", "Twilio", "n8n", "PostgreSQL"],
    blurb:
      "A voice agent that picks up calls, books appointments and answers patient questions — built with speech-to-text, conversational AI and DB-driven workflows.",
    color: "var(--pop)",
    emoji: "📞",
  },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle kicker="// case files" title="What I've Built?" />
      <div className="flex flex-col gap-8">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <TiltCard className="rounded-3xl ink-border bg-[var(--card)] p-6 shadow-comic-lg md:p-8">
              <div className="grid items-start gap-6 md:grid-cols-[160px_1fr]">
                <div
                  style={{ background: p.color }}
                  className="grid aspect-square w-full place-items-center rounded-2xl ink-border text-6xl shadow-comic-sm md:w-40"
                >
                  <span className="animate-float">{p.emoji}</span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full ink-border bg-[var(--background)] px-2.5 py-0.5 text-xs font-bold uppercase">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-3xl md:text-4xl">{p.title}</h3>
                  <p className="mt-3 max-w-2xl text-[var(--muted-foreground)]">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-md bg-[var(--muted)] px-2 py-0.5 font-mono text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- TYPEWRITER ---------- */
function Typewriter({ before, highlight, speed = 60 }: { before: string; highlight: string; speed?: number }) {
  const fullText = before + highlight;
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    setDisplayed("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [started, fullText, speed]);

  const normalPart = displayed.slice(0, before.length);
  const colorPart = displayed.slice(before.length);

  return (
    <span ref={ref}>
      {normalPart}
      <span style={{ color: "var(--primary)" }}>{colorPart}</span>
      <span
        className="inline-block w-[3px] align-middle ml-1"
        style={{
          height: "0.85em",
          background: "var(--primary)",
          animation: "blink 1s step-end infinite",
          opacity: displayed.length < fullText.length ? 1 : 0,
        }}
      />
    </span>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const channels = [
    { label: "Email", value: "preethamjdza@gmail.com", href: "mailto:preethamjdza@gmail.com", color: "var(--sun)", icon: "✉️" },
    { label: "GitHub", value: "@preethu13", href: "https://github.com/preethu13", color: "var(--accent)", icon: "🐙" },
    {
      label: "LinkedIn",
      value: "contactpreethamdsouza",
      href: "https://www.linkedin.com/in/contactpreethamdsouza",
      color: "var(--pop)",
      icon: "💼",
    },
  ];
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-8">
        <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">// say hi</p>
        <h2 className="font-display text-5xl md:text-6xl">
          <Typewriter before="Let's build something " highlight="crazy..." speed={80} />
        </h2>
      </div>
      <div className="rounded-3xl ink-border bg-[var(--card)] p-8 shadow-comic-lg md:p-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="font-display text-3xl md:text-4xl">
              Have a role, project, or idea in mind? <br />
              <span className="text-[var(--primary)]">Slide into my inbox.</span>
            </p>
            <p className="mt-4 text-[var(--muted-foreground)]">
              I'm actively seeking internships and entry-level roles in Data Analytics, Machine Learning, AI Engineering and Agentic Systems. If you have an opportunity, project, or collaboration in mind, don't hesitate to get in touch.
            </p>
            <a
              href="mailto:preethamjdza@gmail.com"
              data-cursor="copy"
              className="mt-6 inline-block rounded-full ink-border bg-[var(--primary)] px-6 py-3 font-bold text-[var(--primary-foreground)] shadow-comic transition active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              preethamjdza@gmail.com
            </a>
          </div>
          <ul className="grid gap-3">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-cursor="open"
                  style={{ background: c.color }}
                  className="flex items-center justify-between rounded-2xl ink-border px-5 py-4 text-[var(--ink)] shadow-comic-sm transition hover:-translate-y-1 hover:shadow-comic"
                >
                  <span className="flex items-center gap-3 font-bold">
                    <span className="text-2xl">{c.icon}</span>
                    {c.label}
                  </span>
                  <span className="font-mono text-sm">{c.value} ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-[3px] border-[var(--ink)] bg-[var(--card)] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm md:flex-row">
        <p className="font-semibold">© {new Date().getFullYear()} Preetham Jostan D Souza · Hand-crafted, no templates.</p>
      </div>
    </footer>
  );
}
