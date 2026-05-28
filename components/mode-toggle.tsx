"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: "36px", height: "36px" }} />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Alternar tema"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        width: "36px",
        height: "36px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--fg)",
        position: "relative",
        overflow: "hidden",
        transition: "background-color 0.2s ease",
      }}
      
      className="toggle-theme-btn"
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(120, 120, 120, 0.08)")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ y: 10, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -10, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ display: "flex" }}
          >
            <Moon className="h-[1.15rem] w-[1.15rem]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 10, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -10, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ display: "flex" }}
          >
            <Sun className="h-[1.15rem] w-[1.15rem]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}