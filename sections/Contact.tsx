"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react"; 
import { useEffect, useState } from "react";

const contactLinks = [
  { label: "E-mail", value: "brenobr10@hotmail.com", href: "mailto:brenobr10@hotmail.com" },
  { label: "GitHub", value: "BrenoRodrigues05", href: "https://github.com/BrenoRodrigues05", external: true },
  { label: "LinkedIn", value: "Breno Rodrigues", href: "https://www.linkedin.com/in/brenorodrigues05/", external: true },
];

export function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="contact" style={{ padding: isMobile ? "3rem 1.5rem" : "5rem 1.5rem", borderBottom: "0.5px solid var(--border)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
        >
          <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--muted-custom)", whiteSpace: "nowrap" }}>
            Contato
          </p>
          <div style={{ flex: 1, height: "0.5px", background: "var(--section-label-line)" }} />
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "3rem" : "5rem",
          alignItems: "start",
        }}>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              color: "var(--fg)",
            }}>
              Pronto para levar o seu projeto ao próximo nível?
            </h2>
            <p style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.75, color: "var(--muted-custom)", marginBottom: "2.5rem" }}>
              Seja para integrar sua equipe de engenharia ou desenvolver uma solução do zero, estou pronto para projetar
              arquiteturas sólidas e interfaces eficientes.
            </p>

            <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem", width: isMobile ? "100%" : "auto" }}>
              <motion.a 
                href="mailto:brenobr10@hotmail.com" 
                whileHover={{ 
                  background: "rgba(96, 165, 250, 0.15)", 
                  borderColor: "#60a5fa",
                  y: -2 
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background: "rgba(96, 165, 250, 0.06)", 
                  border: "1px solid rgba(96, 165, 250, 0.3)", 
                  color: "var(--fg)",
                  padding: isMobile ? "0.8rem 1rem" : "0.8rem 2rem",
                  borderRadius: "4px",
                  fontSize: "0.82rem", fontWeight: 600,
                  letterSpacing: "0.04em", textDecoration: "none",
                  flex: isMobile ? 1 : "initial",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  transition: "border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease",
                }}
              >
                <Mail size={14} />
                Enviar e-mail
              </motion.a>
              
              <motion.a 
                href="https://github.com/BrenoRodrigues05" 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ opacity: 0.85, y: -2 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background: "var(--fg)", color: "var(--bg)",
                  padding: isMobile ? "0.8rem 1rem" : "0.8rem 2rem",
                  borderRadius: "4px",
                  fontSize: "0.82rem", fontWeight: 500,
                  letterSpacing: "0.04em", textDecoration: "none",
                  flex: isMobile ? 1 : "initial",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  transition: "transform 0.2s ease",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                whileHover={{ borderColor: "rgba(96, 165, 250, 0.4)", x: 4 }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "1.25rem 1.5rem",
                  border: "0.5px solid var(--border)",
                  borderRadius: "6px",
                  background: "var(--card-bg)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", minWidth: 0, flex: 1 }}>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    width: "36px", 
                    height: "36px", 
                    borderRadius: "6px", 
                    background: "rgba(96, 165, 250, 0.05)", 
                    border: "0.5px solid rgba(96, 165, 250, 0.15)",
                    color: "#60a5fa",
                    flexShrink: 0 
                  }}>
                    {link.label === "E-mail" && <Mail size={18} />}
                    {link.label === "GitHub" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    )}
                    {link.label === "LinkedIn" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    )}
                  </div>

                  <div style={{ minWidth: 0, overflow: "hidden" }}>
                    <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--muted-custom)", marginBottom: "0.3rem" }}>
                      {link.label}
                    </p>
                    <p style={{
                      fontSize: isMobile ? "0.85rem" : "0.92rem",
                      fontWeight: 500,
                      color: "var(--fg)",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}>
                      {link.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={15} style={{ flexShrink: 0, marginLeft: "1rem", color: "var(--muted-custom)" }} />
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}