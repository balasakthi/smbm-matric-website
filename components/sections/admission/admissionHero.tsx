"use client";
import { Button } from "@/components/ui/button";
import { BTN_HOVER_SCALE, BTN_ICON_HOVER_SLIDE } from "@/lib/ui-constants";
import { ArrowUpRight } from "lucide-react";

export default function AdmissionHero() {
  const scrollToForm = () => {
    const formElement = document.getElementById("guidelines-heading");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Button
      onClick={scrollToForm}
      className={`${BTN_HOVER_SCALE} text-base`}
      size="lg"
    >
      Enquire Now
      <ArrowUpRight className={`${BTN_ICON_HOVER_SLIDE} size-5`} />
    </Button>
  );
}
