import AcademicLevel from "@/components/sections/academicLevel";
import Achievements from "@/components/sections/acheivements";
import Cta from "@/components/sections/cta";
import Hero from "@/components/sections/hero";
import Highlights from "@/components/sections/highlights";
import Infrastructure from "@/components/sections/infrastructure";
import ManagementMessage from "@/components/sections/managementMessage";
import SchoolIntro from "@/components/sections/schoolIntro";
import Stats from "@/components/sections/stats";
import Testimonials from "@/components/sections/testimonials";
import WhyChooseSmbm from "@/components/sections/whyChooseSmbm";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <SchoolIntro />
      <ManagementMessage />
      <WhyChooseSmbm />
      <Stats />
      <AcademicLevel />
      <Achievements />
      <Infrastructure />
      <Testimonials />
      <Cta />
    </>
  );
}
