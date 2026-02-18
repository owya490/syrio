"use client";

import { SessionEvent } from "@/types/sessions";
import EventBookingPanelModule from "./EventBookingPanelModule";

interface EventDetailsModuleProps {
  event: SessionEvent;
}

export default function EventDetailsModule({ event }: EventDetailsModuleProps) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Column - Event Description and Tags */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description Section */}
          <div>
            <h2 className="font-bank-gothic text-2xl md:text-3xl uppercase tracking-widest text-syrio-white mb-6">
              About This Event
            </h2>
            <div className="font-archivo text-base text-syrio-white/80 leading-relaxed whitespace-pre-wrap">
              {event.description}
            </div>
          </div>

          {/* Event Tags */}
          {event.eventTags && event.eventTags.length > 0 && (
            <div>
              <h3 className="font-bank-gothic text-lg uppercase tracking-widest text-syrio-white mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {event.eventTags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-4 py-2 border border-syrio-white/30 text-syrio-white/80 font-archivo text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Additional Event Info */}
          {event.paused && (
            <div className="border border-syrio-red/50 bg-syrio-red/10 p-4 rounded-lg">
              <p className="font-archivo text-sm text-syrio-red">
                This event is currently paused. Please check back later or
                contact the organizer for more information.
              </p>
            </div>
          )}

          {event.formId && (
            <div className="border border-syrio-white/20 bg-syrio-white/5 p-4 rounded-lg">
              <p className="font-archivo text-sm text-syrio-white/70">
                This event requires completing a registration form during
                booking.
              </p>
            </div>
          )}
        </div>

        {/* Right Column - Booking Panel */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-8">
            <EventBookingPanelModule event={event} />
          </div>
        </div>
      </div>
    </section>
  );
}

// gap between image and title smaller
