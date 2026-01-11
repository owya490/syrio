"use client";

import Module from "@/components/modules/Module";
import { backgroundImages } from "@/config/images";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <Module
      className={`py-20 md:py-24 ${className}`}
      backgroundImage={backgroundImages.background}
      backgroundImageAlt="Programs background"
      contentClassName="px-4 md:px-8"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-bank-gothic text-3xl md:text-4xl tracking-wide mb-3 text-syrio-white">
            {title}
          </h2>
          {subtitle && (
            <p className="font-bank-gothic text-sm text-syrio-white/60 tracking-wide">
              {subtitle}
            </p>
          )}
        </div>

        {/* Program Cards - Equal width for all cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              className="group relative flex flex-col"
            >
              {/* Card Image - fixed aspect ratio, crops any image to fit */}
              <div className="relative aspect-3/4 w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
            </Link>
          ))}
        </div>
      </div>
    </Module>
  );
}
