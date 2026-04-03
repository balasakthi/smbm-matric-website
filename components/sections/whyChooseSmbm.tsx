import { FeatureGrid } from "@/components/layout/featureGrid";
import { School } from "lucide-react";
import { WHY_CHOOSE_SMBM_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";
import { getIcon } from "@/lib/iconMaps";
import { whyChooseSmbmIconMap } from "@/lib/iconMaps";

interface Reason {
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseData {
  title: string;
  intro: string;
  reasons: Reason[];
}

async function WhyChooseSmbm() {
  const data = await fetchSectionData<WhyChooseData>(WHY_CHOOSE_SMBM_QUERY);

  if (!data) return null;

  return (
    <FeatureGrid
      title={data.title}
      intro={data.intro}
      items={data.reasons}
      getIcon={getIcon}
      iconMap={whyChooseSmbmIconMap}
      fallbackIcon={School}
      headingId="why-choose-heading"
    />
  );
}

export { WhyChooseSmbm };
