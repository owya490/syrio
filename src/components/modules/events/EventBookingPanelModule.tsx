"use client";

import { SessionEvent } from "@/types/sessions";
import { format } from "date-fns";
import EventInfoRow from "@/components/events/EventInfoRow";
import CTAButton from "@/components/elements/CTAButton";

interface EventBookingPanelModuleProps {
  event: SessionEvent;
  className?: string;
}

export default function EventBookingPanelModule({
  event,
  className = "",
}: EventBookingPanelModuleProps) {
  const formatTime = (date: Date) => format(date, "h:mm a");
  const formatDate = (date: Date) => format(date, "EEEE, MMMM d, yyyy");

  const vacancyText = event.hideVacancy
    ? "Spots available"
    : `${event.vacancy} ${event.vacancy === 1 ? "spot" : "spots"} available`;

  const googleMapsUrl = event.locationLatLng
    ? `https://www.google.com/maps/search/?api=1&query=${event.locationLatLng.lat},${event.locationLatLng.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`;

  return (
    <div
      className={`border border-syrio-white/20 bg-syrio-black/50 p-6 lg:p-8 rounded-lg space-y-6 ${className}`}
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
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
          label="Price"
          value={`$${(event.priceInCents / 100).toFixed(2)}`}
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
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
          }
          label="Availability"
          value={vacancyText}
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
      </div>

      {/* Book Now Button */}
      <div className="pt-4">
        <CTAButton href={event.eventUrl} className="w-full justify-center">
          Book Now
        </CTAButton>
      </div>

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
