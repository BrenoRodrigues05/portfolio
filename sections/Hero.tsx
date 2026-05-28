"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={{ padding: isMobile ? "3rem 1.5rem 3rem" : "5rem 1.5rem 5rem", borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: "1rem", marginBottom: "2rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              fontSize: "0.72rem", textTransform: "uppercase",
              letterSpacing: "0.22em", color: "#60a5fa",
            }}
          >
            <span style={{ display: "inline-block", width: "24px", height: "1px", background: "#60a5fa" }} />
            Full Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "flex-start" : "flex-end", gap: "0.3rem" }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "#4ade80" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
              Disponível para oportunidades
            </span>
            <span style={{ fontSize: "0.72rem", letterSpacing: "0.05em", color: "#3f3f46" }}>Recife, BR</span>
          </motion.div>
        </div>

        <div style={{ 
          display: "flex", 
          flexDirection: isMobile ? "column" : "row", 
          alignItems: isMobile ? "flex-start" : "center", 
          justifyContent: "space-between", 
          gap: "2rem", 
          marginBottom: "2rem" 
        }}>
          <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: isMobile ? "2.4rem" : "clamp(4rem, 10vw, 7.5rem)",
            lineHeight: isMobile ? 1.2 : 0.9,
            letterSpacing: "-0.03em",
            whiteSpace: isMobile ? "nowrap" : "normal", 
          }}
        >
          Breno{!isMobile && <br />} Rodrigues
        </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              width: isMobile ? "100%" : "280px",
              maxWidth: isMobile ? "320px" : "280px", 
              height: isMobile ? "320px" : "280px",
              alignSelf: isMobile ? "center" : "auto", 
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img 
              src="/images/breno-avatar.png" 
              alt="Breno Rodrigues - Full Stack Developer" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </div>

        <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)", marginBottom: "2rem" }} />

        <div style={{ 
          display: "flex", 
          flexDirection: isMobile ? "column" : "row", 
          justifyContent: "space-between",
          gap: "2rem", 
          alignItems: isMobile ? "flex-start" : "center" 
        }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: "#71717a", maxWidth: "480px" }}
          >
           Desenvolvendo ecossistemas robustos e APIs escaláveis com <span className="text-blue-400 font-medium">.NET</span> e <span className="text-blue-400 font-medium">Spring Boot</span>
           , integrados a interfaces de alta performance em <span className="text-zinc-100 font-medium">React</span> e <span className="text-zinc-100 font-medium">Next.js</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ 
              display: "flex", 
              gap: "0.75rem", 
              flexWrap: "wrap",
              width: isMobile ? "100%" : "auto" 
            }}
          >
            <a
              href="https://github.com/BrenoRodrigues05"
              target="_blank" rel="noreferrer"
              style={{
                background: "#e8edf5", color: "#080b10",
                padding: "0.75rem 2rem", borderRadius: "4px",
                fontSize: "0.82rem", fontWeight: 500,
                letterSpacing: "0.04em", textDecoration: "none",
                flex: isMobile ? 1 : "initial", 
                textAlign: "center"
              }}
            >
              GitHub
            </a>
            <a
              href="mailto:brenobr10@hotmail.com"
              style={{
                border: "0.5px solid rgba(255,255,255,0.12)", color: "#71717a",
                padding: "0.75rem 2rem", borderRadius: "4px",
                fontSize: "0.82rem", letterSpacing: "0.04em", textDecoration: "none",
                flex: isMobile ? 1 : "initial",
                textAlign: "center"
              }}
            >
              Contato
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}