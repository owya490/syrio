"use client";

import UnifiedLink from "@/components/elements/Link";
import Module from "@/components/modules/Module";
import SVLJoinLandingHero from "@/components/modules/hero/SVLJoinLandingHero";
import { animation, tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const easing = [0.4, 0, 0.2, 1] as const;

export default function SVLJoinContent() {
  const imageSectionRef = useRef(null);
  const navigationSectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const imageInView = useInView(imageSectionRef, { once: true, amount: 0.2 });
  const navigationInView = useInView(navigationSectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SVLJoinLandingHero />

      {/* Categories Section - WOMEN, MEN, YOUTH */}
      <Module className="py-0 bg-syrio-black" contentClassName="px-0">
        <div ref={imageSectionRef} className="w-full">
          <motion.div
            initial={false}
            animate={isMounted || imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, ease: easing }}
            style={{ opacity: 0, y: 60 }}
          >
            <Image
              src={backgroundImages.highPerformance3}
              alt="Women, Men, Youth Categories"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </Module>

      {/* Navigation Section - DIRECT TO TEAM PAGE and FORM APPLICATION */}
      <Module className="py-16 md:py-24 bg-syrio-black">
        <div ref={navigationSectionRef} className="text-center space-y-8">
          <motion.div
            initial={false}
            animate={isMounted || navigationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: easing }}
            style={{ opacity: 0, y: 40 }}
          >
            <UnifiedLink
              href="/competition/svl"
              className={`inline-block font-bank-gothic text-2xl md:text-3xl lg:text-4xl tracking-[${tracking.normal}] text-syrio-white uppercase hover:text-syrio-pink transition-colors duration-300`}
            >
              DIRECT TO TEAM PAGE
            </UnifiedLink>
          </motion.div>

          <div className="space-y-2">
            <motion.div
              className={`font-bank-gothic text-xl md:text-2xl lg:text-3xl tracking-[${tracking.normal}] text-syrio-white uppercase`}
              initial={false}
              animate={isMounted || navigationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: animation.stagger, ease: easing }}
              style={{ opacity: 0, y: 40 }}
            >
              FORM APPLICATION
            </motion.div>
            <motion.div
              className={`font-bank-gothic text-lg md:text-xl lg:text-2xl tracking-[${tracking.normal}] text-syrio-white/80 uppercase`}
              initial={false}
              animate={isMounted || navigationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: animation.stagger * 2, ease: easing }}
              style={{ opacity: 0, y: 40 }}
            >
              INVITATION ONLY
            </motion.div>
          </div>
        </div>
      </Module>
    </>
  );
}
