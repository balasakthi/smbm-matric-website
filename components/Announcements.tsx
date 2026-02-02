import {
  BookOpen,
  Bus,
  CalendarCheck,
  ClipboardList,
  Flag,
  LucideIcon,
  Megaphone,
  Palette,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/sanity/client";
import { updatesQuery, options } from "@/lib/sanityQuery";
import FadeUp from "@/components/motion/FadeUp";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";

interface CardSection {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface FeatureItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  icon?: string;
}

const iconMap: Record<string, LucideIcon> = {
  MegaPhone: Megaphone,
  CalendarCheck: CalendarCheck,
  BookOpen: BookOpen,
  ClipboardList: ClipboardList,
  Trophy: Trophy,
  Palette: Palette,
  Flag: Flag,
  Bus: Bus,
};

function CardView({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <Card className="relative h-full overflow-hidden transition-all hover:shadow-md hover:scale-105 duration-300">
      <CardContent className="px-6 py-2">
        <div className="mb-4 flex items-center gap-4">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent/50 text-accent-foreground">
            <Icon className="size-5!" aria-hidden="true" />
          </div>
          <h4 className="text-lg font-semibold">{title}</h4>
        </div>
        <p className="text-sm text-foreground/70">{description}</p>
      </CardContent>
    </Card>
  );
}

function CardSection({
  heading,
  items,
}: {
  heading: string;
  items: FeatureItem[];
}) {
  return (
    <div className="grid">
      <FadeUp>
        <h3 className="text-xl font-semibold mb-6">{heading}</h3>
      </FadeUp>

      <Stagger>
        {items.map((feature: FeatureItem) => {
          const IconComponent =
            (feature.icon && iconMap[feature.icon]) || Megaphone;
          return (
            <StaggerItem key={feature.title} className="mb-4">
              <CardView
                icon={IconComponent}
                title={feature.title}
                description={feature.description}
              />
            </StaggerItem>
          );
        })}
      </Stagger>
    </div>
  );
}

async function Announcements() {
  const updates = await client.fetch(updatesQuery, {}, options);
  return (
    <section className="bg-muted/40 px-6 py-16">
      <div className="container max-w-(--breakpoint-lg) mx-auto">
        {/* Heading */}
        <div className="text-center">
          <SectionHeading
            title={updates.title}
            description={updates.description}
          />
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-12 xl:grid-cols-2">
          <CardSection
            heading="Important Announcements"
            items={updates.announcements}
          />
          <CardSection heading="School Activities" items={updates.activities} />
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button variant="gold" size="lg" asChild>
            <Link href="/contact">Contact Us for More Information</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Announcements;
