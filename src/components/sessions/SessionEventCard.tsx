"use client";

import { SessionEvent } from "@/types/sessions";
import { format } from "date-fns";
import Image from "next/image";

interface SessionEventCardProps {
  event: SessionEvent;
}

export default function SessionEventCard({ event }: SessionEventCardProps) {
  const formatTime = (date: Date) => format(date, "h:mm a");
  const formatDate = (date: Date) => format(date, "EEEE, MMMM d");

  return (
    <a
      href={event.eventUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-syrio-white/20 bg-syrio-black/50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg hover:border-syrio-white/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-syrio-white/50"
    >
      {/* Mobile Layout */}
      <div className="md:hidden space-y-3 sm:space-y-4">
        {/* Title */}
        <h4 className="font-bank-gothic text-base sm:text-lg uppercase tracking-wider text-syrio-white leading-tight">
          {event.name}
        </h4>

        {/* Image and Metadata */}
        <div className="flex gap-3 sm:gap-4">
          {/* Event Thumbnail */}
          {event.thumbnail && (
            <div className="flex-shrink-0">
              <Image
                src={event.thumbnail}
                alt={event.name}
                width={80}
                height={80}
                className="object-cover w-20 h-20 sm:w-24 sm:h-24 rounded-lg"
              />
            </div>
          )}

          {/* Metadata */}
          <div className="flex-1 min-w-0 space-y-1.5 sm:space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p className="font-archivo text-[0.65rem] sm:text-xs text-syrio-white/80 truncate">
                {formatDate(event.startDate)}
              </p>
              <p className="font-bank-gothic text-[0.65rem] sm:text-xs text-syrio-white uppercase flex-shrink-0">
                ${(event.priceInCents / 100).toFixed(2)}
              </p>
            </div>

            <div className="flex items-center">
              <p className="font-archivo text-[0.65rem] sm:text-xs text-syrio-white/80">
                {formatTime(event.startDate)} - {formatTime(event.endDate)}
              </p>
            </div>

            <p className="font-archivo text-[0.65rem] sm:text-xs text-syrio-white/60 truncate">
              {event.location}
            </p>

            <p className="font-archivo text-[0.65rem] sm:text-xs text-syrio-white/60">
              {event.vacancy} {event.vacancy === 1 ? "spot" : "spots"} available
            </p>
          </div>
        </div>

        {/* Description */}
        {event.description && (
          <p className="font-archivo text-xs sm:text-sm text-syrio-white/70 leading-relaxed">
            {event.description}
          </p>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-4 lg:gap-6">
        {/* Event Thumbnail */}
        {event.thumbnail && (
          <div className="flex-shrink-0">
            <Image
              src={event.thumbnail}
              alt={event.name}
              width={160}
              height={160}
              className="object-cover w-32 h-32 lg:w-40 lg:h-40 rounded-lg"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col gap-2 lg:gap-3">
          {/* Header Row */}
          <div>
            <div className="flex items-center justify-between mb-1.5 lg:mb-2 gap-2">
              <p className="font-archivo text-xs text-syrio-white/80 truncate">
                {formatDate(event.startDate)}
              </p>
              <p className="font-bank-gothic text-xs text-syrio-white uppercase flex-shrink-0">
                ${(event.priceInCents / 100).toFixed(2)}
              </p>
            </div>
            <h4 className="font-bank-gothic text-lg lg:text-xl uppercase tracking-wider text-syrio-white leading-tight">
              {event.name}
            </h4>
          </div>

          {/* Metadata Row */}
          <div className="space-y-1.5 lg:space-y-2">
            <p className="font-archivo text-sm text-syrio-white/80">
              {formatTime(event.startDate)} - {formatTime(event.endDate)}
            </p>
            <p className="font-archivo text-sm text-syrio-white/60 truncate">
              {event.location}
            </p>
            <p className="font-archivo text-xs text-syrio-white/60">
              {event.vacancy} {event.vacancy === 1 ? "spot" : "spots"} available
            </p>
          </div>

          {/* Description */}
          {event.description && (
            <p className="font-archivo text-sm text-syrio-white/70 leading-relaxed mt-1 lg:mt-2">
              {event.description}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}