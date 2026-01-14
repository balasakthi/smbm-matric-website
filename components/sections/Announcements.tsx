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
import { Button } from "../ui/button";

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
      "Activities that instill patriotism, values, and social responsibility.",
  },
  {
    icon: Bus,
    title: "Educational Tours & Trips",
    description:
      "Well-planned educational visits that enhance real-world learning experiences.",
  },
];

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
    <Card className="transition-shadow hover:shadow-md">
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

const Announcements = () => {
  return (
    <section className="bg-muted/40 px-6 py-16">
      <div className="container max-w-(--breakpoint-lg) mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
          Announcements & School Activities
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-[60ch] mx-auto">
          Stay informed about admissions, academics, and the vibrant life at
          SMBM.
        </p>

        {/* Content */}
        <div className="mt-12 grid gap-12 xl:grid-cols-2">
          {/* Announcements */}
          <div className="grid gap-4">
            <h3 className="text-xl font-semibold">Important Announcements</h3>

            {announcements.map(({ title, description, icon: Icon }) => (
              <CardView
                key={title}
                icon={Icon}
                title={title}
                description={description}
              />
            ))}
          </div>

          {/* Activities */}
          <div className="grid gap-4">
            <h3 className="text-xl font-semibold">School Activities</h3>

            {activities.map(({ title, description, icon: Icon }) => (
              <CardView
                key={title}
                icon={Icon}
                title={title}
                description={description}
              />
            ))}
          </div>
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
};

export default Announcements;
