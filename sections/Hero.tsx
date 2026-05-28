"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section 
      style={{ 
        padding: isMobile ? "4.5rem 1.5rem 3rem 1.5rem" : "6.5rem 1.5rem 5rem 1.5rem", 
        borderBottom: "0.5px solid var(--border)" 
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: "1rem",
          marginBottom: "2rem",
        }}>
          
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              fontSize: "0.82rem", textTransform: "uppercase",
              letterSpacing: "0.28em", color: "#60a5fa",
              fontWeight: 600,
            }}
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ display: "inline-block", width: "32px", height: "1.5px", background: "#60a5fa", transformOrigin: "left" }}
            />
            Full Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "flex-start" : "flex-end", gap: "0.3rem" }}
          >
            <span style={{
              display: "flex", alignItems: "center", gap: "0.6rem",
              fontSize: "0.82rem", color: "#4ade80",
              fontWeight: 600, letterSpacing: "0.04em",
              background: "rgba(74,222,128,0.08)",
              padding: "0.35rem 0.75rem",
              borderRadius: "999px",
              border: "1px solid rgba(74,222,128,0.2)",
            }}>
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", display: "inline-block", flexShrink: 0 }}
              />
              Disponível para oportunidades
            </span>
            <span style={{ fontSize: "0.72rem", letterSpacing: "0.05em", color: "var(--muted-custom)", paddingRight: "0.25rem" }}>Recife, BR</span>
          </motion.div>
        </div>

        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: "2rem",
          marginBottom: "2rem",
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: isMobile ? "2.4rem" : "clamp(4rem, 10vw, 7.5rem)",
              lineHeight: isMobile ? 1.2 : 0.9,
              letterSpacing: "-0.03em",
              color: "var(--fg)",
              whiteSpace: isMobile ? "nowrap" : "normal",
            }}
          >
            Breno{!isMobile && <br />} Rodrigues
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: isMobile ? "200px" : "260px",
              height: isMobile ? "200px" : "260px",
              alignSelf: isMobile ? "center" : "auto",
              borderRadius: "50%",
              border: "2px solid rgba(96,165,250,0.3)",
              boxShadow: "0 0 0 6px rgba(96,165,250,0.06), 0 20px 60px rgba(0,0,0,0.18)",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, var(--card-bg) 0%, var(--bg) 100%)",
            }} />
            <img
              src="/images/breno-avatar.png"
              alt="Breno Rodrigues - Full Stack Developer"
              style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative", zIndex: 1 }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: "0.5px", background: "var(--border)", marginBottom: "2rem", transformOrigin: "left" }}
        />

        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          gap: "2rem",
          alignItems: isMobile ? "flex-start" : "center",
        }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: "var(--muted-custom)", maxWidth: "480px" }}
          >
            Desenvolvendo ecossistemas robustos e APIs escaláveis com{" "}
            <span style={{ color: "#60a5fa", fontWeight: 500 }}>.NET</span> e{" "}
            <span style={{ color: "#60a5fa", fontWeight: 500 }}>Spring Boot</span>
            , integrados a interfaces de alta performance em{" "}
            <span style={{ color: "var(--fg)", fontWeight: 500 }}>React</span> e{" "}
            <span style={{ color: "var(--fg)", fontWeight: 500 }}>Next.js</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", width: isMobile ? "100%" : "auto" }}
          >
            <motion.a
              href="https://github.com/BrenoRodrigues05"
              target="_blank" rel="noreferrer"
              whileHover={{ opacity: 0.85, y: -2 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background: "var(--fg)", color: "var(--bg)",
                padding: "0.75rem 2rem", borderRadius: "4px",
                fontSize: "0.82rem", fontWeight: 500,
                letterSpacing: "0.04em", textDecoration: "none",
                flex: isMobile ? 1 : "initial",
                textAlign: "center",
                transition: "transform 0.2s ease",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </motion.a>

            <motion.a
              href="mailto:brenobr10@hotmail.com"
              whileHover={{ 
                background: "rgba(96, 165, 250, 0.15)", 
                borderColor: "#60a5fa",
                color: "var(--fg)",
                y: -2 
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background: "rgba(96, 165, 250, 0.06)", 
                border: "1px solid rgba(96, 165, 250, 0.3)", 
                color: "var(--fg)",
                padding: "0.75rem 2rem", borderRadius: "4px",
                fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none",
                flex: isMobile ? 1 : "initial",
                textAlign: "center",
                transition: "border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Contato
            </motion.a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}