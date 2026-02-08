"use client";

import Module from "@/components/modules/Module";
import SessionsCalendar from "@/components/sessions/SessionsCalendar";
import { fetchSessionEvents, SessionEvent } from "@/types/sessions";
import { useEffect, useState } from "react";

export default function IntensiveSkillDevelopment() {
  const [events, setEvents] = useState<SessionEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch session events
    // TODO: Replace fetchSessionEvents() with your actual API call
    fetchSessionEvents()
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching session events:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden pt-20">
      <Module
        className="h-48 md:min-h-[20vh] relative"
        backgroundImage="/MULTIMEDIA ASSETS/2025W2/图片_20260101210429_640_5.jpg"
        backgroundImageAlt="Intensive Skill Development"
        backgroundImageClassName="object-cover"
        backgroundComponent={<div className="absolute inset-0 bg-syrio-black/60" />}
        contentClassName="h-full flex items-center justify-center"
      >
        <h1 className="font-bank-gothic text-3xl md:text-4xl lg:text-5xl text-syrio-white uppercase tracking-wider text-center">
          Intensive Skill Development
        </h1>
      </Module>

      {/* Calendar Section */}
      <Module className="py-8 sm:py-10 md:py-12 lg:py-16 bg-syrio-black">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <p className="font-archivo text-syrio-white/60">Loading sessions...</p>
            </div>
          ) : (
            <SessionsCalendar events={events} />
          )}
        </div>
      </Module>
    </main>
  );
}