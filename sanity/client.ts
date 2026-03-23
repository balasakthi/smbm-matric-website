import { createClient } from "next-sanity";
import { projectId, dataset } from "@/lib/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-07-11",
  useCdn: true,
});
