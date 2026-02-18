"use client";

import { aboutMessages } from "@/app/about/messages";
import CTAButton from "@/components/elements/CTAButton";
import Module from "@/components/modules/Module";
import { animation, tracking } from "@/config/design";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutMeetTeamModule() {
  const { team } = aboutMessages;
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

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
      className="py-20 bg-syrio-black border-t border-syrio-blue/30"
      contentClassName="px-4 md:px-8"
    >
      <div
        ref={containerRef}
        className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center"
      >
        {/* Left - Description and link */}
        <div className="order-2 md:order-1 md:pl-6">
          <motion.p
            className={`font-bank-gothic text-sm tracking-[${tracking.wide}] text-syrio-white/60 mb-2`}
            initial={false}
            animate={isMounted || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.8,
              ease: easing,
            }}
            style={{ opacity: 0, y: 40 }}
          >
            {team.tagline}
          </motion.p>
          <motion.h2
            className="font-bank-gothic text-4xl md:text-5xl tracking-wider mb-6"
            initial={false}
            animate={isMounted || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.8,
              delay: animation.stagger,
              ease: easing,
            }}
            style={{ opacity: 0, y: 40 }}
          >
            {team.title}
          </motion.h2>
          <motion.p
            className="font-montserrat text-syrio-white/80 leading-relaxed mb-8"
            initial={false}
            animate={isMounted || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.8,
              delay: animation.stagger * 2,
              ease: easing,
            }}
            style={{ opacity: 0, y: 40 }}
          >
            {team.description}
          </motion.p>
          <motion.div
            className="h-px w-24 bg-syrio-white/30 mb-8"
            initial={false}
            animate={isMounted || isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{
              duration: 0.8,
              delay: animation.stagger * 3,
              ease: easing,
            }}
            style={{ opacity: 0, scaleX: 0 }}
          />
          <motion.div
            initial={false}
            animate={isMounted || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.8,
              delay: animation.stagger * 4,
              ease: easing,
            }}
            style={{ opacity: 0, y: 40 }}
          >
            <CTAButton href={team.linkHref}>{team.linkText}</CTAButton>
          </motion.div>
        </div>

        {/* Right - Coaches photo */}
        <motion.div
          className="order-1 md:order-2 relative w-full aspect-[3/4] max-w-xs md:max-w-[280px] mx-auto md:ml-auto overflow-hidden"
          initial={false}
          animate={isMounted || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{
            duration: 0.8,
            delay: animation.stagger,
            ease: easing,
          }}
          style={{ opacity: 0, x: 60 }}
        >
          <Image
            src={team.image}
            alt="Syrio coaching team"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 280px"
          />
        </motion.div>
      </div>
    </Module>
  );
}
