import {
  MAX_TICKETS_PER_ORDER,
  MAX_TICKETS_PER_TRANSACTION_ORGANISER_CAP,
  GENERAL_TICKET_TYPE_NAME,
} from "@/constants/events";
import {
  EventTicketType,
  EventTicketTypesMap,
  SortedEventTicketType,
} from "@/types/eventTicketTypes";

type EventWithInventory = {
  eventTicketTypes?: EventTicketTypesMap | null;
  price?: number;
  capacity?: number;
  vacancy?: number;
};

export function hasEventTicketTypes(event: EventWithInventory): boolean {
  return event.eventTicketTypes != null && Object.keys(event.eventTicketTypes).length > 0;
}

/** Sorted list for booking UI; General Admission first, then name. */
export function getSortedEventTicketTypes(
  eventTicketTypes: EventTicketTypesMap | null | undefined,
): SortedEventTicketType[] {
  if (!eventTicketTypes) {
    return [];
  }
  return Object.entries(eventTicketTypes)
    .map(([eventTicketTypeId, eventTicketType]) => ({
      eventTicketTypeId: eventTicketType.id || eventTicketTypeId,
      eventTicketType: {
        ...eventTicketType,
        id: eventTicketType.id || eventTicketTypeId,
        formId: eventTicketType.formId ?? null,
      },
    }))
    .sort((a, b) => {
      if (a.eventTicketType.name === GENERAL_TICKET_TYPE_NAME) return -1;
      if (b.eventTicketType.name === GENERAL_TICKET_TYPE_NAME) return 1;
      return a.eventTicketType.name.localeCompare(b.eventTicketType.name);
    });
}

/**
 * Listing / fill-bar inventory for an event.
 * Ticket types are the source of truth; top-level price/capacity/vacancy are legacy-only.
 */
export function resolveEventInventory(event: EventWithInventory): {
  price: number;
  capacity: number;
  vacancy: number;
} {
  if (hasEventTicketTypes(event) && event.eventTicketTypes) {
    return syncEventAggregatesFromTicketTypes(event.eventTicketTypes);
  }
  return {
    price: event.price ?? 0,
    capacity: event.capacity ?? 0,
    vacancy: event.vacancy ?? 0,
  };
}

/** Top-level listing aggregates: price = minimum across types, capacity/vacancy = sums. */
export function syncEventAggregatesFromTicketTypes(eventTicketTypes: EventTicketTypesMap): {
  price: number;
  capacity: number;
  vacancy: number;
} {
  const types = Object.values(eventTicketTypes).filter(
    (type): type is EventTicketType => type != null,
  );
  if (types.length === 0) {
    return { price: 0, capacity: 0, vacancy: 0 };
  }
  return {
    price: Math.min(...types.map((type) => type.price)),
    capacity: types.reduce((sum, type) => sum + type.capacity, 0),
    vacancy: types.reduce((sum, type) => sum + type.vacancy, 0),
  };
}

export function pickDefaultTicketTypeId(
  activeTypes: SortedEventTicketType[],
): string | null {
  if (activeTypes.length === 0) {
    return null;
  }
  return (activeTypes.find((t) => t.eventTicketType.vacancy > 0) ?? activeTypes[0])
    .eventTicketTypeId;
}

export function getBuyerMaxTicketsPerTransaction(
  maxTicketsPerTransaction?: number,
): number {
  const requested = maxTicketsPerTransaction ?? MAX_TICKETS_PER_ORDER;
  return Math.min(
    Math.max(requested, 1),
    MAX_TICKETS_PER_TRANSACTION_ORGANISER_CAP,
  );
}

export function getBuyerTicketCountOptions(
  vacancy: number,
  maxTicketsPerTransaction?: number,
): number[] {
  const maxTickets = Math.min(
    vacancy,
    getBuyerMaxTicketsPerTransaction(maxTicketsPerTransaction),
  );
  return Array.from({ length: Math.max(0, maxTickets) }, (_, i) => i + 1);
}

export function eventHasRegistrationForm(event: {
  formId?: string | null;
  eventTicketTypes?: EventTicketTypesMap | null;
}): boolean {
  if (event.formId) {
    return true;
  }
  if (!event.eventTicketTypes) {
    return false;
  }
  return Object.values(event.eventTicketTypes).some((type) => Boolean(type?.formId));
}

export function formatPriceInCents(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`;
}
