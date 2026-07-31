"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border, rgba(255, 255, 255, 0.08))",
        background: "rgba(10, 15, 28, 0.8)",
        backdropFilter: "blur(8px)",
        padding: "2rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #00f0ff, transparent)",
          opacity: 0.6,
        }}
      />

      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.7rem",
                fontFamily: "var(--font-mono, monospace)",
                color: "#00ff66",
                background: "rgba(0, 255, 102, 0.08)",
                border: "1px solid rgba(0, 255, 102, 0.25)",
                padding: "0.2rem 0.52rem",
                borderRadius: "3px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#00ff66",
                  boxShadow: "0 0 6px #00ff66",
                }}
              />
              SYS_ONLINE
            </span>

            <p
              style={{
                fontSize: "0.825rem",
                fontFamily: "var(--font-mono, monospace)",
                color: "var(--fg, #cbd5e1)",
                margin: 0,
              }}
            >
              © {currentYear} <span style={{ color: "#00f0ff" }}>Breno Rodrigues</span>. All rights reserved.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <motion.a
              href="https://github.com/BrenoRodrigues05"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2, color: "#00f0ff" }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.8rem",
                fontFamily: "var(--font-mono, monospace)",
                color: "var(--muted-custom, #94a3b8)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/brenorodrigues05/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2, color: "#bb86fc" }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.8rem",
                fontFamily: "var(--font-mono, monospace)",
                color: "var(--muted-custom, #94a3b8)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px dashed rgba(255, 255, 255, 0.08)",
            paddingTop: "0.85rem",
            fontSize: "0.68rem",
            fontFamily: "var(--font-mono, monospace)",
            color: "rgba(255, 255, 255, 0.35)",
          }}
        >
          <span>LOC: RECIFE_PE // BRAZIL</span>
          <span>STACK: .NET 8 + REACT</span>
        </div>
      </div>
    </footer>
  );
}