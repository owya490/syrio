"use client";

import { historyMessages } from "@/app/history/messages";
import Module from "@/components/modules/Module";
import { tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import { sharedMessages } from "@/config/messages";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineSection {
  heading: string;
  description?: string;
  items?: string[];
}

interface TimelineEntry {
  year: string;
  title: string;
  paragraphs: string[];
  heading?: string;
  items?: string[];
  sections?: TimelineSection[];
  closing?: string;
}

function TimelineCard({ entry, index }: { entry: TimelineEntry; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className="relative pl-8 md:pl-16 pb-16 last:pb-0"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-3 h-3 bg-[#e2c87a] rounded-full z-10" />

      {/* Year badge */}
      <div className="mb-4">
        <span className="font-bank-gothic text-[#e2c87a] text-sm tracking-widest">
          {entry.year}
        </span>
      </div>

      {/* Title */}
      <h3 className={`font-bank-gothic text-2xl md:text-3xl tracking-[${tracking.normal}] text-syrio-white mb-6`}>
        {entry.title}
      </h3>

      {/* Paragraphs */}
      <div className="space-y-4 mb-6">
        {entry.paragraphs.map((p, i) => (
          <p key={i} className="font-montserrat text-sm md:text-base text-syrio-white/80 leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      {/* Simple heading + items (e.g. 2023 "SyrioVolley entered:") */}
      {entry.heading && (
        <p className="font-montserrat text-sm md:text-base text-syrio-white font-semibold mb-3">
          {entry.heading}
        </p>
      )}
      {entry.items && (
        <ul className="space-y-2 mb-6 pl-4">
          {entry.items.map((item, i) => (
            <li key={i} className="font-montserrat text-sm md:text-base text-syrio-white/80 leading-relaxed flex items-start gap-3">
              <span className="text-[#e2c87a] mt-1.5 shrink-0">&#9670;</span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Sub-sections (e.g. 2025/2026 with multiple headings) */}
      {entry.sections && (
        <div className="space-y-6 mb-6">
          {entry.sections.map((section, i) => (
            <div key={i}>
              <h4 className="font-bank-gothic text-lg tracking-wider text-syrio-white mb-2">
                {section.heading}
              </h4>
              {section.description && (
                <p className="font-montserrat text-sm md:text-base text-syrio-white/80 leading-relaxed">
                  {section.description}
                </p>
              )}
              {section.items && (
                <ul className="space-y-2 pl-4 mt-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="font-montserrat text-sm md:text-base text-syrio-white/80 leading-relaxed flex items-start gap-3">
                      <span className="text-[#e2c87a] mt-1.5 shrink-0">&#9670;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Closing paragraph */}
      {entry.closing && (
        <p className="font-montserrat text-sm md:text-base text-syrio-white/80 leading-relaxed italic border-l-2 border-[#e2c87a]/40 pl-4">
          {entry.closing}
        </p>
      )}
    </motion.div>
  );
}

export default function HistoryTimelineModule() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  const whoWeAreRef = useRef(null);
  const whoWeAreInView = useInView(whoWeAreRef, { once: true, amount: 0.2 });

  const { hero, timeline, whoWeAre } = historyMessages;

  return (
    <>
      {/* Timeline */}
      <Module
        className="py-20"
        backgroundImage={backgroundImages.background}
        backgroundImageAlt={sharedMessages.backgroundAlts.timeline}
        contentClassName="px-4 md:px-8"
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            ref={headerRef}
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className={`font-bank-gothic text-sm tracking-[${tracking.wide}] text-syrio-white/60 mb-2`}>
              {hero.tagline}
            </p>
            <h2 className="font-bank-gothic text-4xl md:text-5xl tracking-wider mb-4">
              {hero.title}
            </h2>
            <p className="font-montserrat text-base md:text-lg text-[#e2c87a] tracking-wide">
              {hero.subtitle}
            </p>
          </motion.div>

          {/* Timeline entries */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[5px] top-0 bottom-0 w-px bg-syrio-white/20" />

            {timeline.map((entry, index) => (
              <TimelineCard key={entry.year} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </Module>

      {/* Who We Are Today */}
      <Module
        className="py-20 bg-syrio-black border-t border-syrio-blue/30"
        contentClassName="px-4 md:px-8"
      >
        <motion.div
          ref={whoWeAreRef}
          className="relative z-10 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={whoWeAreInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bank-gothic text-3xl md:text-4xl tracking-wider mb-8">
            {whoWeAre.title}
          </h2>
          <p className="font-montserrat text-sm md:text-base text-syrio-white/80 leading-relaxed mb-8">
            {whoWeAre.description}
          </p>
          <p className="font-montserrat text-sm md:text-base text-syrio-white font-semibold mb-6">
            {whoWeAre.heading}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
            {whoWeAre.values.map((value, i) => (
              <p key={i} className="font-montserrat text-sm text-[#e2c87a] tracking-wide italic">
                {value}
              </p>
            ))}
          </div>
          <div className="h-px w-24 bg-[#e2c87a]/40 mx-auto mb-8" />
          <p className="font-montserrat text-sm md:text-base text-syrio-white/80 leading-relaxed">
            {whoWeAre.closing}
          </p>
        </motion.div>
      </Module>
    </>
  );
}
