"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaDatabase, FaJava } from "react-icons/fa6";
import {
  SiSharp, SiDotnet, SiReact, SiNextdotjs, SiTypescript,
  SiTailwindcss, SiDocker, SiGit, SiSpringboot, SiMysql,
  SiPostgresql, SiDbeaver, SiPostman, SiNodedotjs
} from "react-icons/si";

const categories = [
  {
    label: "Backend",
    accent: "rgba(79,142,247,0.7)",
    accentSoft: "rgba(79,142,247,0.07)",
    technologies: [
      { name: "C#", icon: SiSharp },
      { name: ".NET", icon: SiDotnet },
      { name: "Entity Framework", icon: SiDotnet }, 
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
    ],
  },
  {
    label: "Frontend",
    accent: "rgba(168,85,247,0.7)",
    accentSoft: "rgba(168,85,247,0.07)",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Node.js", icon: SiNodedotjs }, 
    ],
  },
  {
    label: "Dados & Infra",
    accent: "rgba(34,197,94,0.7)",
    accentSoft: "rgba(34,197,94,0.07)",
    technologies: [
      { name: "SQL Server", icon: FaDatabase },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "DBeaver", icon: SiDbeaver },
      { name: "Postman", icon: SiPostman }, 
    ],
  },
];

function TechCard({ tech, accent, accentSoft, globalIndex }: {
  tech: { name: string; icon: React.ElementType };
  accent: string;
  accentSoft: string;
  globalIndex: number;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: globalIndex * 0.04 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? accentSoft : "var(--card-bg)",
        padding: "1.75rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
        borderRight: "0.5px solid var(--border)",
        borderBottom: "0.5px solid var(--border)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s ease",
      }}
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          transformOrigin: "center",
        }}
      />

      <motion.div
        animate={{ color: hovered ? accent : "var(--muted-custom)" }}
        transition={{ duration: 0.25 }}
      >
        <Icon size={28} />
      </motion.div>

      <span style={{
        fontSize: "0.72rem",
        color: hovered ? "var(--fg)" : "var(--muted-custom)",
        textAlign: "center",
        letterSpacing: "0.04em",
        transition: "color 0.25s ease",
        fontWeight: hovered ? 500 : 400,
      }}>
        {tech.name}
      </span>
    </motion.div>
  );
}

export function Stack() {
  let globalIndex = 0;

  return (
    <section id="stack" style={{ padding: "5rem 1.5rem", borderBottom: "0.5px solid var(--border)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
        >
          <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--muted-custom)", whiteSpace: "nowrap" }}>
            Stack
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
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "3rem",
            color: "var(--fg)",
          }}
        >
          Tecnologias que utilizo no dia a dia.
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {categories.map((category) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem" }}>
                <span style={{
                  fontSize: "0.68rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "var(--muted-custom)",
                  fontWeight: 500,
                }}>
                  {category.label}
                </span>
                <div style={{ flex: 1, height: "0.5px", background: "var(--border)" }} />
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
                border: "0.5px solid var(--border)",
                borderRadius: "8px",
                overflow: "hidden",
              }}>
                {category.technologies.map((tech) => {
                  const idx = globalIndex++;
                  return (
                    <TechCard
                      key={tech.name}
                      tech={tech}
                      accent={category.accent}
                      accentSoft={category.accentSoft}
                      globalIndex={idx}
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}