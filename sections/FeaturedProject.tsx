"use client";

import { motion } from "framer-motion";
import { Terminal, Lock, Globe, Archive } from "lucide-react";

const projectData = {
  id: "PROJ_01",
  status: "ARCHIVED / OFFLINE",
  category: "FULL STACK WEB APP",
  title: "Giro da Copa",
  domain: "girodacopa.com.br",
  description:
    "De uma página de placares a um SaaS de bolões com pagamentos via Pix e Web Push. Desenvolvido com Clean Architecture em .NET 9, CQRS e React 19. Conta com automação de pagamentos (Mercado Pago), notificações VAPID e armazenamento em nuvem.",
  metrics: [
    { label: "Usuários", value: "42" },
    { label: "Palpites", value: "1.799+" },
    { label: "Bolões", value: "4 (Standard & VIP)" },
  ],
  techs: [
    "React 19",
    ".NET 9",
    "Clean Architecture",
    "PostgreSQL",
    "EF Core",
    "CQRS / MediatR",
    "Mercado Pago Pix",
    "Cloudflare R2",
    "Docker",
  ],
  image: "/images/girodacopa.jpg",
  isPrivateRepo: true,
};

export function FeaturedProject() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem 1.5rem",
        borderBottom: "1px solid var(--border)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontFamily: "var(--font-mono)",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "#00f0ff",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Terminal size={14} /> 00. FEATURED_PROJECT
          </p>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group"
          style={{
            position: "relative",
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            overflow: "hidden",
            transition: "border-color 0.3s ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #00f0ff, transparent)",
              opacity: 0.8,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 items-center">
            <div className="lg:col-span-7 flex flex-col justify-between h-full z-10">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      color: "#f59e0b",
                      background: "rgba(245, 158, 11, 0.08)",
                      border: "1px solid rgba(245, 158, 11, 0.25)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <Archive size={12} />
                    [{projectData.status}]
                  </span>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      color: "var(--muted-custom)",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "4px",
                    }}
                  >
                    [{projectData.category}]
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "var(--fg)",
                    letterSpacing: "-0.02em",
                    marginBottom: "0.2rem",
                  }}
                >
                  {projectData.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    color: "var(--muted-custom)",
                    marginBottom: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                >
                  <Globe size={13} /> {projectData.domain}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: "var(--muted-custom)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {projectData.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {projectData.techs.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "#00f0ff",
                        background: "rgba(0, 240, 255, 0.05)",
                        border: "1px solid rgba(0, 240, 255, 0.2)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "4px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "1.25rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "var(--muted-custom)",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border)",
                    padding: "0.65rem 1.25rem",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span>Projeto Concluído</span>
                </span>

                {projectData.isPrivateRepo && (
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--muted-custom)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <Lock size={13} style={{ color: "var(--muted-custom)" }} />
                    Repositório Privado
                  </span>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 relative z-10">
              <div
                style={{
                  borderRadius: "6px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    padding: "0.6rem 0.8rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div style={{ display: "flex", gap: "0.4rem" }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      color: "var(--muted-custom)",
                      background: "rgba(0,0,0,0.4)",
                      padding: "0.15rem 0.6rem",
                      borderRadius: "4px",
                      border: "1px solid var(--border)",
                      maxWidth: "180px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {projectData.domain}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--muted-custom)",
                      opacity: 0.7,
                    }}
                  >
                    OFFLINE
                  </div>
                </div>

                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={projectData.image}
                    alt={`${projectData.title} Preview`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}