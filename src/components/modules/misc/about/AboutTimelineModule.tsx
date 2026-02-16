"use client";

import { aboutMessages } from "@/app/about/messages";
import Module from "@/components/modules/Module";
import { animation, tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timelineItems = [
  {
    year: aboutMessages.timeline.year2024.year,
    title: aboutMessages.timeline.year2024.title,
    description: aboutMessages.timeline.year2024.description,
  },
  {
    year: aboutMessages.timeline.year2025.year,
    title: aboutMessages.timeline.year2025.title,
    description: aboutMessages.timeline.year2025.description,
  },
  {
    year: aboutMessages.timeline.year2026.year,
    title: aboutMessages.timeline.year2026.title,
    description: aboutMessages.timeline.year2026.description,
  },
];

export default function AboutTimelineModule() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const easing = [0.4, 0, 0.2, 1] as const;

  return (
    <Module
      className="py-20"
      backgroundImage={backgroundImages.background}
      backgroundImageAlt="Timeline background"
      contentClassName="px-4 md:px-8"
    >
      <div ref={containerRef} className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            className={`font-bank-gothic text-sm tracking-[${tracking.wide}] text-syrio-white/60 mb-2`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: animation.duration.slow,
              ease: easing,
            }}
          >
            {aboutMessages.timeline.tagline}
          </motion.p>
          <motion.h2
            className="font-bank-gothic text-4xl md:text-5xl tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: animation.duration.slow,
              delay: animation.stagger,
              ease: easing,
            }}
          >
            {aboutMessages.timeline.title}
          </motion.h2>
        </div>

        {/* Timeline items */}
        <div className="space-y-12 relative">
          {/* Vertical line connecting timeline items */}
          <motion.div
            className="absolute left-12 top-0 bottom-0 w-0.5 bg-syrio-white/20 hidden md:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: animation.duration.slow * 2,
              delay: animation.stagger * 2,
              ease: easing,
            }}
            style={{ originY: 0 }}
          />

          {timelineItems.map((item, index) => (
            <motion.div
              key={item.year}
              className="flex gap-8 items-start relative"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{
                duration: animation.duration.slow,
                delay: animation.stagger * (index + 2),
                ease: easing,
              }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-12 w-3 h-3 bg-syrio-white/60 rounded-full hidden md:block -translate-x-1/2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  duration: animation.duration.normal,
                  delay: animation.stagger * (index + 2) + 0.2,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              />
              <motion.div
                className="font-bank-gothic text-3xl text-syrio-white/60 w-24 shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{
                  duration: animation.duration.normal,
                  delay: animation.stagger * (index + 2),
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                {item.year}
              </motion.div>
              <div>
                <h3 className="font-bank-gothic text-xl tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="font-montserrat text-syrio-white/80">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Module>
  );
}
