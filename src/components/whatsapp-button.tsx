"use client";

import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/50683674466?text=Hola%2C%20vi%20su%20sitio%20web%20y%20me%20interesa%20cotizar%20un%20proyecto"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-mh-border bg-white text-sm font-semibold text-mh-bg transition-colors duration-300 hover:text-white"
      >
        <span className="absolute inset-0 origin-bottom scale-y-0 bg-mh-bg transition-transform duration-300 ease-out group-hover:scale-y-100" />
        <span className="relative">WA</span>
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full border border-mh-border bg-mh-surface px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          WhatsApp
        </span>
      </a>
    </motion.div>
  );
}
