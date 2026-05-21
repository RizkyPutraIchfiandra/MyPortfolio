import { cn } from "@/lib/utils";

export const ShinyText = ({ text, className }: { text: string; className?: string }) => (
  <span className={cn("shiny-text font-bold tracking-tight", className)}>{text}</span>
);
