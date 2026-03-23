import EnquiryForm from "./enquiryForm";
import Fade from "@/components/common/Fade";
import SectionHeading from "@/components/layout/sectionHeading";
import { CONTAINER_SITE } from "@/lib/ui-constants";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  intro?: string;
  guidelines?: string[];
  containerClassName?: string;
}

function Guidelines({ title, intro, guidelines, containerClassName }: Props) {
  if (!guidelines || guidelines.length === 0) return null;

  return (
    <section aria-labelledby="guidelines-heading" className="py-20">
      <div className={cn(CONTAINER_SITE, containerClassName)}>
        <SectionHeading
          title={title}
          intro={intro}
          headingId="guidelines-heading"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <Fade direction="up" delay={0.3}>
            <div className="bg-secondary/50 rounded-2xl p-8">
              <ul className="space-y-5" role="list">
                {guidelines.map((guideline, index) => (
                  <li
                    key={`guideline-${index}`}
                    className="flex items-start gap-4 p-2 transition group"
                  >
                    <Plus className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5 group-hover:scale-110 transition" />

                    <span className="text-muted-foreground text-base leading-relaxed">
                      {guideline || "Guideline"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
          <Fade direction="up" delay={0.4}>
            <EnquiryForm />
          </Fade>
        </div>
      </div>
    </section>
  );
}
export default Guidelines;
