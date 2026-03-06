"use client";

import { aboutMessages } from "@/app/about/messages";
import { Reveal, useReveal } from "@/components/animation";
import Module from "@/components/modules/Module";
import { animation, tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import { sharedMessages } from "@/config/messages";
import { motion } from "framer-motion";

const EASING = [0.4, 0, 0.2, 1] as const;

const values = [
  {
    title: aboutMessages.values.growth.title,
    description: aboutMessages.values.growth.description,
  },
  {
    title: aboutMessages.values.excellence.title,
    description: aboutMessages.values.excellence.description,
  },
  {
    title: aboutMessages.values.community.title,
    description: aboutMessages.values.community.description,
  },
];

export default function AboutValuesModule() {
  const { ref, isInView } = useReveal();

  return (
    <Module
      className="py-20"
      backgroundImage={backgroundImages.background}
      backgroundImageAlt={sharedMessages.backgroundAlts.values}
      backgroundImageClassName="object-cover opacity-50"
      contentClassName="px-4 md:px-8"
    >
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <p
              className={`font-bank-gothic text-sm tracking-[${tracking.wide}] text-syrio-white/60 mb-2`}
            >
              {aboutMessages.values.tagline}
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-bank-gothic text-4xl md:text-5xl tracking-wider">
              {aboutMessages.values.title}
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index + 2}
              distance={40}
              className="border-l-4 border-syrio-white/30 pl-6 group hover:border-syrio-white/60 transition-colors duration-300"
            >
              <motion.div
                className="h-1 w-0 bg-syrio-white/30 group-hover:w-full transition-all duration-500 -ml-6 mb-4"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{
                  duration: animation.duration.slow,
                  delay: animation.stagger * (index + 2) + 0.2,
                  ease: EASING,
                }}
              />
              <h3 className="font-bank-gothic text-2xl tracking-wider mb-4">
                {value.title}
              </h3>
              <p className="font-montserrat text-syrio-white/80 leading-relaxed">
                {value.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Module>
  );
}
