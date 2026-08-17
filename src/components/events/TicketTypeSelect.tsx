"use client";

import { eventMessages } from "@/config/eventMessages";
import { SortedEventTicketType } from "@/types/eventTicketTypes";
import { formatPriceInCents } from "@/utils/eventTicketTypes";
import BookingSelect from "./BookingSelect";

interface TicketTypeSelectProps {
  activeTypes: SortedEventTicketType[];
  selectedTypeId: string | null;
  onChange: (value: string) => void;
  hideVacancy?: boolean;
  disabled?: boolean;
}

function formatTicketTypeOptionLabel(
  { eventTicketType }: SortedEventTicketType,
  hideVacancy: boolean,
): string {
  const soldOut =
    eventTicketType.vacancy === 0 ? ` ${eventMessages.booking.ticketType.soldOutSuffix}` : "";
  const detail =
    eventTicketType.price > 0
      ? ` — ${formatPriceInCents(eventTicketType.price)}`
      : hideVacancy
        ? ""
        : ` — ${eventTicketType.vacancy} ${eventMessages.booking.ticketType.left}`;
  return `${eventTicketType.name}${soldOut}${detail}`;
}

export default function TicketTypeSelect({
  activeTypes,
  selectedTypeId,
  onChange,
  hideVacancy = false,
  disabled = false,
}: TicketTypeSelectProps) {
  return (
    <BookingSelect
      id="ticket-type"
      label={eventMessages.booking.labels.ticketType}
      value={selectedTypeId ?? ""}
      onChange={onChange}
      disabled={disabled}
    >
      {activeTypes.map((entry) => (
        <option key={entry.eventTicketTypeId} value={entry.eventTicketTypeId}>
          {formatTicketTypeOptionLabel(entry, hideVacancy)}
        </option>
      ))}
    </BookingSelect>
  );
}
