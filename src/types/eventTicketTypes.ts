/**
 * Event ticket types as returned by Sportshub EventData.eventTicketTypes.
 * Price is in cents, matching event.price.
 */
export type EventTicketType = {
  id: string;
  name: string;
  price: number;
  capacity: number;
  vacancy: number;
  formId?: string | null;
};

export type EventTicketTypesMap = Record<string, EventTicketType>;

export type SortedEventTicketType = {
  eventTicketTypeId: string;
  eventTicketType: EventTicketType;
};
