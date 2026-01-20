import HeroMotion from "./HeroMotion";
import { getAdmissionActions } from "@/utils/admissionStatus";

const images = [
  "/images/school-building.webp",
  "/images/school-building-transparent.webp",
  "/images/school-building.webp",
];

function Hero() {
  const actions = getAdmissionActions();

  return (
    <HeroMotion
      images={images}
      primary={actions.primary}
      secondary={actions.secondary}
    />
  );
}

export default Hero;
