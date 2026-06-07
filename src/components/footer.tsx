import Link from "next/link";

const COLUMNS = [
  {
    title: "Servicios",
    links: [
      { label: "Sitios Web", href: "#servicios" },
      { label: "Tiendas Online", href: "#servicios" },
      { label: "Chatbots con IA", href: "#servicios" },
      { label: "Automatizaciones", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Portfolio", href: "#portfolio" },
      { label: "Proceso", href: "#proceso" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "WhatsApp", href: "https://wa.me/50683674466?text=Hola%2C%20vi%20su%20sitio%20web%20y%20me%20interesa%20cotizar%20un%20proyecto" },
      { label: "Costa Rica 🇨🇷", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="#" className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-white">MH</span>
              <span className="text-lg font-light text-mh-muted">Studio</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-mh-muted">
              Sitios web que convierten clientes.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-mh-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-mh-border pt-8 text-sm text-mh-muted sm:flex-row">
          <p>Hecho con ❤️ en Costa Rica 🇨🇷</p>
          <p>© 2026 MH Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
