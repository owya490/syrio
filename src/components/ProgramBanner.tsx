"use client";

import UnifiedLink from "@/components/elements/Link";
import Image from "next/image";

interface ProgramCard {
  label: string;
  href: string;
  image: string;
}

interface ProgramBannerProps {
  title: string;
  subtitle?: string;
  cards: ProgramCard[];
  className?: string;
}

export default function ProgramBanner({
  title,
  subtitle,
  cards,
  className = "",
}: ProgramBannerProps) {
  return (
    <div className={`relative z-10 max-w-6xl mx-auto ${className}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="font-bank-gothic text-3xl md:text-4xl tracking-wide mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="font-bank-gothic text-sm text-syrio-white/60 tracking-wide">
            {subtitle}
          </p>
        )}
      </div>

      {/* Program Cards - Carousel: 1 visible at a time on mobile, horizontal scroll on all desktop sizes */}
      <div className="relative -mx-4 md:mx-0">
        <div className="flex gap-0 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-syrio-white/20 scroll-smooth md:snap-none">
          {cards.map((card, index) => (
            <UnifiedLink
              key={card.label}
              href={card.href}
              className="group relative flex flex-col shrink-0 min-w-full md:min-w-0 md:w-72 snap-center md:snap-none px-4 md:px-0"
            >
              {/* Card Image - fixed aspect ratio, crops any image to fit */}
              <div className="relative aspect-3/4 w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 288px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Logo overlay */}
                {/* <div className="absolute bottom-4 left-4 w-12 h-12 bg-syrio-white rounded-full flex items-center justify-center">
                  <Image
                    src="/branding/logos/LOGO TRANSPARENT_画板 1 副本 17.png"
                    alt="Syrio Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div> */}
              </div>
              {/* Card Label */}
              <div className="mt-3 flex items-center gap-2">
                <span className="font-bank-gothic text-sm md:text-base tracking-wider border-b border-transparent group-hover:border-syrio-white transition-colors">
                  {card.label}
                </span>
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </UnifiedLink>
          ))}
        </div>
      </div>
    </div>
  );
}
