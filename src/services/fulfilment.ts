/**
 * Fulfilment service for Syrio to call Sportshub API
 */

import { getSportshubApiUrl, getSportshubSiteUrl } from "@/config/sportshub";

type FulfilmentSessionId = string;
type FulfilmentEntityId = string;

type InitCheckoutFulfilmentSessionRequest = {
  eventId: string;
  numTickets: number;
};

type InitCheckoutFulfilmentSessionResponse = {
  fulfilmentSessionId: FulfilmentSessionId;
};

type GetNextFulfilmentEntityRequest = {
  fulfilmentSessionId: FulfilmentSessionId;
  currentFulfilmentEntityId: FulfilmentEntityId | null;
};

type GetNextFulfilmentEntityResponse = {
  fulfilmentEntityId: FulfilmentEntityId | null;
};

type UnifiedRequest<T> = {
  endpointType: string;
  data: T;
};

type UnifiedResponse<T> = {
  data: T;
};

/**
 * Initialize a checkout fulfilment session.
 * When called from Syrio, passes successRedirectUrl so Stripe redirects to the Syrio success page.
 */
export async function initFulfilmentSession(
  eventId: string,
  numTickets: number,
): Promise<InitCheckoutFulfilmentSessionResponse> {
  const request: UnifiedRequest<InitCheckoutFulfilmentSessionRequest> = {
    endpointType: "INIT_FULFILMENT_SESSION",
    data: {
      eventId,
      numTickets,
    },
  };

  const response = await fetch(getSportshubApiUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `Failed to initialize fulfilment session (status ${response.status}): ${errorText}`,
    );
  }

  const json =
    (await response.json()) as UnifiedResponse<InitCheckoutFulfilmentSessionResponse>;
  return json.data;
}

/**
 * Get the next fulfilment entity URL
 */
export async function getNextFulfilmentEntityUrl(
  fulfilmentSessionId: FulfilmentSessionId,
  currentFulfilmentEntityId?: FulfilmentEntityId,
): Promise<string | undefined> {
  const request: UnifiedRequest<GetNextFulfilmentEntityRequest> = {
    endpointType: "GET_NEXT_FULFILMENT_ENTITY",
    data: {
      fulfilmentSessionId,
      currentFulfilmentEntityId: currentFulfilmentEntityId ?? null,
    },
  };

  const response = await fetch(getSportshubApiUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `Failed to get next fulfilment entity (status ${response.status}): ${errorText}`,
    );
  }

  const json =
    (await response.json()) as UnifiedResponse<GetNextFulfilmentEntityResponse>;
  const { fulfilmentEntityId } = json.data;

  if (fulfilmentEntityId === null) {
    return undefined;
  }

  // Build the Sportshub URL with hideNavbar query parameter
  const baseUrl = `${getSportshubSiteUrl()}/fulfilment/${fulfilmentSessionId}/${fulfilmentEntityId}`;
  return `${baseUrl}?hideNavbar=true`;
}
