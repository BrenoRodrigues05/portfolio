"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(rawX, springConfig);
  const cursorY = useSpring(rawY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      return mobile;
    };

    if (checkMobile()) return;

    const moveCursor = (e: MouseEvent) => {
      const size = isHovered ? 40 : 24;
      rawX.set(e.clientX - size / 2);
      rawY.set(e.clientY - size / 2);

      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".clickable-card") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleResize = () => checkMobile();

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered, rawX, rawY]);

  if (isMobile || !isVisible) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: isHovered ? "40px" : "24px",
        height: isHovered ? "40px" : "24px",
        borderRadius: isHovered ? "4px" : "50%",
        border: `1.5px solid ${isHovered ? "#ff007f" : "#00f0ff"}`,
        background: isHovered ? "rgba(255, 0, 127, 0.1)" : "rgba(0, 240, 255, 0.03)",
        pointerEvents: "none",
        zIndex: 9999,
        x: cursorX,
        y: cursorY,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: isHovered
          ? "0 0 15px rgba(255, 0, 127, 0.6), inset 0 0 8px rgba(255, 0, 127, 0.3)"
          : "0 0 10px rgba(0, 240, 255, 0.3)",
        transition:
          "width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s, background-color 0.2s, border-radius 0.2s",
      }}
    >
      <div
        style={{
          width: isHovered ? "6px" : "4px",
          height: isHovered ? "6px" : "4px",
          borderRadius: "50%",
          background: isHovered ? "#ff007f" : "#00f0ff",
          boxShadow: isHovered ? "0 0 8px #ff007f" : "0 0 6px #00f0ff",
          transition: "all 0.2s ease",
        }}
      />

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            position: "absolute",
            inset: -2,
            border: "1px dashed rgba(255, 0, 127, 0.8)",
            borderRadius: "6px",
            pointerEvents: "none",
          }}
        />
      )}
    </motion.div>
  );
}