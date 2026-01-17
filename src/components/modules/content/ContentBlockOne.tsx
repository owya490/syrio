"use client";

import UnifiedLink from "@/components/elements/Link";
import { animation } from "@/config/design";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Module from "../Module";

interface ContentBlockOneProps {
  subtitle: string;
  title: string;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
  images: {
    main: string; // The larger, back image
    secondary: string; // The smaller, front image
  };
}

export default function ContentBlockOne({
  subtitle,
  title,
  features,
  ctaLabel = "LEARN MORE",
  ctaHref = "#",
  images,
}: ContentBlockOneProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const easing = [0.4, 0, 0.2, 1] as const;

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
    transition: {
      duration: animation.duration.slow,
      ease: easing,
    },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 },
    transition: {
      duration: animation.duration.slow,
      delay: animation.stagger,
      ease: easing,
    },
  };

  return (
    <Module
      className="bg-white py-16 md:py-24 text-black"
      data-white-section="true"
    >
      <div
        ref={containerRef}
        className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-24"
      >
        {/* Images Column */}
        <motion.div
          className="relative mx-auto h-80 md:h-96 w-full max-w-lg lg:h-[600px]"
          {...fadeInLeft}
        >
          {/* Main Back Image */}
          <div className="absolute right-0 top-0 h-4/5 w-3/4 rotate-6 transform overflow-hidden rounded-lg shadow-xl transition-transform duration-500 hover:rotate-3">
            <div className="relative h-full w-full bg-gray-200">
              <Image
                src={images.main}
                alt="Main Visual"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 75vw, 33vw"
              />
            </div>
          </div>

          {/* Secondary Front Image */}
          <div className="absolute bottom-8 left-0 z-10 h-1/2 w-3/5 -rotate-3 transform overflow-hidden rounded-lg border-4 border-white shadow-2xl transition-transform duration-500 hover:rotate-0">
            <div className="relative h-full w-full bg-gray-300">
              <Image
                src={images.secondary}
                alt="Secondary Visual"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 60vw, 25vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          className="flex flex-col justify-center space-y-8"
          {...fadeInRight}
        >
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: animation.duration.slow,
              delay: animation.stagger * 2,
              ease: easing,
            }}
          >
            {/* Overline */}
            <h3 className="font-bank-gothic text-lg md:text-xl font-medium uppercase tracking-widest text-gray-800">
              {subtitle}
            </h3>
            {/* Headline */}
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold uppercase tracking-wider text-black lg:text-5xl xl:text-6xl">
              {title}
            </h2>
          </motion.div>

          <motion.ul
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: animation.duration.slow,
              delay: animation.stagger * 3,
              ease: easing,
            }}
          >
            {/* Subhead */}
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="font-montserrat text-sm md:text-base font-bold tracking-wide text-gray-800"
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{
                  duration: animation.duration.slow,
                  delay: animation.stagger * 3 + index * animation.stagger,
                  ease: easing,
                }}
              >
                {feature}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: animation.duration.slow,
              delay:
                animation.stagger * 4 + features.length * animation.stagger,
              ease: easing,
            }}
          >
            <UnifiedLink
              href={ctaHref}
              className="group inline-flex items-center gap-2 border-b-2 border-black pb-1 font-bank-gothic text-base md:text-lg font-medium uppercase tracking-wider text-black transition-colors hover:border-gray-600 hover:text-gray-600"
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
      </div>
    </Module>
  );
}
