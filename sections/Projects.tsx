"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Gastos Residenciais",
    description: "Aplicação full-stack de controle financeiro doméstico. Inclui um ecossistema robusto com processamento de dados e autenticação, totalmente containerizado.",
    technologies: [".NET", "React", "SQL Server", "Docker"],
    github: "https://github.com/BrenoRodrigues05/GastosResidenciais",
    accent: "rgba(79,142,247,0.6)",
    accentSoft: "rgba(79,142,247,0.06)",
  },
  {
    title: "Gerenciamento de Eventos API",
    description: "API RESTful para gerenciamento de eventos e inscrições utilizando ASP.NET Core, Entity Framework Core e arquitetura em camadas.",
    technologies: ["ASP.NET Core", "Entity Framework", "SQL Server", "JWT"],
    github: "https://github.com/BrenoRodrigues05/gerenciamento-eventos-api",
    accent: "rgba(168,85,247,0.6)",
    accentSoft: "rgba(168,85,247,0.06)",
  },
  {
    title: "Sistema de Academia API",
    description: "Aplicação backend com Java e Spring Boot focada em APIs escaláveis e arquitetura corporativa robusta pensada para gerenciar alunos, planos e matrículas de uma academia.",
    technologies: ["Java", "Spring Boot", "JPA", "PostgreSQL"],
    github: "https://github.com/BrenoRodrigues05/academia-api",
    accent: "rgba(34,197,94,0.6)",
    accentSoft: "rgba(34,197,94,0.06)",
  },
  {
    title: "Estoque Loja API",
    description: "Sistema backend para gerenciamento de estoque com repository pattern, DTOs, paginação reutilizável e boas práticas de arquitetura.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "AutoMapper"],
    github: "https://github.com/BrenoRodrigues05/estoque-loja-api",
    accent: "rgba(251,146,60,0.6)",
    accentSoft: "rgba(251,146,60,0.06)",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  const borderRight = index % 2 === 0 ? "0.5px solid var(--border)" : "none";
  const borderBottom = index < 2 ? "0.5px solid var(--border)" : "none";

  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        background: hovered ? project.accentSoft : "var(--card-bg)",
        padding: "2.5rem 2rem",
        textDecoration: "none",
        color: "inherit",
        borderRight,
        borderBottom,
        position: "relative",
        overflow: "hidden",
        transition: "background 0.35s ease",
      }}
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          transformOrigin: "center",
        }}
      />

      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          bottom: "-50px", right: "-50px",
          width: "140px", height: "140px",
          borderRadius: "50%",
          background: project.accent,
          filter: "blur(55px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 500, lineHeight: 1.35, letterSpacing: "-0.01em", color: "var(--fg)" }}>
          {project.title}
        </h3>
        <motion.div
          animate={{ x: hovered ? 2 : 0, y: hovered ? -2 : 0, color: hovered ? project.accent : "var(--muted-custom)" }}
          transition={{ duration: 0.2 }}
          style={{ flexShrink: 0, marginTop: "2px" }}
        >
          <ArrowUpRight size={16} />
        </motion.div>
      </div>

      <p style={{ fontSize: "0.87rem", fontWeight: 300, lineHeight: 1.75, color: "var(--muted-custom)", marginBottom: "1.75rem" }}>
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.technologies.map((tech) => (
          <span key={tech} style={{
            fontSize: "0.72rem",
            color: "var(--muted-custom)",
            border: "0.5px solid var(--border)",
            padding: "0.3rem 0.7rem",
            borderRadius: "3px",
            letterSpacing: "0.03em",
            transition: "border-color 0.2s ease, color 0.2s ease",
          }}>
            {tech}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export function Projects() {
  return (
    <section id="projects" style={{ padding: "5rem 1.5rem", borderBottom: "0.5px solid var(--border)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
        >
          <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--muted-custom)", whiteSpace: "nowrap" }}>
            Projetos
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
          Projetos focados em performance,<br />arquitetura e escalabilidade.
        </motion.h2>

        <div className="projects-grid" style={{
          border: "0.5px solid var(--border)",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}