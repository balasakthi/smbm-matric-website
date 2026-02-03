import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "S.M.B.M. Matriculation Higher Secondary School",
    short_name: "SMBM Matric School",
    description:
      "Empowering students with knowledge, skills, and values for lifelong learning. Dindigul Nadar Uravinmurai educational institution.",
    start_url: "/",
    display: "standalone",
    background_color: "#1e3a8a",
    theme_color: "#dc2626",

    scope: "/",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],

    categories: ["education", "lifestyle"],
  };
}
