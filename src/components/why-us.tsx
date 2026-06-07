"use client";

import { motion } from "framer-motion";
import { HeadphonesIcon, MapPin, Star, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const REASONS = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Entrega rápida",
    description: "Tu sitio listo en 7 a 14 días. Sin demoras, sin excusas.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "100% local",
    description: "Somos de Costa Rica. Conocemos el mercado, el idioma y al cliente tico.",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Diseño premium",
    description: "Sitios que se ven como los de marcas internacionales, a precio accesible.",
  },
  {
    icon: <HeadphonesIcon className="h-6 w-6" />,
    title: "Soporte directo",
    description: "Hablás directo con quien hizo tu sitio. Sin intermediarios, sin tickets.",
  },
];

export function WhyUs() {
  return (
    <section className="border-b border-mh-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          ¿Por qué elegirnos?
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-mh-muted"
        >
          No somos una agencia genérica. Somos un equipo pequeño, enfocado en
          resultados reales para negocios costarricenses.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {REASONS.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl border border-mh-border bg-mh-surface p-8 transition-colors duration-300 hover:border-mh-border-hover"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-mh-border bg-mh-bg text-white">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
              <p className="mt-3 text-sm text-mh-muted">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
