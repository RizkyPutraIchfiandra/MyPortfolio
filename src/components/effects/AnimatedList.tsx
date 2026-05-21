import { motion } from "framer-motion";

export const AnimatedList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <motion.li
        key={item}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1, duration: 0.5 }}
        className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[#fafafa]/50 transition-colors"
      >
        <span className="w-2 h-2 rounded-full bg-[#fafafa] shadow-[0_0_10px_#fafafa]" />
        <span className="text-foreground/90">{item}</span>
      </motion.li>
    ))}
  </ul>
);
