"use client";

import { SessionEvent } from "@/types/sessions";
import { isSameDay, startOfDay } from "date-fns";
import { useCallback, useEffect, useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import SessionEventCard from "./SessionEventCard";

interface SessionsCalendarProps {
  events: SessionEvent[];
}

export default function SessionsCalendar({ events }: SessionsCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [month, setMonth] = useState<Date>(new Date());

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
        upcomingEvents.sort(
          (a, b) => a.startDate.getTime() - b.startDate.getTime(),
        );
        const closestEventDate = startOfDay(upcomingEvents[0].startDate);

        // Select the date and navigate to its month on all screen sizes
        setSelectedDate(closestEventDate);
        setMonth(closestEventDate);
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
    const sortedDates = [...eventDates].sort(
      (a, b) => a.getTime() - b.getTime(),
    );
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

  // Handle date selection
  const handleDateSelect = useCallback((date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setMonth(date);
    }
  }, []);

  // Disabled date logic
  const isDateDisabled = useCallback(
    (date: Date) => {
      if (events.length === 0) return true;
      const dateStart = startOfDay(date);
      const today = startOfDay(new Date());
      if (dateStart < today) return true;
      return !eventDates.some((eventDate) =>
        isSameDay(eventDate, dateStart),
      );
    },
    [events.length, eventDates],
  );

  // Styled modifier for event dates
  const hasEventStyles = useMemo(
    () => ({
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#ffffff",
      fontSize: "1rem",
    }),
    [],
  );

  // Format selected date for display
  const formattedDate = useMemo(() => {
    if (!selectedDate) return "Select a date";
    return `Sessions on ${selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })}`;
  }, [selectedDate]);

  // Render calendar
  const renderCalendar = () => {
    if (events.length === 0) {
      return (
        <p className="text-sm font-archivo text-syrio-white/60 mb-4">
          No upcoming sessions available
        </p>
      );
    }

    return (
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={handleDateSelect}
        month={month}
        onMonthChange={setMonth}
        startMonth={startMonth}
        endMonth={endMonth}
        disabled={isDateDisabled}
        modifiers={{
          hasEvent: eventDates,
        }}
        modifiersStyles={{
          hasEvent: hasEventStyles,
        }}
      />
    );
  };

  // Render events list heading
  const renderEventsHeading = (isMobile: boolean) => {
    const titleClasses = isMobile
      ? "font-bank-gothic text-base sm:text-lg uppercase tracking-wider mb-3 sm:mb-4 text-syrio-white"
      : "font-bank-gothic text-lg lg:text-xl uppercase tracking-wider mb-4 lg:mb-6 text-syrio-white";

    return <h3 className={titleClasses}>{formattedDate}</h3>;
  };

  // Render empty state for events
  const renderEmptyState = (isMobile: boolean) => {
    const emptyStateClasses = isMobile
      ? "text-center py-8 sm:py-12"
      : "text-center py-12";

    return (
      <div className={emptyStateClasses}>
        <p className="font-archivo text-sm text-syrio-white/60">
          {selectedDate
            ? "No sessions on this day"
            : "Please select a date to view sessions"}
        </p>
      </div>
    );
  };

  // Render events list content
  const renderEventsList = (isMobile: boolean) => {
    const eventsContainerClasses = isMobile
      ? "space-y-3 sm:space-y-4"
      : "space-y-3 lg:space-y-4 max-h-[600px] overflow-y-auto pr-2";

    return (
      <div className={eventsContainerClasses}>
        {eventsForSelectedDate.map((event) => (
          <SessionEventCard key={event.id} event={event} />
        ))}
      </div>
    );
  };

  // Render events section
  const renderEventsSection = (isMobile: boolean) => {
    if (events.length === 0) {
      return isMobile ? null : (
        <div className="min-h-[300px] flex items-start pt-12">
          <p className="text-sm font-archivo text-syrio-white/60">
            No upcoming sessions available
          </p>
        </div>
      );
    }

    return (
      <div className={isMobile ? "" : "min-h-[300px]"}>
        {renderEventsHeading(isMobile)}
        {eventsForSelectedDate.length === 0
          ? renderEmptyState(isMobile)
          : renderEventsList(isMobile)}
      </div>
    );
  };

  return (
    <div className="pt-4 sm:pt-6 md:pt-8 px-2 sm:px-4 md:px-0">
      {/* Mobile & Tablet: Stacked Layout */}
      <div className="md:hidden space-y-6">
        <div className="flex justify-center">{renderCalendar()}</div>

        {events.length > 0 && (
          <div className="px-2 sm:px-0">{renderEventsSection(true)}</div>
        )}
      </div>

      {/* Desktop: Side by Side Layout */}
      <div className="hidden md:flex gap-4 lg:gap-8">
        <div className="flex-shrink-0">
          <div className="flex md:pr-4 lg:pr-8">{renderCalendar()}</div>
        </div>

        <div className="flex-1 min-w-0">{renderEventsSection(false)}</div>
      </div>
    </div>
  );
}
