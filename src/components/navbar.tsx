"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/5 bg-mh-bg/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#" className="flex items-baseline gap-1.5">
          <span className="text-lg font-bold text-white">MH</span>
          <span className="text-lg font-light text-mh-muted">Studio</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-mh-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="https://wa.me/50683674466"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white transition-colors duration-300 hover:text-mh-bg"
        >
          <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
          <span className="relative">Hablemos →</span>
        </Link>
      </nav>
    </motion.header>
  );
}
