import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const TextType = ({
  text,
  className,
  speed = 30,
}: {
  text: string;
  className?: string;
  speed?: number;
}) => {
  const [shown, setShown] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, [text, speed]);
  return (
    <span className={cn(className)}>
      {shown}
      <span className="inline-block w-[2px] h-[1em] bg-[#ADFF2F] ml-1 animate-pulse align-middle" />
    </span>
  );
};
