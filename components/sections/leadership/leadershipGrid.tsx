import { Fade } from "@/components/common/Fade";

import { LeadershipCard } from "./leadershipCard";
import { FeaturedLeadershipCard } from "./featuredLeadershipCard";

import type { LeadershipMember } from "@/app/leadership/types";

import { cn } from "@/lib/utils";

interface Props {
  members?: LeadershipMember[];
  variant?: "default" | "secondary";
}

export function LeadershipGrid({ members = [], variant = "default" }: Props) {
  if (!members.length) return null;

  const featuredMembers = members.filter((member) => member.featured);
  const regularMembers = members.filter((member) => !member.featured);

  return (
    <section className="mx-auto space-y-16">
      {featuredMembers.length > 0 && (
        <div
          className={cn(
            "grid gap-8 items-stretch mx-auto",
            featuredMembers.length === 1
              ? "grid-cols-1 max-w-3xl"
              : "grid-cols-1 lg:grid-cols-2 max-w-6xl",
          )}
        >
          {featuredMembers.map((member, index) => (
            <Fade direction="up" key={member._id} delay={index * 0.1}>
              <FeaturedLeadershipCard member={member} variant={variant} />
            </Fade>
          ))}
        </div>
      )}
      <div
        className={cn(
          "grid gap-6 mx-auto items-stretch",
          regularMembers.length === 3
            ? "grid-cols-1 sm:grid-cols-3 max-w-5xl"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        )}
      >
        {regularMembers.map((member, index) => (
          <Fade direction="up" key={member._id} delay={index * 0.1}>
            <LeadershipCard member={member} variant={variant} />
          </Fade>
        ))}
      </div>
    </section>
  );
}
