"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Gastos Residenciais",
    description: "Aplicação full-stack de controle financeiro doméstico. Inclui um ecossistema robusto com processamento de dados e autenticação, totalmente containerizado.",
    technologies: [".NET", "React", "SQL Server", "Docker"],
    github: "https://github.com/BrenoRodrigues05/GastosResidenciais",
  },
   {
    title: "Gerenciamento de Eventos API",
    description: "API RESTful para gerenciamento de eventos e inscrições utilizando ASP.NET Core, Entity Framework Core e arquitetura em camadas.",
    technologies: ["ASP.NET Core", "Entity Framework", "SQL Server", "JWT"],
    github: "https://github.com/BrenoRodrigues05/gerenciamento-eventos-api",
  },
  {
    title: "Sistema de Academia API",
    description: "Aplicação backend com Java e Spring Boot focada em APIs escaláveis e arquitetura corporativa robusta pensada para gerenciar alunos, planos e matrículas de uma academia.",
    technologies: ["Java", "Spring Boot", "JPA", "PostgreSQL"],
    github: "https://github.com/BrenoRodrigues05/academia-api",
  },
  {
    title: "Estoque Loja API",
    description: "Sistema backend para gerenciamento de estoque com repository pattern, DTOs, paginação reutilizável e boas práticas de arquitetura.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "AutoMapper"],
    github: "https://github.com/BrenoRodrigues05/estoque-loja-api",
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ padding: "5rem 1.5rem", borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
        >
          <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.22em", color: "#52525b", whiteSpace: "nowrap" }}>
            Projetos
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
          Projetos focados em performance,<br />arquitetura e escalabilidade.
        </motion.h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          border: "0.5px solid rgba(255,255,255,0.07)",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                display: "block",
                background: "#0e1319",
                padding: "2.5rem 2rem",
                textDecoration: "none",
                color: "inherit",
                borderRight: index % 2 === 0 ? "0.5px solid rgba(255,255,255,0.07)" : "none",
                borderBottom: index < 2 ? "0.5px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 500, lineHeight: 1.35, letterSpacing: "-0.01em" }}>
                  {project.title}
                </h3>
                <ArrowUpRight size={16} color="#3f3f46" style={{ flexShrink: 0, marginTop: "2px" }} />
              </div>
              <p style={{ fontSize: "0.87rem", fontWeight: 300, lineHeight: 1.75, color: "#52525b", marginBottom: "1.75rem" }}>
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.technologies.map((tech) => (
                  <span key={tech} style={{
                    fontSize: "0.72rem", color: "#52525b",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                    padding: "0.3rem 0.7rem", borderRadius: "3px",
                    letterSpacing: "0.03em",
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}