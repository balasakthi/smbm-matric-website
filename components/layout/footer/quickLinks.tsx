"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const QUICK_LINKS = [
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function QuickLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Quick links">
      <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
      <ul className="space-y-3 text-sm">
        {QUICK_LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`
                  transition-colors duration-200
                  ${
                    isActive
                      ? "text-secondary font-semibold underline underline-offset-4"
                      : "hover:text-secondary hover:underline underline-offset-4"
                  }
                  focus:outline-none focus:ring-2 focus:ring-secondary
                `}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
