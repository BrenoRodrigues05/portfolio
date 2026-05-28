"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        background: "rgba(8,11,16,0.85)",
        backdropFilter: "blur(12px)",
      }}
    >
      <nav style={{
        maxWidth: "72rem",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 1.5rem",
      }}>
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", letterSpacing: "-0.01em" }}>
          Breno Rodrigues
        </span>

        <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#52525b",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}