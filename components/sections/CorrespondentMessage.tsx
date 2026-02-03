import { ArrowRight, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/sanity/client";
import { messageQuery, options } from "@/lib/sanityQuery";
import FadeUp from "../motion/FadeUp";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";

export default async function CorrespondentMessage() {
  const correspondentMessage = await client.fetch(messageQuery, {}, options);
  return (
    <section className="py-16 sm:py-20" aria-labelledby="correspondent-heading">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading
            title={correspondentMessage.title}
            description={correspondentMessage.description}
          />
        </div>

        {/* Content */}
        <FadeUp>
          <Card className="mt-12 max-w-5xl mx-auto rounded-2xl shadow-md">
            <CardContent className="p-6 sm:p-10 grid gap-8 lg:grid-cols-3 items-center">
              {/* Image */}
              <div className="w-full flex justify-center">
                <FadeUp direction="right" delay={0.1}>
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={correspondentMessage.image?.asset.url}
                      alt={
                        correspondentMessage.image?.alt || "Correspondent Image"
                      }
                      className="size-full object-cover"
                      loading="eager"
                      width={800}
                      height={600}
                    />
                  </div>
                </FadeUp>
              </div>

              {/* Message */}
              <div className="lg:col-span-2">
                <FadeUp delay={0.2}>
                  <blockquote className="border-l-4 border-accent bg-accent/15 p-4 italic text-foreground/80 leading-relaxed">
                    {correspondentMessage.quote}
                  </blockquote>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <p className="mt-4 text-foreground/80 leading-relaxed line-clamp-4">
                    {correspondentMessage.message}
                  </p>
                </FadeUp>

                <FadeUp delay={0.4}>
                  <div className="mt-6">
                    <p className="font-semibold text-base">
                      <Minus className="h-5 w-5 inline" />{" "}
                      {correspondentMessage.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {correspondentMessage.designation}
                    </p>
                  </div>
                </FadeUp>

                <FadeUp delay={0.5}>
                  <Link
                    href={correspondentMessage.readMoreAction?.url || "#"}
                    className="mt-4 inline-flex items-center text-sm font-medium text-brand-gold hover:underline"
                  >
                    {correspondentMessage.readMoreAction?.label}
                    <ArrowRight className="ml-1 h-4 w-4" />
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
