import AboutSection from "@/components/AboutSection";
import HeroHighlights from "@/components/HeroHighlights";
import HeroSection from "@/components/HeroSection";
import Academics from "@/components/sections/Academics";
import WhySMBM from "@/components/sections/WhySMBM";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroHighlights />
      <AboutSection />
      <Academics />
      <WhySMBM />
    </>
  );
}
