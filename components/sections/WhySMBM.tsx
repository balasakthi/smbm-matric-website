import {
  Users,
  HeartHandshake,
  Target,
  ShieldCheck,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/client";
import { whyChooseQuery, options } from "@/lib/sanityQuery";
import FadeUp from "../motion/FadeUp";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import Stagger from "../motion/Stagger";
import StaggerItem from "../motion/StaggerItem";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  link: string;
  icon?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Users: Users,
  HeartHandshake: HeartHandshake,
  Target: Target,
  ShieldCheck: ShieldCheck,
};

const WhySMBM = async () => {
  const reasons = await client.fetch(whyChooseQuery, {}, options);

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl text-center mx-auto">
          <SectionHeading
            title={reasons.title}
            description={reasons.description}
          />
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-8 xl:grid-cols-2 xl:gap-16">
          {/* Left – Reasons */}
          <Stagger className="grid md:grid-cols-2 rounded-xl overflow-hidden outline-solid outline-[1px] outline-background -outline-offset-1">
            {reasons.features?.map((feature: FeatureItem) => {
              const IconComponent =
                (feature.icon && iconMap[feature.icon]) || Users;
              return (
                <StaggerItem
                  key={feature.title}
                  className="border p-6 -mt-px -ml-px"
                >
                  <div className="transition-transform duration-300 hover:scale-105">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent/50 text-accent-foreground">
                      <IconComponent className="!size-5" aria-hidden="true" />
                    </div>

                    <h3 className="mt-2 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
          {/* Right – Image */}
          <FadeUp delay={0.2} direction="left">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-muted">
              <Image
                src={reasons.image?.asset.url}
                alt={reasons.image?.alt}
                className="size-full object-cover"
                width={800}
                height={600}
                loading="eager"
              />
            </div>
          </FadeUp>
        </div>
        <div className="mt-12 flex justify-center">
          <FadeUp delay={0.3}>
            <Button variant="gold" size="lg" asChild>
              <Link href={reasons.exploreCampusAction?.href || "#"}>
                {reasons.exploreCampusAction?.label}
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
