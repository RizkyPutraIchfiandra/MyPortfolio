import { motion } from "framer-motion";
import { ArrowUpRight, Figma, Code2, Github, Users, UserRound } from "lucide-react";

interface Project {
  title: string;
  image: string;
  desc: string;
  link?: string;
  repo?: string;
  tags?: string[];
  course?: string;
  team?: boolean;
}

interface ProjectGalleryProps {
  items: Project[];
}

export function ProjectGallery({ items }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((project) => {
        const isFigma = project.tags?.includes("Figma");
        return (
          <motion.div
            key={project.title}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#171717]/70 backdrop-blur-md overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#fafafa]/30 transition-colors"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#0f0f0f]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                {project.course && (
                  <div className="px-2.5 py-1 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-foreground/70 uppercase tracking-wider">
                    {project.course}
                  </div>
                )}
                {project.team !== undefined && (
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono uppercase tracking-wider backdrop-blur-md ${
                      project.team
                        ? "bg-sky-500/15 border-sky-400/30 text-sky-300"
                        : "bg-emerald-500/15 border-emerald-400/30 text-emerald-300"
                    }`}
                  >
                    {project.team ? <Users className="w-3 h-3" /> : <UserRound className="w-3 h-3" />}
                    {project.team ? "Kelompok" : "Mandiri"}
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 md:p-6">
              <div className="flex items-center gap-2 mb-2">
                {isFigma ? (
                  <Figma className="w-4 h-4 text-[#a3a3a3]" />
                ) : (
                  <Code2 className="w-4 h-4 text-[#a3a3a3]" />
                )}
                <h3 className="text-xl font-bold text-foreground group-hover:text-[#fafafa] transition">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.desc}
              </p>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-mono rounded-full border border-white/10 text-foreground/60 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#fafafa] text-black font-semibold text-sm hover:shadow-[0_0_24px_#fafafa] transition-shadow"
                  >
                    Buka Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-sm font-semibold hover:border-[#fafafa]/50 hover:text-[#fafafa] transition"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
