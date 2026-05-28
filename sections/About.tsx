"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    num: "01",
    title: "Backend",
    text: "Construção de ecossistemas corporativos seguros e de alto desempenho, priorizando APIs REST robustas sob os ecossistemas .NET e Java.",
    accent: "rgba(79,142,247,0.6)",
    accentSoft: "rgba(79,142,247,0.07)",
  },
  {
    num: "02",
    title: "Frontend",
    text: "Desenvolvimento de interfaces rápidas, intuitivas e esteticamente minimalistas com React e Next.js, mantendo o foco total na retenção do usuário.",
    accent: "rgba(168,85,247,0.6)",
    accentSoft: "rgba(168,85,247,0.07)",
  },
  {
    num: "03",
    title: "Arquitetura",
    text: "Domínio prático de padrões de mercado (Repository, Unit of Work, DTOs) garantindo código escalável, testável e fácil de manter em equipe.",
    accent: "rgba(34,197,94,0.6)",
    accentSoft: "rgba(34,197,94,0.07)",
  },
];

function Card({ card, index }: { card: typeof cards[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={card.num}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`about-card${index < 2 ? " about-card-border" : ""}`}
      style={{
        background: hovered ? card.accentSoft : "var(--card-bg)",
        padding: "2.5rem 2rem",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.4s ease",
        cursor: "default",
      }}
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
          transformOrigin: "center",
        }}
      />

      <motion.p
        animate={{ color: hovered ? card.accent : "rgba(79,142,247,0.12)" }}
        transition={{ duration: 0.3 }}
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "3rem",
          lineHeight: 1,
          marginBottom: "1.5rem",
        }}
      >
        {card.num}
      </motion.p>

      <h3 style={{
        fontSize: "1.05rem",
        fontWeight: 500,
        marginBottom: "0.85rem",
        letterSpacing: "-0.01em",
        color: "var(--fg)",
      }}>
        {card.title}
      </h3>

      <p style={{
        fontSize: "0.87rem",
        fontWeight: 300,
        lineHeight: 1.75,
        color: "var(--muted-custom)",
      }}>
        {card.text}
      </p>

      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          bottom: "-40px",
          right: "-40px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: card.accent,
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" style={{ padding: "5rem 1.5rem", borderBottom: "0.5px solid var(--border)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
        >
          <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--muted-custom)", whiteSpace: "nowrap" }}>
            Sobre mim
          </p>
          <div style={{ flex: 1, height: "0.5px", background: "var(--section-label-line)" }} />
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
            color: "var(--fg)",
          }}
        >
          Eu transformo regras de negócio complexas em arquiteturas de código limpas e escaláveis.
        </motion.h2>

        <div className="about-cards" style={{
          border: "0.5px solid var(--border)",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          {cards.map((card, i) => (
            <Card key={card.num} card={card} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}