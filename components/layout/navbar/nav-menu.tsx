"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";
import { PRIMARY_NAV_LINKS } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function NavMenu(props: ComponentProps<typeof NavigationMenu>) {
  const pathname = usePathname();

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList>
        {PRIMARY_NAV_LINKS.map((link) => {
          const normalize = (path?: string) => path?.replace(/\/$/, "") || "";
          const current = normalize(pathname);

          const isActive = link.children
            ? link.children.some((child) =>
                current.startsWith(normalize(child.href)),
              )
            : normalize(link.href) === ""
              ? current === ""
              : current === normalize(link.href) ||
                current.startsWith(normalize(link.href) + "/");

          return (
            <NavigationMenuItem key={link.label}>
              {link.children ? (
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent gap-1 hover:bg-secondary/50 transition-colors duration-300 ease-in-out",
                      isActive && "text-primary font-bold",
                    )}
                  >
                    {link.label} <ChevronDown className="h-3 w-3 opacity-50" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 p-2">
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link
                          href={child.href!}
                          className={cn(
                            "w-full cursor-pointer",
                            pathname === child.href &&
                              "bg-accent text-accent-foreground",
                          )}
                        >
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-secondary/50 transition-colors duration-300 ease-in-out",
                    isActive &&
                      "text-primary font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary",
                  )}
                >
                  <Link href={link.href!}>{link.label}</Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export { NavMenu };
