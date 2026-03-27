import type { SanityImageSource } from "@sanity/image-url";
import { PortableTextBlock } from "next-sanity";

interface ManagementMessageData {
  name: string;
  designation: string;
  highlightQuote?: string;
  previewMessage?: PortableTextBlock[];
  fullMessage: PortableTextBlock[];
  photo: SanityImageSource;
  slug: {
    current: string;
  };
}

export type { ManagementMessageData };
