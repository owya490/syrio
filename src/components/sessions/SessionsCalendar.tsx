"use client";

import { SessionEvent } from "@/types/sessions";
import { isSameDay, startOfDay } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import SessionEventCard from "./SessionEventCard";

interface SessionsCalendarProps {
  events: SessionEvent[];
}

export default function SessionsCalendar({ events }: SessionsCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [month, setMonth] = useState<Date>(new Date());
  const [showEventsList, setShowEventsList] = useState(false);

  // Initialize on mount
  useEffect(() => {
    if (events.length > 0) {
      const today = startOfDay(new Date());

      // Find all upcoming events
      const upcomingEvents = events.filter((event) => {
        const eventDate = startOfDay(event.startDate);
        return eventDate >= today;
      });

      if (upcomingEvents.length > 0) {
        // Sort by date and get the closest one
        upcomingEvents.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
        const closestEventDate = startOfDay(upcomingEvents[0].startDate);

        if (typeof window !== "undefined" && window.innerWidth < 768) {
          // On mobile/tablet: navigate to first event month but don't select date
          setMonth(closestEventDate);
        } else {
          // On desktop: select the date and navigate to its month
          setSelectedDate(closestEventDate);
          setMonth(closestEventDate);
        }
      }
    }
  }, [events]);

  // Get dates that have events
  const eventDates = useMemo(() => {
    return events.map((event) => startOfDay(event.startDate));
  }, [events]);

  // Calculate the date range for navigation limits
  const { startMonth, endMonth } = useMemo(() => {
    if (eventDates.length === 0) {
      return { startMonth: undefined, endMonth: undefined };
    }

    // Sort dates to find earliest and latest
    const sortedDates = [...eventDates].sort((a, b) => a.getTime() - b.getTime());
    return {
      startMonth: sortedDates[0], // Earliest event date
      endMonth: sortedDates[sortedDates.length - 1], // Latest event date
    };
  }, [eventDates]);

  // Get events for the selected date
  const eventsForSelectedDate = useMemo(() => {
    if (!selectedDate) return [];
    return events.filter((event) => {
      const eventDate = startOfDay(event.startDate);
      return isSameDay(eventDate, selectedDate);
    });
  }, [selectedDate, events]);

  // Handle date selection - show events list on mobile
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setMonth(date);
    }
    // Show events list on mobile/tablet when a date is selected
    if (typeof window !== "undefined" && window.innerWidth < 768 && date) {
      setShowEventsList(true);
    }
  };

  // Handle back to calendar on mobile
  const handleBackToCalendar = () => {
    setShowEventsList(false);
  };

  // Custom styles for the calendar
  const calendarStyles = `
    .rdp {
      --rdp-cell-size: 40px;
      --rdp-accent-color: #ffffff;
      --rdp-background-color: rgba(255, 255, 255, 0.1);
      --rdp-accent-color-dark: #ffffff;
      --rdp-background-color-dark: rgba(255, 255, 255, 0.1);
      --rdp-outline: 2px solid var(--rdp-accent-color);
      --rdp-outline-selected: 2px solid var(--rdp-accent-color);
      margin: 0;
    }
    
    .rdp-day {
      color: rgba(255, 255, 255, 0.7);
      font-family: var(--font-archivo), sans-serif;
    }
    
    .rdp-day:hover:not([disabled]):not(.rdp-day_selected) {
      background-color: rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }
    
    .rdp-day_selected,
    .rdp-day_selected:focus-visible,
    .rdp-day_selected:hover {
      background-color: #ffffff;
      color: #000d18;
      font-weight: bold;
    }
    
    .rdp-day_today:not(.rdp-day_selected) {
      font-weight: bold;
      color: #ffffff;
    }
    
    .rdp-day_disabled {
      color: rgba(255, 255, 255, 0.2);
    }
    
    .rdp-button:hover:not([disabled]) {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    .rdp-button_reset {
      color: #ffffff;
    }
    
    .rdp-nav_button {
      color: #ffffff;
    }
    
    .rdp-nav_button:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    .rdp-caption_label {
      font-family: var(--font-bank-gothic), sans-serif;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: #ffffff;
    }
    
    .rdp-head_cell {
      font-family: var(--font-bank-gothic), sans-serif;
      font-weight: bold;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.75rem;
    }
  `;

  return (
    <div className="pt-8">
      <style>{calendarStyles}</style>
      <div className="md:flex gap-8 md:max-h-[600px]">
        {/* Mobile: Sliding View */}
        <div
          className="md:hidden w-full overflow-hidden transition-all duration-300"
          style={{ height: showEventsList ? "auto" : "380px" }}
        >
          {events.length === 0 && (
            <p className="text-sm font-archivo text-syrio-white/60 mb-4">
              No upcoming sessions available
            </p>
          )}
          <div
            className={`flex transition-transform duration-300 ease-in-out ${
              showEventsList ? "-translate-x-1/2" : "translate-x-0"
            }`}
            style={{ width: "200%" }}
          >
            {/* Calendar View */}
            <div className="w-1/2 flex-shrink-0">
              <div className="flex justify-center">
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  month={month}
                  onMonthChange={setMonth}
                  startMonth={startMonth}
                  endMonth={endMonth}
                  disabled={(date) => {
                    if (events.length === 0) return true;
                    const dateStart = startOfDay(date);
                    const today = startOfDay(new Date());
                    if (dateStart < today) return true;
                    return !eventDates.some((eventDate) => isSameDay(eventDate, dateStart));
                  }}
                  modifiers={{
                    hasEvent: eventDates,
                  }}
                  modifiersStyles={{
                    hasEvent: {
                      fontWeight: "bold",
                      textDecoration: "underline",
                    },
                  }}
                />
              </div>
            </div>

            {/* Events List View */}
            <div className="w-1/2 flex-shrink-0 px-4">
              <button
                type="button"
                onClick={handleBackToCalendar}
                className="mb-4 flex items-center gap-2 text-sm font-bank-gothic uppercase tracking-wider text-syrio-white hover:text-syrio-white/80 transition-colors"
              >
                <span>←</span> Back to Calendar
              </button>
              <div>
                <h3 className="font-bank-gothic text-xl uppercase tracking-wider mb-4 text-syrio-white">
                  {selectedDate
                    ? `Sessions on ${selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}`
                    : "Select a date"}
                </h3>

                {eventsForSelectedDate.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="font-archivo text-syrio-white/60">
                      {selectedDate ? "No sessions on this day" : "Please select a date to view sessions"}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 pb-12">
                    {eventsForSelectedDate.map((event) => (
                      <SessionEventCard key={event.id} event={event} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Side by Side View */}
        <div className="hidden md:flex gap-8 w-full">
          {/* Calendar */}
          <div className="flex-shrink-0">
            <div className="flex md:pr-8">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                month={month}
                onMonthChange={setMonth}
                startMonth={startMonth}
                endMonth={endMonth}
                disabled={(date) => {
                  if (events.length === 0) return true;
                  const dateStart = startOfDay(date);
                  const today = startOfDay(new Date());
                  if (dateStart < today) return true;
                  return !eventDates.some((eventDate) => isSameDay(eventDate, dateStart));
                }}
                modifiers={{
                  hasEvent: eventDates,
                }}
                modifiersStyles={{
                  hasEvent: {
                    fontWeight: "bold",
                    textDecoration: "underline",
                  },
                }}
              />
            </div>
          </div>

          {/* Events List */}
          <div className="flex-1">
            {events.length === 0 ? (
              <div className="min-h-[300px] flex items-start pt-12">
                <p className="text-sm font-archivo text-syrio-white/60">
                  No upcoming sessions available
                </p>
              </div>
            ) : (
              <div className="min-h-[300px]">
                <h3 className="font-bank-gothic text-xl uppercase tracking-wider mb-6 text-syrio-white">
                  {selectedDate
                    ? `Sessions on ${selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}`
                    : "Select a date"}
                </h3>

                {eventsForSelectedDate.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="font-archivo text-syrio-white/60">
                      {selectedDate ? "No sessions on this day" : "Please select a date to view sessions"}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                    {eventsForSelectedDate.map((event) => (
                      <SessionEventCard key={event.id} event={event} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}