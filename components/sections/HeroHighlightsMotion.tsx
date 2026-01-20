"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Variants, motion, useReducedMotion } from "framer-motion";
import { School, GraduationCap, Users, Leaf } from "lucide-react";

interface Highlight {
  icon: string;
  text: string;
}

interface Props {
  highlights: Highlight[];
}

const iconMap: Record<string, React.ElementType> = {
  School,
  GraduationCap,
  Users,
  Leaf,
};

function IconBadge({ icon }: { icon: string }) {
  const Icon = iconMap[icon];
  if (!Icon) return null;
  return (
    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent/50 text-accent-foreground">
      <Icon className="h-5 w-5" />
    </div>
  );
}

function HeroHighlightsMotion({ highlights }: Props) {
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
        delayChildren: 0.6,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="container mx-auto px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div variants={cardVariants}>
        <Card className="rounded-xl shadow-xl">
          <CardContent className="p-6">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {highlights.map(({ icon, text }) => (
                <motion.div
                  key={text}
                  variants={item}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <IconBadge icon={icon} />
                  <p className="text-sm sm:text-base font-medium">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
export default HeroHighlightsMotion;
