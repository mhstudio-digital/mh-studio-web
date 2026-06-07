"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const MATIAS_PARFUM_SCREENSHOT =
  "https://api.microlink.io/?url=https://matiasparfum.com&screenshot=true&meta=false&embed=screenshot.url";

function ScreenshotImage({
  src,
  alt,
  gradient,
  className = "",
}: {
  src: string;
  alt: string;
  gradient: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`bg-gradient-to-br ${gradient} bg-mh-bg ${className}`} />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

const DEMO_PROJECTS = [
  {
    title: "Costa Rica Properties",
    description: "Sitio de bienes raíces de lujo con búsqueda de propiedades y diseño premium",
    tags: ["Luxury Real Estate", "Diseño premium", "Demo conceptual"],
    gradient: "from-white/[0.06] via-transparent to-white/[0.02]",
    badge: "Demo conceptual",
    url: "https://mhstudio-digital.github.io/costa-rica-properties/",
    image:
      "https://api.microlink.io/?url=https://mhstudio-digital.github.io/costa-rica-properties/&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    title: "Ansel Boutique",
    description: "Tienda de moda con catálogo y checkout integrado",
    tags: ["E-commerce", "Branding"],
    gradient: "from-white/[0.04] via-transparent to-white/[0.08]",
    badge: "Próximamente",
    url: undefined,
    image: undefined,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-mh-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Nuestro trabajo
        </motion.h2>

        <div className="grid grid-cols-1 gap-4">
          {/* Featured — real project */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-xl border border-mh-border bg-mh-surface transition-colors duration-500 hover:border-mh-border-hover"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="relative grid grid-cols-1 gap-8 p-8 sm:p-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white">
                  Proyecto real
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
                  Matías Parfum
                </h3>
                <p className="mt-3 max-w-md text-mh-muted">
                  E-commerce de perfumería de lujo
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {["Next.js", "Diseño premium", "E-commerce"].map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-mh-border px-3 py-1 text-xs text-mh-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-mh-border transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                <ScreenshotImage
                  src={MATIAS_PARFUM_SCREENSHOT}
                  alt="Captura del sitio Matías Parfum"
                  gradient="from-mh-bg via-mh-surface to-black"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-black/30" />
                <span className="absolute bottom-5 left-5 text-sm font-medium text-white/70">
                  matiasparfum.com
                </span>
              </div>
            </div>
          </motion.div>

          {/* Demo projects */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {DEMO_PROJECTS.map((project) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.015 }}
                className="group relative overflow-hidden rounded-xl border border-mh-border bg-mh-surface p-8 transition-colors duration-300 hover:border-mh-border-hover"
              >
                <div
                  aria-hidden
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  {project.image ? (
                    <div className="relative h-[200px] w-full overflow-hidden rounded-lg border border-mh-border">
                      <ScreenshotImage
                        src={project.image}
                        alt={`Captura del sitio ${project.title}`}
                        gradient={project.gradient}
                        className="h-full w-full"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                    </div>
                  ) : (
                    <div
                      className={`h-[200px] w-full overflow-hidden rounded-lg border border-mh-border bg-gradient-to-br ${project.gradient} bg-mh-bg`}
                    />
                  )}
                  <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                    {project.badge}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-mh-muted">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-mh-border px-3 py-1 text-xs text-mh-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center text-sm font-medium text-white underline-offset-4 hover:underline"
                    >
                      Ver proyecto
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
