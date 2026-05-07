import { FeatureImage } from "@/components/common/featureImage";

import { cn } from "@/lib/utils";

import type { LeadershipMember } from "@/app/leadership/types";

interface Props {
  member: LeadershipMember;
  variant?: "default" | "secondary";
}

export function LeadershipCard({ member, variant = "default" }: Props) {
  return (
    <article
      className={cn(
        "group flex flex-col h-full overflow-hidden rounded-xl border p-4 shadow-sm transition-all duration-300",
        "hover:shadow-lg hover:border-primary/20",
        variant === "default"
          ? "border-border bg-background"
          : "border-border/50 bg-secondary/50",
      )}
    >
      <div className="relative aspect-4/5 overflow-hidden rounded-xl mb-4">
        {member.photo && (
          <FeatureImage
            image={member.photo}
            className="h-full w-full object-cover grayscale-20% group-hover:grayscale-0 transition-all duration-500"
          />
        )}
      </div>

      <div className="text-center pb-2">
        <h3 className="text-lg font-bold group-hover:text-primary/80 transition-colors">
          {member.name}
        </h3>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">
          {member.designation}
        </p>

        <div className="mx-auto mt-3 h-0.5 w-8 bg-primary/40 group-hover:w-12 group-hover:bg-primary transition-all" />
      </div>
    </article>
  );
}
