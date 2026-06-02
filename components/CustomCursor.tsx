"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const size = isHovered ? 48 : 20;
      cursorX.set(e.clientX - size / 2);
      cursorY.set(e.clientY - size / 2);
      
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
        border: isHovered ? "2.5px solid rgba(79,142,247,1)" : "2px solid var(--fg)",
        background: isHovered ? "rgba(79,142,247,0.15)" : "rgba(255, 255, 255, 0.02)",
        pointerEvents: "none", 
        zIndex: 9999, 
        x: cursorX, 
        y: cursorY, 
        opacity: isVisible ? 1 : 0,
        backdropFilter: isHovered ? "blur(2px)" : "none",
        transition: "width 0.15s ease-out, height 0.15s ease-out, border-color 0.15s, background-color 0.15s, box-shadow 0.15s",
        boxShadow: isHovered 
          ? "0 0 20px rgba(79,142,247,0.5), inset 0 0 10px rgba(79,142,247,0.2)" 
          : "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    />
  );
}