import { notFound } from "next/navigation";

import { HeroHeader } from "@/components/sections/heroHeader";
import { LeadershipMessage } from "@/components/layout/leadershipMessage";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";

import { fetchMultipleDocuments, fetchSingleDocument } from "@/lib/sanityFetch";

import {
  LEADERSHIP_MEMBER_QUERY,
  LEADERSHIP_SLUGS_QUERY,
} from "@/lib/sanityQuery";

import type { LeadershipMember, ImageWithAlt } from "@/app/shared-types";
import { ArrowLeft } from "lucide-react";
import { ActionButton } from "@/components/common/actionButton";

interface LeadershipMemberPageData {
  member: LeadershipMember;

  leadershipPage: {
    hero: {
      backgroundImage?: ImageWithAlt;
    };
  };
}

interface SlugItem {
  slug: string;
}

export async function generateStaticParams() {
  const members = await fetchMultipleDocuments<SlugItem>(
    LEADERSHIP_SLUGS_QUERY,
  );

  return members.map((member) => ({
    slug: member.slug,
  }));
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LeadershipMemberPage({ params }: Props) {
  const { slug } = await params;

  const data = await fetchSingleDocument<LeadershipMemberPageData>(
    LEADERSHIP_MEMBER_QUERY,
    { slug },
  );

  if (!data?.member) {
    notFound();
  }

  const { member, leadershipPage } = data;

  return (
    <>
      <HeroHeader
        label="Leadership Message"
        title={`${member.role}'s Message`}
        subtitle={member.heroSubtitle || ""}
        backgroundImage={leadershipPage?.hero?.backgroundImage}
      />

      <SectionWithHeader id="leadership-message">
        <div className="bg-background border-b border-slate-50">
          <div className="mx-auto px-4 py-6 flex items-center justify-between">
            {/* Left: Quick Back Link */}
            <ActionButton
              href="/leadership"
              text="Back to Team"
              variant="ghost"
              iconPosition="left"
            >
              <ArrowLeft className="size-5" />
            </ActionButton>

            {/* Right: Current Context Indicator */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-muted-foreground/40">
              <span>SMBM</span>
              <span className="size-1 rounded-full bg-muted-foreground/40" />
              <span>Leadership</span>
              <span className="size-1 rounded-full bg-muted-foreground/40" />
              <span className="text-slate-500 capitalize">
                {member.designation}
              </span>
            </div>
          </div>
        </div>

        <LeadershipMessage
          name={member.name}
          designation={member.designation}
          highlightQuote={member.highlightQuote}
          fullMessage={member.fullMessage}
          photo={member.photo}
          variant="full"
        />
      </SectionWithHeader>
    </>
  );
}
