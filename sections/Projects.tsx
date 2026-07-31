"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, ShieldCheck } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "Gastos Residenciais",
    description: "Aplicação full-stack para controle financeiro doméstico desenvolvida sob princípios da Clean Architecture. Inclui ecossistema robusto de processamento, isolamento de dependências e ambiente totalmente containerizado com Docker Compose.",
    technologies: [".NET 8", "React", "SQL Server", "Docker"],
    testTech: "xUnit (95% Coverage)",
    github: "https://github.com/BrenoRodrigues05/GastosResidenciais",
    accent: "#00f0ff",
    accentSoft: "rgba(0, 240, 255, 0.05)",
  },
  {
    id: "02",
    title: "Sistema de Academia API",
    description: "Solução de backend corporativo construída em Java e Spring Boot focada em resiliência e boas práticas de design. Implementa regras complexas de negócios para gestão automatizada de planos, alunos e matrículas.",
    technologies: ["Java", "Spring Boot", "JPA", "PostgreSQL"],
    testTech: "JUnit/Mockito",
    github: "https://github.com/BrenoRodrigues05/academia-api",
    accent: "#00ff66",
    accentSoft: "rgba(0, 255, 102, 0.05)",
  },
  {
    id: "03",
    title: "Academia Web App",
    description: "Interface web moderna desenvolvida para consumo da API do sistema de academia. Focada em experiência do usuário, gerenciamento de estado eficiente, comunicação via REST e componentes modulares.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    testTech: "Clean UI / Componentized",
    github: "https://github.com/BrenoRodrigues05/academia-web",
    accent: "#ff007f", // Rosa Neon Cyberpunk
    accentSoft: "rgba(255, 0, 127, 0.05)",
  },
  {
    id: "04",
    title: "Gerenciamento de Eventos API",
    description: "API RESTful escalável para gerenciamento de eventos e inscrições. Desenvolvida em arquitetura em camadas estruturada com ASP.NET Core, persistência otimizada via Entity Framework Core e segurança via tokens JWT.",
    technologies: ["ASP.NET Core", "Entity Framework", "SQL Server", "JWT"],
    testTech: "xUnit Tests",
    github: "https://github.com/BrenoRodrigues05/gerenciamento-eventos-api",
    accent: "#bb86fc",
    accentSoft: "rgba(187, 134, 252, 0.05)",
  },
  {
    id: "05",
    title: "Estoque Loja API",
    description: "Sistema de alta performance para controle de inventário mercantil. Arquitetura desacoplada utilizando Repository Pattern, transferência limpa de dados com DTOs/AutoMapper e paginação dinâmica reutilizável a nível de infraestrutura.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "AutoMapper"],
    testTech: "xUnit (100% Services)",
    github: "https://github.com/BrenoRodrigues05/estoque-loja-api",
    accent: "#ffb703",
    accentSoft: "rgba(255, 183, 3, 0.05)",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: hovered ? project.accentSoft : "rgba(15, 23, 42, 0.6)",
        padding: "2rem",
        textDecoration: "none",
        color: "inherit",
        position: "relative",
        overflow: "hidden",
        borderRadius: "6px",
        border: `1px solid ${hovered ? project.accent : "rgba(255, 255, 255, 0.08)"}`,
        boxShadow: hovered ? `0 0 20px ${project.accentSoft}` : "none",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
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
          background: project.accent,
          boxShadow: `0 0 8px ${project.accent}`,
          transformOrigin: "left",
        }}
      />
      <motion.div
        animate={{ opacity: hovered ? 0.25 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          bottom: "-40px",
          right: "-40px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: project.accent,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: project.accent,
              letterSpacing: "0.1em",
              background: "rgba(255, 255, 255, 0.03)",
              padding: "0.2rem 0.5rem",
              borderRadius: "3px",
              border: `1px solid ${hovered ? project.accent : "rgba(255, 255, 255, 0.1)"}`,
            }}
          >
            SYS_PROJECT_{project.id}
          </span>
          <motion.div
            animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0, color: hovered ? project.accent : "#8892b0" }}
            transition={{ duration: 0.2 }}
            style={{ flexShrink: 0 }}
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>

        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            color: "#e2e8f0",
            marginBottom: "0.8rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {project.title}
        </h3>

        <p style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.7, color: "#94a3b8", marginBottom: "1.8rem" }}>
          {project.description}
        </p>
      </div>

      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", alignItems: "center" }}>
          {project.testTech && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                fontSize: "0.7rem",
                fontFamily: "var(--font-mono, monospace)",
                fontWeight: 600,
                color: project.accent === "#ff007f" ? "#ff007f" : "#00ff66",
                background: project.accent === "#ff007f" ? "rgba(255, 0, 127, 0.08)" : "rgba(0, 255, 102, 0.08)",
                border: project.accent === "#ff007f" ? "1px solid rgba(255, 0, 127, 0.25)" : "1px solid rgba(0, 255, 102, 0.25)",
                padding: "0.25rem 0.6rem",
                borderRadius: "3px",
                letterSpacing: "0.02em",
              }}
            >
              <ShieldCheck size={12} />
              {project.testTech}
            </span>
          )}

          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "0.7rem",
                fontFamily: "var(--font-mono, monospace)",
                color: "#cbd5e1",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "0.25rem 0.6rem",
                borderRadius: "3px",
                letterSpacing: "0.02em",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 1.5rem", position: "relative" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}
        >
          <Cpu size={16} style={{ color: "#00f0ff" }} />
          <p
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#00f0ff",
              margin: 0,
            }}
          >
            [SYS_LOG // 05_PROJECTS_LOADED]
          </p>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(0,240,255,0.3), transparent)" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: "3rem",
            color: "#f8fafc",
          }}
        >
          Projetos focados em <span style={{ color: "#00f0ff" }}>performance</span>,<br />
          arquitetura e escalabilidade.
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}