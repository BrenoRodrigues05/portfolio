"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const contactLinks = [
  { label: "E-mail", value: "brenobr10@hotmail.com", href: "mailto:brenobr10@hotmail.com" },
  { label: "GitHub", value: "BrenoRodrigues05", href: "https://github.com/BrenoRodrigues05", external: true },
  { label: "LinkedIn", value: "Breno Rodrigues", href: "https://www.linkedin.com/in/brenorodrigues05/", external: true }, // Adicionado external para consistência
];

export function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  // Monitora a largura da tela para responsividade adaptável
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Quebra em 'lg'
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="contact" style={{ padding: isMobile ? "3rem 1.5rem" : "5rem 1.5rem", borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
        >
          <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.22em", color: "#52525b", whiteSpace: "nowrap" }}>
            Contato
          </p>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
        </motion.div>

        {/* Grid Principal (Vira coluna única no Mobile) */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
          gap: isMobile ? "3rem" : "5rem", 
          alignItems: "start" 
        }}>
          
          {/* Lado Esquerdo: Textos + Botões Rápidos */}
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
            }}>
              Pronto para levar o seu projeto ao próximo nível?
            </h2>
            <p style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.75, color: "#52525b", marginBottom: "2.5rem" }}>
              Seja para integrar sua equipe de engenharia ou desenvolver uma solução do zero, estou pronto para projetar 
              arquiteturas sólidas e interfaces eficientes.
            </p>
            
            {/* Botões rápidos ajustados para mobile (lado a lado) */}
            <div style={{ 
              display: "flex", 
              flexDirection: "row", 
              gap: "0.5rem", 
              width: isMobile ? "100%" : "auto" 
            }}>
              <a href="mailto:brenobr10@hotmail.com" style={{
                background: "#e8edf5", color: "#080b10",
                padding: isMobile ? "0.8rem 1rem" : "0.8rem 2rem",
                borderRadius: "4px",
                fontSize: "0.82rem", fontWeight: 500,
                letterSpacing: "0.04em", textDecoration: "none",
                flex: isMobile ? 1 : "initial",
                textAlign: "center",
                whiteSpace: "nowrap"
              }}>
                Enviar e-mail
              </a>
              <a href="https://github.com/BrenoRodrigues05" target="_blank" rel="noreferrer" style={{
                border: "0.5px solid rgba(255,255,255,0.12)", color: "#71717a",
                padding: isMobile ? "0.8rem 1rem" : "0.8rem 2rem",
                borderRadius: "4px",
                fontSize: "0.82rem", letterSpacing: "0.04em", textDecoration: "none",
                flex: isMobile ? 1 : "initial",
                textAlign: "center",
                whiteSpace: "nowrap"
              }}>
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Lado Direito: Cards de Links Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "1.25rem 1.5rem",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  borderRadius: "6px", background: "#0e1319",
                  textDecoration: "none", color: "inherit",
                }}
              >
                <div style={{ minWidth: 0, overflow: "hidden" }}> {/* Evita vazamento de texto em telas muito estreitas */}
                  <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#3f3f46", marginBottom: "0.3rem" }}>
                    {link.label}
                  </p>
                  <p style={{ 
                    fontSize: isMobile ? "0.85rem" : "0.92rem", // Encolhe sutilmente no mobile para o e-mail não esmagar a seta
                    fontWeight: 500,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap"
                  }}>
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight size={15} color="#3f3f46" style={{ flexShrink: 0, marginLeft: "1rem" }} />
              </a>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}