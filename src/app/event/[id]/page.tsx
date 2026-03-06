"use client";

import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";
import EventImageModule from "@/components/modules/events/EventImageModule";
import EventDetailsModule from "@/components/modules/events/EventDetailsModule";
import { fetchEventById, SessionEvent } from "@/types/sessions";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { backgroundImages } from "@/config/images";
import { eventMessages } from "@/config/eventMessages";

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const eventId = params.id as string;

  const [event, setEvent] = useState<SessionEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (!eventId) {
      setError(eventMessages.page.noEventId);
      setLoading(false);
      return;
    }

    fetchEventById(eventId)
      .then((data) => {
        if (!cancelled) {
          setEvent(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          console.error("Error fetching event:", error);
          setError(error.message || eventMessages.page.failedToLoad);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [eventId]);

  if (loading) {
    return (
      <main className="bg-syrio-black text-syrio-white overflow-x-hidden min-h-screen flex items-center justify-center">
        <div className="text-center py-12">
          <p className="font-archivo text-syrio-white/60">{eventMessages.page.loading}</p>
        </div>
      </main>
    );
  }

  if (error || !event) {
    return (
      <main className="bg-syrio-black text-syrio-white overflow-x-hidden min-h-screen flex items-center justify-center">
        <div className="text-center py-12 px-4">
          <h1 className="font-bank-gothic text-2xl md:text-3xl uppercase tracking-widest text-syrio-white mb-4">
            {eventMessages.page.notFoundTitle}
          </h1>
          <p className="font-archivo text-syrio-red mb-4">
            {error || eventMessages.page.notFoundFallback}
          </p>
          <button
            onClick={() => router.push("/sessions/intensive-skill-development")}
            className="font-archivo text-sm text-syrio-white/80 hover:text-syrio-white underline"
          >
            {eventMessages.page.backToSessions}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      {/* Hero Banner with Event Title - using same background as shop page  */}
      <HeroBannerModule
        title={event.name}
        backgroundImage={backgroundImages.highPerformance2}
        backgroundImageAlt={eventMessages.page.backgroundImageAlt}
        backgroundComponent={
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-syrio-black/50 to-syrio-black/95" />
        }
      />

      {/* Centered container for event content with max width */}
      <div className="w-full flex justify-center px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          {/* Event Image - prominently displayed below header */}
          {event.image && (
            <EventImageModule image={event.image} alt={event.name} />
          )}

          {/* Event Details Section */}
          <EventDetailsModule event={event} />
        </div>
      </div>
    </main>
  );
}
