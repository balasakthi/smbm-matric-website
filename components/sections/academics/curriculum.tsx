import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";
import { Fade } from "@/components/common/Fade";
import { BookOpen, GraduationCap, Globe2, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CARD_HOVER_SLIDE, ICON_WRAPPER_CLASS } from "@/lib/ui-constants";
import { cn } from "@/lib/utils";

type CurriculumLevel =
  | {
      level: string;
      type: "standard";
      description?: string;
      subjects: string[];
    }
  | {
      level: string;
      type: "higherSecondary";
      description?: string;
      streams: {
        streamName: string;
        coreSubjects: string[];
        groupOptions: string[];
        languages: string[];
      }[];
    };

interface Props {
  title: string;
  subtitle: string;
  levels: CurriculumLevel[];
}

export function Curriculum({ title, subtitle, levels }: Props) {
  if (!levels?.length) return null;

  return (
    <SectionWithHeader
      id="curriculum-heading"
      title={title}
      description={subtitle}
      headingAlign="center"
      sectionClassName="bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 mt-8 md:mt-12">
        <Tabs defaultValue={levels[0].level} className="w-full">
          {/* RESPONSIVE TABS LIST */}
          <Fade direction="up" delay={0.2}>
            <div className="flex justify-center mb-8 md:mb-12">
              {/* Added overflow-x-auto for mobile scrolling */}
              <div className="w-full overflow-x-auto pb-2 flex md:justify-center no-scrollbar">
                <TabsList className="mx-auto inline-flex h-auto p-1 bg-background border border-border rounded-full">
                  {levels.map((lvl) => (
                    <TabsTrigger
                      key={lvl.level}
                      value={lvl.level}
                      className="whitespace-nowrap px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {lvl.level}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>
          </Fade>

          <div className="min-h-100">
            {/* Prevents layout jumping */}
            {levels.map((lvl) => (
              <TabsContent
                key={lvl.level}
                value={lvl.level}
                className="outline-none focus-visible:ring-0 m-0"
              >
                {/* Description */}
                {lvl.description && (
                  <Fade direction="up" delay={0.1}>
                    <p className="text-muted-foreground mb-10 text-center max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                      {lvl.description}
                    </p>
                  </Fade>
                )}

                {/* STANDARD VIEW */}
                {lvl.type === "standard" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {lvl.subjects.map((sub, i) => (
                      <Fade
                        key={sub}
                        direction="up"
                        delay={Math.min(i * 0.05, 0.3)}
                      >
                        <div
                          className={cn(
                            CARD_HOVER_SLIDE,
                            "group flex items-center gap-4 bg-background p-5 ",
                          )}
                        >
                          <div className={ICON_WRAPPER_CLASS}>
                            <BookOpen className="h-5 w-5" />
                          </div>
                          <span className="font-semibold text-foreground">
                            {sub}
                          </span>
                        </div>
                      </Fade>
                    ))}
                  </div>
                )}

                {/* HIGHER SECONDARY VIEW */}
                {lvl.type === "higherSecondary" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {lvl.streams.map((stream, i) => (
                      <Fade
                        key={stream.streamName}
                        direction={i % 2 === 0 ? "left" : "right"}
                        delay={0.1 * i}
                      >
                        <Card
                          className={cn(
                            CARD_HOVER_SLIDE,
                            "h-full border border-border flex flex-col",
                          )}
                        >
                          <CardContent className="p-0 flex flex-col h-full">
                            {/* Header */}
                            <div className="px-6 py-2 border-b border-border">
                              <div className="flex items-center gap-3 mb-3">
                                <div className={ICON_WRAPPER_CLASS}>
                                  <GraduationCap className="h-5 w-5" />
                                </div>
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                                  Program Stream
                                </span>
                              </div>
                              <h3 className="text-2xl font-bold tracking-tight">
                                {stream.streamName}
                              </h3>
                            </div>

                            {/* Body */}
                            <div className="p-6 space-y-8 flex-1">
                              <div className="space-y-3">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                  Foundation Subjects
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {stream.coreSubjects.map((s) => (
                                    <Badge
                                      key={s}
                                      variant="secondary"
                                      className="text-xs md:text-sm px-3 py-1 bg-secondary hover:bg-secondary/80"
                                    >
                                      {s}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="space-y-3">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                  Elective Combinations
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                  {stream.groupOptions.map((group, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center gap-3 text-sm p-3 bg-secondary/30 border border-transparent hover:border-primary/10 transition-all"
                                    >
                                      <Plus className="h-4 w-4 text-primary shrink-0" />
                                      <span className="text-foreground font-medium">
                                        {group}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Footer */}
                            <div className="px-6 py-4 bg-muted/30 flex items-center gap-3 border-t border-border mt-auto">
                              <Globe2 className="h-4 w-4 text-primary shrink-0" />
                              <p className="text-xs md:text-sm">
                                <span className="text-muted-foreground font-medium mr-2">
                                  Languages:
                                </span>
                                <span className="text-foreground">
                                  {stream.languages.join(", ")}
                                </span>
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </Fade>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </SectionWithHeader>
  );
}
