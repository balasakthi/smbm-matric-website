import { academicsQuery, options } from "@/lib/sanityQuery";
import {
  ArrowRight,
  Blocks,
  BookOpenText,
  GraduationCap,
  LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/sanity/client";
import FadeUp from "@/components/motion/FadeUp";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";

interface FeatureItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  icon?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Blocks: Blocks,
  BookOpenText: BookOpenText,
  GraduationCap: GraduationCap,
};

const Academics = async () => {
  const academics = await client.fetch(academicsQuery, {}, options);

  return (
    <section className="w-full bg-muted/40 py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <section className="mx-auto mb-12 max-w-2xl text-center">
          <SectionHeading
            title={academics.title}
            description={academics.description}
          />
        </section>

        {/* Features Grid */}
        <Stagger className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {academics.features?.map((feature: FeatureItem) => {
            const IconComponent =
              (feature.icon && iconMap[feature.icon]) || Blocks;
            return (
              <StaggerItem key={feature.title} className="group">
                <Card className="relative h-full overflow-hidden transition-all hover:shadow-md hover:scale-105 hover:rotate-1 duration-300">
                  <CardContent className="px-6">
                    <Badge
                      variant="secondary"
                      className="mb-4 bg-accent/50 text-accent-foreground inline-flex size-10 items-center justify-center"
                    >
                      <IconComponent className="!size-5" aria-hidden="true" />
                    </Badge>
                    <h3 className="mb-2 text-lg font-semibold">
                      {feature.title}{" "}
                      <Badge variant="secondary">{feature.subtitle}</Badge>
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <FadeUp delay={0.3}>
            <Button variant="gold" size="lg" asChild>
              <Link href={academics.viewCurriculumAction?.url || "#"}>
                {academics.viewCurriculumAction?.label}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Academics;
