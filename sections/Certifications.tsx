"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, ShieldCheck } from "lucide-react";

const certifications = [
  {
    num: "ACHIEVEMENT_01",
    title: "Sintaxe e Tipos de Dados em C#",
    institution: "DIO",
    duration: "3h",
    date: "12/05/2026",
    code: "NCWE9AFP",
    url: "https://www.dio.me/certificate/NCWE9AFP",
    accent: "#00f0ff", 
    accentSoft: "rgba(0, 240, 255, 0.05)",
  },
  {
    num: "ACHIEVEMENT_02",
    title: "Git e GitHub: Primeiros Passos e Configuração",
    institution: "DIO",
    duration: "2h",
    date: "09/05/2026",
    code: "GDZKLZNB",
    url: "https://www.dio.me/certificate/GDZKLZNB",
    accent: "#bb86fc",
    accentSoft: "rgba(187, 134, 252, 0.05)",
  },
  {
    num: "ACHIEVEMENT_03",
    title: "Introdução às IDEs e Ambiente .NET",
    institution: "DIO",
    duration: "2h",
    date: "06/05/2026",
    code: "XXV6TIF4",
    url: "https://www.dio.me/certificate/XXV6TIF4",
    accent: "#3b82f6", 
    accentSoft: "rgba(59, 130, 246, 0.05)",
  },
  {
    num: "ACHIEVEMENT_04",
    title: "Carreira 4.0: Soft Skills, LinkedIn e IA",
    institution: "IFPE - Campus Paulista",
    duration: "3h",
    date: "22/04/2026",
    code: "20599070.02672842",
    url: "https://www.even3.com.br/documentos",
    accent: "#eab308",
    accentSoft: "rgba(234, 179, 8, 0.05)",
  },
  {
    num: "ACHIEVEMENT_05",
    title: "Contribuindo em Projetos Open Source",
    institution: "DIO",
    duration: "1h",
    date: "12/05/2026",
    code: "MH0MYXV2",
    url: "https://www.dio.me/certificate/MH0MYXV2",
    accent: "#bb86fc",
    accentSoft: "rgba(187, 134, 252, 0.05)",
  },
  {
    num: "ACHIEVEMENT_06",
    title: "Desafios de Projetos: Portfólio Vencedor",
    institution: "DIO",
    duration: "1h",
    date: "12/05/2026",
    code: "ISCWT8W2",
    url: "https://www.dio.me/certificate/ISCWT8W2",
    accent: "#4ade80", 
    accentSoft: "rgba(74, 222, 128, 0.05)",
  },
];

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? cert.accentSoft : "var(--card-bg)",
        padding: "1.75rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s ease",
        borderRight: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${cert.accent}, transparent)`,
          transformOrigin: "center",
        }}
      />

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <ShieldCheck size={14} style={{ color: cert.accent }} />
            <span
              style={{
                fontSize: "0.7rem",
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: cert.accent,
                fontWeight: 600,
              }}
            >
              [{cert.institution}]
            </span>
          </div>

          <span
            style={{
              fontSize: "0.72rem",
              fontFamily: "var(--font-mono)",
              color: "var(--muted-custom)",
              background: "rgba(255, 255, 255, 0.03)",
              padding: "0.15rem 0.5rem",
              borderRadius: "4px",
              border: "1px solid var(--border)",
            }}
          >
            {cert.duration}
          </span>
        </div>

        <h3
          style={{
            fontSize: "1.05rem",
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
            lineHeight: 1.4,
            marginBottom: "1rem",
            color: "var(--fg)",
          }}
        >
          {cert.title}
        </h3>

        <p
          style={{
            fontSize: "0.68rem",
            fontFamily: "var(--font-mono)",
            color: "var(--muted-custom)",
            marginBottom: "1.5rem",
            opacity: 0.8,
          }}
        >
          HASH: <span style={{ color: "var(--fg)" }}>{cert.code}</span>
        </p>
      </div>

      <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", 
          alignItems: "center",
          fontSize: "0.75rem",
          fontFamily: "var(--font-mono)",
          borderTop: "1px dashed var(--border)",
          paddingTop: "0.85rem",
        }}
      >
          <span style={{ color: "var(--muted-custom)", fontSize: "0.7rem" }}>
            ISSUED: {cert.date}
          </span>

          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              color: hovered ? cert.accent : "var(--fg)",
              textDecoration: "none",
              transition: "color 0.2s ease",
              fontWeight: 500,
              fontSize: "0.75rem",
            }}
          >
            VERIFY_LOG <ExternalLink size={12} />
          </a>
        </div>
      </div>

      <motion.div
        animate={{ opacity: hovered ? 0.35 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          bottom: "-40px",
          right: "-40px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: cert.accent,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}

export function Certifications() {
  return (
    <section id="certifications" style={{ padding: "6rem 1.5rem", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontFamily: "var(--font-mono)",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "#00f0ff",
              whiteSpace: "nowrap",
            }}
          >
            03. ACHIEVEMENTS_LOG
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
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "3.5rem",
            color: "var(--fg)",
            fontWeight: 700,
          }}
        >
          Certificações & Conquistas Desbloqueadas.
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            borderTop: "1px solid var(--border)",
            borderLeft: "1px solid var(--border)",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          {certifications.map((cert, i) => (
            <CertCard key={cert.num} cert={cert} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}