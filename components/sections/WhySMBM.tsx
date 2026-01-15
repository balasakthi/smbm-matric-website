import {
  Users,
  HeartHandshake,
  Target,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const reasons = [
  {
    icon: Users,
    title: "Experienced & Caring Teachers",
    description:
      "Highly qualified faculty dedicated to nurturing academic excellence and personal growth.",
  },
  {
    icon: HeartHandshake,
    title: "Value-Based Education",
    description:
      "Strong focus on discipline, ethics, and moral values alongside academics.",
  },
  {
    icon: Target,
    title: "Individual Student Attention",
    description:
      "Personalized guidance to help every student reach their full potential.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Disciplined Environment",
    description:
      "Secure campus with a structured, respectful, and student-friendly atmosphere.",
  },
];

const WhySMBM = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl text-center mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Why Choose SMBM?
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            A tradition of excellence, discipline, and holistic development —
            shaping confident learners for the future.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-8 xl:grid-cols-2 xl:gap-16">
          {/* Left – Reasons */}
          <div className="grid md:grid-cols-2 rounded-xl overflow-hidden outline-solid outline-[1px] outline-background -outline-offset-1">
            {reasons.map(({ title, description, icon: Icon }) => (
              <div key={title} className="border p-6 -mt-px -ml-px">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent/50 text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
          {/* Right – Image */}
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-muted">
            <Image
              src="/images/school-building.webp"
              alt="ShadcnStore Showcase"
              className="size-full object-cover"
              width={800}
              height={600}
            />
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Button variant="gold" size="lg" asChild>
            <Link href="/school-life">
              Explore Campus Life
              <ChevronRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhySMBM;
