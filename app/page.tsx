import Hero from "@/components/sections/hero";
import Highlights from "@/components/sections/highlights";
import SchoolIntro from "@/components/sections/schoolIntro";
import AcademicLevel from "@/components/sections/academicLevel";
import Infrastructure from "@/components/sections/infrastructure";
import Cta from "@/components/sections/cta";
import ManagementMessage from "@/components/sections/managementMessage";
import WhyChooseSmbm from "@/components/sections/whyChooseSmbm";
import Achievements from "@/components/sections/acheivements";
import Testimonials from "@/components/sections/testimonials";
import Stats from "@/components/sections/stats";

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
