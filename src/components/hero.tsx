"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { DotGrid } from "@/components/ui/dot-grid";
import { Spotlight } from "@/components/ui/spotlight";

const ROTATING_WORDS = ["convierte", "impresiona", "vende"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden border-b border-mh-border">
      <DotGrid />
      <Spotlight />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-28 pt-32 text-center md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-mh-border bg-mh-surface/60 px-4 py-1.5 text-sm text-mh-muted"
        >
          <span>⚡</span>
          <span>Agencia digital · Costa Rica</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          <span className="block">Diseño web que</span>
          <span className="relative inline-block h-[1.15em] min-w-[1px] align-top">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROTATING_WORDS[index]}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="text-shimmer absolute left-0 top-0 inline-block animate-text-shimmer whitespace-nowrap"
              >
                {ROTATING_WORDS[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 max-w-xl text-balance text-lg text-mh-muted"
        >
          Creamos sitios premium para restaurantes, tiendas y emprendedores que
          quieren destacar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="#portfolio"
            className="rounded-full bg-white px-7 py-3 text-sm font-medium text-mh-bg transition-transform hover:scale-[1.03]"
          >
            Ver portfolio →
          </Link>
          <Link
            href="https://wa.me/50683674466?text=Hola%2C%20vi%20su%20sitio%20web%20y%20me%20interesa%20cotizar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors hover:border-white"
          >
            WhatsApp
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative mt-20 w-full max-w-3xl overflow-hidden rounded-2xl border border-mh-border bg-mh-surface/40 p-[1px]"
        >
          <div className="absolute inset-[-60%] bg-[conic-gradient(from_0deg,transparent_0%,rgba(255,255,255,0.15)_50%,transparent_100%)] opacity-40 [animation:borderSpin_6s_linear_infinite]" />
          <div className="relative flex flex-col items-center justify-center gap-2 rounded-2xl bg-mh-bg/80 px-8 py-6 text-sm text-mh-muted sm:flex-row sm:gap-6">
            <span>
              <span className="font-semibold text-white">12+</span> proyectos
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-mh-border sm:block" />
            <span>
              <span className="font-semibold text-white">100%</span> clientes
              satisfechos
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-mh-border sm:block" />
            <span>
              <span className="font-semibold text-white">Costa Rica</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
