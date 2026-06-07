"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const FAQS = [
  {
    question: "¿Cuánto tiempo tarda en estar lista mi página?",
    answer:
      "Entre 7 y 14 días hábiles dependiendo del proyecto. Tiendas online pueden tomar hasta 3 semanas.",
  },
  {
    question: "¿Qué necesito para empezar?",
    answer:
      "Solo contarnos sobre tu negocio. Nosotros nos encargamos del diseño, desarrollo y publicación. Tú apruebas y nosotros ejecutamos.",
  },
  {
    question: "¿El precio incluye mantenimiento?",
    answer:
      "El precio de desarrollo es único. El mantenimiento se cotiza aparte según tus necesidades, desde $49/mes.",
  },
  {
    question: "¿El sitio va a ser rápido y aparecer en Google?",
    answer:
      "Sí. Todos nuestros sitios están optimizados para velocidad y SEO desde el inicio. Usamos tecnología moderna que Google premia en los resultados de búsqueda.",
  },
  {
    question: "¿Puedo pedir cambios después del lanzamiento?",
    answer:
      "Sí. Incluimos una ronda de ajustes post-lanzamiento sin costo adicional. Cambios mayores se cotizan según el alcance.",
  },
  {
    question: "¿Trabajan con clientes fuera de Costa Rica?",
    answer:
      "Sí, trabajamos con clientes en toda Latinoamérica. La comunicación es 100% remota por WhatsApp o videollamada.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-b border-mh-border py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Preguntas frecuentes
        </motion.h2>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="overflow-hidden rounded-xl border border-mh-border bg-mh-surface transition-colors duration-300 hover:border-mh-border-hover"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-base font-medium text-white sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0 text-mh-muted"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-6 text-sm text-mh-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
