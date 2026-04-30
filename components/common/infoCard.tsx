import { CheckCircle2, GraduationCap } from "lucide-react";
import { PortableText, PortableTextBlock } from "next-sanity";

import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

interface InfoCardProps {
  title?: string;
  content?: PortableTextBlock[];
  highlights?: string[];
}

export function InfoCard({ title, content, highlights }: InfoCardProps) {
  const CardBody = (
    <Card className="md:px-6 md:py-8 bg-secondary relative overflow-hidden">
      <GraduationCap
        size={120}
        className="absolute top-0 right-0 p-4 opacity-10"
      />

      {title && (
        <CardHeader>
          <CardTitle>
            <h3 className="text-xl font-bold">{title}</h3>
          </CardTitle>
        </CardHeader>
      )}

      <CardContent>
        {highlights && (
          <div className=" text-muted-foreground leading-relaxed space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-base">{highlight}</span>
              </div>
            ))}
          </div>
        )}

        {content && (
          <div className="text-muted-foreground leading-relaxed space-y-2">
            <PortableText value={content} />
          </div>
        )}
      </CardContent>
    </Card>
  );

  return CardBody;
}
