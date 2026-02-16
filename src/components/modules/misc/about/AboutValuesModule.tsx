"use client";

import { aboutMessages } from "@/app/about/messages";
import Module from "@/components/modules/Module";
import { animation, tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    title: aboutMessages.values.excellence.title,
    description: aboutMessages.values.excellence.description,
  },
  {
    title: aboutMessages.values.community.title,
    description: aboutMessages.values.community.description,
  },
  {
    title: aboutMessages.values.growth.title,
    description: aboutMessages.values.growth.description,
  },
];

export default function AboutValuesModule() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const easing = [0.4, 0, 0.2, 1] as const;

  return (
    <Module
      className="py-20"
      backgroundImage={backgroundImages.background}
      backgroundImageAlt="Values background"
      backgroundImageClassName="object-cover opacity-50"
      contentClassName="px-4 md:px-8"
    >
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto">
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
            {aboutMessages.values.tagline}
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
            {aboutMessages.values.title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="border-l-4 border-syrio-white/30 pl-6 group hover:border-syrio-white/60 transition-colors duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: animation.duration.slow,
                delay: animation.stagger * (index + 2),
                ease: easing,
              }}
            >
              <motion.div
                className="h-1 w-0 bg-syrio-white/30 group-hover:w-full transition-all duration-500 -ml-6 mb-4"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{
                  duration: animation.duration.slow,
                  delay: animation.stagger * (index + 2) + 0.2,
                  ease: easing,
                }}
              />
              <h3 className="font-bank-gothic text-2xl tracking-wider mb-4">
                {value.title}
              </h3>
              <p className="font-montserrat text-syrio-white/80 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Module>
  );
}
