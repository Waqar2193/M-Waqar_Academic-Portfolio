"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const mxAuto = align === "center" ? "mx-auto" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("mb-6", textAlign, className)}
    >
      <h2 className={cn("section-heading", mxAuto)}>{title}</h2>
      {align === "left" && <div className="section-divider mt-2" aria-hidden="true" />}
      {subtitle && (
        <p className={cn("section-subheading mt-2", mxAuto)}>{subtitle}</p>
      )}
    </motion.div>
  );
}