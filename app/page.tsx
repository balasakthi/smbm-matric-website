import AboutSection from "@/components/AboutSection";
import Academics from "@/components/Academics";
import Announcements from "@/components/Announcements";
import CallToAction from "@/components/CallToAction";
import CorrespondentMessage from "@/components/CorrespondentMessage";
import HeroSection from "@/components/hero/HeroSection";
import Stats from "@/components/Stats";
import WhySMBM from "@/components/WhySMBM";

export default function Home() {
  return (
    <>
      <HeroSection />
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
