import type { PortableTextBlock } from "@portabletext/types";
import { MissionVisionClient } from "./missionVisionClient";

interface Props {
  title: string;
  description: string;
  mission: PortableTextBlock[];
  vision: PortableTextBlock[];
  coreValues?: string;
  quote?: string;
}

function MissionVision({
  title,
  description,
  mission,
  vision,
  coreValues,
  quote,
}: Props) {
  return (
    <MissionVisionClient
      title={title}
      description={description}
      mission={mission}
      vision={vision}
      coreValues={coreValues}
      quote={quote}
    />
  );
}

export { MissionVision };
