"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(pct);
      setIsVisible(scrollTop > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Progress ring math — r=20, circumference ~125.66
  const size = 48;
  const stroke = 2.5;
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 12 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 sm:bottom-8 sm:right-8"
        >
          {/* Tooltip — desktop only, professional label */}
          <motion.span
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 6 }}
            transition={{ delay: 0.15, duration: 0.2 }}
            className="hidden sm:inline-flex items-center rounded-full bg-surface-elevated/95 backdrop-blur-md border border-border px-3.5 py-1.5 text-xs font-medium tracking-wide text-text-secondary shadow-md"
          >
            Back to top
          </motion.span>

          {/* Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-surface-elevated/90 backdrop-blur-md border border-border text-accent shadow-lg shadow-black/5 hover:border-accent/30 hover:bg-accent hover:text-white hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1 active:translate-y-0 active:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {/* Progress ring */}
            <svg
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
              className="absolute inset-0 -rotate-90 pointer-events-none"
              aria-hidden="true"
            >
              {/* Track */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth={stroke}
                className="text-border/60 group-hover:text-white/20 transition-colors"
              />
              {/* Progress */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                className="text-accent group-hover:text-white transition-colors duration-300"
                style={{ transition: "stroke-dashoffset 0.1s linear" }}
              />
            </svg>

            {/* Arrow — subtle lift on hover */}
            <svg
              className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M12 19V5M12 5l-7 7M12 5l7 7"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
