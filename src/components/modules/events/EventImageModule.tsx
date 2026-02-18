"use client";

import Image from "next/image";

interface EventImageModuleProps {
  image: string;
  alt: string;
  className?: string;
}

export default function EventImageModule({
  image,
  alt,
  className = "",
}: EventImageModuleProps) {
  return (
    <div className={`py-4 md:py-6 ${className}`}>
      <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-sm">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 896px"
            className="object-cover"
            priority
          />
          {/* Dark overlay for better visual consistency */}
          <div className="absolute inset-0 bg-gradient-to-b from-syrio-black/40 via-transparent to-syrio-black/60" />
        </div>
      </div>
    </div>
  );
}
