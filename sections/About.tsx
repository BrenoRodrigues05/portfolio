"use client";

import { motion } from "framer-motion";

const cards = [
  {
    num: "01",
    title: "Backend",
    text: "Construção de ecossistemas corporativos seguros e de alto desempenho, priorizando APIs REST robustas sob os ecossistemas .NET e Java.",
  },
  {
    num: "02",
    title: "Frontend",
    text: "Desenvolvimento de interfaces rápidas, intuitivas e esteticamente minimalistas com React e Next.js, mantendo o foco total na retenção do usuário.",  },
  {
    num: "03",
    title: "Arquitetura",
    text: "Domínio prático de padrões de mercado (Repository, Unit of Work, DTOs) garantindo código escalável, testável e fácil de manter em equipe.",  },
];

export function About() {
  return (
    <section id="about" style={{ padding: "5rem 1.5rem", borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
        >
          <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.22em", color: "#52525b", whiteSpace: "nowrap" }}>
            Sobre mim
          </p>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "3rem",
            maxWidth: "640px",
          }}
        >
          Eu transformo regras de negócio complexas em arquiteturas de código limpas e escaláveis.
        </motion.h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          border: "0.5px solid rgba(255,255,255,0.07)",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: "#0e1319",
                padding: "2.5rem 2rem",
                borderRight: i < 2 ? "0.5px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <p style={{
                fontFamily: "var(--font-serif)",
                fontSize: "3rem",
                lineHeight: 1,
                color: "rgba(79,142,247,0.15)",
                marginBottom: "1.5rem",
              }}>
                {card.num}
              </p>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 500, marginBottom: "0.85rem", letterSpacing: "-0.01em" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "0.87rem", fontWeight: 300, lineHeight: 1.75, color: "#52525b" }}>
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}