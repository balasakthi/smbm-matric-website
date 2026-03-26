import Image from "next/image";
import { QuickLinks } from "@/components/layout/footer/quickLinks";
import { ActionButton } from "@/components/layout/actionButton";

const PROGRAMS = [
  "Kindergarten",
  "Primary School",
  "Middle School",
  "High School",
  "Higher Secondary",
];

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-5 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* School Info + CTA */}
          <div className="lg:col-span-2 flex flex-col">
            <Image
              src="/logo/smbm-matric-dnu-logo.webp"
              alt="D.N.U. S.M.B.M. Matriculation Hr. Sec. School Logo"
              width={180}
              height={100}
              className="w-48 h-auto mb-5 object-contain"
              priority
            />
            <p className="text-sm leading-relaxed mb-6 max-w-md">
              Empowering students with knowledge, values, and skills for a
              better tomorrow. Over 40 years of excellence in holistic
              education.
            </p>
            <div className="mb-10">
              <ActionButton
                text="Admissions"
                href="/admissions"
                variant="secondary"
              />
            </div>
          </div>

          {/* Quick Links – now a separate Client Component */}
          <QuickLinks />

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Programs</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              {PROGRAMS.map((program) => (
                <li key={program}>{program}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <address className="not-italic">
            <h4 className="text-lg font-semibold mb-5">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <p>
                No. 35, G.T.N. Salai,
                <br />
                Dindigul - 624 001,
                <br />
                Tamil Nadu, India.
              </p>
              <div className="space-y-1">
                <a
                  href="tel:+917397776771"
                  className="block hover:text-secondary hover:underline transition-colors"
                >
                  +91 73977 76771
                </a>
                <a
                  href="tel:+914512426771"
                  className="block hover:text-secondary hover:underline transition-colors"
                >
                  0451 242 6771
                </a>
              </div>
              <a
                href="mailto:info@smbmmatricschool.com"
                className="block hover:text-secondary hover:underline transition-colors"
              >
                info@smbmmatricschool.com
              </a>
            </div>
          </address>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-6 text-sm text-muted-foreground">
            {/* Social icons */}
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
              {[
                {
                  href: "https://www.facebook.com/people/DNU-SMB-Matric-Hr-Sec-School-Dindigul/100057631472100/",
                  src: "/icons/facebook.svg",
                  label: "Facebook",
                },
                {
                  href: "https://www.linkedin.com/in/s-m-b-m-matric-hr-sec-school-2a50bb225/",
                  src: "/icons/linkedin.svg",
                  label: "LinkedIn",
                },
                {
                  href: "https://www.youtube.com/c/SMBMMATRICDINDIGUL",
                  src: "/icons/youtube.svg",
                  label: "YouTube",
                },
                {
                  href: "https://play.google.com/store/apps/details?id=in.nirals.smbmmatric&hl=en-IN",
                  src: "/icons/google-play.svg",
                  label: "Google Play Store",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${item.label} page`}
                  className="p-2.5 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:scale-105 transition-all duration-200"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={28}
                    height={28}
                    className="invert object-contain"
                  />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-center sm:text-right text-primary-foreground/50">
              © {new Date().getFullYear()} D.N.U. S.M.B.M. Matric. Hr. Sec.
              School
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
