export function stringify(slug: string): string {
  return slug.replaceAll(/-/g, " ");
}
