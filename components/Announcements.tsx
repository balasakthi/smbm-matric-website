import {
  Megaphone,
  Trophy,
  ClipboardList,
  CalendarCheck,
  BookOpen,
  Palette,
  Flag,
  Bus,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeUp from "@/components/motion/FadeUp";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import SectionHeading from "./SectionHeading";

const announcements = [
  {
    icon: Megaphone,
    title: "Admissions Information",
    description:
      "Details about the admission process, eligibility criteria, and required documents.",
  },
  {
    icon: CalendarCheck,
    title: "Academic Calendar",
    description:
      "Overview of the academic year including working days, holidays, and examinations.",
  },
  {
    icon: BookOpen,
    title: "Examination System",
    description:
      "Continuous assessment and structured evaluations aligned with the Matriculation Board.",
  },
  {
    icon: ClipboardList,
    title: "Parent–Teacher Interaction",
    description:
      "Regular communication between parents and teachers to support student progress.",
  },
];

const activities = [
  {
    icon: Trophy,
    title: "Annual Sports Day",
    description:
      "Encouraging physical fitness, teamwork, and sportsmanship among students.",
  },
  {
    icon: Palette,
    title: "Cultural & Arts Programs",
    description:
      "Opportunities for students to express creativity through music, dance, and arts.",
  },
  {
    icon: Flag,
    title: "National & Social Awareness Programs",
    description:
      "Activities that instill patriotism, values, and social responsibility in our future leaders.",
  },
  {
    icon: Bus,
    title: "Educational Tours & Trips",
    description:
      "Well-planned educational visits that enhance real-world learning experiences.",
  },
];

interface CardSection {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

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
            <Icon className="h-5 w-5" />
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
  items: CardSection[];
}) {
  return (
    <div className="grid">
      <FadeUp>
        <h3 className="text-xl font-semibold mb-6">{heading}</h3>
      </FadeUp>

      <Stagger>
        {items.map(({ title, description, icon: Icon }) => (
          <StaggerItem key={title} className="mb-4">
            <CardView icon={Icon} title={title} description={description} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

function Announcements() {
  return (
    <section className="bg-muted/40 px-6 py-16">
      <div className="container max-w-(--breakpoint-lg) mx-auto">
        {/* Heading */}
        <div className="text-center">
          <SectionHeading
            title="Announcements & School Activities"
            description=" Stay informed about admissions, academics, and the vibrant school
          life at SMBM."
          />
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-12 xl:grid-cols-2">
          <CardSection
            heading="Important Announcements"
            items={announcements}
          />
          <CardSection heading="School Activities" items={activities} />
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
