"use client";

import { DecorativeLines } from "@/components/decorative";
import Module from "@/components/modules/Module";
import { tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import Image from "next/image";
import Link from "next/link";

export default function SVLJoinPage() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      {/* Welcome Section - "WELCOME TO SYRIO REP" */}
      <section className="relative py-12 md:py-16 lg:py-20 min-h-[80vh] md:min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_HIGHP2.png"
            alt="SYRIO REP Welcome"
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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* Icon */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-4xl md:max-w-5xl lg:max-w-6xl aspect-square">
              <Image
                src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_HIGHP2_ICON_HIGHP2.png"
                alt="SYRIO REP Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

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
            <Link
              href="/competition/svl"
              className={`inline-block font-bank-gothic text-2xl md:text-3xl lg:text-4xl tracking-[${tracking.normal}] text-syrio-white uppercase hover:text-syrio-pink transition-colors duration-300`}
            >
              DIRECT TO TEAM PAGE
            </Link>
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
