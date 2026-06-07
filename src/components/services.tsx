"use client";

import { motion } from "framer-motion";
import { Bot, ShoppingBag, Zap } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="servicios" className="border-b border-mh-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Lo que hacemos
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {/* Card 1 — large, spans 2 cols, with 3D tilt */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <TiltCard className="group relative overflow-hidden rounded-xl border border-mh-border bg-mh-surface p-6 transition-colors duration-300 hover:border-mh-border-hover sm:p-12">
              <span className="pointer-events-none absolute -right-4 -top-6 select-none text-[8rem] font-bold leading-none text-white/[0.04] sm:text-[10rem]">
                01
              </span>
              <div className="relative max-w-lg">
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  Sitios Web Profesionales
                </h3>
                <p className="mt-4 text-mh-muted">
                  Diseño a medida, rápido y optimizado para convertir visitantes
                  en clientes. Pensado para restaurantes, tiendas y marcas que
                  quieren verse premium.
                </p>
                <p className="mt-6 text-sm font-medium text-white">
                  Desde <span className="text-mh-muted">$399</span>
                </p>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <ServiceCard
              number="02"
              icon={<ShoppingBag className="h-6 w-6" />}
              title="Tiendas Online"
              description="E-commerce completo, fácil de administrar y listo para vender desde el primer día."
              price="$599"
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <ServiceCard
              number="03"
              icon={<Bot className="h-6 w-6" />}
              title="Chatbots con IA"
              description="Atiende a tus clientes 24/7 con asistentes inteligentes integrados a tu negocio."
              price="$299"
            />
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="md:col-span-2">
            <ServiceCard
              number="04"
              icon={<Zap className="h-6 w-6" />}
              title="Automatizaciones"
              description="Conectamos tus herramientas para que tu negocio funcione solo, sin tareas repetitivas."
              price="$249"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  number,
  icon,
  title,
  description,
  price,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  price?: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-xl border border-mh-border bg-mh-surface p-6 transition-colors duration-300 hover:border-mh-border-hover sm:p-8">
      <span className="pointer-events-none absolute -right-2 -top-4 select-none text-7xl font-bold leading-none text-white/[0.04]">
        {number}
      </span>
      <div className="relative">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-mh-border bg-mh-bg text-white">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm text-mh-muted">{description}</p>
        {price && (
          <p className="mt-6 text-sm font-medium text-white">
            Desde <span className="text-mh-muted">{price}</span>
          </p>
        )}
      </div>
    </div>
  );
}
