import {
  Users,
  HeartHandshake,
  Target,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeUp from "./motion/FadeUp";
import Stagger from "./motion/Stagger";
import StaggerItem from "./motion/StaggerItem";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: Users,
    title: "Experienced & Caring Teachers",
    description:
      "Dedicated educators focused on academic excellence and personal growth.",
  },
  {
    icon: HeartHandshake,
    title: "Value-Based Education",
    description:
      "Strong emphasis on discipline, ethics, respect, and social responsibility.",
  },
  {
    icon: Target,
    title: "Individual Student Attention",
    description:
      "Healthy student-teacher ratio ensuring personalised guidance.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Disciplined Environment",
    description: "Structured, secure, and student-friendly campus atmosphere.",
  },
];

const WhySMBM = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl text-center mx-auto">
          <SectionHeading
            title="Why Choose SMBM?"
            description=" A tradition of excellence, discipline, and holistic development —
              shaping confident learners for the future."
          />
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-8 xl:grid-cols-2 xl:gap-16">
          {/* Left – Reasons */}
          <Stagger className="grid md:grid-cols-2 rounded-xl overflow-hidden outline-solid outline-[1px] outline-background -outline-offset-1">
            {reasons.map(({ title, description, icon: Icon }) => (
              <StaggerItem key={title} className="border p-6 -mt-px -ml-px">
                <div className="transition-transform duration-300 hover:scale-105">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent/50 text-accent-foreground">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          {/* Right – Image */}
          <FadeUp delay={0.2} direction="left">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-muted">
              <Image
                src="/images/school-building.webp"
                alt="ShadcnStore Showcase"
                className="size-full object-cover"
                width={800}
                height={600}
              />
            </div>
          </FadeUp>
        </div>
        <div className="mt-12 flex justify-center">
          <FadeUp delay={0.3}>
            <Button variant="gold" size="lg" asChild>
              <Link href="/school-life">
                Explore Campus Life
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default WhySMBM;
