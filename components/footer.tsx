import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Logo & Description */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-3">EdmunHigh</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Unlocking every student s potential by offering a stimulating and
              supportive environment here.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Homepage
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/program-detail/college-advanced-placement-program"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  College AP Program
                </Link>
              </li>
              <li>
                <Link
                  href="/program-detail/stem-program"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  STEM Program
                </Link>
              </li>
              <li>
                <Link
                  href="/program-detail/arts-program"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Arts Program
                </Link>
              </li>
              <li>
                <Link
                  href="/program-detail/athletics-program"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Athletics Program
                </Link>
              </li>
              <li>
                <Link
                  href="/program-detail/languages-program"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Languages Program
                </Link>
              </li>
              <li>
                <Link
                  href="/program-detail/humanities-program"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Humanities Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Address & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Address</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>1234 Education Lane, Learning City, EDFG States 056789</p>
              <a
                href="tel:+15551234567"
                className="block hover:text-white transition-colors"
              >
                +1 (555) 123-4567
              </a>
              <a
                href="mailto:info@edmunhigh.edu"
                className="block hover:text-white transition-colors"
              >
                info@edmunhigh.edu
              </a>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com/peterdrawstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#152d3d] border border-white/50 p-2 rounded hover:bg-white hover:text-[#152d3d] transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/peterdraw.co"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#152d3d] border border-white/50 p-2 rounded hover:bg-white hover:text-[#152d3d] transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/peterdraw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#152d3d] border border-white/50 p-2 rounded hover:bg-white hover:text-[#152d3d] transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
          <p>Copyright © EdmunHigh 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
