import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary";
}

export function Button({ className, variant = "primary", children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-block rounded-full bg-gold px-7 py-4 font-display text-[1.02rem] font-bold text-navy shadow-[0_6px_24px_rgba(255,178,36,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,178,36,0.45)] focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-3",
        variant === "primary" && "no-underline",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
