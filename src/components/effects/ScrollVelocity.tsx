import type { ComponentType, CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiThreedotjs,
  SiTailwindcss,
  SiFramer,
  SiNextdotjs,
  SiNodedotjs,
  SiFigma,
  SiVite,
  SiGithub,
  SiWebgl,
  SiGreensock,
} from "react-icons/si";

type IconItem = {
  Icon: ComponentType<{ className?: string }>;
  label: string;
  /** brand color used on hover — keep palette monochrome by default */
  color: string;
};

const stack: IconItem[] = [
  { Icon: SiReact, label: "React", color: "#61DAFB" },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { Icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { Icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { Icon: SiThreedotjs, label: "Three.js", color: "#ffffff" },
  { Icon: SiWebgl, label: "WebGL", color: "#E34F26" },
  { Icon: SiFramer, label: "Framer Motion", color: "#E879F9" },
  { Icon: SiGreensock, label: "GSAP", color: "#88CE02" },
  { Icon: SiVite, label: "Vite", color: "#646CFF" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
  { Icon: SiFigma, label: "Figma", color: "#F24E1E" },
  { Icon: SiGithub, label: "GitHub", color: "#ffffff" },
];

export const ScrollVelocity = (_: { text?: string }) => {
  // duplicate sequences so the marquee loops seamlessly
  const row = [...stack, ...stack];

  return (
    <section aria-label="Tech stack" className="relative my-24">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#a3a3a3] tracking-widest">✦ TECH STACK</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
            Tools I reach for <span className="text-foreground/60">every day.</span>
          </h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            Hover any chip to see it in its true colors.
          </p>
        </div>
      </div>

      {/* STAGE */}
      <div className="relative overflow-hidden py-10 border-y border-white/10 bg-[#0a0a0a]/60 backdrop-blur-xl">
        {/* corner glows */}
        <div className="pointer-events-none absolute -top-32 left-1/4 w-[480px] h-[480px] rounded-full bg-[#fafafa]/[0.04] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 w-[420px] h-[420px] rounded-full bg-[#a3a3a3]/[0.04] blur-3xl" />

        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-20 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-20 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />

        <div className="relative space-y-8">
          {/* ROW 1 — premium glass chips with brand-color reveal */}
          <motion.div
            className="flex gap-4 will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 38, ease: "linear", repeat: Infinity }}
          >
            {row.map(({ Icon, label, color }, i) => (
              <div
                key={`chip-${i}`}
                style={{ ["--brand" as keyof CSSProperties]: color } as CSSProperties}
                className="group relative flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md shrink-0 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
              >
                {/* hover border glow using brand color */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-[var(--brand)]/40" />
                <Icon
                  className="w-6 h-6 md:w-7 md:h-7 text-foreground/80 transition-colors duration-300 group-hover:text-[var(--brand)]"
                  aria-hidden="true"
                />
                <span className="text-base md:text-lg font-semibold tracking-tight whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* ROW 2 — giant outlined icons, opposite direction, slower */}
          <motion.div
            className="flex gap-14 md:gap-20 items-center will-change-transform"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 55, ease: "linear", repeat: Infinity }}
          >
            {row.map(({ Icon, label }, i) => (
              <div key={`big-${i}`} className="shrink-0">
                <Icon
                  className="w-14 h-14 md:w-20 md:h-20 text-white/10 hover:text-white/30 transition-colors duration-300"
                  aria-label={label}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
