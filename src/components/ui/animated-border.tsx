"use client";

import { cn } from "@/lib/utils";

export function AnimatedBorder({
  className,
  children,
  containerClassName,
}: {
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "group relative inline-flex overflow-hidden rounded-full p-[1px]",
        containerClassName,
      )}
    >
      <span
        className="absolute inset-[-1000%] animate-border-spin"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)",
        }}
      />
      <span
        className={cn(
          "relative z-10 inline-flex h-full w-full items-center justify-center rounded-full bg-mh-bg",
          className,
        )}
      >
        {children}
      </span>
    </div>
  );
}
