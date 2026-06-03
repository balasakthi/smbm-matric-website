export interface NavigationLink {
  label: string;
  href?: string;
  children?: NavigationLink[];
}

export const PRIMARY_NAV_LINKS: NavigationLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "About us", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Academics", href: "/academics" },
      { label: "Rules & Regulations", href: "/rules-and-regulations" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const ENQUIRY_ROUTE = "/admissions#admission-enquiry-form";
