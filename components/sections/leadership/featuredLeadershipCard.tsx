import { Quote } from "lucide-react";

import { FeatureImage } from "@/components/common/featureImage";

import { cn } from "@/lib/utils";
import type { LeadershipMember } from "@/app/leadership/types";
import { ActionButton } from "@/components/common/actionButton";

interface Props {
  member: LeadershipMember;
  variant?: "default" | "secondary";
}

export function FeaturedLeadershipCard({ member, variant = "default" }: Props) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col md:flex-row overflow-hidden rounded-xl shadow-sm max-w-3xl mx-auto border transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl",
        variant === "default"
          ? "border-border bg-background"
          : "border-border/50 bg-secondary",
      )}
    >
      <div className="relative w-full aspect-4/5 md:aspect-auto md:w-[42%] shrink-0 overflow-hidden bg-slate-200">
        {member.photo && (
          <FeatureImage
            image={member.photo}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 lg:p-8">
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl lg:text-2xl font-bold tracking-tight">
              {member.name}
            </h3>
            <p className="text-sm font-semibold text-muted-foreground lg:text-base">
              {member.designation}
            </p>
          </div>

          <div className="h-0.5 w-12 bg-primary/60" />

          {member.highlightQuote && (
            <p className="text-sm lg:text-base leading-relaxed text-muted-foreground italic">
              &quot;{member.highlightQuote}&quot;
            </p>
          )}
        </div>

        {/* Premium Bottom Section with Circular Quote Icon */}
        <div className="pt-6 flex justify-between items-end">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
            <Quote className="size-4 fill-white" />
          </div>

          {member.featured && member.slug?.current && (
            <ActionButton
              href={`/leadership/${member.slug.current}`}
              text="View Profile"
              variant="ghost"
            />
          )}
        </div>
      </div>
    </article>
  );
}
