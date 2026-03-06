"use client";

import UnifiedLink from "@/components/elements/Link";
import { Reveal } from "@/components/animation";
import { sharedMessages } from "@/config/messages";
import Image from "next/image";
import Module from "../Module";

interface ContentBlockTwoProps {
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  images: {
    primary: string; // The large landscape image (Right side)
    secondary: string; // The vertical portrait image (Left side)
  };
  backgroundImage?: string; // New prop for background texture
  /** Shift the secondary image crop. Examples: "center 40%", "center top", "30% center". Default: "center center" */
  secondaryImagePosition?: string;
}

export default function ContentBlockTwo({
  description,
  ctaLabel = sharedMessages.contentBlocks.learnMore,
  ctaHref = "#",
  images,
  backgroundImage,
  secondaryImagePosition = "center center",
}: ContentBlockTwoProps) {
  return (
    <Module
      className="bg-black py-16 md:py-24 text-white"
      backgroundImage={backgroundImage}
      backgroundImageClassName="object-cover opacity-100"
      backgroundComponent={
        backgroundImage ? <div className="absolute inset-0" /> : undefined
      }
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Text + Vertical Image */}
        <div className="flex flex-col justify-start space-y-8 lg:col-span-4 lg:space-y-12 order-2 lg:order-1">
          {/* Text Content */}
          <Reveal className="space-y-6">
            <Reveal delay={1}>
              <p className="font-montserrat text-xs md:text-sm font-medium leading-relaxed tracking-wide text-gray-200">
                {description}
              </p>
            </Reveal>

            <Reveal delay={2} className="pt-2">
              <UnifiedLink
                href={ctaHref}
                className="group inline-flex items-center gap-2 border-b-2 border-white pb-1 font-bank-gothic text-base md:text-lg font-medium uppercase tracking-wider text-white transition-colors hover:border-syrio-gold hover:text-gray-400"
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

          {/* Vertical Image (Secondary) */}
          <Reveal
            direction="left"
            delay={1}
            className="content-block-two-secondary relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/10 shadow-2xl lg:w-4/5 hidden md:block"
            style={{
              ["--secondary-object-position" as string]: secondaryImagePosition,
            }}
          >
            <Image
              src={images.secondary}
              alt={sharedMessages.contentBlocks.secondaryVisualAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </Reveal>
        </div>

        {/* Right Column: Large Landscape Image (Primary) */}
        <Reveal
          direction="right"
          delay={2}
          className="flex items-stretch lg:col-span-8 lg:pl-6 order-1 lg:order-2"
        >
          <div className="relative w-full overflow-hidden rounded-sm border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.01] min-h-[250px]" style={{ willChange: "transform" }}>
            <Image
              src={images.primary}
              alt={sharedMessages.contentBlocks.primaryVisualAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
        </Reveal>

        {/* Mobile secondary image */}
        <Reveal
          delay={3}
          className="block md:hidden order-3 space-y-8"
        >
          <div
            className="content-block-two-secondary relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/10 shadow-2xl"
            style={{
              ["--secondary-object-position" as string]: secondaryImagePosition,
            }}
          >
            <Image
              src={images.secondary}
              alt={sharedMessages.contentBlocks.secondaryVisualAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </Reveal>
      </div>
    </Module>
  );
}
