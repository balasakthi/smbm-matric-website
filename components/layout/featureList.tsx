import { LucideIcon, School } from "lucide-react";

import { Fade } from "@/components/common/Fade";
import { FeatureCard } from "@/components/layout/featureCard";
import { FeatureGrid } from "@/components/layout/featureGrid";

import { getIcon } from "@/lib/iconMaps";

interface FeatureItem {
  title?: string;
  description?: string;
  icon?: string;
}

interface Props {
  items?: FeatureItem[];
  iconMap: Record<string, LucideIcon>;
  columns?: 2 | 3 | 4;
  variant?: "white" | "secondary";
}

export function FeatureList({
  items,
  iconMap,
  columns = 3,
  variant = "white",
}: Props) {
  if (!items?.length) return null;

  return (
    <FeatureGrid columns={columns}>
      {items.map((item, index) => {
        const Icon = getIcon(item.icon, iconMap, School);

        return (
          <Fade key={index} delay={index * 0.08} className="h-full">
            <FeatureCard
              icon={Icon}
              title={item.title || ""}
              variant={variant}
              alignment="left"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </FeatureCard>
          </Fade>
        );
      })}
    </FeatureGrid>
  );
}
