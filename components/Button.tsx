"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "gold" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", size = "md", ...props }, ref) => {
    const variants = {
      gold: "bg-gold text-white shadow-ambient hover:bg-gold/90",
      ghost: "bg-transparent text-charcoal hover:bg-pearl",
      outline: "bg-transparent border border-gold text-gold hover:bg-gold hover:text-white",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-8 py-3 text-base font-medium",
      lg: "px-10 py-4 text-lg font-semibold tracking-wide",
    };

    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
