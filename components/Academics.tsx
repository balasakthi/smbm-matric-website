import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Blocks, BookOpenText, GraduationCap } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import SectionHeading from "./SectionHeading";

interface FeatureItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
}

const features: FeatureItem[] = [
  {
    id: 1,
    icon: Blocks,
    title: "Pre-Primary",
    subtitle: "LKG & UKG",
    description:
      "A nurturing environment that fosters curiosity, creativity, and early learning skills.",
    link: "/academics/kindergarten",
  },
  {
    id: 2,
    icon: BookOpenText,
    title: "Primary",
    subtitle: "I - V",
    description:
      "Strong academic foundations with emphasis on literacy, numeracy, and values.",
    link: "/academics/primary",
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Secondary",
    subtitle: "VI - XII",
    description:
      "Comprehensive curriculum aligned with Matriculation Board standards and career readiness.",
    link: "/academics/courses-offered",
  },
];

const Academics = () => {
  return (
    <section className="w-full bg-muted/40 py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <section className="mx-auto mb-12 max-w-2xl text-center">
          <SectionHeading
            title="Academics"
            description=" Our academic programmes are thoughtfully designed to nurture young
              minds, build strong foundations, and prepare students for future
              success through a balanced blend of traditional values and modern
              learning methodologies."
          />
        </section>

        {/* Features Grid */}
        <Stagger className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.id} className="group">
              <Card className="relative h-full overflow-hidden transition-all hover:shadow-md hover:scale-105 hover:rotate-1 duration-300">
                <CardContent className="px-6">
                  <Badge
                    variant="secondary"
                    className="mb-4 bg-accent/50 text-accent-foreground inline-flex size-10 items-center justify-center"
                  >
                    <feature.icon className="!size-5" aria-hidden="true" />
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
          ))}
        </Stagger>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <FadeUp delay={0.3}>
            <Button
              variant="gold"
              size="lg"
              className="cursor-pointer rounded-lg !px-8"
            >
              View Curriculum
              <ArrowRight className="ms-2 size-4" aria-hidden="true" />
            </Button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Academics;
