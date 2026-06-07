"use client";

import { cn } from "@/lib/utils";

export function DotGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-dot-grid opacity-40 [animation:fadeUp_2s_ease_forwards]"
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-mh-bg" />
    </div>
  );
}
