import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BTN_ICON_HOVER_SLIDE, BTN_HOVER_SCALE } from "@/lib/ui-constants";
import { Button } from "@/components/ui/button";

function SectionButton({ href, text }: { href: string; text: string }) {
  return (
    <Button asChild className={`${BTN_HOVER_SCALE} text-base`} size="lg">
      <Link href={href}>
        {text}
        <ArrowUpRight className={`${BTN_ICON_HOVER_SLIDE} size-5`} />
      </Link>
    </Button>
  );
}

export default SectionButton;
