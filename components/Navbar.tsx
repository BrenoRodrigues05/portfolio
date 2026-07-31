"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useState } from "react";
import { Terminal } from "lucide-react"; 

const links = [
  { id: "01", label: "Sobre", href: "#about" },
  { id: "02", label: "Stack", href: "#stack" },
  { id: "03", label: "Certificações", href: "#certifications" },
  { id: "04", label: "Projetos", href: "#projects" },
  { id: "05", label: "Contato", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  const navOpacity = useTransform(scrollY, [0, 50], [0.6, 0.95]);
  const borderGlow = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0, 240, 255, 0.1)", "rgba(0, 240, 255, 0.35)"]
  );

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.05,
        duration: 0.25,
        ease: "easeOut" 
      } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",   
        top: 0,              
        left: 0,             
        right: 0,            
        zIndex: 50,
        width: "100%",       
      }}
    >
      <motion.div 
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--bg-blur)",
          borderBottom: "1px solid",
          borderColor: borderGlow,
          backdropFilter: "blur(12px)",
          opacity: navOpacity, 
          zIndex: -1,
        }}
      />

      <nav style={{
        maxWidth: "72rem",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 1.5rem",
      }}>
        <a 
          href="#" 
          style={{ 
            fontFamily: "var(--font-mono)", 
            fontSize: "0.95rem", 
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            color: "var(--fg)",
            textDecoration: "none"
          }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
            height: "28px",
            borderRadius: "4px",
            background: "rgba(0, 240, 255, 0.1)",
            border: "1px solid rgba(0, 240, 255, 0.4)",
            color: "#00f0ff"
          }}>
            <Terminal size={15} />
          </div>
          <span style={{ fontWeight: 600 }}>
            breno<span style={{ color: "#00f0ff" }}>@dev</span>:~#
          </span>
        </a>

        <ul className="navbar-desktop" style={{ display: "flex", gap: "1.75rem", listStyle: "none", alignItems: "center" }}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--fg)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  transition: "color 0.2s"
                }}
                className="hover:text-[#00f0ff]"
              >
                <span style={{ color: "#00f0ff", opacity: 0.7 }}>[{link.id}]</span>
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ borderLeft: "1px solid var(--border)", paddingLeft: "1rem" }}>
          </li>
        </ul>
      </nav>

      {open && (
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={menuVariants}
          className="navbar-mobile"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", 
            listStyle: "none",
            padding: "1.25rem 1.5rem",
            gap: "1rem",
            borderTop: "1px solid var(--border)",
            background: "var(--bg-blur)",
            backdropFilter: "blur(12px)",
            fontFamily: "var(--font-mono)"
          }}
        >
          {links.map((link) => (
            <motion.li key={link.href} variants={itemVariants} style={{ width: "100%" }}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "flex", 
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  color: "var(--fg)",
                  textDecoration: "none",
                  padding: "0.35rem 0",
                }}
              >
                <span style={{ color: "#00f0ff" }}>[{link.id}]</span>
                {link.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}