import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const builder =
  projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null;

export function sanityImageUrl(
  source: SanityImageSource | null | undefined,
  width = 1600,
): string {
  if (!builder || !source) return "";

  try {
    return builder.image(source).width(width).fit("max").auto("format").url();
  } catch {
    return "";
  }
}
