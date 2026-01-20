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
              <h1 className="text-3xl font-bold text-balance md:text-4xl">
                About SMBM Matriculation Higher Secondary School
              </h1>
              <p className="text-muted-foreground text-balance md:text-lg">
                Established under the vision of Dindigul Nadar Uravinmurai, SMBM
                Matriculation Higher Secondary School has been shaping young
                minds since 1984. Guided by the values of discipline, humility,
                hard work, aspiration, and purpose, the institution stands as a
                pillar of quality education and social responsibility in
                Dindigul.
              </p>

              <p className="text-muted-foreground text-balance md:text-lg">
                With a strong foundation in academics and a deep commitment to
                character building, SMBM nurtures students to grow into
                confident, ethical, and capable individuals prepared to serve
                society and the nation.
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
              className="size-full object-cover"
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
