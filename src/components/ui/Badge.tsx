"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "accent" | "gray" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  className?: string;
  as?: "span" | "div";
}

export function Badge({
  children,
  variant = "primary",
  size = "md",
  className,
  as: Component = "span",
}: BadgeProps) {
  const variantClasses = {
    primary: "bg-primary/10 text-primary border border-primary/10",
    accent: "bg-accent/10 text-accent border border-accent/10",
    gray: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-transparent",
    success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50",
    warning: "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border border-amber-200/50 dark:border-amber-800/50",
    error: "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 border border-red-200/50 dark:border-red-800/50",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-[11px] tracking-wide font-semibold",
    md: "px-2.5 py-1 text-xs tracking-wide font-semibold",
    lg: "px-3 py-1 text-sm tracking-wide font-semibold",
  };

  return (
    <Component
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 text-xs font-medium rounded bg-surface border border-border text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}