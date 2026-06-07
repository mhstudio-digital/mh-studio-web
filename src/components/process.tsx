"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Consulta",
    description: "Conversamos sobre tu negocio, objetivos y lo que necesitas lograr.",
  },
  {
    number: "02",
    title: "Diseño",
    description: "Creamos una propuesta visual a tu medida, lista para revisar y ajustar.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Construimos tu sitio con tecnología moderna, rápida y escalable.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description: "Publicamos tu sitio y te acompañamos en los primeros pasos.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="border-b border-mh-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Cómo trabajamos
        </motion.h2>

        <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* connector line */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-mh-border lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="h-full w-full bg-gradient-to-r from-white/60 via-white/20 to-transparent"
            />
          </div>

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative"
            >
              <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-mh-border bg-mh-bg">
                <span className="text-sm font-semibold text-white">
                  {step.number}
                </span>
              </div>
              <span className="pointer-events-none absolute -left-2 -top-6 select-none text-7xl font-bold leading-none text-white/[0.04]">
                {step.number}
              </span>
              <h3 className="relative text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="relative mt-2 text-sm text-mh-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
