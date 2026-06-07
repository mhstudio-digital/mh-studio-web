"use client";

import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
}: {
  items: React.ReactNode[];
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden mask-fade-x", className)}>
      <div className="flex w-max animate-marquee gap-16">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center whitespace-nowrap text-xl font-medium text-mh-muted transition-colors hover:text-mh-text"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
