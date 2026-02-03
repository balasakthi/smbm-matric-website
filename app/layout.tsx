import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "S.M.B.M. Matriculation Higher Secondary School - Dindigul",
  description:
    "Empowering students with knowledge, skills, and values for lifelong learning. Co-educational school affiliated to Tamil Nadu Matriculation Board.",
  keywords:
    "SMBM School, Dindigul, Matriculation School, Higher Secondary School, Education, Dindigul Nadar Uravinmurai, Best Schools in Dindigul",
  authors: [{ name: "Dindigul Nadar Uravinmurai" }],
  creator: "Dindigul Nadar Uravinmurai",
  publisher: "S.M.B.M. Matriculation Higher Secondary School",

  // Open Graph Metadata (for social media sharing)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.smbmmatricschool.com/",
    siteName: "S.M.B.M. Matriculation Higher Secondary School",
    title: "S.M.B.M. Matriculation Higher Secondary School - Dindigul",
    description:
      "Empowering students with RESPECT, TOLERANCE, INCLUSION & EXCELLENCE since 1984",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "S.M.B.M. Matriculation Higher Secondary School - Excellence in Education",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "S.M.B.M. Matriculation Higher Secondary School - Dindigul",
    description:
      "Transforming education through traditional values and modern learning approaches",
    images: ["/og-image.png"],
    creator: "@smbmmatricschool",
    site: "@smbmmatricschool",
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Alternates if you have other language versions
  alternates: {
    canonical: "https://www.smbmmatricschool.com/",
    languages: {
      "en-IN": "https://www.smbmmatricschool.com/",
    },
  },

  // Category for educational websites
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
