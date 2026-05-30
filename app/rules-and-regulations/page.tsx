import { SectionWithHeader } from "@/components/layout/sectionWithHeader";

import { HeroHeader } from "@/components/sections/heroHeader";
import { GridList } from "@/components/common/gridList";
import { IconGridItem } from "@/components/common/iconGridItem";
import { SimpleIcon } from "@/components/common/simpleIcon";
import { TwoColumn, TwoColumnContent } from "@/components/common/twoColumn";
import { InfoCard } from "@/components/common/infoCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shirt, User, UserCheck } from "lucide-react";
import { RULES_AND_REGULATIONS_PAGE_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";
import { FeatureCard } from "@/components/common/featureCard";

import type { RulesAndRegulationsPage } from "./types";
import { PortableText } from "next-sanity";
import { GridSection } from "@/components/common/gridSection";

async function RulesAndRegulations() {
  const rulesAndRegulations = await fetchSectionData<RulesAndRegulationsPage>(
    RULES_AND_REGULATIONS_PAGE_QUERY,
  );

  console.log(rulesAndRegulations);

  const { hero, discipline, uniformPolicy, prayerAndPledge } =
    rulesAndRegulations;

  return (
    <>
      <HeroHeader
        label={hero?.label}
        title={hero?.title || ""}
        subtitle={hero?.subtitle}
        backgroundImage={hero?.backgroundImage}
      />

      {discipline && (
        <SectionWithHeader
          id="discipline"
          title={discipline?.title}
          subtitle={discipline?.subtitle}
          label={discipline?.label}
          headingAlign="center"
        >
          <GridList
            items={discipline?.rules || []}
            columns={3}
            renderItem={(item) => (
              <IconGridItem
                icon={
                  <SimpleIcon
                    icon={item.icon || "School"}
                    category="discipline"
                  />
                }
                title={item.title}
                description={<span>{item.description}</span>}
              ></IconGridItem>
            )}
          ></GridList>
        </SectionWithHeader>
      )}

      {uniformPolicy && (
        <SectionWithHeader
          id="uniformPolicy"
          title={uniformPolicy?.title}
          subtitle={uniformPolicy?.subtitle}
          label={uniformPolicy?.label}
          headingAlign="center"
          sectionClassName="bg-secondary"
        >
          <TwoColumn className="gap-8 lg:gap-12 items-start">
            <TwoColumnContent className="space-y-4">
              <Accordion
                className="w-full space-y-4"
                defaultValue="item-0"
                type="single"
              >
                {uniformPolicy?.uniformCategories &&
                  uniformPolicy.uniformCategories.map((category, index) => (
                    <AccordionItem
                      className="group/accordion-item rounded-xl border border-muted bg-card px-6 transition-all duration-300 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5"
                      key={index}
                      value={`item-${index}`}
                    >
                      <AccordionTrigger className="py-5 text-xl font-semibold tracking-tight text-foreground hover:no-underline group-data-[state=open]/accordion-item:text-primary">
                        <div className="flex items-center gap-3.5">
                          <SimpleIcon
                            icon="ShieldCheck"
                            category="discipline"
                            size="sm"
                          />
                          <span className="font-medium">
                            {category.classGroup}
                          </span>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pb-6 pt-2 text-[16px] leading-relaxed text-muted-foreground border-t border-dashed border-muted/60 mt-1">
                        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
                          {category.boysUniform && (
                            <div className="relative rounded-xl border border-slate-100 bg-slate-50/50 p-5">
                              <div className="mb-3 flex items-center gap-2 font-semibold ">
                                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                                  <User className="h-4 w-4" />
                                </div>
                                Boys Uniform
                              </div>
                              <p className="whitespace-pre-line text-[15px]">
                                {category.boysUniform}
                              </p>
                            </div>
                          )}
                          {category.girlsUniform && (
                            <div className="relative rounded-xl border border-slate-100 bg-slate-50/50 p-5">
                              <div className="mb-3 flex items-center gap-2 font-semibold">
                                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-pink-50 text-pink-600">
                                  <UserCheck className="h-4 w-4" />
                                </div>
                                Girls Uniform
                              </div>
                              <p className="whitespace-pre-line text-[15px]">
                                {category.girlsUniform}
                              </p>
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
              {uniformPolicy.specialUniformNote && (
                <div className="relative overflow-hidden rounded-xl border border-amber-100 bg-linear-to-br from-amber-50/60 to-orange-50/30 p-5 shadow-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                      <Shirt className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold tracking-tight text-amber-900">
                        Special Uniform Day
                      </h4>
                      <p className="text-[14px] leading-relaxed text-amber-800/80">
                        {uniformPolicy.specialUniformNote}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </TwoColumnContent>

            <TwoColumnContent className="flex flex-col gap-5">
              <InfoCard
                title="Personal Care"
                highlights={uniformPolicy?.guidelines}
                variant="white"
              />
            </TwoColumnContent>
          </TwoColumn>
        </SectionWithHeader>
      )}

      {prayerAndPledge && (
        <SectionWithHeader
          id="prayerAndPledge"
          title={prayerAndPledge?.title}
          subtitle={prayerAndPledge?.subtitle}
          label={prayerAndPledge?.label}
          headingAlign="center"
        >
          <GridSection columns={2}>
            <FeatureCard
              title={"Morning Prayer"}
              alignment="center"
              icon={<SimpleIcon icon={"School"} category="whyChoose" isWhite />}
              variant="secondary"
            >
              <PortableText value={prayerAndPledge?.morningPrayer} />
            </FeatureCard>
            <FeatureCard
              title={"Morning Prayer"}
              alignment="center"
              icon={<SimpleIcon icon={"School"} category="whyChoose" isWhite />}
              variant="secondary"
            >
              <PortableText value={prayerAndPledge?.eveningPrayer} />
            </FeatureCard>
            <FeatureCard
              title={"Morning Prayer"}
              alignment="center"
              icon={<SimpleIcon icon={"School"} category="whyChoose" isWhite />}
              variant="secondary"
            >
              <PortableText value={prayerAndPledge?.loyaltyPledge} />
            </FeatureCard>
          </GridSection>
        </SectionWithHeader>
      )}
    </>
  );
}

export default RulesAndRegulations;
