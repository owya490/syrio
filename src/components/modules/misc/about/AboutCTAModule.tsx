"use client";

import CTAButton from "@/components/elements/CTAButton";
import Module from "@/components/modules/Module";
import { animation } from "@/config/design";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AboutCTAModuleProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function AboutCTAModule({
  title,
  description,
  buttonText,
  buttonHref,
}: AboutCTAModuleProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const easing = [0.4, 0, 0.2, 1] as const;

  return (
    <Module
      className="py-20 bg-syrio-black border-t border-syrio-blue/30 relative overflow-hidden"
      contentClassName="px-4 md:px-8"
    >
      {/* Animated border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-syrio-blue/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: animation.duration.slow,
          ease: easing,
        }}
        style={{ originX: 0.5 }}
      />

      <div ref={containerRef} className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-bank-gothic text-3xl md:text-4xl tracking-wider mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: animation.duration.slow,
            ease: easing,
          }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="font-montserrat text-syrio-white/80 mb-8 max-w-2xl mx-auto"
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{
            duration: animation.duration.normal,
            delay: animation.stagger * 2,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <CTAButton href={buttonHref}>{buttonText}</CTAButton>
        </motion.div>
      </div>
    </Module>
  );
}
