"use client";

import UnifiedLink from "@/components/elements/Link";
import { animation } from "@/config/design";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Module from "../Module";

interface ContentBlockThreeProps {
  subtitle?: string;
  name: string;
  role: string;
  achievements: string[];
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  backgroundImage?: string;
  // Dynamic Layout Props
  imageScale?: string; // e.g. "scale-110 md:scale-125"
  imageTranslate?: string; // e.g. "translate-y-[-5%] translate-x-[5%]"
  boxPosition?: string; // e.g. "right-0" or custom "right-10"
  boxSize?: string; // e.g. "h-[85%] w-[75%]"
}

export default function ContentBlockThree({
  subtitle,
  name,
  role,
  achievements,
  ctaLabel = "ENQUIRE MORE",
  ctaHref = "#",
  imageSrc,
  backgroundImage,
  imageScale = "scale-110 md:scale-125", // Sensible defaults but overridable
  imageTranslate = "translate-y-[-5%] md:translate-y-[-5%] translate-x-[5%] lg:md:translate-x-[15%]",
  boxPosition = "lg:right-0",
  boxSize = "h-[85%] w-[75%]",
}: ContentBlockThreeProps) {
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

  // Dark Theme, Image Right (Yao Style)
  const bgColorClass = "bg-[#020617]"; // Custom Navy
  const textColor = "text-white";
  const subTextColor = "text-gray-300";
  const borderColor = "border-white";
  const hoverColor = "hover:border-gray-400 hover:text-gray-400";
  const inputBoxColor = "bg-white";

  return (
    <Module
      className={`overflow-visible py-16 md:py-24 ${bgColorClass} ${textColor}`}
      backgroundImage={backgroundImage}
      backgroundComponent={
        backgroundImage ? (
          <div className="absolute inset-0 bg-black/20" />
        ) : undefined
      }
    >
      <div
        ref={containerRef}
        className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-24"
      >
        {/* Text Column (Left) */}
        <motion.div
          className="flex flex-col space-y-8 md:space-y-12 order-2 lg:order-1"
          {...fadeInLeft}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: animation.duration.slow,
              delay: animation.stagger,
              ease: easing,
            }}
          >
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
              {name}
            </h1>
            <h2
              className={`font-montserrat text-3xl md:text-3xl lg:text-4xl font-bold tracking-wider ${textColor}`}
            >
              {role}
            </h2>
          </motion.div>

          <motion.ul
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: animation.duration.slow,
              delay: animation.stagger * 2,
              ease: easing,
            }}
          >
            {achievements.map((item, index) => (
              <motion.li
                key={index}
                className={`font-montserrat text-sm md:text-base font-normal tracking-wide ${subTextColor}`}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{
                  duration: animation.duration.slow,
                  delay: animation.stagger * 2 + index * animation.stagger,
                  ease: easing,
                }}
              >
                {item}
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
                animation.stagger * 3 + achievements.length * animation.stagger,
              ease: easing,
            }}
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
          </motion.div>
        </motion.div>

        {/* Image Column (Right) */}
        <motion.div
          className="relative mx-auto flex w-full max-w-sm md:max-w-md items-center justify-center lg:max-w-full order-1 lg:order-2"
          {...fadeInRight}
        >
          {/* White Background Box */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto ${boxPosition} ${boxSize} -translate-y-1/2 shadow-2xl ${inputBoxColor}`}
          />

          {/* Image */}
          {/* Flex justify-center items-end ensures bottom anchoring */}
          <div
            className={`relative z-20 aspect-[3/4] w-[90%] md:w-[85%] translate-y-[-7%] flex justify-center items-end mx-auto lg:mx-0 ${imageTranslate}`}
          >
            <Image
              src={imageSrc}
              alt={name}
              fill
              className={`object-contain object-bottom origin-bottom ${imageScale}`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </Module>
  );
}
