import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="w-full py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-8 text-center lg:text-start">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
                About SMBM Matriculation Higher Secondary School
              </h1>
              <p className="text-muted-foreground text-balance md:text-lg">
                Established with a vision to provide quality education rooted in
                strong values, SMBM Matriculation Higher Secondary School has
                been shaping young minds for decades. Our institution is
                committed to academic excellence, character building, and
                holistic development.
              </p>

              <p className="text-muted-foreground text-balance md:text-lg">
                With experienced faculty, a disciplined learning environment,
                and modern facilities, we prepare students to excel academically
                while growing into responsible, confident individuals ready for
                the future.
              </p>
            </header>

            <Button variant="gold" size="lg" asChild>
              <Link href="/about">
                Know More About Us
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-xl border">
            <Image
              src="/images/school-building.webp"
              alt="ShadcnStore Showcase"
              className="size-full object-cover dark:brightness-[0.95] dark:invert"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
