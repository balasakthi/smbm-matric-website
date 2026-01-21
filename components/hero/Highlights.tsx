import { Card, CardContent } from "@/components/ui/card";
import Stagger from "@/components/motion/Stagger";
import HighlightItem from "./HighlightItem";
import FadeUp from "../motion/FadeUp";

const highlights = [
  {
    icon: "School",
    text: "45+ Years of Excellence",
  },
  {
    icon: "GraduationCap",
    text: "Matriculation Board",
  },
  {
    icon: "Users",
    text: "Dedicated Faculty",
  },
  {
    icon: "Leaf",
    text: "Holistic Development",
  },
];

export default function Highlights() {
  return (
    <section className="relative z-20 -mt-8 md:-mt-16">
      <div className="container mx-auto px-6">
        <FadeUp duration={0.6}>
          <Card className="rounded-xl shadow-xl">
            <CardContent className="p-6">
              <Stagger className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {highlights.map((item) => (
                  <HighlightItem
                    key={item.text}
                    icon={item.icon}
                    text={item.text}
                  />
                ))}
              </Stagger>
            </CardContent>
          </Card>
        </FadeUp>
      </div>
    </section>
  );
}
