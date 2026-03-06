"use client";

import CTAButton from "@/components/elements/CTAButton";
import { eventMessages } from "@/config/eventMessages";

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
        {isWaitlist ? eventMessages.success.waitlist.title : eventMessages.success.booking.title}
      </h2>

      <p className="font-archivo text-base text-syrio-white/80 leading-relaxed">
        {isWaitlist ? (
          <>
            {eventMessages.success.waitlist.descriptionPrefix}{" "}
            <strong className="text-syrio-white">{eventName}</strong>.{" "}
            {eventMessages.success.waitlist.descriptionSuffix}
          </>
        ) : (
          <>
            {eventMessages.success.booking.descriptionPrefix}{" "}
            <strong className="text-syrio-white">{eventName}</strong>.{" "}
            {eventMessages.success.booking.descriptionSuffix}
          </>
        )}
      </p>

      <p className="font-archivo text-sm text-syrio-white/60">
        {eventMessages.success.emailCheck}{" "}
        {isWaitlist
          ? eventMessages.success.waitlist.emailNote
          : eventMessages.success.booking.emailNote}
        {eventMessages.success.emailSpamNote}
      </p>

      <div className="pt-4 flex flex-col sm:flex-row gap-4">
        <CTAButton href="/sessions/intensive-skill-development" className="justify-center">
          {eventMessages.success.backToSessions}
        </CTAButton>
        <CTAButton href={`/event/${eventId}`} className="justify-center">
          {eventMessages.success.viewEvent}
        </CTAButton>
      </div>
    </div>
  );
}
