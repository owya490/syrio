import React from 'react';

export default function VideoHero() {
  return (
    <div className="relative w-full aspect-video md:aspect-[21/9] bg-black overflow-hidden rounded-2xl">
      {/* Placeholder for actual video tag or iframe */}
      <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
        <p className="text-white font-mono">Multimedia Module: Video</p>
      </div>
    </div>
  );
}

