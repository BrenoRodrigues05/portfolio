"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
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
        setIsLaunching(false);
      }
    });
  }, [scrollY]);

  const scrollToTop = () => {
    setIsLaunching(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsLaunching(false);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 0 }}
          animate={
            isLaunching
              ? { y: -250, opacity: [1, 1, 0], scale: 1.1 }
              : { opacity: 1, scale: 1, y: 0 }
          }
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: isLaunching ? 0.6 : 0.2,
            ease: isLaunching ? "easeIn" : "easeInOut",
          }}
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          style={{
            position: "fixed",
            bottom: isMobile ? "2.5rem" : "2.5rem",
            right: isMobile ? "1.5rem" : "2.5rem",
            width: isMobile ? "44px" : "48px",
            height: isMobile ? "44px" : "48px",
            borderRadius: "50%",
            background: "rgba(15, 23, 42, 0.85)",
            border: "1px solid #00f0ff",
            color: "#00f0ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 50,
            boxShadow: "0 0 15px rgba(0, 240, 255, 0.3)",
            backdropFilter: "blur(8px)",
            padding: 0,
            overflow: "visible",
          }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(0, 240, 255, 0.6)" }}
          whileTap={{ scale: 0.9 }}
        >
          {isLaunching && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "32px", opacity: 1 }}
              style={{
                position: "absolute",
                bottom: "-26px",
                width: "8px",
                background: "linear-gradient(180deg, #00f0ff, #ff007f, transparent)",
                borderRadius: "4px",
                filter: "blur(2px)",
              }}
            />
          )}

          <svg
            width={isMobile ? "18" : "20"}
            height={isMobile ? "18" : "20"}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ display: "block" }}
          >
            <path d="M12 2C12 2 6 7 6 14v4l-3 3h18l-3-3v-4c0-7-6-12-6-12z" />
            <path d="M6 14h12" />
            <circle cx="12" cy="10" r="1.5" />
            <path d="M9 21l3-3 3 3" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}