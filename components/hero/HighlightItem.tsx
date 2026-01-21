"use client";

import FadeUp from "@/components/motion/FadeUp";
import { School, GraduationCap, Users, Leaf } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  School,
  GraduationCap,
  Users,
  Leaf,
};

function Icon({ icon }: { icon: string }) {
  const Icon = iconMap[icon];
  if (!Icon) return null;
  return <Icon className="h-5 w-5" />;
}

export default function HighlightItem({
  icon: string,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <FadeUp duration={0.5}>
      <div className="flex flex-col items-center gap-3 text-center transition-transform hover:scale-105 duration-300">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent/50 text-accent-foreground">
          <Icon icon={string} />
        </div>
        <p className="text-sm sm:text-base font-medium">{text}</p>
      </div>
    </FadeUp>
  );
}
