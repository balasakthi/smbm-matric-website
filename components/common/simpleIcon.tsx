import React from "react";
import { School } from "lucide-react";

import { cn } from "@/lib/utils";
import { getIconByCategory, IconCategory } from "@/lib/iconMaps";
import { ICON_WRAPPER_BASE, ICON_ANIMATION } from "@/lib/ui-constants";

interface Props {
  icon: string;
  category: IconCategory;
  className?: string;
  size?: "sm" | "md" | "lg";
  hasBorder?: boolean;
  isWhite?: boolean;
  isLeft?: boolean;
  strokeWidth?: number;
}

const SIZE_MAP = {
  sm: { wrapper: "size-10", icon: "size-5" },
  md: { wrapper: "size-14", icon: "size-7" },
  lg: { wrapper: "size-20", icon: "size-10" },
};

function SimpleIcon({
  icon,
  category,
  className = "",
  size = "md",
  hasBorder = true,
  isWhite = false,
  isLeft = true,
  strokeWidth = 1.2,
}: Props) {
  const IconComponent = getIconByCategory(icon, category, School);

  const { wrapper, icon: iconSize } = SIZE_MAP[size];

  return (
    <div
      className={cn(
        ICON_WRAPPER_BASE,
        wrapper,
        hasBorder ? "border" : "border-0",
        isLeft ? "mx-0" : "mx-auto",
        isWhite
          ? "border-white bg-white shadow-sm group-hover:border-primary"
          : "border-primary/20 bg-secondary group-hover:border-primary",
        "group",
        className,
      )}
    >
      {React.createElement(IconComponent, {
        className: cn(iconSize, "text-primary", ICON_ANIMATION),
        strokeWidth: strokeWidth,
      })}
    </div>
  );
}

export { SimpleIcon };
