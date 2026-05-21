import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Code2,
  Palette,
  Boxes,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
} from "lucide-react";
import ShapeGrid from "@/components/effects/ShapeGrid.jsx";
import { PhotoCard } from "@/components/PhotoCard";
import { BlurText } from "@/components/effects/BlurText";
import RotatingText from "@/components/effects/RotatingText";
import { ScrollVelocity } from "@/components/effects/ScrollVelocity";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { ShinyText } from "@/components/effects/ShinyText";
import { ContactForm } from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rizky Putra Ichfiandra — Creative Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Rizky Putra Ichfiandra (Andra) — a creative developer crafting fast, expressive web experiences with React, Three.js, and motion.",
      },
    ],
  }),
});

const skills = [
  "React & TypeScript",
  "Three.js / WebGL",
  "Tailwind & Design Tokens",
  "Framer Motion",
  "UI / UX Systems",
  "Node.js & Edge APIs",
];

const stats = [
  { value: "5+", label: "Years crafting" },
  { value: "40+", label: "Products shipped" },
  { value: "12", label: "Global clients" },
  { value: "99%", label: "Satisfaction rate" },
];

const services = [
  {
    icon: Code2,
    title: "Web Engineering",
    desc: "Production-grade web apps built on React and TypeScript — clean architecture, fast loads, future-proof.",
    tags: ["React", "TypeScript", "Edge"],
  },
  {
    icon: Palette,
    title: "Interface Design",
    desc: "Design systems and interfaces with character — consistent, accessible, and tuned to the last pixel.",
    tags: ["Figma", "Design System", "Motion"],
  },
  {
    icon: Boxes,
    title: "3D & Immersive",
    desc: "WebGL experiences that feel alive — from physics-based product viewers to fully interactive worlds.",
    tags: ["Three.js", "R3F", "GLSL"],
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    desc: "Get the goals, audience, and constraints right before a single pixel is drawn.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Wireframes, prototypes, and a visual system that holds up across every device.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Tight implementation focused on performance, accessibility, and motion that means something.",
  },
  {
    step: "04",
    title: "Ship",
    desc: "Release, measure, iterate. Great products are alive — they keep getting sharper.",
  },
];

const education = [
  {
    yearStart: "2022",
    yearEnd: "NOW",
    period: "2022 — Present",
    level: "S1 · Bachelor's Degree",
    institution: "Computer Science",
    focus: "Software Engineering",
    desc: "Pursuing a Bachelor's in Computer Science with a focus on Software Engineering — diving deep into systems, architecture, and building things that scale.",
    isCurrent: true,
  },
  {
    yearStart: "2019",
    yearEnd: "2022",
    period: "2019 — 2022",
    level: "SMA · Senior High School",
    institution: "SMAN 1 Cibinong",
    focus: "MIPA (Mathematics & Natural Sciences)",
    desc: "Majored in MIPA, where curiosity for problem-solving and the science behind every system first took shape.",
    isCurrent: false,
  },
  {
    yearStart: "2016",
    yearEnd: "2019",
    period: "2016 — 2019",
    level: "SMP · Junior High School",
    institution: "SMP SMART Cibinong",
    focus: "General Studies",
    desc: "The early years — where foundations for analytical thinking, discipline, and a love for tinkering started.",
    isCurrent: false,
  },
];

const figmaProjects = [
  {
    title: "Kiddovate",
    image: "/projects/kiddovate.png",
    desc: "Aplikasi monitoring gizi anak — cek nutrisi makanan, jadwal vaksinasi & imunisasi, chat & telpon dokter.",
    link: "https://www.figma.com/design/PLo1i68Tykas06BszTLkVJ/KIDDOVATE?node-id=0-1&p=f&t=hUbjfl5oLMOvbnoT-0",
    tags: ["Figma", "UI/UX", "Mobile App"],
    course: "Creativity & Innovation",
  },
  {
    title: "AbleJobs",
    image: "/projects/Ablejobs.png",
    desc: "Web platform pencarian lowongan kerja khusus penyandang disabilitas — dibangun dengan standar aksesibilitas internasional WCAG.",
    link: "https://www.figma.com/design/Tb7VR2FhQHqRECbV1m7SeL/AbleJobs?node-id=0-1&t=G5UetUDhV2hq04yK-1",
    tags: ["Figma", "UI/UX", "Web App", "WCAG"],
    course: "Human & Computer Interaction",
  },
  {
    title: "EduPulse Indonesia",
    image: "/projects/EduPulse.png",
    desc: "Platform komunitas mahasiswa untuk menemukan, memahami, dan berbagi informasi gaya mengajar dosen di seluruh Indonesia — supaya setiap mahasiswa bisa belajar dengan cara terbaik mereka.",
    link: "https://www.figma.com/design/HXOMnVs96mI6dvbALTjcYt/EduPulse?node-id=0-1&t=GprvhTVMFFcwhhaz-1",
    tags: ["Figma", "UI/UX", "Web App"],
    course: "Software Engineering",
  },
  {
    title: "Rubesa",
    image: "/projects/Rubesa.png",
    desc: "Ruang Belajar Bersama — platform yang mempermudah siswa SMA belajar lewat quiz interaktif, Virtual-Based Learning, dan kolaborasi antar pelajar untuk memajukan pendidikan Indonesia.",
    link: "https://www.figma.com/design/VvQe6wAzlo5rLVGWLbQgzk/RUBESA---Anita-Max-Wynn?node-id=19-2689&t=10QZJoqKRoLD7dtj-0",
    tags: ["Figma", "UI/UX", "Mobile App", "EdTech"],
    course: "TechFest 2025 · HIMTI Binus",
  },
  {
    title: "FontDale",
    image: "/projects/FontDale.png",
    desc: "Modern premium destination untuk shopping, dining, culture, dan curated urban experiences — dirancang sebagai pengalaman digital yang elegan dan imersif.",
    link: "https://www.figma.com/design/it07g3x0e2HxgcZfPid1d2/Project-HCI-Lab?node-id=15-6&t=EZWLShpVWamYUbF4-1",
    tags: ["Figma", "UI/UX", "Web App"],
    course: "HCI Laboratorium",
  },
];

const devProjects = [
  {
    title: "Malazzz — YouTuber Website",
    image: "/projects/malazzz.png",
    desc: "Website personal untuk seorang YouTuber — dilengkapi real-time stats TikTok & YouTube (views, likes, subscribers, followers) yang update otomatis.",
    link: "https://aku-malazzz.vercel.app/",
    tags: ["React", "API Integration", "Real-time Stats"],
    course: "Personal Project",
  },
  {
    title: "EduPulse Indonesia",
    image: "/projects/EduPulse.png",
    desc: "Versi website dari EduPulse — platform komunitas mahasiswa untuk berbagi info gaya mengajar dosen di seluruh Indonesia.",
    link: "https://edupulse-indonesia.vercel.app/",
    tags: ["React", "Vercel", "Full-stack"],
    course: "Software Engineering",
  },
  {
    title: "Needleman-Wunsch Algorithm",
    image: "/projects/needleman-wunsch.png.png",
    desc: "Web app untuk menghitung DNA Sequence Alignment menggunakan algoritma Needleman-Wunsch — dibuat bareng Muhammad Raid Zakwan.",
    link: "https://needleman-wunsch-algorithm.netlify.app/",
    tags: ["React", "Algorithm", "Bioinformatics"],
    course: "Collaborative Project",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden isolate bg-[#0a0a0a]">
      {/* animated grid background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ShapeGrid
          speed={0.4}
          squareSize={48}
          direction="diagonal"
          borderColor="#262626"
          hoverFillColor="#1f1f1f"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>
      {/* dim overlay — tames the grid so content pops */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(10,9,16,0.55) 0%, rgba(10,9,16,0.85) 60%, rgba(10,9,16,0.95) 100%)",
        }}
      />
      {/* subtle color glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#fafafa]/[0.06] blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#a3a3a3]/[0.05] blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10">
        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a
              href="#top"
              className="flex items-center gap-2 font-mono text-sm tracking-widest text-[#fafafa]"
            >
              <span className="w-2 h-2 rounded-full bg-[#fafafa] shadow-[0_0_10px_#fafafa]" />
              ANDRA.DEV
            </a>
            <div className="hidden md:flex gap-8 text-sm font-mono">
              <a href="#about" className="hover:text-[#fafafa] transition">
                About
              </a>
              <a href="#education" className="hover:text-[#fafafa] transition">
                Education
              </a>
              <a href="#services" className="hover:text-[#fafafa] transition">
                Services
              </a>
              <a href="#projects" className="hover:text-[#fafafa] transition">
                Work
              </a>
              <a href="#contact" className="hover:text-[#fafafa] transition">
                Contact
              </a>
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#fafafa]/40 text-[#fafafa] text-xs font-mono hover:bg-[#fafafa] hover:text-black transition"
            >
              Start a Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section
          id="top"
          className="relative pt-32 pb-16 min-h-screen grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 items-center"
        >
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-[#fafafa]/30 bg-[#fafafa]/5 text-[#fafafa] text-xs font-mono"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fafafa] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fafafa]" />
              </span>
              Open for select work — Q3 2026
            </motion.div>

            <p className="font-mono text-xs text-[#a3a3a3] mb-6 tracking-widest">
              // PORTFOLIO — V.2026
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              <BlurText text="Crafting digital" />
              <br />
              <BlurText text="experiences with" delay={0.6} />
              <br />
              <span className="text-[#fafafa]">
                <BlurText text="precision." delay={1.2} />
              </span>
            </h1>
            <div className="mt-8 text-2xl md:text-3xl font-mono flex flex-wrap items-center gap-3">
              <span>I&apos;m a</span>
              <RotatingText
                texts={["Web Developer", "UI Designer", "Creative Coder", "3D Tinkerer"]}
                mainClassName="px-3 md:px-4 py-1 md:py-2 bg-gradient-to-r from-[#fafafa] to-[#d4d4d4] text-black font-bold rounded-lg overflow-hidden justify-center"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2200}
              />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#fafafa] text-black font-semibold hover:shadow-[0_0_30px_#fafafa] transition-shadow"
              >
                View Work
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-[#a3a3a3] hover:text-[#a3a3a3] transition"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#fafafa]">{s.value}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-1 uppercase tracking-wider">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <PhotoCard />
          </div>

          <motion.a
            href="#about"
            aria-label="Scroll to about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ delay: 1.6, duration: 1.8, repeat: Infinity }}
            className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs font-mono text-muted-foreground hover:text-[#fafafa] transition"
          >
            Scroll
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </section>

        <ScrollVelocity text="REACT ✦ THREE.JS ✦ TYPESCRIPT ✦ MOTION ✦ TAILWIND ✦ WEBGL ✦" />

        {/* ABOUT */}
        <section id="about" className="relative max-w-7xl mx-auto px-6 py-32">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-16">
              <span className="font-mono text-xs text-[#a3a3a3] tracking-widest">✦ ABOUT</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* LEFT — Monogram + Now */}
            <div className="md:col-span-5 space-y-4 md:sticky md:top-28">
              <ScrollReveal>
                <div className="relative aspect-square w-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#171717] via-[#0f0f0f] to-[#0a0a0a] overflow-hidden">
                  {/* grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                      backgroundSize: "48px 48px",
                    }}
                  />
                  {/* center radial glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

                  {/* monogram — solid */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display italic font-black text-[14rem] md:text-[16rem] leading-none text-foreground tracking-tighter">
                      a
                    </span>
                  </div>
                  {/* monogram — outline overlay */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-display italic font-black text-[14rem] md:text-[16rem] leading-none text-transparent tracking-tighter"
                      style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}
                    >
                      a
                    </span>
                  </div>

                  {/* corner labels */}
                  <div className="absolute top-5 left-5 font-mono text-[10px] text-foreground/55 tracking-widest uppercase">
                    // RPI · 2026
                  </div>
                  <div className="absolute top-5 right-5 font-mono text-[10px] text-foreground/55 tracking-widest uppercase">
                    ID / GMT+7
                  </div>
                  <div className="absolute bottom-5 left-5 font-mono text-[10px] text-foreground/55 tracking-widest uppercase">
                    Cibinong, Bogor
                  </div>
                  <div className="absolute bottom-5 right-5 font-mono text-[10px] text-foreground tracking-widest uppercase flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fafafa] opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#fafafa]" />
                    </span>
                    Online
                  </div>
                </div>
            </ScrollReveal>

              <ScrollReveal>
                <div className="rounded-2xl border border-white/10 bg-[#171717]/70 backdrop-blur-md p-5">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#a3a3a3] mb-3">
                    // currently
                  </div>
                  <ul className="space-y-2.5 font-mono text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-foreground/40 shrink-0 w-20">building</span>
                      <span className="text-foreground/90">a 3D portfolio · v2026</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-foreground/40 shrink-0 w-20">studying</span>
                      <span className="text-foreground/90">CS · Software Engineering</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-foreground/40 shrink-0 w-20">exploring</span>
                      <span className="text-foreground/90">WebGL shaders &amp; GLSL</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT — editorial bio */}
            <div className="md:col-span-7 space-y-12">
              <ScrollReveal>
                <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
                  Hi — I&apos;m{" "}
                  <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40 bg-clip-text text-transparent">
                    Andra
                  </span>
                  .
                  <br />
                  <span className="text-foreground/55">
                    A creative developer based in Cibinong.
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/75 max-w-xl">
                  <p>
                    Full name{" "}
                    <span className="text-foreground">Rizky Putra Ichfiandra</span>. I work at the
                    seam between design and engineering, building interfaces that feel alive, fast,
                    and obsessively detailed.
                  </p>
                  <p>
                    From physics-driven 3D scenes to pixel-perfect dashboards, every project is a
                    chance to push the medium a little further. I care about the small stuff —
                    easing curves, micro-interactions, the right shade of gray.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#a3a3a3] mb-4">
                    // stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s) => (
                      <span
                        key={s}
                        className="px-3.5 py-2 text-sm font-mono rounded-full border border-white/10 bg-white/[0.02] text-foreground/80 hover:border-white/30 hover:bg-white/[0.06] hover:text-foreground transition"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/10">
                  {[
                    { label: "Years coding", value: "5+" },
                    { label: "Projects", value: "40+" },
                    { label: "Clients", value: "12" },
                    { label: "Late nights", value: "\u221E" },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className="bg-[#0a0a0a] p-5 hover:bg-[#171717] transition"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-foreground">
                        {f.value}
                      </div>
                      <div className="text-[10px] font-mono text-muted-foreground mt-1.5 uppercase tracking-widest">
                        {f.label}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="relative max-w-7xl mx-auto px-6 py-32">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <span className="font-mono text-xs text-[#a3a3a3] tracking-widest">✦ EDUCATION</span>
              <span className="h-px flex-1 bg-white/10" />
              <span className="font-mono text-[10px] text-foreground/40 tracking-widest uppercase">
                {education.length} chapters
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
              <h2 className="text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight max-w-3xl">
                Where I learned{" "}
                <span className="italic font-display">the</span>{" "}
                <span className="bg-gradient-to-r from-foreground via-foreground/70 to-foreground/30 bg-clip-text text-transparent">
                  craft.
                </span>
              </h2>
              <p className="text-muted-foreground max-w-xs text-base leading-relaxed">
                Every chapter shaped how I think, debug, and build today — from the first SMP
                classroom to writing software at university.
              </p>
            </div>
          </ScrollReveal>

          {/* TIMELINE */}
          <div className="relative">
            {/* vertical rail */}
            <div
              aria-hidden="true"
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-foreground/40 via-white/10 to-transparent md:-translate-x-px"
            />

            <div className="space-y-16 md:space-y-24">
              {education.map((e, i) => {
                const flip = i % 2 === 1; // alternate sides on desktop
                return (
                  <ScrollReveal key={e.institution}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="group relative grid md:grid-cols-2 gap-6 md:gap-16 items-center"
                    >
                      {/* node on rail */}
                      <div
                        aria-hidden="true"
                        className="absolute left-4 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10"
                      >
                        <div className="relative">
                          {e.isCurrent ? (
                            <>
                              <span className="absolute inset-0 rounded-full bg-foreground/30 blur-md" />
                              <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-60" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-foreground ring-4 ring-[#0a0a0a]" />
                              </span>
                            </>
                          ) : (
                            <span className="block h-3 w-3 rounded-full bg-foreground/30 ring-4 ring-[#0a0a0a] group-hover:bg-foreground/80 transition" />
                          )}
                        </div>
                      </div>

                      {/* YEAR DISPLAY */}
                      <div
                        className={`pl-12 md:pl-0 ${
                          flip ? "md:order-2 md:text-left md:pl-12" : "md:order-1 md:text-right md:pr-12"
                        }`}
                      >
                        <div className="font-mono text-[10px] text-[#a3a3a3] tracking-widest uppercase mb-2">
                          {e.period}
                          {e.isCurrent && (
                            <span className="ml-2 inline-flex items-center gap-1 text-foreground">
                              <span className="w-1 h-1 rounded-full bg-foreground animate-pulse" />
                              Present
                            </span>
                          )}
                        </div>
                        <div className="flex items-baseline gap-3 md:justify-end font-display font-black leading-none tracking-tighter">
                          {flip || (
                            <>
                              <span className="text-[5rem] md:text-[8rem] text-foreground">
                                {e.yearStart.slice(2)}
                              </span>
                              <span
                                className="text-[5rem] md:text-[8rem] text-transparent"
                                style={{
                                  WebkitTextStroke: "1px rgba(255,255,255,0.25)",
                                }}
                              >
                                {e.yearEnd === "NOW" ? "NOW" : e.yearEnd.slice(2)}
                              </span>
                            </>
                          )}
                          {flip && (
                            <>
                              <span className="text-[5rem] md:text-[8rem] text-foreground">
                                {e.yearStart.slice(2)}
                              </span>
                              <span
                                className="text-[5rem] md:text-[8rem] text-transparent"
                                style={{
                                  WebkitTextStroke: "1px rgba(255,255,255,0.25)",
                                }}
                              >
                                {e.yearEnd === "NOW" ? "NOW" : e.yearEnd.slice(2)}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* CONTENT CARD */}
                      <div className={`pl-12 md:pl-0 ${flip ? "md:order-1 md:pr-12" : "md:order-2 md:pl-12"}`}>
                        <div className="relative rounded-2xl border border-white/10 bg-[#171717]/70 backdrop-blur-md p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:border-foreground/30 group-hover:bg-[#171717]/90 transition">
                          {/* level badge */}
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 rounded-lg bg-foreground/10 border border-foreground/25 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-[#0a0a0a] transition">
                              <GraduationCap className="w-4 h-4" />
                            </div>
                            <span className="px-2.5 py-1 text-[10px] font-mono rounded-full border border-white/10 text-foreground/70 uppercase tracking-widest">
                              {e.level}
                            </span>
                          </div>

                          {/* institution */}
                          <h3 className="text-2xl md:text-3xl font-bold mb-1.5 leading-tight">
                            {e.institution}
                          </h3>

                          {/* focus */}
                          <div className="text-sm font-mono text-foreground/55 mb-4 flex items-center gap-2">
                            <span className="text-[#a3a3a3]">↳</span>
                            {e.focus}
                          </div>

                          {/* desc */}
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {e.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-24">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-[#a3a3a3] tracking-widest">✦ SERVICES</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <h2 className="text-5xl md:text-6xl font-bold">
                <ShinyText text="What I do." />
              </h2>
              <p className="text-muted-foreground max-w-md">
                Three disciplines, one workflow — engineered to ship products that feel cohesive end
                to end.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={s.title}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="group h-full rounded-2xl border border-white/10 bg-[#171717]/70 backdrop-blur-md p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#fafafa]/40 hover:bg-[#171717]/85 transition-all"
                  >
                    <div className="flex items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#fafafa]/10 border border-[#fafafa]/30 flex items-center justify-center text-[#fafafa] group-hover:bg-[#fafafa] group-hover:text-black transition">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-full border border-white/10 text-foreground/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-[#a3a3a3] tracking-widest">
                ✦ SELECTED WORK
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <h2 className="text-5xl md:text-6xl font-bold">
                <ShinyText text="Selected work." />
              </h2>
              <p className="text-muted-foreground max-w-md">
                From design explorations to production code — here's what I've been building.
              </p>
            </div>
          </ScrollReveal>

          {/* Figma / Design */}
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-4 h-4 text-[#a3a3a3]" />
              <span className="font-mono text-sm text-foreground/70">Design — Figma</span>
              <span className="h-px flex-1 bg-white/10" />
              <span className="font-mono text-[10px] text-foreground/40 tracking-widest uppercase">
                {figmaProjects.length} projects
              </span>
            </div>
          </ScrollReveal>
          <ProjectGallery items={figmaProjects} />

          {/* Development / Code */}
          {devProjects.length > 0 && (
            <>
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6 mt-16">
                  <Code2 className="w-4 h-4 text-[#a3a3a3]" />
                  <span className="font-mono text-sm text-foreground/70">Development — Code</span>
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="font-mono text-[10px] text-foreground/40 tracking-widest uppercase">
                    {devProjects.length} projects
                  </span>
                </div>
              </ScrollReveal>
              <ProjectGallery items={devProjects} />
            </>
          )}
        </section>

        {/* PROCESS */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-[#a3a3a3] tracking-widest">✦ PROCESS</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-12">
              <ShinyText text="How I work." />
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <ScrollReveal key={p.step}>
                <div className="h-full rounded-2xl border border-white/10 bg-[#171717]/70 backdrop-blur-md p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                  <div className="font-mono text-5xl font-bold text-[#fafafa]/20 mb-4">
                    {p.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    {p.title}
                    {i === 3 && <Sparkles className="w-4 h-4 text-[#fafafa]" />}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-[#a3a3a3] tracking-widest">✦ CONTACT</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-12 gap-8 items-stretch">
            <ScrollReveal className="md:col-span-7">
              <ContactForm />
            </ScrollReveal>

            <div className="md:col-span-5 flex flex-col gap-4">
              <ScrollReveal>
                <a
                  href="mailto:putrarizky0206@gmail.com"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#171717]/70 backdrop-blur-md p-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#fafafa]/40 transition"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-[#fafafa]/10 border border-[#fafafa]/30 flex items-center justify-center text-[#fafafa]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        Email
                      </div>
                      <div className="text-sm md:text-base truncate">putrarizky0206@gmail.com</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-[#fafafa] transition" />
                </a>
              </ScrollReveal>

              <ScrollReveal>
                <a
                  href="https://github.com/RizkyPutraIchfiandra"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#171717]/70 backdrop-blur-md p-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#fafafa]/40 transition"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-[#fafafa]/10 border border-[#fafafa]/30 flex items-center justify-center text-[#fafafa]">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        Github
                      </div>
                      <div className="text-sm md:text-base truncate">
                        @RizkyPutraIchfiandra
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-[#fafafa] transition" />
                </a>
              </ScrollReveal>

              <ScrollReveal>
                <a
                  href="https://www.linkedin.com/in/ichfiandra/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#171717]/70 backdrop-blur-md p-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#fafafa]/40 transition"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-[#fafafa]/10 border border-[#fafafa]/30 flex items-center justify-center text-[#fafafa]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        LinkedIn
                      </div>
                      <div className="text-sm md:text-base truncate">/in/ichfiandra</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-[#fafafa] transition" />
                </a>
              </ScrollReveal>

              {/* INTERACTIVE MAP */}
              <ScrollReveal>
                <div className="flex-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#171717]/70 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#a3a3a3]/40 transition">
                  {/* header */}
                  <div className="flex items-center justify-between p-5 pb-3">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-[#a3a3a3]/10 border border-[#a3a3a3]/30 flex items-center justify-center text-[#a3a3a3]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                          Based in
                        </div>
                        <div className="text-sm md:text-base truncate">Cibinong, Bogor — ID</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground shrink-0">GMT+7</span>
                  </div>

                  {/* map */}
                  <div className="relative h-56 md:h-64 w-full">
                    <iframe
                      title="Andra's location — Cibinong, Indonesia"
                      src="https://www.google.com/maps?q=Cibinong,Bogor,Indonesia&z=13&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full border-0"
                      style={{
                        filter:
                          "invert(0.92) hue-rotate(180deg) saturate(0.9) brightness(0.95) contrast(0.95)",
                      }}
                    />
                    {/* tint overlay so map blends into site */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />

                    {/* open in maps */}
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Cibinong,Bogor,Indonesia"
                      target="_blank"
                      rel="noreferrer"
                      className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0a0a]/90 border border-white/15 text-xs font-mono text-[#a3a3a3] hover:border-[#a3a3a3]/60 hover:text-[#a3a3a3] transition backdrop-blur-md"
                    >
                      Open in Maps
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
