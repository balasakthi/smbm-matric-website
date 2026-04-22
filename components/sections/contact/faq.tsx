import { cn } from "@/lib/utils";

import { PlusIcon } from "lucide-react";

import { Accordion as AccordionPrimitive } from "radix-ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Fade } from "@/components/common/Fade";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";

interface Props {
  title: string;
  subtitle: string;
  faq: FrequentlyAskedQuestion[];
}

type FrequentlyAskedQuestion = {
  question?: string;
  answer?: string;
};

const FAQ = ({ title, subtitle, faq }: Props) => {
  const totalFaqs = faq.length;
  const firstHalfFaqs = faq.slice(0, Math.ceil(totalFaqs / 2));
  const secondHalfFaqs = faq.slice(Math.ceil(totalFaqs / 2));

  return (
    <SectionWithHeader
      title={title}
      subtitle={subtitle}
      id="faq"
      headingAlign="center"
    >
      <div className="mx-auto mt-16 max-w-5xl">
        <Fade direction="up" delay={0.3}>
          <Accordion
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            collapsible
            type="single"
          >
            <div className="space-y-4">
              <AccordionItemList faqs={firstHalfFaqs} />
            </div>
            <div className="space-y-4">
              <AccordionItemList faqs={secondHalfFaqs} />
            </div>
          </Accordion>
        </Fade>
      </div>
    </SectionWithHeader>
  );
};

function AccordionItemList({ faqs }: { faqs: FrequentlyAskedQuestion[] }) {
  return faqs.map((faq, index) => (
    <AccordionItem
      className="mb-4 rounded-xl bg-secondary border border-border/40 hover:border-border transition-all duration-200 shadow-sm px-4 last:mb-0"
      key={faq.question}
      value={`${index}-${faq.question}`}
    >
      <AccordionPrimitive.Header className="flex items-center">
        <AccordionPrimitive.Trigger
          className={cn(
            "flex flex-1 items-center justify-between pt-4 pb-3 font-medium tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
            "text-start text-lg",
          )}
        >
          {faq.question}
          <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionContent className="text-base text-muted-foreground">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ));
}

export { FAQ };
