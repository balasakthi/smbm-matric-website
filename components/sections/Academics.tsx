import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Blocks, BookOpenText, GraduationCap } from "lucide-react";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
}

const features: FeatureItem[] = [
  {
    id: 1,
    icon: Blocks,
    title: "Pre-Primary",
    description:
      "A joyful and nurturing learning environment for LKG and UKG, focusing on foundational skills, creativity, and early childhood development.",
    link: "/academics/kindergarten",
  },
  {
    id: 2,
    icon: BookOpenText,
    title: "Primary",
    description:
      "Strong academic foundations from Classes I to V, emphasizing literacy, numeracy, curiosity, and value-based education.",
    link: "/academics/primary",
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Secondary & Higher Secondary",
    description:
      "Comprehensive Matriculation curriculum from Classes VI to XII, preparing students for board examinations and higher education.",
    link: "/academics/courses-offered",
  },
];

const Academics = () => {
  return (
    <section className="w-full bg-muted/50 py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Academics
          </h2>
          <p className="text-muted-foreground text-pretty">
            Our academic programs are thoughtfully designed to nurture young
            minds, build strong foundations, and prepare students for future
            success.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.id} className="group">
              <Card className="relative h-full overflow-hidden transition-all hover:shadow-md">
                <CardContent className="px-6">
                  <Badge
                    variant="secondary"
                    className="mb-4 bg-accent-soft inline-flex size-12 items-center justify-center"
                  >
                    <feature.icon className="!size-6" aria-hidden="true" />
                  </Badge>
                  <h3 className="mb-2 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="gold"
            size="lg"
            className="cursor-pointer rounded-lg !px-8"
          >
            View Curriculum
            <ArrowRight className="ms-2 size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Academics;
