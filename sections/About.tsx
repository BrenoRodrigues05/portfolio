"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Cpu, Terminal, Shield, Sparkles } from "lucide-react";

const cards = [
  {
    num: "CLASS_01",
    title: "Backend Engineering",
    text: "Construção de ecossistemas corporativos seguros e de alto desempenho, priorizando APIs REST robustas sob os ecossistemas .NET e Java Spring Boot.",
    accent: "#00f0ff",
    accentSoft: "rgba(0, 240, 255, 0.06)",
    icon: Cpu
  },
  {
    num: "CLASS_02",
    title: "Frontend Matrix",
    text: "Desenvolvimento de interfaces rápidas, intuitivas e esteticamente cibernéticas com React e Next.js, focando em UX e máxima retenção do usuário.",
    accent: "#bb86fc",
    accentSoft: "rgba(187, 134, 252, 0.06)",
    icon: Sparkles
  },
  {
    num: "CLASS_03",
    title: "System Architecture",
    text: "Domínio prático de padrões de mercado (Repository, Unit of Work, Clean Arch, DTOs) garantindo código escalável, testável e fácil de manter em equipe.",
    accent: "#4ade80",
    accentSoft: "rgba(74, 222, 128, 0.06)",
    icon: Shield
  },
];

function Card({ card, index }: { card: typeof cards[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = card.icon;

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
        transition: "background 0.4s ease, border-color 0.4s ease",
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

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <motion.span
          animate={{ color: hovered ? card.accent : "var(--muted-custom)" }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            fontWeight: 600,
          }}
        >
          [{card.num}]
        </motion.span>
        <Icon size={20} style={{ color: hovered ? card.accent : "var(--muted-custom)", transition: "color 0.3s ease" }} />
      </div>

      <h3 style={{
        fontSize: "1.2rem",
        fontWeight: 600,
        marginBottom: "0.85rem",
        letterSpacing: "-0.01em",
        color: "var(--fg)",
        fontFamily: "var(--font-sans)",
      }}>
        {card.title}
      </h3>

      <p style={{
        fontSize: "0.9rem",
        fontWeight: 300,
        lineHeight: 1.75,
        color: "var(--muted-custom)",
      }}>
        {card.text}
      </p>

      <motion.div
        animate={{ opacity: hovered ? 0.3 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          bottom: "-40px",
          right: "-40px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: card.accent,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" style={{ padding: "6rem 1.5rem", borderBottom: "1px solid var(--border)", position: "relative" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
        >
          <p style={{
            fontSize: "0.78rem",
            fontFamily: "var(--font-mono)",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: "#00f0ff",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <Terminal size={14} /> 02. CHARACTER_LORE
          </p>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: "3.5rem",
            maxWidth: "780px",
            color: "var(--fg)",
            fontWeight: 700,
          }}
        >
          Transformando regras de negócio complexas em <span style={{ color: "#00f0ff" }}>arquiteturas resilientes</span> e código limpo.
        </motion.h2>

        <div className="about-cards" style={{
          border: "1px solid var(--border)",
          borderRadius: "8px",
          overflow: "hidden",
          background: "var(--bg)"
        }}>
          {cards.map((card, i) => (
            <Card key={card.num} card={card} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}