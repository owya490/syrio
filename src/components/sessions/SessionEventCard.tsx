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
    <div className="border border-syrio-white/20 bg-syrio-black/50 p-4 md:p-6 rounded-lg hover:border-syrio-white/40 transition-colors">
      {/* Mobile Layout */}
      <div className="md:hidden space-y-4">
        {/* Title */}
        <h4 className="font-bank-gothic text-lg md:text-xl uppercase tracking-wider text-syrio-white">
          {event.name}
        </h4>

        {/* Image and Metadata */}
        <div className="flex gap-4">
          {/* Event Thumbnail */}
          {event.thumbnail && (
            <div className="flex-shrink-0">
              <Image
                src={event.thumbnail}
                alt={event.name}
                width={96}
                height={96}
                className="object-cover w-24 h-24 rounded-lg"
              />
            </div>
          )}

          {/* Metadata */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <p className="font-archivo text-xs text-syrio-white/80">
                {formatDate(event.startDate)}
              </p>
              <p className="font-bank-gothic text-xs text-syrio-white uppercase">
                ${event.price}
              </p>
            </div>

            <div className="flex items-center">
              <p className="font-archivo text-xs text-syrio-white/80">
                {formatTime(event.startDate)} - {formatTime(event.endDate)}
              </p>
            </div>

            <p className="font-archivo text-xs text-syrio-white/60">
              {event.location}
            </p>

            <p className="font-archivo text-xs text-syrio-white/60">
              {event.vacancy} {event.vacancy === 1 ? "spot" : "spots"} available
            </p>
          </div>
        </div>

        {/* Description */}
        {event.description && (
          <p className="font-archivo text-sm text-syrio-white/70 leading-relaxed">
            {event.description}
          </p>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-6">
        {/* Event Thumbnail */}
        {event.thumbnail && (
          <div className="flex-shrink-0">
            <Image
              src={event.thumbnail}
              alt={event.name}
              width={160}
              height={160}
              className="object-cover w-40 h-40 rounded-lg"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Header Row */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="font-archivo text-xs text-syrio-white/80">
                {formatDate(event.startDate)}
              </p>
              <p className="font-bank-gothic text-xs text-syrio-white uppercase">
                ${event.price}
              </p>
            </div>
            <h4 className="font-bank-gothic text-xl uppercase tracking-wider text-syrio-white">
              {event.name}
            </h4>
          </div>

          {/* Metadata Row */}
          <div className="space-y-2">
            <p className="font-archivo text-sm text-syrio-white/80">
              {formatTime(event.startDate)} - {formatTime(event.endDate)}
            </p>
            <p className="font-archivo text-sm text-syrio-white/60">
              {event.location}
            </p>
            <p className="font-archivo text-xs text-syrio-white/60">
              {event.vacancy} {event.vacancy === 1 ? "spot" : "spots"} available
            </p>
          </div>

          {/* Description */}
          {event.description && (
            <p className="font-archivo text-sm text-syrio-white/70 leading-relaxed mt-2">
              {event.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}