import { motion } from "framer-motion";

export function PhotoCard() {
  return (
    <div className="w-full h-[600px] md:h-[700px] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-[300px] md:w-[380px]"
      >
        {/* lanyard string */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-white/40" />
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3 rounded-t-full bg-gradient-to-b from-[#262626] to-[#171717] border border-white/10" />

        {/* card */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#171717] via-[#0f0f0f] to-[#0a0a0a] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* clip */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-16 h-6 rounded-b-lg bg-gradient-to-b from-[#404040] to-[#262626] border border-white/10 z-20" />

          {/* photo */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="/andra.jpeg"
              alt="Rizky Putra Ichfiandra"
              className="w-full h-full object-cover"
            />
            {/* subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
          </div>

          {/* info bar */}
          <div className="p-5 border-t border-white/10 bg-[#0a0a0a]/60 backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-[#a3a3a3] tracking-widest uppercase">
                // ID CARD
              </span>
              <span className="text-[10px] font-mono text-[#a3a3a3] tracking-widest">
                2026
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
              Rizky Putra Ichfiandra
            </h3>
            <p className="text-xs md:text-sm font-mono text-foreground/60 mt-1">
              Creative Developer · ID
            </p>
          </div>

          {/* shine effect */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
}