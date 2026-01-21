"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface FadeProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
}

const directionValues: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
};

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className,
}: FadeProps) {
  const reduceMotion = useReducedMotion();
  const { x, y } = directionValues[direction];

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: reduceMotion ? 0 : x,
        y: reduceMotion ? 0 : y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: "some" }}
    >
      {children}
    </motion.div>
  );
}
