import { motion } from "framer-motion";
import { ArrowUpRight, Figma } from "lucide-react";

interface Project {
  title: string;
  image: string;
  desc: string;
  link?: string;
  tags?: string[];
  course?: string;
}

interface ProjectGalleryProps {
  items: Project[];
}

export function ProjectGallery({ items }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((project) => (
        <motion.a
          key={project.title}
          href={project.link || "#"}
          target="_blank"
          rel="noreferrer"
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
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fafafa] text-black text-sm font-semibold">
                Lihat Project <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            {/* Course badge */}
            {project.course && (
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-foreground/70 uppercase tracking-wider">
                {project.course}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5 md:p-6">
            <div className="flex items-center gap-2 mb-2">
              <Figma className="w-4 h-4 text-[#a3a3a3]" />
              <h3 className="text-xl font-bold text-foreground group-hover:text-[#fafafa] transition">
                {project.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
              {project.desc}
            </p>
            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
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
          </div>
        </motion.a>
      ))}
    </div>
  );
}