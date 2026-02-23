"use client";

import CTAButton from "@/components/elements/CTAButton";

interface EventSuccessModuleProps {
  eventName: string;
  eventId: string;
  variant: "booking" | "waitlist";
  className?: string;
}

export default function EventSuccessModule({
  eventName,
  eventId,
  variant,
  className = "",
}: EventSuccessModuleProps) {
  const isWaitlist = variant === "waitlist";

  return (
    <div
      className={`border border-syrio-white/20 bg-syrio-black/50 p-6 lg:p-8 rounded-lg space-y-6 ${className}`}
    >
      <h2 className="font-bank-gothic text-xl md:text-2xl uppercase tracking-widest text-syrio-white">
        {isWaitlist ? "Thank you for joining the waitlist" : "Thank you for booking"}
      </h2>

      <p className="font-archivo text-base text-syrio-white/80 leading-relaxed">
        {isWaitlist ? (
          <>
            You have successfully signed up for the waitlist for{" "}
            <strong className="text-syrio-white">{eventName}</strong>. We will
            notify you via email if spots open up for this event.
          </>
        ) : (
          <>
            You have successfully booked{" "}
            <strong className="text-syrio-white">{eventName}</strong>. Keen to
            see you soon!
          </>
        )}
      </p>

      <p className="font-archivo text-sm text-syrio-white/60">
        Please check your email for{" "}
        {isWaitlist
          ? "waitlist confirmation and event details"
          : "your ticket details"}
        . If you don&apos;t see it, check your spam or junk folder.
      </p>

      <div className="pt-4 flex flex-col sm:flex-row gap-4">
        <CTAButton href="/sessions/intensive-skill-development" className="justify-center">
          Back to Sessions
        </CTAButton>
        <CTAButton href={`/event/${eventId}`} className="justify-center">
          View event
        </CTAButton>
      </div>
    </div>
  );
}
