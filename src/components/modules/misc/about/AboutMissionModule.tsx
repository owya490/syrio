"use client";

import { aboutMessages } from "@/app/about/messages";
import Module from "@/components/modules/Module";
import { animation, tracking } from "@/config/design";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AboutMissionModule() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const easing = [0.4, 0, 0.2, 1] as const;

  return (
    <Module className="py-20 bg-syrio-black" contentClassName="px-4 md:px-8">
      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left side - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{
            duration: animation.duration.slow,
            ease: easing,
          }}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src="/MULTIMEDIA ASSETS/2025M2/图片_20260101211321_642_5.jpg"
              alt="Syrio Player"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Right side - Text */}
        <div>
          <motion.p
            className={`font-bank-gothic text-sm tracking-[${tracking.wide}] text-syrio-white/60 mb-2`}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{
              duration: animation.duration.slow,
              delay: animation.stagger,
              ease: easing,
            }}
          >
            {aboutMessages.mission.tagline}
          </motion.p>
          <motion.h2
            className="font-bank-gothic text-4xl md:text-5xl tracking-wider mb-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{
              duration: animation.duration.slow,
              delay: animation.stagger * 2,
              ease: easing,
            }}
          >
            {aboutMessages.mission.title}
            <br />
            {aboutMessages.mission.titleLine2}
          </motion.h2>
          <motion.p
            className="font-montserrat text-syrio-white/80 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: animation.duration.slow,
              delay: animation.stagger * 3,
              ease: easing,
            }}
          >
            {aboutMessages.mission.paragraph1}
          </motion.p>
          <motion.p
            className="font-montserrat text-syrio-white/80 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: animation.duration.slow,
              delay: animation.stagger * 4,
              ease: easing,
            }}
          >
            {aboutMessages.mission.paragraph2}
          </motion.p>
          <motion.div
            className="h-px w-24 bg-syrio-white/30"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{
              duration: animation.duration.normal,
              delay: animation.stagger * 5,
              ease: easing,
            }}
          />
        </div>
      </div>
    </Module>
  );
}
