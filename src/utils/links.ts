/**
 * Checks if a URL is an external link (starts with http:// or https://)
 * @param href - The URL to check
 * @returns true if the URL is external, false otherwise
 */
export function isExternalLink(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
