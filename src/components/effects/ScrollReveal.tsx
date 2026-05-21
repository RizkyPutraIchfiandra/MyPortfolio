import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ScrollReveal = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: false, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={cn(className)}
  >
    {children}
  </motion.div>
);
