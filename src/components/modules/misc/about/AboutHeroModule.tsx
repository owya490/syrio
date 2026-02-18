"use client";

import { aboutMessages } from "@/app/about/messages";
import Module from "@/components/modules/Module";
import { animation, tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AboutHeroModule() {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    // Trigger animations on mount (hard page refresh) with a delay for visibility
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const easing = [0.4, 0, 0.2, 1] as const;

  return (
    <Module
      className="min-h-[70vh] flex flex-col items-center justify-center pt-24"
      backgroundImage={backgroundImages.background}
      backgroundImageAlt="About hero background"
      contentClassName="relative z-10 text-center px-4"
    >
      <div ref={containerRef} className="space-y-4">
        <motion.p
          className={`font-bank-gothic text-sm tracking-[${tracking.wider}] text-syrio-white/60 mb-4`}
          initial={false}
          animate={isMounted || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.8,
            ease: easing,
          }}
          style={{ opacity: 0, y: 40 }}
        >
          {aboutMessages.hero.tagline}
        </motion.p>
        <motion.h1
          className="font-bank-gothic text-5xl md:text-7xl tracking-wider mb-6"
          initial={false}
          animate={
            isMounted || isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 60, scale: 0.9 }
          }
          transition={{
            duration: 0.8,
            delay: animation.stagger,
            ease: easing,
          }}
          style={{ opacity: 0, y: 60, scale: 0.9 }}
        >
          {aboutMessages.hero.title}
        </motion.h1>
        <motion.p
          className="font-montserrat text-lg text-syrio-white/80 max-w-2xl mx-auto"
          initial={false}
          animate={isMounted || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.8,
            delay: animation.stagger * 2,
            ease: easing,
          }}
          style={{ opacity: 0, y: 40 }}
        >
          {aboutMessages.hero.description}
        </motion.p>
      </div>
    </Module>
  );
}
