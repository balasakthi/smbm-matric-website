import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import SocialLinks from "./SocialLinks";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "Contact", href: "/contact" },
];

const academicsLinks = [
  { label: "Pre-Primary Education", href: "/kindergarten" },
  { label: "Courses", href: "/courses" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Rules", href: "/rules-regulations" },
];

const phoneNumbers = ["+91 73977 76771", "0451 2426771", "0451 2426772"];
type FooterLink = {
  label: string;
  href: string;
};

function Links({ links }: { links: FooterLink[] }) {
  return (
    <ul className="space-y-2 text-sm text-primary-foreground/85">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="hover:text-primary-foreground transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* School Info */}
        <div>
          <Image
            src="/logo/smbm-matric-dnu-logo.webp"
            alt="SMBM Matriculation Higher Secondary School"
            width={160}
            height={70}
            className="mb-4 w-35 h-auto"
          />
          <p className="text-sm leading-relaxed text-primary-foreground/90">
            A place of learning committed to academic excellence, discipline,
            and holistic development for every child.
          </p>

          <div className="mt-4">
            <SocialLinks variant="light" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>
          <Links links={quickLinks} />
        </div>

        {/* Academics */}
        <div>
          <h3 className="mb-4 font-semibold">Academics</h3>
          <Links links={academicsLinks} />
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-semibold">Contact</h3>
          <ul className="space-y-4 text-sm text-primary-foreground/90">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5" />
              <span>
                No. 35, G.T.N. Salai, <br />
                Dindigul – 624 001
              </span>
            </li>

            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5" />
              <div className="flex flex-col gap-1">
                {phoneNumbers.map((phone) => (
                  <Link
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {phone}
                  </Link>
                ))}
              </div>
            </li>

            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <Link href="mailto:info@smbmmatricschool.com">
                info@smbmmatricschool.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-4 flex flex-col gap-2 text-center text-xs text-primary-foreground/80 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} SMBM Matric. Hr. Sec. School.</p>

          <p>
            Powered by{" "}
            <Link
              href="https://creativelearningmachine.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-primary-foreground transition-colors"
            >
              Creative Learning Machine (CLM)
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
