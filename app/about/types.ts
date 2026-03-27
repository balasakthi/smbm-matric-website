import type { SanityImageSource } from "@sanity/image-url";
import { PortableTextBlock } from "next-sanity";

interface AboutPage {
  hero: {
    title: string;
    subtitle?: string;
    label?: string;
    backgroundImage?: SanityImageSource & {
      alt?: string;
    };
  };

  overview: {
    title: string;
    content: PortableTextBlock[];
    image: SanityImageSource & {
      alt?: string;
    };
  };

  missionVision: {
    title: string;
    description: string;
    mission: PortableTextBlock[];
    vision: PortableTextBlock[];
    coreValues?: string;
    quote?: string;
  };

  heritage: {
    label?: string;
    title: string;
    description: string;

    aphorism?: string;
    leadershipMission?: PortableTextBlock[];

    leadership?: {
      name?: string;
      position?: string;
    }[];

    coreFocus?: {
      title?: string;
      content?: PortableTextBlock[];
    };

    schools?: {
      year?: number;
      name?: string;
      type?: string;
    }[];

    socialVision?: {
      title?: string;
      content?: PortableTextBlock[];
    };

    motto?: string[];
  };

  studentLife: {
    title: string;
    description?: string;
    items?: {
      title: string;
      description?: string;
      image?: SanityImageSource & {
        alt?: string;
      };
    }[];
  };
}

export type { AboutPage };
