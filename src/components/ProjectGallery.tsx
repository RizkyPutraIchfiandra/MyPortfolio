import { useState, useMemo } from "react";
import { ArrowUpRight, Github, Users, UserRound } from "lucide-react";
import CircularGallery, { type GalleryItem } from "@/components/effects/CircularGallery";

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

type Filter = "all" | "team" | "solo";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "team", label: "Kelompok" },
  { key: "solo", label: "Mandiri" },
];

export function ProjectGallery({ items }: ProjectGalleryProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState(0);

  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((it) => (filter === "team" ? it.team : !it.team))),
    [items, filter]
  );
  const activeProject = visible[active % visible.length];
  const current = activeProject || visible[0];

  const galleryItems = useMemo<GalleryItem[]>(
    () =>
      visible.map((p) => ({
        image: p.image,
        text: p.title,
        alt: p.title,
        description: p.desc,
      })),
    [visible]
  );

  return (
    <div className="space-y-6">
      {/* filter pills */}
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => {
              setFilter(f.key);
              setActive(0);
            }}
            aria-pressed={filter === f.key}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border transition ${
              filter === f.key
                ? "bg-[#fafafa] text-black border-[#fafafa]"
                : "border-white/15 text-foreground/60 hover:border-[#fafafa]/40 hover:text-[#fafafa]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* gallery */}
      <div className="h-[420px] md:h-[520px]">
        <CircularGallery
          items={galleryItems}
          bend={0}
          gap={0.12}
          itemAspect={1.3}
          showTitles={false}
          snap
          openOnClick
          textColor="#fafafa"
          onActiveChange={(i) => {
            setActive(i);
          }}
        />
      </div>

      {/* active project panel */}
      {current && (
        <div
          aria-live="polite"
          className="rounded-2xl border border-white/10 bg-[#171717]/70 backdrop-blur-md p-5 md:p-6"
        >
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">{current.title}</h3>
            {current.team !== undefined && (
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono uppercase tracking-wider ${
                  current.team
                    ? "bg-sky-500/15 border-sky-400/30 text-sky-300"
                    : "bg-emerald-500/15 border-emerald-400/30 text-emerald-300"
                }`}
              >
                {current.team ? <Users className="w-3 h-3" /> : <UserRound className="w-3 h-3" />}
                {current.team ? "Kelompok" : "Mandiri"}
              </span>
            )}
            {current.course && (
              <span className="px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-mono text-foreground/70 uppercase tracking-wider">
                {current.course}
              </span>
            )}
          </div>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 max-w-3xl">
            {current.desc}
          </p>
          {current.tags && current.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[10px] font-mono rounded-full border border-white/10 text-foreground/60 uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-3">
            {current.link && (
              <a
                href={current.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#fafafa] text-black font-semibold text-sm hover:shadow-[0_0_24px_#fafafa] transition-shadow"
              >
                Buka Project
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {current.repo && (
              <a
                href={current.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-sm font-semibold hover:border-[#fafafa]/50 hover:text-[#fafafa] transition"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
