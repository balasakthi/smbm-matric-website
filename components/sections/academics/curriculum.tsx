import { Globe2, School, Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Fade } from "@/components/common/Fade";
import { GridList } from "@/components/common/gridList";
import { SimpleIcon } from "@/components/common/simpleIcon";
import { IconGridItem } from "@/components/common/iconGridItem";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { CARD_HOVER_SLIDE } from "@/lib/ui-constants";
import { getIconByCategory } from "@/lib/iconMaps";

interface CurriculumCategory {
  title: string;
  icon?: string;
  subjects: string[];
}

type CurriculumGroup =
  | {
      _type: "kgGroup";
      groupName: string;
      icon?: string;
      description: string;
      categories: CurriculumCategory[];
    }
  | {
      _type: "standardGroup";
      groupName: string;
      icon?: string;
      description: string;
      categories: CurriculumCategory[];
    }
  | {
      _type: "higherSecondaryGroup";
      groupName: string;
      icon?: string;
      description: string;
      streams: {
        streamName: string;
        icon?: string;
        coreSubjects: string[];
        groupOptions: string[];
        languages: string[];
      }[];
    };

interface Props {
  groups: CurriculumGroup[];
}

export function Curriculum({ groups }: Props) {
  if (!groups?.length) return null;

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={groups[0].groupName}
      className="w-full space-y-6"
    >
      {groups.map((group, index) => (
        <Fade key={group.groupName} direction="up" delay={index * 0.1}>
          <AccordionItem
            value={group.groupName}
            className="border border-border/50 bg-secondary rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 data-[state=open]:border-primary/20"
          >
            {/* Accordion Trigger (The Header) */}
            <AccordionTrigger className="px-6 py-6 hover:no-underline group">
              <div className="flex items-center gap-4 text-left">
                <SimpleIcon
                  icon={group?.icon || "School"}
                  category="classCategories"
                  hasBorder={false}
                />
                <div>
                  <h3 className="text-xl font-bold">{group.groupName}</h3>
                  {/* Description */}
                  {group.description && (
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {group.description}
                    </p>
                  )}
                </div>
              </div>
            </AccordionTrigger>

            {/* Accordion Content */}
            <AccordionContent className="px-6 md:px-15 pb-10 pt-4">
              {/* KG + STANDARD VIEW */}
              {(group._type === "kgGroup" ||
                group._type === "standardGroup") && (
                <GridList
                  items={group.categories || []}
                  columns={3}
                  renderItem={(item) => (
                    <IconGridItem
                      icon={
                        <SimpleIcon
                          icon={item.icon || "School"}
                          category="curriculum"
                          isWhite
                        />
                      }
                      title={item.title}
                      description={<span>{item.subjects.join(", ")}</span>}
                    />
                  )}
                />
              )}

              {/* HIGHER SECONDARY VIEW */}
              {group._type === "higherSecondaryGroup" && (
                <div className="grid md:grid-cols-2 gap-6">
                  {group.streams.map((stream, i) => {
                    const Icon = stream.icon
                      ? getIconByCategory(stream.icon, "curriculum", School)
                      : School;

                    return (
                      <Card
                        key={i}
                        className={cn(
                          CARD_HOVER_SLIDE,
                          "border-2 hover:border-primary/20",
                        )}
                      >
                        <CardHeader className="pb-4">
                          <CardTitle className="flex items-center gap-4">
                            <div className="p-2.5 rounded-lg bg-primary/5 text-primary">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-lg font-bold">
                              {stream.streamName}
                            </span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-3">
                              Core Curriculum
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {stream.coreSubjects.map((s) => (
                                <Badge
                                  key={s}
                                  variant="secondary"
                                  className="bg-secondary/50"
                                >
                                  {s}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="p-4 rounded-xl bg-muted/30 border border-dotted">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                              Specialization
                            </h4>
                            <ul className="space-y-2">
                              {stream.groupOptions.map((g, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center gap-2 text-sm text-foreground/80"
                                >
                                  <Plus className="h-3 w-3 text-primary" /> {g}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-6 border-t flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Globe2 className="h-4 w-4" />

                              <span>Languages</span>
                            </div>

                            <span className="font-bold text-primary">
                              {stream.languages.join(" • ")}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Fade>
      ))}
    </Accordion>
  );
}
