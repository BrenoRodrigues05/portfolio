"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal, MapPin, Target } from "lucide-react"; 

function BadgeDiferencial({ texto }: { texto: string }) {
  return (
    <span style={{ 
      display: "flex", 
      alignItems: "center", 
      gap: "0.4rem", 
      fontSize: "0.78rem", 
      color: "var(--fg)", 
      fontFamily: "var(--font-mono)",
      fontWeight: 400,
      background: "rgba(0, 240, 255, 0.04)",
      padding: "0.3rem 0.7rem",
      borderRadius: "4px",
      border: "1px solid var(--border)",
      whiteSpace: "nowrap"
    }}>
      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#00f0ff" }} />
      {texto}
    </span>
  );
}

function StatusBadge({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.3rem",
        padding: "0.75rem 1.25rem",
        borderRadius: "6px",
        background: "rgba(9, 13, 22, 0.5)",
        border: `1px solid rgba(0, 240, 255, 0.15)`,
        position: "relative",
        minWidth: "120px"
      }}
      className="neon-glow"
    >
      <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem", width: "4px", height: "4px", borderRadius: "50%", background: color }} />
      <div style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--muted-custom)" }}>
        {label}
      </div>
      <div style={{ fontSize: "1.7rem", fontWeight: 700, color: "var(--fg)", lineHeight: 1, fontFamily: "var(--font-sans)" }}>
        {value}
      </div>
    </motion.div>
  );
}

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
        padding: isMobile ? "7rem 1.5rem 4rem 1.5rem" : "9rem 1.5rem 7rem 1.5rem", 
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px)",
        backgroundSize: "100% 4px",
        zIndex: -1, opacity: 0.5
      }} />

      <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative" }}>

        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          marginBottom: "2.5rem",
        }}>
          
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              fontSize: "0.85rem", textTransform: "uppercase",
              letterSpacing: "0.28em", color: "#00f0ff",
              fontWeight: 600, fontFamily: "var(--font-mono)"
            }}
          >
            <Terminal size={14} style={{ color: "#00f0ff" }} />
            Full Stack Developer // Level: Its Over 9000!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              alignItems: isMobile ? "flex-start" : "flex-end", 
              gap: "0.6rem" 
            }}
          >
            <span style={{
              display: "flex", alignItems: "center", gap: "0.6rem",
              fontSize: "0.8rem", color: "#4ade80",
              fontFamily: "var(--font-mono)",
              fontWeight: 600, letterSpacing: "0.04em",
              background: "rgba(74,222,128,0.08)",
              padding: "0.4rem 1rem",
              borderRadius: "4px",
              border: "1px solid rgba(74,222,128,0.2)",
            }}>
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", display: "inline-block", flexShrink: 0, boxShadow: "0 0 10px #4ade80" }}
              />
              SYSTEM_STATUS://ONLINE_
            </span>

            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "1rem",
              paddingRight: "0.25rem",
              marginTop: "0.2rem",
              color: "var(--muted-custom)",
              fontFamily: "var(--font-mono)"
            }}>
              <span style={{ fontSize: "0.78rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <MapPin size={13} /> Recife, BR
              </span>
              <span style={{ color: "var(--border)", fontSize: "0.75rem" }}>|</span>
              <span style={{ fontSize: "0.78rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                EN <span style={{ fontWeight: 400, color: "var(--fg)" }}>Advanced</span>
              </span>
            </div>
          </motion.div>
        </div>

        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: "2.5rem",
          marginBottom: "3rem",
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: isMobile ? "2rem" : "clamp(3.5rem, 8vw, 6rem)",
              lineHeight: isMobile ? 1.2 : 0.95,
              color: "var(--fg)",
              fontWeight: 700
            }}
          >
            <span style={{ color: "var(--muted-custom)" }}>~/</span>breno_<br />
            rodrigues<span className="neon-text" style={{ color: "#00f0ff" }}>_</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: isMobile ? "180px" : "240px",
              height: isMobile ? "180px" : "240px",
              alignSelf: isMobile ? "center" : "auto",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
              padding: "8px", // Espaço para a borda cyber
            }}
            className="cyber-border neon-glow"
          >
            <div style={{
              position: "absolute", inset: "8px",
              background: "linear-gradient(135deg, var(--card-bg) 0%, var(--bg) 100%)",
              borderRadius: "50%",
              zIndex: 0
            }} />
            <img
              src="/images/breno-avatar.png"
              alt="Breno Rodrigues // Status: Online"
              style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative", zIndex: 1, borderRadius: "50%" }}
            />
          </motion.div>
        </div>

        <div style={{
          display: "flex",
          gap: "1.5rem",
          marginBottom: "3rem",
          flexWrap: "wrap"
        }}>
          <StatusBadge label="LVL.EXPERIENCE" value="2+" color="#00f0ff" />
          <StatusBadge label="QUESTS.CREATED" value="10+" color="#bb86fc" />
          <StatusBadge label="TEST.COVERAGE" value="95%" color="#4ade80" />
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: "1px", background: "var(--border)", marginBottom: "2.5rem", transformOrigin: "left" }}
        />

        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          gap: "2.5rem",
          alignItems: isMobile ? "flex-start" : "flex-end",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "520px" }}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              style={{ fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.8, color: "var(--muted-foreground)" }}
            >
              Executando scripts de Clean Architecture para forjar APIs robustas com{" "}
              <span className="neon-text" style={{ color: "#00f0ff", fontWeight: 500, fontFamily: "var(--font-mono)" }}>.NET</span> e{" "}
              <span className="neon-text" style={{ color: "#bb86fc", fontWeight: 500, fontFamily: "var(--font-mono)" }}>SpringBoot</span>.
              Renderizando interfaces de alta performance utilizando o protocolo{" "}
              <span style={{ color: "var(--fg)", fontWeight: 500, fontFamily: "var(--font-mono)" }}>React / Next.js</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}
            >
              <BadgeDiferencial texto="Clean Architecture" />
              <BadgeDiferencial texto="DDD" />
              <BadgeDiferencial texto="TDD // Foco em Performance" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            style={{ 
              display: "flex", 
              gap: "0.75rem", 
              flexWrap: "wrap", 
              width: isMobile ? "100%" : "auto" 
            }}
          >
            <motion.a
              href="https://www.linkedin.com/in/brenorodrigues05/" 
              target="_blank" rel="noreferrer"
              whileHover={{ opacity: 0.9, y: -2 }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                background: "#0077b5", color: "#ffffff",
                padding: "0.8rem 1.8rem", borderRadius: "4px",
                fontSize: "0.85rem", fontWeight: 500, fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em", textDecoration: "none",
                flex: isMobile ? 1 : "initial", textAlign: "center",
                transition: "transform 0.2s ease",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              [ LINKEDIN ]
            </motion.a>

            <motion.a
              href="https://github.com/BrenoRodrigues05"
              target="_blank" rel="noreferrer"
              whileHover={{ opacity: 0.85, y: -2 }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                background: "var(--fg)", color: "var(--bg)",
                padding: "0.8rem 1.8rem", borderRadius: "4px",
                fontSize: "0.85rem", fontWeight: 500, fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em", textDecoration: "none",
                flex: isMobile ? 1 : "initial", textAlign: "center",
                transition: "transform 0.2s ease",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              [ GITHUB ]
            </motion.a>
            
            <motion.a
              href="mailto:brenobr10@hotmail.com"
              whileHover={{ 
                background: "rgba(0, 240, 255, 0.15)", 
                borderColor: "#00f0ff",
                color: "var(--fg)",
                y: -2 
              }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                background: "rgba(0, 240, 255, 0.05)", 
                border: "1px solid rgba(0, 240, 255, 0.3)", 
                color: "#00f0ff",
                padding: "0.8rem 1.8rem", borderRadius: "4px",
                fontSize: "0.85rem", fontWeight: 600, fontFamily: "var(--font-mono)", letterSpacing: "0.04em", textDecoration: "none",
                flex: isMobile ? 1 : "initial", textAlign: "center",
                transition: "border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease",
              }}
              className="neon-glow"
            >
              <Target size={16} />
              [ CONTATO ]
            </motion.a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}