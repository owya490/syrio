"use client";

import { getSportshubSiteUrl } from "@/config/sportshub";
import { useState } from "react";

interface SyrioContactButtonProps {
  eventLink?: string;
  organiserId: string;
  className?: string;
}

export default function SyrioContactButton({
  eventLink,
  organiserId,
  className = "",
}: SyrioContactButtonProps) {
  const [showModal, setShowModal] = useState(false);

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleProceed = () => {
    const linkToUse = eventLink?.trim() || `${getSportshubSiteUrl()}/user/${organiserId}`;
    window.open(linkToUse, "_blank", "noopener,noreferrer");
    setShowModal(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleContactClick}
        className={className}
      >
        Contact Now
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-syrio-black border border-syrio-white/20 rounded-lg p-6 max-w-md mx-4">
            <h3 className="font-bank-gothic text-xl uppercase tracking-widest text-syrio-white mb-4">
              Contact Event Organizer
            </h3>
            <p className="font-archivo text-sm text-syrio-white/80 mb-2">
              You are going to be redirected to:
            </p>
            <p className="font-archivo text-sm text-syrio-pink break-all mb-6">
              {eventLink?.trim() || `${getSportshubSiteUrl()}/user/${organiserId}`}
            </p>
            <div className="flex gap-4 justify-end">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="font-archivo text-sm text-syrio-white/60 hover:text-syrio-white px-4 py-2"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleProceed}
                className="font-archivo text-sm bg-syrio-white text-syrio-black px-4 py-2 hover:bg-syrio-white/90"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
