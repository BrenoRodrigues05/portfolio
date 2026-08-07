"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, Rocket, Coffee } from "lucide-react";

export function PersonalBio() {
    return (
        <section
        id="about-bio"
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
                <Terminal size={14} /> 01. ABOUT_ME // BIOGRAPHY
            </p>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "2.5rem 2rem",
                position: "relative",
                overflow: "hidden",
            }}
            >
            <div
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, #00f0ff, transparent)",
                }}
            />

            <h2
                style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                lineHeight: 1.3,
                color: "var(--fg)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: "1.75rem",
                }}
            >
                Engenharia de Software centrada em <span style={{ color: "#00f0ff" }}>arquiteturas escaláveis</span> e entrega contínua.
            </h2>

            <div
                style={{
                fontSize: "0.95rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "var(--muted-custom)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                }}
            >
                <p>
                Olá! Sou desenvolvedor <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Full Stack</strong> com foco em <strong style={{ color: "#00f0ff", fontWeight: 500 }}>C# / .NET 9</strong> e <strong style={{ color: "#eab308", fontWeight: 500 }}>Java / Spring Boot</strong>, dedicado ao desenvolvimento de <strong style={{ color: "var(--fg)", fontWeight: 500 }}>APIs RESTful</strong> robustas e de fácil manutenção. Tenho experiência prática na estruturação de backend aplicando <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Clean Architecture</strong>, <strong style={{ color: "var(--fg)", fontWeight: 500 }}>CQRS (MediatR)</strong>, <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Entity Framework Core</strong>, <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Spring Data JPA/Hibernate</strong>, bancos <strong style={{ color: "var(--fg)", fontWeight: 500 }}>PostgreSQL / SQL Server</strong> e autenticação segura, além de padrões como DTOs, Repository e princípios <strong style={{ color: "#00f0ff", fontWeight: 500 }}>SOLID</strong>.
                </p>

                <p>
                No ecossistema frontend, desenvolvo interfaces modernas e responsivas utilizando <strong style={{ color: "var(--fg)", fontWeight: 500 }}>React 19</strong>, <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Next.js</strong>, <strong style={{ color: "var(--fg)", fontWeight: 500 }}>TypeScript</strong> e <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Tailwind CSS</strong>, priorizando performance, consumo eficiente de APIs e boas práticas de UX/SEO.
                </p>

                <p>
                Ao longo dos meus projetos, projetei e coloquei em produção sistemas e ecossistemas completos — como a plataforma <strong style={{ color: "#00f0ff", fontWeight: 500 }}>girodacopa.com.br</strong> (com integração Pix automatizada via Mercado Pago, Web Push VAPID e Cloudflare R2) e a <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Academia API</strong>, uma aplicação em Java/Spring Boot focada em gestão de alunos e matrículas. Mantenho um aprendizado constante, ampliando conhecimentos em <strong style={{ color: "#00f0ff", fontWeight: 500 }}>Microsoft Azure Cloud</strong>, <strong style={{ color: "var(--fg)", fontWeight: 500 }}>Docker</strong> e containerização por meio de projetos práticos e certificações.
                </p>
            </div>
            <div
                style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginTop: "2rem",
                paddingTop: "1.5rem",
                borderTop: "1px dashed var(--border)",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "#00f0ff" }}>
                <Cpu size={14} /> .NET 9 & C# Specialist
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "#eab308" }}>
                <Coffee size={14} /> Java / Spring Boot Ecosystem
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "#bb86fc" }}>
                <Code2 size={14} /> React / Next.js
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "#4ade80" }}>
                <Rocket size={14} /> Cloud & Live Deploy
                </div>
            </div>

            </motion.div>

        </div>
        </section>
    );
}