/**
 * Sportshub integration config.
 *
 * Dev: set in .env.local
 * Prod: set NEXT_PUBLIC_SPORTSHUB_* to prod values
 */

const DEV_SITE_URL = "http://localhost:3000";
const PROD_SITE_URL = "https://www.sportshub.net.au";

function isProd(): boolean {
  return process.env.NODE_ENV === "production";
}

/**
 * Sportshub Cloud Function URL (for GET_SYRIO_EVENTS etc.).
 * Use env override, else dev/prod default by NODE_ENV.
 */
export function getSportshubApiUrl(): string {
  const env = process.env.NEXT_PUBLIC_SPORTSHUB_API_URL;
  if (env) return env;
  throw new Error("NEXT_PUBLIC_SPORTSHUB_API_URL is not set");
}

/**
 * Sportshub public site base URL (no trailing slash).
 * Used to build event links: ${siteUrl}/event/${eventId}.
 * Use env override, else dev/prod default by NODE_ENV.
 */
export function getSportshubSiteUrl(): string {
  const env = process.env.NEXT_PUBLIC_SPORTSHUB_SITE_URL;
  if (env) return env.replace(/\/$/, "");
  return isProd() ? PROD_SITE_URL : DEV_SITE_URL;
}

/**
 * Full URL to an event on the Sportshub site.
 * Prefers backend eventLink when non-empty.
 */
export function getSportshubEventUrl(
  eventId: string,
  eventLink?: string,
): string {
  const link = eventLink?.trim();
  if (link) return link;
  return `${getSportshubSiteUrl()}/event/${eventId}`;
}
