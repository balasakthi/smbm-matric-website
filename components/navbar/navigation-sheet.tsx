import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavMenu } from "@/components/navbar/nav-menu";
import Image from "next/image";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" aria-label="Open Menu">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3 bg-primary text-primary-foreground">
        <SheetHeader className="sr-only p-0">
          <SheetTitle>Mobile navigation menu</SheetTitle>
        </SheetHeader>

        <div className="flex items-center gap-3">
          <Image
            className="w-14 h-auto"
            src="/logo/smbm-matric-logo.webp"
            alt="S.M.B.M. Matriculation Higher Secondary School"
            width={240}
            height={35}
            priority
          />
          <div className="flex flex-col leading-tight">
            <p className="font-bold">S.M.B.M. Matric.</p>
            <p className="text-xs">Hr. Sec. School</p>
          </div>
        </div>
        <hr />
        <NavMenu className="mt-6 [&>div]:h-full" orientation="vertical" />
      </SheetContent>
    </Sheet>
  );
};
