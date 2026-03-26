"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  once?: boolean;
  animateOnMount?: boolean;
  scale?: number;
  viewportAmount?: number;
}

const directionValues: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

function Fade({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className,
  once = true,
  animateOnMount = false,
  scale,
  viewportAmount = 0.3,
}: FadeProps) {
  const reduceMotion = useReducedMotion();
  const { x, y } = directionValues[direction];

  const initialState = {
    opacity: 0,
    x: reduceMotion ? 0 : x,
    y: reduceMotion ? 0 : y,
    scale: scale ?? 1,
  };

  const animateState = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  };

  return (
    <motion.div
      className={className}
      initial={initialState}
      animate={animateOnMount ? animateState : undefined}
      whileInView={!animateOnMount ? animateState : undefined}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once,
        amount: viewportAmount,
      }}
    >
      {children}
    </motion.div>
  );
}

export { Fade };
