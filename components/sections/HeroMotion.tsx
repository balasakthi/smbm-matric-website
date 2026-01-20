"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Variants,
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

interface Action {
  label: string;
  href: string;
}

interface Props {
  images: string[];
  primary: Action;
  secondary: Action;
}

function HeroMotion({ images, primary, secondary }: Props) {
  const [current, setCurrent] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-[90vh] max-h-[800px] min-h-[560px] overflow-hidden">
      {/* 🔹 Background Image Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            ease: "easeInOut",
          }}
        >
          <Image
            src={images[current]}
            alt="SMBM School Campus"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80 sm:bg-linear-to-r sm:from-primary/85 sm:to-primary/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl text-white"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            >
              SMBM Matriculation <br className="hidden sm:block" />
              Higher Secondary School
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-lg sm:text-xl text-white/90"
            >
              Education with Tradition. Excellence for the Future.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-white/85 leading-relaxed"
            >
              SMBM Matriculation Higher Secondary School is a co-educational
              institution committed to academic excellence, strong moral values,
              and holistic development—preparing confident learners for
              tomorrow.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href={primary.href}>{primary.label}</Link>
              </Button>

              <Button variant="white" size="lg" asChild>
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            </motion.div>

            <motion.p variants={item} className="mt-6 text-sm text-white/75">
              Founded by Dindigul Nadar Uravinmurai · Serving society through
              education since 1964
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroMotion;
