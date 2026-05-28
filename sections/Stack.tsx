"use client";

import { motion } from "framer-motion";
import { FaDatabase, FaJava } from "react-icons/fa6";
import {
  SiSharp, SiDotnet, SiReact, SiNextdotjs, SiTypescript,
  SiTailwindcss, SiDocker, SiGit, SiSpringboot, SiMysql,
  SiPostgresql, SiDbeaver,
} from "react-icons/si";

const technologies = [
  { name: "C#", icon: SiSharp },
  { name: ".NET", icon: SiDotnet },
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "SQL Server", icon: FaDatabase },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "DBeaver", icon: SiDbeaver },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
];

export function Stack() {
  return (
    <section id="stack" style={{ padding: "5rem 1.5rem", borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
        >
          <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.22em", color: "#52525b", whiteSpace: "nowrap" }}>
            Stack
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
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "3rem",
          }}
        >
          Tecnologias que utilizo no dia a dia.
        </motion.h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
          border: "0.5px solid rgba(255,255,255,0.07)",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                viewport={{ once: true }}
                style={{
                  background: "#0e1319",
                  padding: "1.75rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.75rem",
                  borderRight: "0.5px solid rgba(255,255,255,0.07)",
                  borderBottom: "0.5px solid rgba(255,255,255,0.07)",
                  cursor: "default",
                }}
              >
                <Icon size={32} color="#71717a" />
                <span style={{ fontSize: "0.75rem", color: "#52525b", textAlign: "center", letterSpacing: "0.04em" }}>
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}