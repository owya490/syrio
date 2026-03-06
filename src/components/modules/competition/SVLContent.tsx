"use client";

import { svlMessages } from "@/app/competition/svl/messages";
import { DecorativeLines } from "@/components/decorative";
import { Reveal } from "@/components/animation";
import UnifiedLink from "@/components/elements/Link";
import Module from "@/components/modules/Module";
import Text from "@/components/typography/Text";
import { tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import { links } from "@/config/links";
import Image from "next/image";

export default function SVLContent() {
  return (
    <>
      {/* VNSW Info Section - With Background Image */}
      <section className="relative py-8 md:py-12 min-h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImages.svl}
            alt={svlMessages.hero.backgroundAlt}
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
          {/* VNSW Logo */}
          <div className="flex justify-center mb-6 md:mb-8">
            <Reveal hero distance={60} duration={0.8}>
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
            </Reveal>
          </div>

          {/* Description Text */}
          <div className="text-center space-y-4 mb-6 md:mb-8 max-w-full md:max-w-3xl lg:max-w-4xl mx-auto px-4 md:px-0">
            <Reveal hero distance={40} duration={0.8}>
              <Text size="base" className="text-syrio-white/80 font-archivo text-sm md:text-base leading-relaxed">
                {svlMessages.description.paragraph1}
              </Text>
            </Reveal>
            <Reveal hero delay={1} distance={40} duration={0.8}>
              <Text size="base" className="text-syrio-white/80 font-archivo text-sm md:text-base leading-relaxed">
                {svlMessages.description.paragraph2}
              </Text>
            </Reveal>
            <Reveal hero delay={2} distance={40} duration={0.8}>
              <Text size="base" className="text-syrio-white/80 font-archivo text-sm md:text-base leading-relaxed">
                {svlMessages.description.paragraph3}
                <br />
                {svlMessages.description.vnswNote}
              </Text>
            </Reveal>
          </div>

          {/* VNSW SVL/YSVL Button */}
          <div className="flex justify-center mt-6 md:mt-8">
            <Reveal hero distance={60} duration={0.8}>
              <UnifiedLink
                href={links.external.volleyballNSW}
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
            </Reveal>
          </div>

          {/* Representative Team Section */}
          <div className="mt-16 text-center">
            <Reveal hero distance={40} duration={0.8}>
              <h3
                className={`font-bank-gothic text-lg md:text-xl tracking-[${tracking.normal}] text-syrio-white uppercase`}
              >
                {svlMessages.team.titleLine1}
                <br />
                {svlMessages.team.titleLine2}
              </h3>
            </Reveal>
          </div>
        </div>
      </section>

      {/* "GOT WHAT IT TAKES?" Section */}
      <Module className="py-0 bg-syrio-black" contentClassName="px-0">
        <div className="w-full">
          <Reveal hero distance={60} duration={0.8}>
            <UnifiedLink
              href={svlMessages.cta.href}
              className="block hover:opacity-90 transition-opacity duration-300"
            >
              <Image
                src={svlMessages.cta.imageSrc}
                alt={svlMessages.cta.imageAlt}
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </UnifiedLink>
          </Reveal>
        </div>
      </Module>
    </>
  );
}
