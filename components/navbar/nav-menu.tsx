"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { PRIMARY_NAV_LINKS } from "@/lib/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
      {PRIMARY_NAV_LINKS.map((link) => (
        <NavigationMenuItem key={link.href}>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={link.href} className="bg-transparent">
              {link.label}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
