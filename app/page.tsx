import About from "@/components/sections/About";
import Academics from "@/components/sections/Academics";
import Announcements from "@/components/sections/Announcements";
import CallToAction from "@/components/sections/CallToAction";
import CorrespondentMessage from "@/components/sections/CorrespondentMessage";
import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/Stats";
import WhySMBM from "@/components/sections/WhySMBM";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Academics />
      <WhySMBM />
      <Stats />
      <Announcements />
      <CorrespondentMessage />
      <CallToAction />
    </>
  );
}
