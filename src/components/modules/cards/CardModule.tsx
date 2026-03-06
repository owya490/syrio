"use client";

import UnifiedLink from "@/components/elements/Link";
import { Reveal } from "@/components/animation";
import Module from "@/components/modules/Module";
import { backgroundImages } from "@/config/images";
import { sharedMessages } from "@/config/messages";
import Image from "next/image";

interface ProgramCard {
  label: string;
  href: string;
  image: string;
}

interface CardModuleProps {
  title: string;
  subtitle?: string;
  cards: ProgramCard[];
  className?: string;
}

export default function CardModule({
  title,
  subtitle,
  cards,
  className = "",
}: CardModuleProps) {
  const getCardWidth = () => {
    const count = cards.length;
    if (count === 2) return "md:w-[calc((100%-1.5rem)/2)]";
    if (count === 3) return "md:w-[calc((100%-3rem)/3)]";
    return "md:w-[calc((100%-4.5rem)/4)]";
  };

  const getAspectRatio = () => {
    const count = cards.length;
    if (count === 2) return "md:aspect-[3/2]";
    if (count === 3) return "md:aspect-square";
    return "";
  };

  const getImageSizes = () => {
    const count = cards.length;
    if (count === 2) return "(max-width: 768px) 100vw, 50vw";
    if (count === 3) return "(max-width: 768px) 100vw, 33vw";
    return "(max-width: 768px) 100vw, 25vw";
  };

  return (
    <Module
      className={`py-20 md:py-24 ${className}`}
      backgroundImage={backgroundImages.background}
      backgroundImageAlt={sharedMessages.backgroundAlts.programs}
      contentClassName="px-4 md:px-8"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="font-bank-gothic text-3xl md:text-4xl tracking-wide mb-3 text-syrio-white">
              {title}
            </h2>
          </Reveal>
          {subtitle && (
            <Reveal delay={1}>
              <p className="font-bank-gothic text-sm text-syrio-white/60 tracking-wide">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>

        {/* Program Cards */}
        <div className="flex flex-nowrap gap-6 overflow-x-auto snap-x snap-mandatory md:snap-none pb-2 md:pb-0 -mx-4 md:mx-0 px-4 md:px-0">
          {cards.map((card, index) => (
            <Reveal
              key={card.label}
              delay={index + 2}
              distance={40}
              className={`shrink-0 w-full min-w-full snap-center md:min-w-0 ${getCardWidth()} md:snap-none`}
            >
              <UnifiedLink
                href={card.href}
                className="group relative flex flex-col"
              >
                {/* Card Image */}
                <div
                  className={`relative aspect-3/4 ${getAspectRatio()} w-full overflow-hidden`}
                >
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    sizes={getImageSizes()}
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Card Label */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="font-bank-gothic text-sm md:text-base tracking-wider border-b border-transparent group-hover:border-syrio-white transition-colors text-syrio-white">
                    {card.label}
                  </span>
                  <span className="text-lg transition-transform group-hover:translate-x-1 text-syrio-white">
                    →
                  </span>
                </div>
              </UnifiedLink>
            </Reveal>
          ))}
        </div>
      </div>
    </Module>
  );
}
