"use client";

import { motion } from "framer-motion";
import { AnimatedBorder } from "@/components/ui/animated-border";

export function CTA() {
  return (
    <section id="contacto" className="relative overflow-hidden border-b border-mh-border py-32">
      <div aria-hidden className="absolute inset-0 bg-grain opacity-[0.04] mix-blend-overlay" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.05), transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          ¿Tu negocio merece un sitio así?
        </h2>
        <p className="mt-5 max-w-md text-balance text-mh-muted">
          Hablemos y te mostramos cómo podría verse.
        </p>

        <div className="mt-10">
          <AnimatedBorder containerClassName="p-[1.5px]">
            <a
              href="https://wa.me/50683674466"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-medium text-mh-bg transition-transform hover:scale-[1.03]"
            >
              Empezar en WhatsApp →
            </a>
          </AnimatedBorder>
        </div>
      </motion.div>
    </section>
  );
}
