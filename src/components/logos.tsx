"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

const TECHS = [
  "Next.js",
  "React",
  "Tailwind",
  "Shopify",
  "Framer",
  "Vercel",
];

export function Logos() {
  return (
    <section className="border-b border-mh-border py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-6"
      >
        <p className="mb-8 text-center text-sm uppercase tracking-widest text-mh-muted">
          Tecnologías que usamos
        </p>
        <Marquee items={TECHS.map((tech) => <span key={tech}>{tech}</span>)} />
      </motion.div>
    </section>
  );
}
