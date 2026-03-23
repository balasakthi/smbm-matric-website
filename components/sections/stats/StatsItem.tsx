"use client";

import Fade from "@/components/common/Fade";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function useCountUp(target: number, duration = 1200, shouldStart = true) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

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

interface Props {
  value?: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export default function StatsItem({
  value = 0,
  suffix = "",
  label,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const count = useCountUp(value, 1200, isInView);

  return (
    <Fade delay={delay} direction="up">
      <div ref={ref} className="max-w-xs mx-auto text-center">
        <span className="text-5xl font-semibold tabular-nums">
          {count}
          {suffix}
        </span>

        <p className="mt-4 text-lg">{label}</p>
      </div>
    </Fade>
  );
}
