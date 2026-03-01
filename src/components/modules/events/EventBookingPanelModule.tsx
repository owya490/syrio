"use client";

import EventInfoRow from "@/components/events/EventInfoRow";
import SyrioBookingButton from "@/components/events/SyrioBookingButton";
import SyrioContactButton from "@/components/events/SyrioContactButton";
import { MAX_TICKETS_PER_ORDER } from "@/constants/events";
import { SessionEvent } from "@/types/sessions";
import { format } from "date-fns";
import { useMemo, useState } from "react";

interface EventBookingPanelModuleProps {
  event: SessionEvent;
  className?: string;
}

export default function EventBookingPanelModule({
  event,
  className = "",
}: EventBookingPanelModuleProps) {
  const [loading, setLoading] = useState(false);
  const [ticketCount, setTicketCount] = useState(1);

  const allowedTicketCounts = useMemo(
    () =>
      Array.from(
        { length: Math.min(event.vacancy, MAX_TICKETS_PER_ORDER) },
        (_, i) => i + 1,
      ),
    [event.vacancy],
  );

  const safeTicketCount = allowedTicketCounts.includes(ticketCount)
    ? ticketCount
    : (allowedTicketCounts[0] ?? 1);

  const formatTime = (date: Date) => format(date, "h:mm a");
  const formatDate = (date: Date) => format(date, "EEEE, MMMM d, yyyy");

  const vacancyText = event.hideVacancy
    ? "Spots available"
    : `${event.vacancy} ${event.vacancy === 1 ? "spot" : "spots"} available`;

  // Check event state
  const now = new Date();
  const eventInPast = now > event.endDate;
  const registrationClosed =
    (event.registrationDeadline && now > event.registrationDeadline) ||
    event.paused;
  const soldOut = event.vacancy === 0;

  // Determine what button/state to show
  const getBookingCTA = () => {
    if (registrationClosed) {
      return (
        <div className="text-center py-4">
          <h3 className="font-bank-gothic text-lg uppercase tracking-widest text-syrio-white mb-1">
            Registration Closed
          </h3>
          <p className="font-archivo text-sm text-syrio-white/60">
            Please check with the organiser for more details.
          </p>
        </div>
      );
    }

    if (eventInPast) {
      return (
        <div className="text-center py-4">
          <h3 className="font-bank-gothic text-lg uppercase tracking-widest text-syrio-white mb-1">
            Event Finished
          </h3>
          <p className="font-archivo text-sm text-syrio-white/60">
            Please check with the organiser for future events.
          </p>
        </div>
      );
    }

    if (soldOut) {
      return (
        <div className="text-center py-4">
          <h3 className="font-bank-gothic text-lg uppercase tracking-widest text-syrio-white mb-1">
            Sold Out
          </h3>
          <p className="font-archivo text-sm text-syrio-white/60">
            {event.waitlistEnabled
              ? "Join the waitlist to be notified if spots become available."
              : "Please check back later."}
          </p>
        </div>
      );
    }

    // Show Book Now or Contact Now based on paymentsActive
    if (event.paymentsActive) {
      return (
        <>
          <div className="mb-4">
            <label
              htmlFor="ticket-count"
              className="font-archivo text-sm text-syrio-white/80 block mb-2"
            >
              Number of tickets
            </label>
            <select
              id="ticket-count"
              value={safeTicketCount}
              onChange={(e) => setTicketCount(Number(e.target.value))}
              disabled={loading}
              className="font-archivo w-full text-syrio-white bg-syrio-black/50 border border-syrio-white/20 rounded-lg pl-4 pr-12 py-2 focus:outline-none focus:border-syrio-white/40 disabled:opacity-50 disabled:cursor-not-allowed [&>option]:bg-syrio-black [&>option]:text-syrio-white appearance-none bg-no-repeat bg-[length:1.25rem_1.25rem] bg-[right_1rem_center]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.9)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              }}
            >
              {allowedTicketCounts.map((count) => (
                <option key={count} value={count}>
                  {count} Ticket{count > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
          <SyrioBookingButton
            eventId={event.id}
            ticketCount={safeTicketCount}
            className="w-full justify-center inline-flex items-center gap-2 bg-syrio-white text-syrio-black font-montserrat font-bold tracking-wider text-sm px-8 py-3 border-2 border-syrio-white hover-syrio-glow-white hover:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            onLoadingChange={setLoading}
          />
        </>
      );
    } else {
      return (
        <SyrioContactButton
          eventLink={event.eventLink}
          organiserId={event.organiserId}
          className="w-full justify-center inline-flex items-center gap-2 bg-syrio-white text-syrio-black font-montserrat font-bold tracking-wider text-sm px-8 py-3 border-2 border-syrio-white hover-syrio-glow-white hover:bg-transparent"
        />
      );
    }
  };

  const googleMapsUrl = event.locationLatLng
    ? `https://www.google.com/maps/search/?api=1&query=${event.locationLatLng.lat},${event.locationLatLng.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`;

  return (
    <div
      className={`border border-syrio-white/40 bg-syrio-black/50 p-6 lg:p-8 rounded-lg space-y-6 ${className}`}
    >
      {/* Title */}
      <h3 className="font-bank-gothic text-xl uppercase tracking-widest text-syrio-white">
        Event Details
      </h3>

      {/* Info Rows */}
      <div className="space-y-5">
        <EventInfoRow
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          }
          label="Date & Time"
          value={
            <>
              <p>{formatDate(event.startDate)}</p>
              <p className="text-syrio-white/70">
                {formatTime(event.startDate)} - {formatTime(event.endDate)}
              </p>
            </>
          }
        />

        <EventInfoRow
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          }
          label="Location"
          value={
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-syrio-pink transition-colors"
            >
              {event.location}
            </a>
          }
        />

        {event.registrationDeadline && (
          <EventInfoRow
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            }
            label="Registration Deadline"
            value={formatDate(event.registrationDeadline)}
          />
        )}

        {/* Availability + Price on same row */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 text-syrio-white/80 w-5 h-5 mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </div>
            <div>
              <p className="font-archivo text-xs text-syrio-white/60 uppercase tracking-wider mb-1">
                Availability
              </p>
              <p className="font-archivo text-sm text-syrio-white/90 leading-relaxed">
                {vacancyText}
              </p>
            </div>
          </div>
          <p className="font-bank-gothic text-2xl tracking-wider text-syrio-white whitespace-nowrap">
            ${(event.priceInCents / 100).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Booking CTA (Book Now, Contact Now, or Status Message) */}
      <div className="pt-4">{getBookingCTA()}</div>

      {/* Additional Info */}
      {(event.waitlistEnabled || event.bookingApprovalEnabled) && (
        <div className="pt-4 border-t border-syrio-white/10 space-y-2">
          {event.waitlistEnabled && (
            <p className="font-archivo text-xs text-syrio-white/60">
              Waitlist available if event is full
            </p>
          )}
          {event.bookingApprovalEnabled && (
            <p className="font-archivo text-xs text-syrio-white/60">
              Booking requires organizer approval
            </p>
          )}
        </div>
      )}
    </div>
  );
}
