"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1200, shouldStart = true) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }

    const startTime = performance.now();

    function animate(time: number) {
      const progress = Math.min((time - startTime) / duration, 1);
      setValue(Math.floor(progress * target));

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [target, duration, shouldStart]);

  return shouldStart ? value : 0;
}

export default function StatsItem({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value?: number;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp(value ?? 0, 1200, isInView && value !== undefined);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true }}
      className="max-w-3xs text-center"
    >
      <span className="text-5xl font-semibold">
        {value !== undefined && value !== null ? count : null}
        {suffix}
      </span>
      <p className="mt-4 text-lg">{label}</p>
    </motion.div>
  );
}
