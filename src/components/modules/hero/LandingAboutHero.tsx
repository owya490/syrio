"use client";

import { homeMessages } from "@/app/messages";
import UnifiedLink from "@/components/elements/Link";
import Module from "@/components/modules/Module";
import { animation, tracking } from "@/config/design";
import { accentImages, backgroundImages, promoImages } from "@/config/images";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function LandingAboutHero() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const easing = [0.4, 0, 0.2, 1] as const;

  return (
    <Module
      className="py-20 overflow-visible"
      backgroundImage={backgroundImages.background}
      backgroundImageAlt="Background"
      contentClassName="px-4 lg:px-8 max-w-7xl"
      backgroundComponent={
        <div className="absolute top-1/10 -right-13/16 w-[160%] h-[160%] lg:w-[160%] lg:h-[160%] pointer-events-none -rotate-95 scale-y-[-1] z-10">
          <Image
            src={accentImages.goldAccent}
            alt=""
            fill
            className="object-contain opacity-30"
          />
        </div>
      }
    >
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col lg:grid lg:grid-cols-[40%_60%] gap-8 items-center"
      >
        {/* Promo 2026 image - background behind text on mobile, left column on desktop */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-visible lg:relative lg:z-auto lg:pointer-events-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{
            duration: animation.duration.slow,
            ease: easing,
          }}
        >
          <div className="relative w-[180vw] h-[180vw] max-w-none aspect-square opacity-80 lg:opacity-100 lg:w-[1200px] lg:h-[1200px] lg:aspect-square lg:-mt-[32vh]">
            <Image
              src={promoImages.promo2026}
              alt="Syrio 2026 Promo"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Text content - first on mobile, right column on desktop */}
        <div className="relative z-10 text-left -mt-32 lg:-mt-[16vh] space-y-4 lg:space-y-6 w-full lg:w-auto order-1 lg:order-2 px-4 lg:px-0">
          <motion.p
            className={`font-bank-gothic text-2xl lg:text-5xl tracking-[${tracking.widest}] -ml-4 lg:-ml-14`}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{
              duration: animation.duration.slow,
              delay: animation.stagger,
              ease: easing,
            }}
          >
            {homeMessages.about.tagline}
          </motion.p>
          <motion.h2
            className="font-geek-trend text-4xl lg:text-7xl font-bold tracking-wider text-center lg:text-left whitespace-nowrap"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: animation.duration.slow,
              delay: animation.stagger * 2,
              ease: easing,
            }}
          >
            {homeMessages.about.title}
          </motion.h2>
          <motion.p
            className={`font-bank-gothic text-2xl lg:text-5xl tracking-[${tracking.normal}] text-syrio-white text-right -mr-4 lg:text-left lg:ml-28 lg:mr-0`}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{
              duration: animation.duration.slow,
              delay: animation.stagger * 3,
              ease: easing,
            }}
          >
            {homeMessages.about.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-10 max-w-2xl mt-64 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: animation.duration.slow,
              delay: animation.stagger * 4,
              ease: easing,
            }}
          >
            {/* Photo - hidden on mobile, visible on desktop */}
            <motion.div
              className="hidden lg:block relative w-full lg:w-72 shrink-0 py-2 ml-0 lg:-ml-6 aspect-3/4 lg:aspect-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{
                duration: animation.duration.slow,
                delay: animation.stagger * 5,
                ease: easing,
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={promoImages.tempHomePhoto}
                  alt="Syrio Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Text content */}
            <div className="flex flex-col justify-between gap-4">
              {/* Description - hidden on mobile */}
              <motion.p
                className="hidden lg:block font-archivo text-base text-syrio-white/80 leading-relaxed max-w-md text-justify mx-0 lg:mx-4"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: animation.duration.slow,
                  delay: animation.stagger * 5,
                  ease: easing,
                }}
              >
                {homeMessages.about.description}
              </motion.p>

              {/* Button - visible on mobile and desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: animation.duration.slow,
                  delay: animation.stagger * 6,
                  ease: easing,
                }}
              >
                <UnifiedLink
                  href="/about-us"
                  className="group font-montserrat tracking-wider text-lg hover:text-syrio-white transition-colors mx-0 lg:mx-4 self-center lg:self-start mt-24 lg:mt-0"
                >
                  <span className="border-b border-transparent group-hover:border-current pb-px">
                    {homeMessages.about.cta} <span className="text-3xl">→</span>
                  </span>
                </UnifiedLink>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Module>
  );
}
