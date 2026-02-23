"use client";

import { useState } from "react";
import { initFulfilmentSession, getNextFulfilmentEntityUrl } from "@/services/fulfilment";

interface SyrioBookingButtonProps {
  eventId: string;
  ticketCount: number;
  className?: string;
  onLoadingChange?: (loading: boolean) => void;
}

export default function SyrioBookingButton({
  eventId,
  ticketCount,
  className = "",
  onLoadingChange,
}: SyrioBookingButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleBookNow = async () => {
    setLoading(true);
    onLoadingChange?.(true);

    try {
      const { fulfilmentSessionId } = await initFulfilmentSession(eventId, ticketCount);

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
      alert("Failed to start booking process. Please try again.");
      setLoading(false);
      onLoadingChange?.(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBookNow}
      disabled={loading}
      className={className}
    >
      {loading ? "Booking..." : "Book Now"}
    </button>
  );
}
