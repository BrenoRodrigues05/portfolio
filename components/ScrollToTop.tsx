"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          style={{
            position: "fixed",
            bottom: isMobile ? "3.2rem" : "2.5rem",
            right: isMobile ? "1.5rem" : "2.5rem",
            width: isMobile ? "40px" : "45px", 
            height: isMobile ? "40px" : "45px",
            borderRadius: "50%",
            background: "var(--card-bg)",
            border: "0.5px solid var(--border)",
            color: "var(--fg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 40,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(8px)",
            padding: 0, 
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5} 
            stroke="currentColor"
            style={{ 
              width: isMobile ? "16px" : "18px", 
              height: isMobile ? "16px" : "18px",
              display: "block", 
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}