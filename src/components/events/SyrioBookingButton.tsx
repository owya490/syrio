"use client";

import { eventMessages } from "@/config/eventMessages";
import { initFulfilmentSession, getNextFulfilmentEntityUrl } from "@/services/fulfilment";
import { useState } from "react";

interface SyrioBookingButtonProps {
  eventId: string;
  ticketCount: number;
  eventTicketTypeId: string | null;
  className?: string;
  onLoadingChange?: (loading: boolean) => void;
}

export default function SyrioBookingButton({
  eventId,
  ticketCount,
  eventTicketTypeId,
  className = "",
  onLoadingChange,
}: SyrioBookingButtonProps) {
  const [loading, setLoading] = useState(false);
  const checkoutUnavailable = eventTicketTypeId === null;

  const handleBookNow = async () => {
    if (eventTicketTypeId === null) {
      return;
    }

    setLoading(true);
    onLoadingChange?.(true);

    try {
      const { fulfilmentSessionId } = await initFulfilmentSession(
        eventId,
        ticketCount,
        eventTicketTypeId,
      );

      if (!fulfilmentSessionId) {
        throw new Error("Failed to initialize fulfilment session");
      }

      const nextEntityUrl = await getNextFulfilmentEntityUrl(fulfilmentSessionId);
      if (!nextEntityUrl) {
        throw new Error("No next fulfilment entity available");
      }

      // Open Sportshub fulfilment flow in new tab
      window.open(nextEntityUrl, "_blank", "noopener,noreferrer");
      setLoading(false);
      onLoadingChange?.(false);
    } catch (error) {
      console.error("Error booking event:", error);
      alert(eventMessages.bookingButton.failedAlert);
      setLoading(false);
      onLoadingChange?.(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBookNow}
      disabled={loading || checkoutUnavailable}
      aria-disabled={checkoutUnavailable}
      className={className}
    >
      {loading ? eventMessages.bookingButton.booking : eventMessages.bookingButton.bookNow}
    </button>
  );
}
