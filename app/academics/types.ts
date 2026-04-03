import type { SanityImageSource } from "@sanity/image-url";
import { PortableTextBlock } from "next-sanity";

interface AcademicsPage {
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
  };

  kindergarten: {
    title: string;
    content: PortableTextBlock[];
  };

  learningApproach: {
    title: string;
    subtitle: string;
    points: {
      title: string;
      description: string;
      icon?: string;
    }[];
  };

  curriculum: {
    title: string;
    subtitle: string;
    levels: CurriculumLevel[];
  };

  teachingMethodology: {
    title: string;
    description: string;
    methodologies: string[];
    image?: SanityImageSource & { alt?: string };
  };
}

type CurriculumLevel = StandardLevel | HigherSecondaryLevel;

// 🔹 KG → X
interface StandardLevel {
  level: string;
  type: "standard";
  description?: string;
  subjects: string[];
}

// 🔹 XI–XII
interface HigherSecondaryLevel {
  level: string;
  type: "higherSecondary";
  description?: string;
  streams: {
    streamName: string;
    coreSubjects: string[];
    groupOptions: string[];
    languages: string[];
  }[];
}

export type { AcademicsPage };
