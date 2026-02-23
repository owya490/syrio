"use client";

import { DecorativeLines } from "@/components/decorative";
import UnifiedLink from "@/components/elements/Link";
import Module from "@/components/modules/Module";
import Text from "@/components/typography/Text";
import { animation, tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const easing = [0.4, 0, 0.2, 1] as const;

export default function SVLContent() {
  const heroSectionRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const teamSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);

  const [isMounted, setIsMounted] = useState(false);
  const heroInView = useInView(heroSectionRef, { once: true, amount: 0.2 });
  const descriptionInView = useInView(descriptionRef, { once: true, amount: 0.2 });
  const buttonInView = useInView(buttonRef, { once: true, amount: 0.2 });
  const teamInView = useInView(teamSectionRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaSectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* VNSW Info Section - With Background Image */}
      <section className="relative py-8 md:py-12 min-h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImages.svl}
            alt="SVL Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-syrio-black/70" />
        </div>

        {/* Decorative Lines */}
        <div className="absolute left-0 top-0 bottom-0 w-24 opacity-20">
          <DecorativeLines side="left" preset="fullHeight" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-12">
          {/* VNSW Logo - Top part of image asset */}
          <div ref={heroSectionRef} className="flex justify-center mb-6 md:mb-8">
            <motion.div
              className="relative w-full max-w-7xl aspect-[16/2.7] overflow-hidden"
              initial={false}
              animate={isMounted || heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, ease: easing }}
              style={{ opacity: 0, y: 60 }}
            >
              <div
                className="absolute inset-0 bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_SVL_ICONS_SVL.png')",
                  backgroundPosition: "center top",
                  backgroundSize: "100% auto",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </motion.div>
          </div>

          {/* Description Text */}
          <div
            ref={descriptionRef}
            className="text-center space-y-4 mb-6 md:mb-8 max-w-full md:max-w-3xl lg:max-w-4xl mx-auto px-4 md:px-0"
          >
            <motion.div
              initial={false}
              animate={isMounted || descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: easing }}
              style={{ opacity: 0, y: 40 }}
            >
              <Text size="base" className="text-syrio-white/80 font-archivo text-sm md:text-base leading-relaxed">
                Sydney Volleyball League (SVL) is the senior indoor club
                volleyball competition in New South Wales, organised by Volleyball
                NSW. It runs as a multi-week competitive competition where club
                teams compete in graded divisions during the indoor season
                (typically April-August) at Sydney Olympic Park.
              </Text>
            </motion.div>
            <motion.div
              initial={false}
              animate={isMounted || descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: animation.stagger, ease: easing }}
              style={{ opacity: 0, y: 40 }}
            >
              <Text size="base" className="text-syrio-white/80 font-archivo text-sm md:text-base leading-relaxed">
                Youth Sydney Volleyball League (YSVL) is the youth indoor
                volleyball competition for athletes aged under 18, also organised
                by Volleyball NSW. It provides structured weekly youth matches
                through divisions by age group.
              </Text>
            </motion.div>
            <motion.div
              initial={false}
              animate={isMounted || descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: animation.stagger * 2, ease: easing }}
              style={{ opacity: 0, y: 40 }}
            >
              <Text size="base" className="text-syrio-white/80 font-archivo text-sm md:text-base leading-relaxed">
                Together, SVL and YSVL form the core competitive indoor volleyball
                experience for clubs, players, coaches, and officials across the
                state.
                <br />
                More detail information please visit VNSW official website below.
              </Text>
            </motion.div>
          </div>

          {/* VNSW SVL/YSVL Button - Bottom part of image asset */}
          <div ref={buttonRef} className="flex justify-center mt-6 md:mt-8">
            <motion.div
              initial={false}
              animate={isMounted || buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, ease: easing }}
              style={{ opacity: 0, y: 60 }}
            >
              <UnifiedLink
                href="https://www.volleyballnsw.com.au/"
                className="hover:opacity-90 transition-opacity duration-300 relative w-full max-w-7xl aspect-[16/4] overflow-hidden block"
              >
                <div
                  className="absolute inset-0 bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_SVL_ICONS_SVL.png')",
                    backgroundPosition: "center bottom",
                    backgroundSize: "100% auto",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </UnifiedLink>
            </motion.div>
          </div>

          {/* Representative Team Section */}
          <div ref={teamSectionRef} className="mt-16 text-center">
            <motion.h3
              className={`font-bank-gothic text-lg md:text-xl tracking-[${tracking.normal}] text-syrio-white uppercase`}
              initial={false}
              animate={isMounted || teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: easing }}
              style={{ opacity: 0, y: 40 }}
            >
              Participates in Syrio SVL
              <br />
              Representative Team
            </motion.h3>
          </div>
        </div>
      </section>

      {/* "GOT WHAT IT TAKES?" Section with Image Asset */}
      <Module className="py-0 bg-syrio-black" contentClassName="px-0">
        <div ref={ctaSectionRef} className="w-full">
          <motion.div
            initial={false}
            animate={isMounted || ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, ease: easing }}
            style={{ opacity: 0, y: 60 }}
          >
            <UnifiedLink
              href="/competition/svl/join"
              className="block hover:opacity-90 transition-opacity duration-300"
            >
              <Image
                src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_HIGHP.png"
                alt="Got What It Takes? Join The Team"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </UnifiedLink>
          </motion.div>
        </div>
      </Module>
    </>
  );
}
