"use client";

import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import SocialLinks from "./SocialLinks";
import { Icon } from "@iconify/react";
import { defaultMenu, MenuItem } from "@/lib/menuData";
import { getAdmissionActions } from "@/utils/admissionStatus";

interface Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
  };
  menu?: MenuItem[];
}

const Logo = ({
  src,
  alt,
  width,
  height,
  href,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
  className?: string;
}) => (
  <Link href={href} aria-label="SMBM Matric School Home">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
      className={cn("dark:invert w-auto h-auto aspect-auto", className)}
    />
  </Link>
);

function renderContactInfo() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Icon icon="mdi:phone" className="text-lg" aria-label="Phone" />
        <Link href="tel:+917397776771" className="text-sm">
          +91 73977 76771
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Icon icon="mdi:email" className="text-lg" aria-label="Email" />
        <Link href="mailto:info@smbmmatricschool.com" className="text-sm">
          info@smbmmatricschool.com
        </Link>
      </div>
    </>
  );
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/logo/smbm-matric-logo-text.webp",
    alt: "Logo of SMBM Matric School",
  },
  menu = defaultMenu,
}: Props) => {
  const pathname = usePathname();
  const { primary } = getAdmissionActions();
  return (
    <section className="sticky top-0 z-50 bg-white/85 backdrop-blur-xs">
      <nav className="hidden bg-primary lg:flex justify-between gap-4 text-white p-2">
        <div className="flex items-center gap-8">{renderContactInfo()}</div>
        <SocialLinks variant="light" />
      </nav>
      <nav className="hidden py-3 lg:block">
        <div className="grid grid-cols-[1fr_1fr] items-center px-6">
          {/* Left – Logo */}
          <div className="flex justify-start">
            <Logo
              src={logo.src}
              alt={logo.alt}
              width={320}
              height={46}
              href={logo.url}
            />
          </div>

          {/* Right  */}
          <div className="flex justify-end">
            <section className="flex justify-end w-full">
              <Button asChild className="relative" size="sm">
                <Link href="/admissions">Admissions</Link>
              </Button>
            </section>
          </div>
        </div>
      </nav>

      <nav className="hidden bg-accent py-2 lg:block">
        <div className="grid grid-cols-[auto] items-center px-6">
          {/* Center – Menu (TRUE CENTER) */}
          <div className="flex justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item, pathname))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav className="block py-2 lg:hidden">
        <div className="flex items-center justify-between px-2">
          {/* Logo */}
          <div className="flex mr-2">
            <Logo
              src={logo.src}
              alt={logo.alt}
              width={300}
              height={40}
              href={logo.url}
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="gold" size="icon" aria-label="Open menu">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85%] sm:w-[400px] overflow-y-auto"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>SMBM Matric.</SheetTitle>
                <SheetDescription>Higher Secondary School</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-4">
                <Logo
                  className="pr-6"
                  src={logo.src}
                  alt={logo.alt}
                  width={300}
                  height={40}
                  href={logo.url}
                />
                <Button asChild className="w-full">
                  <Link href={primary.href}>{primary.label}</Link>
                </Button>
                <hr className="my-2 border-muted" />

                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col gap-4"
                >
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>
                <hr className="my-4 border-muted" />

                <div className="space-y-3 text-sm text-foreground">
                  {renderContactInfo()}
                </div>
                <div className="flex justify-center">
                  <SocialLinks />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </section>
  );
};

const renderMenuItem = (item: MenuItem, pathname?: string) => {
  const isActive =
    pathname === item.url ||
    item.items?.some((sub) => pathname?.startsWith(sub.url));

  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger
          aria-label={`${item.title} menu`}
          className="bg-transparent text-foreground hover:bg-muted/50"
        >
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.title.toLowerCase() === "academics" && (
            <ul className="grid w-[300px] gap-4">
              <li>
                {item.items.map((subItem) => (
                  <NavigationMenuLink
                    asChild
                    key={subItem.title}
                    className="w-80"
                  >
                    <SubMenuLink item={subItem} />
                  </NavigationMenuLink>
                ))}
              </li>
            </ul>
          )}

          {item.title.toLowerCase() === "about" && (
            <ul className="grid gap-3 md:w-[600px] lg:w-[800px] grid-cols-1 md:grid-cols-[.75fr_1fr_1fr]">
              {item.items.map((subItem) =>
                subItem.highlight ? (
                  <li key={subItem.title} className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href={subItem.url}
                        className="from-accent/10 to-accent/40 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                      >
                        <div className="mb-2 text-lg font-medium sm:mt-4">
                          {subItem.title}
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          {subItem.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ) : (
                  <NavigationMenuLink
                    asChild
                    key={subItem.title}
                    className="w-80"
                  >
                    <SubMenuLink item={subItem} />
                  </NavigationMenuLink>
                )
              )}
            </ul>
          )}
          {item.title.toLowerCase() === "campus life" && (
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {item.items.map((subItem) => (
                <NavigationMenuLink
                  asChild
                  key={subItem.title}
                  className="w-80"
                >
                  <SubMenuLink item={subItem} />
                </NavigationMenuLink>
              ))}
            </ul>
          )}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className={cn(
          "px-4 py-2 text-sm font-medium hover:bg-muted/50",
          isActive &&
            "border-b-2 rounded-b-none border-primary text-primary hover:rounded-md hover:border-accent"
        )}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="text-md font-heading font-semibold"
    >
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex gap-4 rounded-md p-3 transition-colors hover:bg-accent/20"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar };
