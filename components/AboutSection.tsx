import { aboutQuery, options } from "@/lib/sanityQuery";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import FadeUp from "@/components/motion/FadeUp";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Stagger from "@/components/motion/Stagger";

const AboutSection = async () => {
  const about = await client.fetch(aboutQuery, {}, options);

  return (
    <section className="w-full py-18 lg:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Stagger className="space-y-8 text-center lg:text-start">
            <section className="space-y-4">
              <SectionHeading title={about.title} />
              <FadeUp delay={0.1}>
                <div className="mt-8 text-muted-foreground text-balance md:text-lg space-y-4">
                  <PortableText value={about.description} />
                </div>
              </FadeUp>
            </section>
            <FadeUp delay={0.2}>
              <Button variant="gold" size="lg" asChild>
                <Link href={about.knowMoreAction?.url || "#"}>
                  {about.knowMoreAction?.label || "Know More"}
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>
            </FadeUp>
          </Stagger>
          <FadeUp direction="left" delay={0.4}>
            <div className="aspect-[4/3] overflow-hidden rounded-xl border">
              <Image
                src={about.image?.asset.url}
                alt={about.image?.alt || "About Image"}
                className="size-full object-cover"
                loading="eager"
                width={800}
                height={600}
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
