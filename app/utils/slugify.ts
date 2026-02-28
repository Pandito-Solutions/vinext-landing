/**
 * Converts text to a URL-safe slug for heading IDs.
 * Lowercase, replace spaces with hyphens, remove special characters.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}
