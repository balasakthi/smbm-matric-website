import { ActionButton } from "../layout/actionButton";
import { CTA_QUERY } from "@/lib/sanityQuery";
import { Fade } from "@/components/common/Fade";
import { fetchSectionData } from "@/lib/sanityFetch";

interface CtaBlock {
  title: string;
  supportLine: string;
}

async function Cta() {
  const cta = await fetchSectionData<CtaBlock>(CTA_QUERY);

  if (!cta) return null;

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-secondary py-24"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-3xl">
            <Fade direction="up">
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight"
              >
                {cta.title}
              </h2>
            </Fade>

            <Fade direction="up" delay={0.15}>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {cta.supportLine}
              </p>
            </Fade>
          </div>

          {/* Right Button */}
          <Fade direction="up" delay={0.3}>
            <div className="flex justify-center lg:shrink-0 lg:justify-end">
              <ActionButton text="Admissions" href="/admissions" size="lg" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export { Cta };
