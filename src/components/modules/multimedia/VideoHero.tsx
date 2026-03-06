import { sharedMessages } from "@/config/messages";
import React from 'react';

export default function VideoHero() {
  return (
    <div className="relative w-full aspect-video md:aspect-[21/9] bg-black overflow-hidden rounded-2xl">
      <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
        <p className="text-white font-mono">{sharedMessages.videoHero.placeholder}</p>
      </div>
    </div>
  );
}

