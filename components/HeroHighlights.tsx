import { School, GraduationCap, Users, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: School,
    text: "45+ Years of Excellence",
  },
  {
    icon: GraduationCap,
    text: "Matriculation Board",
  },
  {
    icon: Users,
    text: "Dedicated Faculty",
  },
  {
    icon: Leaf,
    text: "Holistic Development",
  },
];

function IconBadge({ Icon }: { Icon: React.ElementType }) {
  return (
    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent/50 text-accent-foreground">
      <Icon className="h-5 w-5" />
    </div>
  );
}

function HighlightItem({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <IconBadge Icon={Icon} />
      <p className="text-sm sm:text-base font-medium">{text}</p>
    </div>
  );
}

export default function HeroHighlights() {
  return (
    <section className="relative z-20 -mt-8 md:-mt-16">
      <div className="container mx-auto px-6">
        <Card className="rounded-xl shadow-xl">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {highlights.map((item) => (
                <HighlightItem
                  key={item.text}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
