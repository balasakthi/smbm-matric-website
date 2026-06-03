import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://www.smbmmatricschool.com/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://www.smbmmatricschool.com/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: "https://www.smbmmatricschool.com/academics",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: "https://www.smbmmatricschool.com/admissions",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    {
      url: "https://www.smbmmatricschool.com/leadership",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://www.smbmmatricschool.com/gallery",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://www.smbmmatricschool.com/careers",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: "https://www.smbmmatricschool.com/rules-and-regulations",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },

    {
      url: "https://www.smbmmatricschool.com/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
