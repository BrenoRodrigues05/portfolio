"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Terminal } from "lucide-react"; 

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Certificações", href: "#certifications" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  const navOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  
  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ["0 0 0 rgba(0,0,0,0)", "0 10px 30px -10px rgba(0, 0, 0, 0.1)"]
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
        boxShadow: boxShadow,
        transition: "box-shadow 0.3s ease",
        width: "100%",       
      }}
    >
      <motion.div 
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--bg-blur)",
          borderBottom: "0.5px solid var(--border)",
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
        padding: "1.25rem 1.5rem",
      }}>
        <span style={{ 
          fontFamily: "var(--font-serif)", 
          fontSize: "1.1rem", 
          letterSpacing: "-0.01em",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--fg)"
        }}>
          <Terminal 
            size={16} 
            strokeWidth={1.5} 
            style={{ color: "var(--muted-custom)" }} 
          />
          Breno Rodrigues
        </span>

        <ul className="navbar-desktop" style={{ display: "flex", gap: "2rem", listStyle: "none", alignItems: "center" }}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--fg)",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li><ModeToggle /></li>
        </ul>

        <div className="navbar-mobile" style={{ display: "none", alignItems: "center", gap: "0.75rem" }}>
          <ModeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.25rem",
              color: "var(--fg)",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--fg)", transition: "all 0.3s", transform: open ? "rotate(45deg) translate(4.5px, 4.5px)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--fg)", transition: "all 0.3s", opacity: open ? 0 : 1 }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--fg)", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none" }} />
          </button>
        </div>
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
            alignItems: "flex-end", 
            textAlign: "right",     
            listStyle: "none",
            padding: "1rem 1.5rem 1.75rem",
            gap: "1.25rem",
            borderTop: "0.5px solid var(--border)",
            background: "var(--bg-blur)",
            backdropFilter: "blur(12px)",
          }}
        >
          {links.map((link) => (
            <motion.li key={link.href} variants={itemVariants} style={{ width: "100%" }}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block", 
                  fontSize: "0.95rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--fg)",
                  textDecoration: "none",
                  fontWeight: 500,
                  padding: "0.25rem 0",
                }}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}