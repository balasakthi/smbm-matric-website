import { createClient } from "next-sanity";
import { projectId, dataset } from "@/sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-07-11",
  useCdn: true,
});
