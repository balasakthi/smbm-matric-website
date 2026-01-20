import AboutSection from "@/components/AboutSection";
import Academics from "@/components/sections/Academics";
import Announcements from "@/components/sections/Announcements";
import CallToAction from "@/components/sections/CallToAction";
import CorrespondentMessage from "@/components/sections/CorrespondentMessage";
import Hero from "@/components/sections/Hero";
import HeroHighlights from "@/components/sections/HeroHighlights";
import Stats from "@/components/sections/Stats";
import WhySMBM from "@/components/sections/WhySMBM";

export default function Home() {
  return (
    <>
      <Hero />
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
