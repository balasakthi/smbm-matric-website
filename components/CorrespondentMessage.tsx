import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import FadeUp from "./motion/FadeUp";

export default function CorrespondentMessage() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="correspondent-heading">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading
            title="Correspondent’s Message"
            description="A vision rooted in values, discipline, and academic excellence."
          />
        </div>

        {/* Content */}
        <FadeUp>
          <Card className="mt-12 max-w-5xl mx-auto rounded-2xl shadow-md">
            <CardContent className="p-6 sm:p-10 grid gap-8 md:grid-cols-3 items-center">
              {/* Image */}
              <div className="flex justify-center md:justify-start">
                <FadeUp direction="right" delay={0.1}>
                  <div className="relative size-64 overflow-hidden rounded-xl bg-muted">
                    <Image
                      src="/images/correspondent.webp"
                      alt="Correspondent of SMBM Matriculation Higher Secondary School"
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                </FadeUp>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <FadeUp delay={0.2}>
                  <blockquote className="border-l-4 border-brand-gold bg-primary/5 p-4 italic text-foreground/80 leading-relaxed line-clamp-3">
                    “A school is a place where learning and joy come together,
                    shaping educated, responsible, and confident individuals for
                    tomorrow.”
                  </blockquote>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <p className="mt-4 text-foreground/80 leading-relaxed line-clamp-4">
                    At SMBM, education goes beyond books and classrooms. We
                    strive to nurture character, encourage individuality, and
                    empower students to communicate confidently and face the
                    future with courage and competence.
                  </p>
                </FadeUp>

                <FadeUp delay={0.4}>
                  <div className="mt-6">
                    <p className="font-semibold text-base">
                      — Mr. M.K. Paramasivam
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Secretary & Correspondent
                    </p>
                  </div>
                </FadeUp>

                <FadeUp delay={0.5}>
                  <Link
                    href="/about/correspondent"
                    className="mt-4 inline-flex items-center text-sm font-medium text-brand-gold hover:underline"
                  >
                    Read Full Message →
                  </Link>
                </FadeUp>
              </div>
            </CardContent>
          </Card>
        </FadeUp>
      </div>
    </section>
  );
}
