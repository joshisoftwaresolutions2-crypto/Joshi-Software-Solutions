import { createClient, type SanityClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2024-01-01";

let client: SanityClient | null = null;

function getClient(): SanityClient {
  if (!client) {
    client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      perspective: "published",
    });
  }

  return client;
}

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
}): Promise<T | null> {
  if (!projectId || !dataset) {
    return null;
  }

  return getClient().fetch<T>(query, params, {
    next: { tags, revalidate: 60 },
  });
}
