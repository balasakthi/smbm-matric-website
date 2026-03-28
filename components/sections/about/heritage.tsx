import { Fade } from "@/components/common/Fade";
import { ICON_WRAPPER_CLASS, CARD_HOVER_SLIDE } from "@/lib/ui-constants";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "next-sanity";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";
import { Separator } from "@/components/ui/separator";
import { User, Quote, GraduationCap } from "lucide-react";

interface Props {
  title: string;
  label?: string;
  description: string;

  aphorism?: string;

  leadershipMission?: PortableTextBlock[];

  leadership?: {
    name?: string;
    position?: string;
  }[];

  coreFocus?: {
    title?: string;
    content?: PortableTextBlock[];
  };

  schools?: {
    year?: number;
    name?: string;
    type?: string;
  }[];

  socialVision?: {
    title?: string;
    content?: PortableTextBlock[];
  };

  motto?: string[];
}

function Heritage({
  title,
  label,
  description,
  leadership,
  aphorism,
  leadershipMission,
  coreFocus,
  schools,
  socialVision,
  motto,
}: Props) {
  const sortedSchools = schools?.length
    ? [...schools].sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
    : [];

  return (
    <SectionWithHeader
      id="about-dnu-heading"
      label={label}
      title={title}
      description={description}
      headingAlign="center"
    >
      {/* 🔷 APHORISM & MISSION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Aphorism */}
        <div className="lg:col-span-5">
          {aphorism && (
            <Fade direction="left" delay={0.1}>
              <div className="relative p-8 rounded-2xl bg-secondary/60 border border-border shadow-sm">
                <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary opacity-50" />
                <p className="text-xl font-serif italic text-primary leading-snug">
                  {aphorism}
                </p>
              </div>
            </Fade>
          )}
        </div>

        {/* Mission */}
        <div className="lg:col-span-7">
          <Fade direction="right" delay={0.15}>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              {leadershipMission && <PortableText value={leadershipMission} />}
            </div>
          </Fade>
        </div>
      </div>

      {/* 🔷 LEADERSHIP TEAM */}
      {leadership?.length && (
        <Fade direction="up" delay={0.2}>
          <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {leadership.map((leader, index) => (
              <div
                key={`${leader.name}-${index}`}
                className={`${CARD_HOVER_SLIDE} flex items-center gap-4 p-4 border rounded-xl bg-background shadow-sm`}
              >
                <div className={ICON_WRAPPER_CLASS}>
                  <User />
                </div>

                <div>
                  <p className="font-medium">{leader.name || "Unknown"}</p>
                  <p className="text-sm text-muted-foreground">
                    {leader.position || ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      )}

      <Separator className="mb-12" />

      {/* 🔷 GRID SECTION - Timeline LEFT, Core Focus & Vision RIGHT */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT: Schools Timeline */}
        <div className="space-y-8">
          <Fade direction="up" delay={0.3}>
            <div className="flex items-center gap-3">
              <GraduationCap className="text-primary" />
              <h3 className="text-xl font-bold">Educational Legacy</h3>
            </div>
          </Fade>

          {sortedSchools.length > 0 && (
            <Fade direction="up" delay={0.35}>
              <div className="relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border">
                {sortedSchools.map(({ year, name, type }, index) => (
                  <div
                    key={index}
                    className="relative pl-6 pb-10 last:pb-0 group hover:translate-x-1 transition-transform"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />

                    {/* Content */}
                    <div className="space-y-1">
                      <p className="text-sm text-primary font-bold">
                        {year ?? ""}
                      </p>

                      <h4 className="font-medium text-base">
                        {name ?? "Unnamed School"}
                      </h4>

                      <p className="text-xs text-muted-foreground">
                        {type ?? ""}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          )}
        </div>

        {/* RIGHT: Core Focus & Vision Stacked */}
        <div className="space-y-8">
          {/* Core Focus */}
          {coreFocus?.content && (
            <Fade direction="up" delay={0.4}>
              <div className="space-y-3">
                {coreFocus.title && (
                  <h3 className="text-xl font-semibold">{coreFocus.title}</h3>
                )}

                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <PortableText value={coreFocus.content} />
                </div>
              </div>
            </Fade>
          )}

          {/* Vision */}
          {socialVision && (
            <Fade direction="up" delay={0.45}>
              <div className="bg-secondary/40 border border-border p-6 md:p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <GraduationCap size={120} />
                </div>

                {socialVision.title && (
                  <h3 className="text-xl font-bold mb-4">
                    {socialVision.title}
                  </h3>
                )}

                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <PortableText value={socialVision.content || []} />
                </div>
              </div>
            </Fade>
          )}
        </div>
      </div>

      {/* 🔷 MOTTO */}
      {motto?.length && (
        <Fade direction="up" delay={0.5}>
          <div className="bg-secondary/50 p-4 mt-18 flex flex-wrap justify-center gap-x-10 gap-y-3">
            {motto.map((line, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {line}
              </span>
            ))}
          </div>
        </Fade>
      )}
    </SectionWithHeader>
  );
}

export { Heritage };
