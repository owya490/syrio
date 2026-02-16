"use client";

import UnifiedLink from "@/components/elements/Link";
import { animation } from "@/config/design";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
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
  ctaLabel = "LEARN MORE",
  ctaHref = "#",
  images,
  backgroundImage,
  secondaryImagePosition = "center center",
}: ContentBlockTwoProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const easing = [0.4, 0, 0.2, 1] as const;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: animation.duration.slow, ease: easing },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
    transition: {
      duration: animation.duration.slow,
      delay: animation.stagger,
      ease: easing,
    },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 },
    transition: {
      duration: animation.duration.slow,
      delay: animation.stagger * 2,
      ease: easing,
    },
  };

  return (
    <Module
      className="bg-black py-16 md:py-24 text-white"
      backgroundImage={backgroundImage}
      backgroundImageClassName="object-cover opacity-100"
      backgroundComponent={
        backgroundImage ? <div className="absolute inset-0" /> : undefined
      }
    >
      <div
        ref={containerRef}
        className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8"
      >
        {/* Left Column: Text + Vertical Image */}
        <div className="flex flex-col justify-between space-y-8 lg:col-span-4 lg:space-y-16 order-2 lg:order-1">
          {/* Text Content */}
          <motion.div className="space-y-6" {...fadeInUp}>
            <motion.p
              className="font-montserrat text-xs md:text-sm font-medium leading-relaxed tracking-wide text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: animation.duration.slow,
                delay: animation.stagger,
                ease: easing,
              }}
            >
              {description}
            </motion.p>

            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: animation.duration.slow,
                delay: animation.stagger * 2,
                ease: easing,
              }}
            >
              <UnifiedLink
                href={ctaHref}
                className="group inline-flex items-center gap-2 border-b-2 border-white pb-1 font-bank-gothic text-base md:text-lg font-medium uppercase tracking-wider text-white transition-colors hover:border-gray-400 hover:text-gray-400"
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
            </motion.div>
          </motion.div>

          {/* Vertical Image (Secondary) - centered in column; crop via secondaryImagePosition (CSS var so img gets it) */}
          <motion.div
            className="content-block-two-secondary relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/10 shadow-2xl lg:w-4/5 lg:mx-auto hidden md:block"
            style={{
              ["--secondary-object-position" as string]: secondaryImagePosition,
            }}
            {...fadeInLeft}
          >
            <Image
              src={images.secondary}
              alt="Secondary Visual"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        </div>

        {/* Right Column: Large Landscape Image (Primary) */}
        <motion.div
          className="flex md:pt-20 items-start lg:col-span-8 lg:pl-6 order-1 lg:order-2 -mt-8 lg:-mt-12"
          {...fadeInRight}
        >
          <div className="relative aspect-[4/2] w-full overflow-hidden rounded-sm border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
            <Image
              src={images.primary}
              alt="Primary Visual"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
        </motion.div>

        {/* Mobile only: Show secondary image below everything if needed, or hide it to save space? 
            Currently hiding on mobile (hidden md:block above) to avoid clutter, as the primary image is strong enough.
            If you want it on mobile, we can add it back here or remove the 'hidden'. 
            I'll keep it hidden on very small screens for now to focus on the content.
        */}
        <motion.div
          className="block md:hidden order-3 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: animation.duration.slow,
            delay: animation.stagger * 3,
            ease: easing,
          }}
        >
          <div
            className="content-block-two-secondary relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/10 shadow-2xl"
            style={{
              ["--secondary-object-position" as string]: secondaryImagePosition,
            }}
          >
            <Image
              src={images.secondary}
              alt="Secondary Visual"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </motion.div>
      </div>
    </Module>
  );
}
