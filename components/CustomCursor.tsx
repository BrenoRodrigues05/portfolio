"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - (isHovered ? 24 : 10));
      cursorY.set(e.clientY - (isHovered ? 24 : 10));
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.closest(".clickable-card") 
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isHovered, isVisible, cursorX, cursorY]);

  if (typeof window !== "undefined" && window.innerWidth <= 768) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: isHovered ? "48px" : "20px",
        height: isHovered ? "48px" : "20px",
        borderRadius: "50%",
        border: isHovered ? "1.5px solid rgba(79,142,247,0.8)" : "1.5px solid var(--fg)",
        background: isHovered ? "rgba(79,142,247,0.05)" : "transparent",
        pointerEvents: "none", 
        zIndex: 9999, 
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
        transition: "width 0.2s, height 0.2s, border-color 0.2s, background-color 0.2s",
        boxShadow: isHovered ? "0 0 15px rgba(79,142,247,0.3)" : "none",
      }}
    />
  );
}