import Link from "next/link";
import { Icon } from "@iconify/react";

type Props = {
  variant?: "light" | "dark" | "brand";
};

const socialLinks = [
  {
    href: "https://www.facebook.com/DNU-SMB-Matric-Hr-Sec-School-Dindigul-100881838364581/",
    icon: "ri:facebook-circle-fill",
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/in/s-m-b-m-matric-hr-sec-school-2a50bb225",
    icon: "ri:linkedin-box-fill",
    label: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/c/SMBMMATRICDINDIGUL",
    icon: "ri:youtube-fill",
    label: "YouTube",
  },
  {
    href: "https://play.google.com/store/apps/details?id=in.nirals.smbmmatric&hl=en-IN",
    icon: "ri:google-play-fill",
    label: "Playstore",
  },
];

function SocialLinks({ variant = "dark" }: Props) {
  const colorMap = {
    light: "text-white hover:text-white/80",
    dark: "text-foreground hover:text-foreground/70",
    brand: "text-primary hover:text-primary/80",
  };

  return (
    <div className="flex gap-4">
      {socialLinks.map(({ href, icon, label }) => (
        <Link
          key={href}
          href={href}
          className={`rounded-lg p-1 transition-colors duration-200 ${colorMap[variant]}`}
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={icon} width="22" height="22" />
          <span className="sr-only">{label}</span>
        </Link>
      ))}
    </div>
  );
}

export default SocialLinks;
