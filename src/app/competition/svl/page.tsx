"use client";

import { DecorativeLines } from "@/components/decorative";
import UnifiedLink from "@/components/elements/Link";
import Module from "@/components/modules/Module";
import Text from "@/components/typography/Text";
import { tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import Image from "next/image";

export default function SVLPage() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      {/* VNSW Info Section - With Background Image */}
      <section className="relative py-8 md:py-12 min-h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImages.svl}
            alt="SVL Background"
            fill
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
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative w-full max-w-7xl aspect-[16/2.7] overflow-hidden">
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
            </div>
          </div>

          {/* Description Text */}
          <div className="text-center space-y-4 mb-6 md:mb-8 max-w-full md:max-w-3xl lg:max-w-4xl mx-auto px-4 md:px-0">
            <Text
              size="base"
              className="text-syrio-white/80 font-archivo text-sm md:text-base leading-relaxed"
            >
              Sydney Volleyball League (SVL) is the senior indoor club
              volleyball competition in New South Wales, organised by Volleyball
              NSW. It runs as a multi-week competitive competition where club
              teams compete in graded divisions during the indoor season
              (typically April-August) at Sydney Olympic Park.
            </Text>
            <Text
              size="base"
              className="text-syrio-white/80 font-archivo text-sm md:text-base leading-relaxed"
            >
              Youth Sydney Volleyball League (YSVL) is the youth indoor
              volleyball competition for athletes aged under 18, also organised
              by Volleyball NSW. It provides structured weekly youth matches
              through divisions by age group.
            </Text>
            <Text
              size="base"
              className="text-syrio-white/80 font-archivo text-sm md:text-base leading-relaxed"
            >
              Together, SVL and YSVL form the core competitive indoor volleyball
              experience for clubs, players, coaches, and officials across the
              state.
              <br />
              More detail information please visit VNSW official website below.
            </Text>
          </div>

          {/* VNSW SVL/YSVL Button - Bottom part of image asset */}
          <div className="flex justify-center mt-6 md:mt-8">
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
          </div>

          {/* Representative Team Section */}
          <div className="mt-16 text-center">
            <h3
              className={`font-bank-gothic text-lg md:text-xl tracking-[${tracking.normal}] text-syrio-white uppercase`}
            >
              Participates in Syrio SVL
              <br />
              Representative Team
            </h3>
          </div>
        </div>
      </section>

      {/* "GOT WHAT IT TAKES?" Section with Image Asset */}
      <Module className="py-0 bg-syrio-black" contentClassName="px-0">
        <div className="w-full">
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
        </div>
      </Module>
    </main>
  );
}
