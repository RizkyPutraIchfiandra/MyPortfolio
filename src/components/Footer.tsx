import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/RizkyPutraIchfiandra",
    icon: Github,
    handle: "@RizkyPutraIchfiandra",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ichfiandra/",
    icon: Linkedin,
    handle: "/in/ichfiandra",
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: Twitter,
    handle: "@andra",
  },
  {
    label: "Email",
    href: "mailto:putrarizky0206@gmail.com",
    icon: Mail,
    handle: "putrarizky0206@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] border-t border-white/5">
      {/* glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#fafafa]/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#a3a3a3]/[0.05] blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <span className="text-[#a3a3a3] text-xs font-mono tracking-wider uppercase">
              // LET&apos;S BUILD — V.2026
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
              Got an idea?
              <br />
              Let&apos;s make it{" "}
              <span className="bg-gradient-to-r from-[#fafafa] to-[#d4d4d4] bg-clip-text text-transparent">
                real.
              </span>
            </h2>

            <p className="text-foreground/70 text-base max-w-md leading-relaxed">
              Tell me about your product, brand, or weird side project — I usually reply within 24
              hours.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#fafafa] text-[#0a0a0a] font-medium transition-colors duration-200 hover:bg-[#d4d4d4]"
              >
                Start a project
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="flex items-center gap-2 text-sm text-foreground/70 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fafafa] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fafafa]" />
                </span>
                Available for work — May 2026
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-5">
            <h3 className="text-foreground/60 text-xs font-mono tracking-widest uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-foreground/80 hover:text-[#fafafa] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="flex flex-col gap-5">
            <h3 className="text-foreground/60 text-xs font-mono tracking-widest uppercase">
              Connect
            </h3>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      aria-label={s.label}
                      className="group inline-flex items-center gap-3 text-foreground/80 hover:text-[#fafafa] transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{s.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* GIANT NAME — ANDRA (outlined + soft glow, top half only) */}
        <div
          aria-hidden="true"
          className="relative mt-20 overflow-hidden h-[10vw] lg:h-[9rem] select-none pointer-events-none"
        >
          {/* soft gray glow halo behind */}
          <h2 className="absolute inset-x-0 top-0 font-display font-black tracking-tighter leading-none text-center text-[20vw] lg:text-[18rem] text-white/15 blur-2xl">
            ANDRA
          </h2>
          {/* outlined main letters */}
          <h2
            className="relative font-display font-black tracking-tighter leading-none text-center text-[20vw] lg:text-[18rem] text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.35)",
              filter: "drop-shadow(0 0 24px rgba(255, 255, 255, 0.08))",
            }}
          >
            ANDRA
          </h2>
        </div>

        {/* BOTTOM BAR */}
        <div className="relative z-10 mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-foreground/60 text-sm">
            © 2026 Rizky Putra Ichfiandra. Crafted with intent.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#privacy"
              className="text-foreground/60 text-sm hover:text-[#a3a3a3] transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#colophon"
              className="text-foreground/60 text-sm hover:text-[#a3a3a3] transition-colors duration-200"
            >
              Colophon
            </a>
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 text-foreground/60 text-xs font-mono tracking-wider">
              v2026.05
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
