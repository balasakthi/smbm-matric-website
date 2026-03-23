import Image from "next/image";
import Link from "next/link";
import { ActionButton } from "@/components/layout/actionButton";
import { CONTAINER_SITE } from "@/lib/ui-constants";
import { NavMenu } from "@/components/layout/navbar/nav-menu";
import { NavigationSheet } from "@/components/layout/navbar/navigation-sheet";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to main content
      </a>
      <nav aria-label="Primary navigation" className="h-20">
        <div
          className={`${CONTAINER_SITE} flex h-full items-center justify-between`}
        >
          <Link href="/" className="flex items-center gap-4">
            <Image
              className="w-16 h-auto"
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
          </Link>

          <div className="flex items-center gap-3">
            {/* Desktop Menu */}
            <NavMenu className="hidden lg:block" />

            <div className="flex">
              <div className="hidden lg:block">
                <ActionButton
                  text="Admissions"
                  size="sm"
                  showIcon={false}
                  href="/admissions"
                />
              </div>

              {/* Mobile Menu */}
              <div className="lg:hidden">
                <NavigationSheet />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
