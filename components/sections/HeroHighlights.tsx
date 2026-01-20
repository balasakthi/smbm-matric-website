import HeroHighlightsMotion from "./HeroHighlightsMotion";

const highlights = [
  {
    icon: "School",
    text: "45+ Years of Excellence",
  },
  {
    icon: "GraduationCap",
    text: "Matriculation Board",
  },
  {
    icon: "Users",
    text: "Dedicated Faculty",
  },
  {
    icon: "Leaf",
    text: "Holistic Development",
  },
];

function HeroHighlights() {
  return (
    <section className="relative z-20 -mt-8 md:-mt-16">
      <HeroHighlightsMotion highlights={highlights} />;
    </section>
  );
}

export default HeroHighlights;
