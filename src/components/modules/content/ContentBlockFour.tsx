"use client";

import ChrisEasterEgg from "@/components/coaching/ChrisEasterEgg";
import UnifiedLink from "@/components/elements/Link";
import { Reveal } from "@/components/animation";
import { sharedMessages } from "@/config/messages";
import Image from "next/image";
import Module from "../Module";

interface ContentBlockFourProps {
  subtitle?: string;
  name: string;
  role: string;
  achievements: string[];
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  // Dynamic Layout Props
  imageScale?: string;
  imageTranslate?: string;
}

export default function ContentBlockFour({
  subtitle,
  name,
  role,
  achievements,
  ctaLabel = sharedMessages.contentBlocks.enquireMore,
  ctaHref = "/contact",
  imageSrc,
  imageScale = "scale-100",
  imageTranslate = "",
}: ContentBlockFourProps) {
  // Light Theme, Image Left (Roger Style)
  const bgColorClass = "bg-white";
  const textColor = "text-black";
  const subTextColor = "text-gray-800";
  const borderColor = "border-black";
  const hoverColor = "hover:border-gray-600 hover:text-gray-600";
  const inputBoxColor = "bg-black";

  return (
    <Module
      className={`overflow-visible py-16 md:py-24 ${bgColorClass} ${textColor}`}
      data-white-section="true"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
        {/* Image Column (Left) — single frame clips image + scale on md+ */}
        <Reveal
          direction="left"
          className="relative mx-auto flex w-full max-w-sm md:max-w-md items-center justify-center lg:max-w-full order-1 lg:order-1"
        >
          <div
            className={`relative mx-auto aspect-[3/4] w-[90%] max-w-md overflow-hidden shadow-2xl md:w-[min(100%,26rem)] ${inputBoxColor}`}
          >
            <div
              className={`absolute inset-0 overflow-hidden ${imageTranslate || "translate-x-0 translate-y-0"}`}
            >
              <Image
                src={imageSrc}
                alt={name}
                fill
                className={`object-contain object-[center_bottom] origin-bottom ${imageScale}`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Reveal>

        {/* Text Column (Right) */}
        <Reveal
          direction="right"
          delay={1}
          className="flex flex-col space-y-8 md:space-y-12 order-2 lg:order-2"
        >
          <Reveal delay={2} className="space-y-4">
            {subtitle && (
              <h3
                className={`font-bank-gothic text-lg md:text-xl font-medium uppercase tracking-widest ${textColor}`}
              >
                {subtitle}
              </h3>
            )}
            <h1
              className={`font-bank-gothic text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-widest ${textColor}`}
            >
              <ChrisEasterEgg
              name={name}
              className={`font-bank-gothic text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-widest ${textColor}`}
            />
            </h1>
            <h2
              className={`font-montserrat text-3xl md:text-3xl lg:text-4xl font-bold tracking-wider ${textColor}`}
            >
              {role}
            </h2>
          </Reveal>

          <Reveal delay={3} className="space-y-4">
            <ul className="space-y-4">
              {achievements.map((item, index) => (
                <Reveal
                  key={index}
                  direction="right"
                  delay={3 + index}
                  distance={20}
                >
                  <li
                    className={`font-montserrat text-sm md:text-base font-normal tracking-wide ${subTextColor}`}
                  >
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={4 + achievements.length}
            className="pt-4"
          >
            <UnifiedLink
              href={ctaHref}
              className={`group inline-flex items-center gap-2 border-b-2 pb-1 font-bank-gothic text-base md:text-lg font-medium uppercase tracking-wider transition-colors ${borderColor} ${textColor} ${hoverColor}`}
            >
              {ctaLabel}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </UnifiedLink>
          </Reveal>
        </Reveal>
      </div>
    </Module>
  );
}
