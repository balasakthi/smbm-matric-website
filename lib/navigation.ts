export interface NavigationLink {
  label: string;
  href: string;
}

export const PRIMARY_NAV_LINKS: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Student Life", href: "/student-life" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const ADMISSIONS_ROUTE = "/admissions";
