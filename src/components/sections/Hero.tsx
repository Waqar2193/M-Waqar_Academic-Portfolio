"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[78vh] flex items-center pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Jeju National University • Machine Learning Laboratory
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-4xl lg:text-5xl xl:text-[3.25rem] font-semibold tracking-tight text-text-primary leading-[1.05]"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-3 text-lg lg:text-xl font-medium text-accent"
            >
              {profile.title}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6"
            >
              <div className="rounded-2xl border border-border bg-surface-elevated/70 backdrop-blur-sm p-5 lg:p-6 text-left shadow-sm">
                <p className="text-[15px] lg:text-base text-text-secondary leading-relaxed">
                  {profile.shortBio}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-7 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3"
            >
              <a
                href="#publications"
                className={cn(
                  "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl",
                  "text-sm font-semibold tracking-wide transition-all duration-200",
                  "bg-accent text-white hover:bg-accent-dark",
                  "shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5",
                  "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                )}
              >
                View Publications
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl",
                  "text-sm font-semibold tracking-wide transition-all duration-200",
                  "bg-surface-elevated border border-border text-text-primary hover:border-accent/30 hover:bg-surface",
                  "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                )}
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4"
            >
              {Object.entries(profile.social).map(([key, url]) => {
                const labelMap: Record<string, string> = {
                  linkedin: "LinkedIn",
                  github: "GitHub",
                  googleScholar: "Google Scholar",
                  orcid: "ORCID",
                  researchgate: "ResearchGate",
                };
                const label = labelMap[key] ?? key;
                return (
                  <div key={key} className="relative group">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text-secondary",
                        "hover:bg-accent hover:border-accent hover:text-white hover:shadow-md hover:shadow-accent/15 hover:-translate-y-0.5",
                        "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1"
                      )}
                      aria-label={label}
                    >
                      {getSocialIcon(key)}
                    </a>
                    <span className="pointer-events-none absolute left-1/2 -top-9 -translate-x-1/2 whitespace-nowrap rounded-md bg-text-primary px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5 group-focus-within:opacity-100">
                      {label}
                      <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-text-primary" />
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[360px] lg:h-[360px] rounded-[1.75rem] overflow-hidden border border-border bg-surface shadow-xl shadow-black/5">
                {profile.photo ? (
                  <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover hero-profile-img" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-surface">
                    <svg className="w-20 h-20 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function getSocialIcon(key: string) {
  switch (key) {
    case "linkedin":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "github":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "googleScholar":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 2c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm3.5 9h-3v3.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V12h-2V8h2V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V8h3v4z" />
        </svg>
      );
    case "orcid":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="#A6CE39" />
          <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">ID</text>
        </svg>
      );
    case "twitter":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zM17.083 19.77h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "researchgate":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.5 14.382c0-2.11-1.5-3.5-3.5-3.5-1.5 0-2.5.5-3.5 1.5v-4.5h-2v10h2v-5c1-1 2-1.5 3-1.5 1.5 0 2.5 1 2.5 2.5v4h2v-4.5zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
        </svg>
      );
    default:
      return null;
  }
}
