"use client";

import { aboutMessages } from "@/app/about/messages";
import { Reveal, useReveal } from "@/components/animation";
import Module from "@/components/modules/Module";
import { animation, tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import { sharedMessages } from "@/config/messages";
import { motion } from "framer-motion";

const EASING = [0.4, 0, 0.2, 1] as const;

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
  const { ref, isInView } = useReveal({ hero: true });

  return (
    <Module
      className="py-20"
      backgroundImage={backgroundImages.background}
      backgroundImageAlt={sharedMessages.backgroundAlts.timeline}
      contentClassName="px-4 md:px-8"
    >
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Reveal hero distance={40} duration={0.8}>
            <p
              className={`font-bank-gothic text-sm tracking-[${tracking.wide}] text-syrio-white/60 mb-2`}
            >
              {aboutMessages.timeline.tagline}
            </p>
          </Reveal>
          <Reveal hero delay={1} distance={40} duration={0.8}>
            <h2 className="font-bank-gothic text-4xl md:text-5xl tracking-wider">
              {aboutMessages.timeline.title}
            </h2>
          </Reveal>
        </div>

        {/* Timeline items */}
        <div className="space-y-12 relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-3 top-0 bottom-0 w-0.5 bg-syrio-white/20 hidden md:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: animation.duration.slow * 2,
              delay: animation.stagger * 2,
              ease: EASING,
            }}
            style={{ originY: 0 }}
          />

          {timelineItems.map((item, index) => (
            <Reveal
              key={item.year}
              hero
              direction="left"
              delay={index + 2}
              distance={50}
              duration={0.8}
              className="flex gap-6 items-start"
            >
              {/* Dot column */}
              <div className="shrink-0 w-6 hidden md:flex items-start justify-center pt-2">
                <motion.div
                  className="w-3 h-3 bg-syrio-white/60 rounded-full"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: animation.duration.normal,
                    delay: animation.stagger * (index + 2) + 0.2,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                />
              </div>
              <motion.div
                className="font-bank-gothic text-3xl text-syrio-white/60 w-24 shrink-0 leading-none -mt-1"
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
            </Reveal>
          ))}
        </div>
      </div>
    </Module>
  );
}
