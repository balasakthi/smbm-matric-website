import { School, GraduationCap, Users, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function Highlight({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {icon}
      <p className="text-sm sm:text-base font-medium">{text}</p>
    </div>
  );
}

export default function HeroHighlights() {
  return (
    <section className="relative z-20 -mt-8 md:-mt-16">
      <div className="container mx-auto px-6">
        <Card className="shadow-xl rounded-xl">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <Highlight
                icon={<School className="h-8 w-8 mx-auto text-accent" />}
                text="45+ Years of Excellence"
              />
              <Highlight
                icon={<GraduationCap className="h-8 w-8 mx-auto text-accent" />}
                text="Matriculation Board"
              />
              <Highlight
                icon={<Users className="h-8 w-8 mx-auto text-accent" />}
                text="Dedicated Faculty"
              />
              <Highlight
                icon={<Leaf className="h-8 w-8 mx-auto text-accent" />}
                text="Holistic Development"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
