"use client";

import UnifiedLink from "@/components/elements/Link";
import SVLJoinLandingHero from "@/components/modules/hero/SVLJoinLandingHero";
import Module from "@/components/modules/Module";
import { tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import Image from "next/image";

export default function SVLJoinPage() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      <SVLJoinLandingHero />

      {/* Categories Section - WOMEN, MEN, YOUTH */}
      <Module className="py-0 bg-syrio-black" contentClassName="px-0">
        <div className="w-full">
          <Image
            src={backgroundImages.highPerformance3}
            alt="Women, Men, Youth Categories"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </Module>

      {/* Navigation Section - DIRECT TO TEAM PAGE and FORM APPLICATION */}
      <Module className="py-16 md:py-24 bg-syrio-black">
        <div className="text-center space-y-8">
          {/* Direct to Team Page */}
          <div>
            <UnifiedLink
              href="/competition/svl"
              className={`inline-block font-bank-gothic text-2xl md:text-3xl lg:text-4xl tracking-[${tracking.normal}] text-syrio-white uppercase hover:text-syrio-pink transition-colors duration-300`}
            >
              DIRECT TO TEAM PAGE
            </UnifiedLink>
          </div>

          {/* Form Application */}
          <div className="space-y-2">
            <div
              className={`font-bank-gothic text-xl md:text-2xl lg:text-3xl tracking-[${tracking.normal}] text-syrio-white uppercase`}
            >
              FORM APPLICATION
            </div>
            <div
              className={`font-bank-gothic text-lg md:text-xl lg:text-2xl tracking-[${tracking.normal}] text-syrio-white/80 uppercase`}
            >
              INVITATION ONLY
            </div>
          </div>
        </div>
      </Module>
    </main>
  );
}
