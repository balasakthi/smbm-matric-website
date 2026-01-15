import AboutSection from "@/components/AboutSection";
import HeroHighlights from "@/components/HeroHighlights";
import HeroSection from "@/components/HeroSection";
import Academics from "@/components/sections/Academics";
import WhySMBM from "@/components/sections/WhySMBM";
import Stats from "@/components/sections/Stats";
import Announcements from "@/components/sections/Announcements";
import CorrespondentMessage from "@/components/sections/CorrespondentMessage";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroHighlights />
      <AboutSection />
      <Academics />
      <WhySMBM />
      <Stats />
      <Announcements />
      <CorrespondentMessage />
      <CallToAction />
    </>
  );
}
