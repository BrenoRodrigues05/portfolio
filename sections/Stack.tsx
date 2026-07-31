"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaDatabase, FaJava } from "react-icons/fa6";
import {
  SiSharp, SiDotnet, SiReact, SiNextdotjs, SiTypescript,
  SiTailwindcss, SiDocker, SiGit, SiSpringboot, SiMysql,
  SiPostgresql, SiDbeaver, SiPostman, SiNodedotjs
} from "react-icons/si";
import { Cpu, Layers, Database } from "lucide-react";

const categories = [
  {
    label: "Backend Matrix",
    icon: Cpu,
    accent: "#00f0ff",
    accentSoft: "rgba(0, 240, 255, 0.08)",
    technologies: [
      { name: "C#", icon: SiSharp },
      { name: ".NET 8", icon: SiDotnet },
      { name: "EF Core", icon: SiDotnet }, 
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
    ],
  },
  {
    label: "Frontend Core",
    icon: Layers,
    accent: "#bb86fc",
    accentSoft: "rgba(187, 134, 252, 0.08)",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: SiNodedotjs }, 
    ],
  },
  {
    label: "Data & Infrastructure",
    icon: Database,
    accent: "#4ade80",
    accentSoft: "rgba(74, 222, 128, 0.08)",
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
      transition={{ duration: 0.35, delay: globalIndex * 0.03 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? accentSoft : "var(--card-bg)",
        padding: "1.5rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        borderRight: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
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
        animate={{ color: hovered ? accent : "var(--muted-custom)", scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.25 }}
      >
        <Icon size={26} />
      </motion.div>

      <span style={{
        fontSize: "0.75rem",
        color: hovered ? "var(--fg)" : "var(--muted-custom)",
        textAlign: "center",
        letterSpacing: "0.05em",
        fontFamily: "var(--font-mono)",
        transition: "color 0.25s ease",
        fontWeight: hovered ? 600 : 400,
      }}>
        {tech.name}
      </span>
    </motion.div>
  );
}

export function Stack() {
  let globalIndex = 0;

  return (
    <section id="stack" style={{ padding: "6rem 1.5rem", borderBottom: "1px solid var(--border)" }}>
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
            color: "#bb86fc",
            whiteSpace: "nowrap"
          }}>
            02. SKILL_INVENTORY
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
            fontWeight: 700
          }}
        >
          Tecnologias & Ferramentas Equipadas.
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <CategoryIcon size={16} style={{ color: category.accent }} />
                  <span style={{
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    color: "var(--fg)",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                  }}>
                    {category.label}
                  </span>
                  <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
                </div>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(115px, 1fr))",
                  borderTop: "1px solid var(--border)",
                  borderLeft: "1px solid var(--border)",
                  borderRadius: "6px",
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
            );
          })}
        </div>

      </div>
    </section>
  );
}