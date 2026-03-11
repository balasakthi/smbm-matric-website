// Shared Sanity fetch function for consistent data fetching pattern
import { client } from "@/sanity/client";

const SANITY_OPTIONS = { next: { revalidate: 30 } };

/**
 * Fetch section data from Sanity with consistent options
 * @param query GROQ query string
 * @param params Optional query parameters
 * @returns Fetched data
 */
export async function fetchSectionData<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  return client.fetch(query, params, SANITY_OPTIONS);
}

/**
 * Fetch a single document from Sanity
 * @param query GROQ query string
 * @param params Optional query parameters
 * @returns Single document
 */
export async function fetchSingleDocument<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  return client.fetch(query, params, SANITY_OPTIONS);
}

/**
 * Fetch multiple documents from Sanity
 * @param query GROQ query string
 * @param params Optional query parameters
 * @returns Array of documents
 */
export async function fetchMultipleDocuments<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T[]> {
  return client.fetch(query, params, SANITY_OPTIONS);
}
