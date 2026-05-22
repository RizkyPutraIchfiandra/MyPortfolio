import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BlurText = ({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) => {
  const words = text.split(" ");
  return (
    <span className={cn("inline-flex flex-wrap gap-x-3", className)}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className={wordClassName}
          initial={{ filter: "blur(12px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: delay + i * 0.12, ease: "easeOut" }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
};
