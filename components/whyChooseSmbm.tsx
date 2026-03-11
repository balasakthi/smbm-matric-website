import Fade from "@/components/motion/Fade";
import {
  CONTAINER_SITE,
  CARD_HOVER_SLIDE,
  ICON_WRAPPER_CLASS,
} from "@/lib/ui-constants";
import { School } from "lucide-react";
import { WHY_CHOOSE_SMBM_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";
import { getIcon } from "@/lib/iconMaps";
import { whyChooseSmbmMap } from "@/lib/iconMaps";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Reason {
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseData {
  title: string;
  intro: string;
  reasons: Reason[];
}

async function WhyChooseSmbm() {
  const data = await fetchSectionData<WhyChooseData>(WHY_CHOOSE_SMBM_QUERY);

  if (!data) return null;

  return (
    <section aria-labelledby="why-choose-heading" className="py-20 md:py-28">
      <div className={`${CONTAINER_SITE} max-w-7xl`}>
        {/* Heading Block */}
        <div className="max-w-2xl">
          <Fade direction="up">
            <h2
              id="why-choose-heading"
              className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight"
            >
              {data.title}
            </h2>
          </Fade>

          <Fade direction="up" delay={0.15}>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {data.intro}
            </p>
          </Fade>
        </div>

        {/* Reasons Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.reasons.map((reason, index) => {
            const IconComponent = getIcon(
              reason.icon,
              whyChooseSmbmMap,
              School,
            );

            return (
              <Fade
                key={`${reason.title}-${index}`}
                direction="up"
                delay={index * 0.12}
              >
                <Card className={`${CARD_HOVER_SLIDE} h-full gap-2`}>
                  <CardHeader>
                    <CardTitle>
                      <div className={`${ICON_WRAPPER_CLASS} mb-6`}>
                        <IconComponent strokeWidth={1.2} className="size-7" />
                      </div>
                      <h3 className="text-[17px] font-semibold tracking-tight">
                        {reason.title}
                      </h3>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSmbm;
