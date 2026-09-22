"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  organization: string;
  location?: string;
  description?: ReactNode;
  children?: ReactNode;
  type?: "education" | "experience";
  className?: string;
  dotColor?: string;
}

export function TimelineItem({
  date,
  title,
  organization,
  location,
  description,
  children,
  type = "experience",
  className,
  dotColor,
}: TimelineItemProps) {
  const dotStyle = dotColor
    ? { backgroundColor: dotColor, borderColor: dotColor }
    : {};

  const lineStyle = dotColor
    ? { backgroundColor: dotColor }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("relative pl-8 pb-10 last:pb-0", className)}
    >
      <div className="absolute left-0 top-1 flex-shrink-0">
        <div
          className={cn(
            "w-4 h-4 rounded-full border-4 flex-shrink-0",
            "bg-background border-border",
            "shadow-sm"
          )}
          style={dotStyle}
        />
        {type === "experience" && (
          <div
            className="absolute left-1.5 top-4 bottom-0 w-0.5"
            style={lineStyle}
          />
        )}
      </div>

      <div className="bg-surface-elevated border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-border-strong transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="font-serif text-lg font-medium text-text-primary">
              {title}
            </h3>
            <p className="text-text-secondary mt-0.5">{organization}</p>
            {location && (
              <p className="text-text-muted text-sm mt-0.5">{location}</p>
            )}
          </div>
          <time
            className="text-text-muted text-sm font-medium whitespace-nowrap flex-shrink-0"
            dateTime={date}
          >
            {date}
          </time>
        </div>

        {description && (
          <div className="prose prose-sm dark:prose-invert max-w-none text-text-secondary">
            {description}
          </div>
        )}

        {children && <div className="mt-4">{children}</div>}
      </div>
    </motion.div>
  );
}

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-border" />
      {children}
    </div>
  );
}