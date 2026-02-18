/**
 * Session Event Types
 *
 * These types are designed to be easily replaceable with backend API calls.
 * Simply replace the stub data fetching with your API endpoint.
 */

import { getSportshubApiUrl, getSportshubEventUrl } from "@/config/sportshub";

/**
 * Frontend representation of a session event
 */
export type SessionEvent = {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  locationLatLng?: {
    lat: number;
    lng: number;
  };
  priceInCents: number;
  capacity: number;
  vacancy: number;
  image?: string;
  thumbnail?: string;
  /** Full URL to view/booking page on Sportshub (opens in new tab) */
  eventUrl: string;
  // Additional fields for detail page
  registrationDeadline?: Date;
  paymentsActive: boolean;
  isPrivate: boolean;
  paused: boolean;
  eventLink?: string;
  organiserId: string;
  waitlistEnabled: boolean;
  hideVacancy: boolean;
  eventTags?: string[];
  formId?: string;
  bookingApprovalEnabled?: boolean;
};

/**
 * Backend API response types for GET_SYRIO_EVENTS endpoint
 *
 * The API returns dates as ISO 8601 strings (e.g. "2026-02-27T23:00:00Z").
 */

/**
 * Raw event data as returned from the backend API (JSON-serialized).
 */
type BackendEventData = {
  eventId: string;
  name: string;
  description: string;
  /** ISO 8601 date string, e.g. "2026-02-27T23:00:00Z" */
  startDate: string;
  /** ISO 8601 date string, e.g. "2026-02-28T00:00:00Z" */
  endDate: string;
  location: string;
  locationLatLng?: {
    lat: number;
    lng: number;
  };
  price: number; // in cents
  capacity: number;
  vacancy: number;
  image: string;
  thumbnail?: string;
  /** Optional custom event link from backend; otherwise we build from site URL + eventId */
  eventLink?: string;
  // Additional fields
  registrationDeadline?: string;
  paymentsActive: boolean;
  isPrivate: boolean;
  paused: boolean;
  organiserId: string;
  waitlistEnabled: boolean;
  hideVacancy: boolean;
  eventTags?: string[];
  formId?: string;
  bookingApprovalEnabled?: boolean;
};

/**
 * Response structure from GET_SYRIO_EVENTS endpoint
 */
type GetSyrioEventsResponse = {
  events: BackendEventData[];
};

/**
 * Response structure from GET_EVENT_BY_ID endpoint
 */
type GetEventByIdResponse = {
  event: BackendEventData;
};

/**
 * Generic API response wrapper (matches java UnifiedResponse<T>)
 */
type UnifiedResponse<T> = {
  data: T;
};

/**
 * Parse backend date to Date. Handles ISO 8601 strings (what the API returns).
 */
function parseBackendDate(value: string): Date {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid date from API: ${value}`);
  }
  return date;
}

/**
 * Transform backend event data to frontend SessionEvent format
 */
function toSessionEvent(backendEvent: BackendEventData): SessionEvent {
  return {
    id: backendEvent.eventId,
    name: backendEvent.name,
    description: backendEvent.description,
    startDate: parseBackendDate(backendEvent.startDate),
    endDate: parseBackendDate(backendEvent.endDate),
    location: backendEvent.location,
    locationLatLng: backendEvent.locationLatLng,
    priceInCents: backendEvent.price,
    capacity: backendEvent.capacity,
    vacancy: backendEvent.vacancy,
    image: backendEvent.image,
    thumbnail: backendEvent.thumbnail || backendEvent.image,
    eventUrl: getSportshubEventUrl(
      backendEvent.eventId,
      backendEvent.eventLink,
    ),
    registrationDeadline: backendEvent.registrationDeadline
      ? parseBackendDate(backendEvent.registrationDeadline)
      : undefined,
    paymentsActive: backendEvent.paymentsActive ?? true,
    isPrivate: backendEvent.isPrivate ?? false,
    paused: backendEvent.paused ?? false,
    eventLink: backendEvent.eventLink,
    organiserId: backendEvent.organiserId || "",
    waitlistEnabled: backendEvent.waitlistEnabled ?? true,
    hideVacancy: backendEvent.hideVacancy ?? false,
    eventTags: backendEvent.eventTags,
    formId: backendEvent.formId,
    bookingApprovalEnabled: backendEvent.bookingApprovalEnabled ?? false,
  };
}

/**
 * Fetch session events from the sportshub backend API.
 *
 * This calls the GlobalAppController endpoint with GET_SYRIO_EVENTS.
 * The Syrio organiser ID is configured in the backend, so no parameters are needed.
 *
 * @throws Error if the API request fails or returns invalid data
 */
export async function fetchSessionEvents(): Promise<SessionEvent[]> {
  const response = await fetch(getSportshubApiUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      endpointType: "GET_SYRIO_EVENTS",
      data: {},
    }),
  });

  if (!response.ok) {
    const errorResult = await response.json().catch(() => ({}));
    const errorMessage =
      errorResult.error ||
      errorResult.message ||
      `HTTP error! status: ${response.status}`;
    console.error("API error response:", {
      status: response.status,
      error: errorMessage,
      fullResponse: errorResult,
    });
    throw new Error(`API error (${response.status}): ${errorMessage}`);
  }

  const json =
    (await response.json()) as UnifiedResponse<GetSyrioEventsResponse>;

  if (!json || typeof json !== "object" || !("data" in json)) {
    console.error("Malformed response from API:", json);
    throw new Error("Malformed response from GlobalAppController");
  }

  if (!json.data?.events) {
    console.error("Invalid response format:", json);
    throw new Error("Invalid response format from API: missing events array");
  }

  return json.data.events.map(toSessionEvent);
}

/**
 * Fetch a single event by ID from the sportshub backend API.
 *
 * This calls the GlobalAppController endpoint with GET_EVENT_BY_ID.
 *
 * @param eventId - The ID of the event to fetch
 * @throws Error if the API request fails, event is not found, or returns invalid data
 */
export async function fetchEventById(eventId: string): Promise<SessionEvent> {
  const response = await fetch(getSportshubApiUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      endpointType: "GET_EVENT_BY_ID",
      data: {
        eventId,
      },
    }),
  });

  if (!response.ok) {
    const errorResult = await response.json().catch(() => ({}));
    const errorMessage =
      errorResult.error ||
      errorResult.message ||
      `HTTP error! status: ${response.status}`;
    console.error("API error response:", {
      status: response.status,
      error: errorMessage,
      fullResponse: errorResult,
    });
    throw new Error(`API error (${response.status}): ${errorMessage}`);
  }

  const json =
    (await response.json()) as UnifiedResponse<GetEventByIdResponse>;

  if (!json || typeof json !== "object" || !("data" in json)) {
    console.error("Malformed response from API:", json);
    throw new Error("Malformed response from GlobalAppController");
  }

  if (!json.data?.event) {
    console.error("Invalid response format:", json);
    throw new Error("Invalid response format from API: missing event data");
  }

  return toSessionEvent(json.data.event);
}
