"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const certifications = [
  {
    num: "01",
    title: "Sintaxe e Tipos de Dados em C#",
    institution: "DIO",
    duration: "3h",
    date: "12/05/2026",
    code: "NCWE9AFP",
    url: "https://www.dio.me/certificate/NCWE9AFP",
    accent: "rgba(34,197,94,0.5)", 
    accentSoft: "rgba(34,197,94,0.04)",
  },
  {
    num: "02",
    title: "Git e GitHub: Primeiros Passos e Configuração",
    institution: "DIO",
    duration: "2h",
    date: "09/05/2026",
    code: "GDZKLZNB",
    url: "https://www.dio.me/certificate/GDZKLZNB",
    accent: "rgba(168,85,247,0.5)", 
    accentSoft: "rgba(168,85,247,0.04)",
  },
  {
    num: "03",
    title: "Introdução as IDEs e Ambiente .NET",
    institution: "DIO",
    duration: "2h",
    date: "06/05/2026",
    code: "XXV6TIF4",
    url: "https://www.dio.me/certificate/XXV6TIF4",
    accent: "rgba(79,142,247,0.5)", 
    accentSoft: "rgba(79,142,247,0.04)",
  },
  {
    num: "04",
    title: "Carreira 4.0: Soft Skills, LinkedIn e IA",
    institution: "IFPE - Campus Paulista",
    duration: "3h",
    date: "22/04/2026",
    code: "20599070.02672842",
    url: "https://www.even3.com.br/documentos",
    accent: "rgba(234,179,8,0.5)", 
    accentSoft: "rgba(234,179,8,0.04)",
  },
  {
    num: "05",
    title: "Contribuindo em Projetos Open Source",
    institution: "DIO",
    duration: "1h",
    date: "12/05/2026",
    code: "MH0MYXV2",
    url: "https://www.dio.me/certificate/MH0MYXV2",
    accent: "rgba(168,85,247,0.5)",
    accentSoft: "rgba(168,85,247,0.04)",
  },
  {
    num: "06",
    title: "Desafios de Projetos: Portfólio Vencedor",
    institution: "DIO",
    duration: "1h",
    date: "12/05/2026",
    code: "ISCWT8W2",
    url: "https://www.dio.me/certificate/ISCWT8W2",
    accent: "rgba(79,142,247,0.5)",
    accentSoft: "rgba(79,142,247,0.04)",
  },
];

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? cert.accentSoft : "var(--card-bg)",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.4s ease",
        borderBottom: "0.5px solid var(--border)",
        borderRight: (index + 1) % 3 !== 0 ? "0.5px solid var(--border)" : "none", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "between",
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
          background: `linear-gradient(90deg, transparent, ${cert.accent}, transparent)`,
          transformOrigin: "center",
        }}
      />

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <span style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: cert.accent }}>
            {cert.institution}
          </span>
          <span style={{ fontSize: "0.75rem", fontWeight: 300, color: "var(--muted-custom)" }}>
            {cert.duration}
          </span>
        </div>

        <h3 style={{
          fontSize: "1rem",
          fontWeight: 400,
          marginBottom: "1.5rem",
          lineHeight: 1.4,
          color: "var(--fg)",
        }}>
          {cert.title}
        </h3>
      </div>

      <div style={{ marginTop: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.75rem" }}>
          <p style={{ color: "var(--muted-custom)", fontWeight: 300 }}>{cert.date}</p>
          <a 
            href={cert.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: "var(--fg)", 
              textDecoration: "none", 
              borderBottom: "1px solid transparent",
              transition: "border 0.2s",
              fontWeight: 400
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderBottom = `1px solid ${cert.accent}`}
            onMouseLeave={(e) => e.currentTarget.style.borderBottom = "1px solid transparent"}
          >
            Ver credencial ↗
          </a>
        </div>
      </div>

      <motion.div
        animate={{ opacity: hovered ? 0.7 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          bottom: "-50px",
          right: "-50px",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          background: cert.accent,
          filter: "blur(45px)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}

export function Certifications() {
  return (
    <section id="certifications" style={{ padding: "5rem 1.5rem", borderBottom: "0.5px solid var(--border)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
        >
          <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--muted-custom)", whiteSpace: "nowrap" }}>
            Educação & Conquistas
          </p>
          <div style={{ flex: 1, height: "0.5px", background: "var(--section-label-line)" }} />
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          borderTop: "0.5px solid var(--border)",
          borderLeft: "0.5px solid var(--border)",
          borderRight: "0.5px solid var(--border)",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          {certifications.map((cert, i) => (
            <CertCard key={cert.num} cert={cert} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}