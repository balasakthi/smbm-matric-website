import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import SchoolIntro from "@/components/schoolIntro";
import AcademicLevel from "@/components/academicLevel";
import Infrastructure from "@/components/infrastructure";
import Cta from "@/components/cta";
import ManagementMessage from "@/components/managementMessage";
import WhyChooseSmbm from "@/components/whyChooseSmbm";
import Achievements from "@/components/acheivements";
import Testimonials from "@/components/testimonials";
import Stats from "@/components/stats";

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
