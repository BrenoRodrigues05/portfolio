"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const contactLinks = [
  { 
    label: "E-mail", 
    value: "brenobr10@hotmail.com", 
    href: "mailto:brenobr10@hotmail.com", 
    icon: Mail,
    color: "#00f0ff" 
  },
  { 
    label: "GitHub", 
    value: "BrenoRodrigues05", 
    href: "https://github.com/BrenoRodrigues05", 
    external: true, 
    icon: Terminal,
    color: "#e8edf5"
  },
  { 
    label: "LinkedIn", 
    value: "Breno Rodrigues", 
    href: "https://www.linkedin.com/in/brenorodrigues05/", 
    external: true, 
    customIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: "#bb86fc" 
  },
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
    <section 
      id="contact" 
      style={{ 
        padding: isMobile ? "4rem 1.5rem" : "6rem 1.5rem", 
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0, 240, 255, 0.02) 1px, transparent 1px)",
        backgroundSize: "100% 4px",
        zIndex: -1, opacity: 0.4
      }} />

      <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}
        >
          <p style={{
            fontSize: "0.78rem",
            fontFamily: "var(--font-mono)",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: "#bb86fc",
            whiteSpace: "nowrap"
          }}>
            05. ESTABELECER_CONTATO
          </p>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "4rem" : "5rem",
          alignItems: "start",
        }}>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              color: "var(--fg)",
              fontWeight: 700
            }}>
              Iniciando novo protocolo de projeto?
            </h2>
            <p style={{ 
              fontSize: "1rem", 
              fontWeight: 300, 
              lineHeight: 1.8, 
              color: "var(--muted-foreground)", 
              marginBottom: "3rem",
              maxWidth: "540px"
            }}>
              Seja para integrar sua equipe de engenharia ou desenvolver uma solução do zero, estou pronto para projetar
              arquiteturas sólidas e interfaces eficientes.
            </p>

            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "1rem" }}>
              <motion.a 
                href="mailto:brenobr10@hotmail.com" 
                whileHover={{ 
                  background: "rgba(0, 240, 255, 0.15)", 
                  borderColor: "#00f0ff",
                  y: -2 
                }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                  background: "rgba(0, 240, 255, 0.05)", 
                  border: "1px solid rgba(0, 240, 255, 0.3)", 
                  color: "#00f0ff",
                  padding: "1rem 2.2rem", borderRadius: "4px",
                  fontSize: "0.85rem", fontWeight: 600, fontFamily: "var(--font-mono)",
                  letterSpacing: "0.04em", textDecoration: "none",
                  textAlign: "center", whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                }}
                className="neon-glow"
              >
                <Mail size={16} />
                [ ENVIAR_EMAIL ]
              </motion.a>
              
              <motion.a 
                href="https://github.com/BrenoRodrigues05" 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ opacity: 0.85, y: -2 }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                  background: "var(--fg)", color: "var(--bg)",
                  padding: "1rem 2.2rem", borderRadius: "4px",
                  fontSize: "0.85rem", fontWeight: 600, fontFamily: "var(--font-mono)",
                  letterSpacing: "0.04em", textDecoration: "none",
                  textAlign: "center", whiteSpace: "nowrap",
                  transition: "transform 0.2s ease",
                }}
              >
                <Terminal size={16} />
                [ VER_GITHUB ]
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  whileHover={{ 
                    borderColor: "rgba(0, 240, 255, 0.3)", 
                    background: "rgba(9, 13, 22, 0.7)",
                    x: 4 
                  }}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "1.25rem 1.5rem",
                    border: "1px solid var(--border)",
                    borderRadius: "4px",
                    background: "rgba(9, 13, 22, 0.3)", 
                    textDecoration: "none",
                    color: "inherit",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  className="cyber-border-sm" 
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", minWidth: 0, flex: 1 }}>
                    <div style={{ 
                      display: "flex", alignItems: "center", justifyContent: "center", 
                      width: "40px", height: "40px", borderRadius: "4px", 
                      background: "rgba(0, 240, 255, 0.04)", 
                      border: "1px solid rgba(0, 240, 255, 0.15)",
                      color: link.color, flexShrink: 0 
                    }}>
                      {link.customIcon ? link.customIcon : Icon && <Icon size={18} strokeWidth={1.5} />}
                    </div>

                    <div style={{ minWidth: 0, overflow: "hidden", fontFamily: "var(--font-mono)" }}>
                      <p style={{ 
                        fontSize: "0.7rem", 
                        textTransform: "uppercase", 
                        letterSpacing: "0.15em", 
                        color: "var(--muted-custom)", 
                        marginBottom: "0.3rem",
                        fontWeight: 500
                      }}>
                        {link.label}
                      </p>
                      <p style={{
                        fontSize: isMobile ? "0.85rem" : "0.95rem",
                        fontWeight: 600,
                        color: "var(--fg)",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        letterSpacing: "-0.01em"
                      }}>
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} style={{ flexShrink: 0, marginLeft: "1rem", color: "var(--muted-custom)", opacity: 0.7 }} />
                  
                  <div className="hover-glow" style={{
                    position: "absolute", inset: 0,
                    background: `radial-gradient(circle at center, ${link.color}10 0%, transparent 70%)`,
                    opacity: 0, transition: "opacity 0.3s ease", zIndex: -1
                  }} />
                </motion.a>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}