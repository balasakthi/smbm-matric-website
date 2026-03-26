"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ActionButton } from "../actionButton";
import { Button } from "@/components/ui/button";
import { PRIMARY_NAV_LINKS } from "@/lib/navigation";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";

function NavigationSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" aria-label="Open Menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="px-6 py-6 border-none bg-primary text-primary-foreground flex flex-col"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Mobile navigation menu</SheetTitle>
          <SheetDescription className="sr-only">
            Main site navigation with links to key sections
          </SheetDescription>
        </SheetHeader>

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image
            className="w-12 h-auto"
            src="/logo/smbm-matric-logo.webp"
            alt="Logo"
            width={50}
            height={50}
            priority
          />
          <div className="flex flex-col leading-tight">
            <p className="font-bold">S.M.B.M. Matric.</p>
            <p className="text-xs opacity-80">Hr. Sec. School</p>
          </div>
        </div>

        <hr className="opacity-20 my-2" />

        {/* Mobile Links */}
        <div className="flex-1 overflow-y-auto">
          <Accordion type="single" collapsible className="w-full">
            {PRIMARY_NAV_LINKS.map((link) => (
              <div key={link.label} className="py-1">
                {link.children ? (
                  <AccordionItem value={link.label} className="border-none">
                    <AccordionTrigger className="py-2 text-md font-medium hover:no-underline">
                      {link.label}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-2 ml-4 border-l border-white/20 pl-4 mt-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href!}
                            onClick={() => setOpen(false)}
                            className="py-2 text-base opacity-90 hover:opacity-100"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <Link
                    href={link.href!}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-md font-medium border-b border-transparent"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </Accordion>
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-6">
          <ActionButton
            text="Admissions"
            size="lg"
            href="/admissions"
            icon={ArrowRight}
            variant="secondary"
            className="w-full"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export { NavigationSheet };
