"use client";

import Module from "@/components/modules/Module";
import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";
import SessionsCalendar from "@/components/sessions/SessionsCalendar";
import { backgroundImages } from "@/config/images";
import { fetchSessionEvents, SessionEvent } from "@/types/sessions";
import { useEffect, useState } from "react";

export default function IntensiveSkillDevelopment() {
  const [events, setEvents] = useState<SessionEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchSessionEvents()
      .then((data) => {
        if (!cancelled) {
          setEvents(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          console.error("Error fetching session events:", error);
          setError(error.message || "Failed to load sessions");
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      <HeroBannerModule
        title="INTENSIVE SKILL DEVELOPMENT"
        backgroundImage={backgroundImages.intensiveSkillDevelopment}
        backgroundImageAlt="Intensive Skill Development"
        backgroundComponent={
          <div className="absolute inset-0 bg-gradient-to-b from-syrio-black/40 to-syrio-black/80" />
        }
      />

      {/* Calendar Section */}
      <Module className="sm:py-10 md:py-12 lg:py-16 pb-16 md:pb-14 lg:pb-18 bg-syrio-black">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <p className="font-archivo text-syrio-white/60">
                Loading sessions...
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="font-archivo text-syrio-red mb-4">
                Failed to load sessions
              </p>
              <p className="font-archivo text-sm text-syrio-white/60">
                {error}
              </p>
            </div>
          ) : (
            <SessionsCalendar events={events} />
          )}
        </div>
      </Module>
    </main>
  );
}
