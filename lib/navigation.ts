export interface NavigationLink {
  label: string;
  href?: string;
  children?: NavigationLink[];
}

export const PRIMARY_NAV_LINKS: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  {
    label: "Campus Life",
    children: [
      { label: "Infrastructure", href: "/infrastructure" },
      { label: "Student Life", href: "/student-life" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const ENQUIRY_ROUTE = "/admissions#admission-enquiry-form";
