"use client";

import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";
import EventSuccessModule from "@/components/modules/events/EventSuccessModule";
import { fetchEventById, SessionEvent } from "@/types/sessions";
import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { backgroundImages } from "@/config/images";

export default function EventSuccessPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const eventId = params.id as string;

  const [event, setEvent] = useState<SessionEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fulfilmentSessionType = searchParams.get("fulfilmentSessionType");
  const variant = fulfilmentSessionType === "WAITLIST" ? "waitlist" : "booking";

  useEffect(() => {
    let cancelled = false;

    if (!eventId) {
      setError("No event ID provided");
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
      .catch((err) => {
        if (!cancelled) {
          console.error("Error fetching event:", err);
          setError(err.message || "Failed to load event");
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
          <p className="font-archivo text-syrio-white/60">Loading...</p>
        </div>
      </main>
    );
  }

  if (error || !event) {
    return (
      <main className="bg-syrio-black text-syrio-white overflow-x-hidden min-h-screen flex items-center justify-center">
        <div className="text-center py-12 px-4">
          <h1 className="font-bank-gothic text-2xl md:text-3xl uppercase tracking-widest text-syrio-white mb-4">
            Event Not Found
          </h1>
          <p className="font-archivo text-syrio-red mb-4">
            {error || "Unable to load event details"}
          </p>
          <button
            onClick={() => router.push("/sessions/intensive-skill-development")}
            className="font-archivo text-sm text-syrio-white/80 hover:text-syrio-white underline"
          >
            Back to Sessions
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden min-h-screen">
      <HeroBannerModule
        title="Booking confirmed"
        backgroundImage={backgroundImages.highPerformance2}
        backgroundImageAlt="Success background"
        backgroundComponent={
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-syrio-black/50 to-syrio-black/95" />
        }
      />

      <div className="w-full flex justify-center px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="w-full max-w-4xl">
          <EventSuccessModule
            eventName={event.name}
            eventId={event.id}
            variant={variant}
          />
        </div>
      </div>
    </main>
  );
}
