"use client";

import { svlMessages } from "@/app/competition/svl/messages";
import { Reveal } from "@/components/animation";
import UnifiedLink from "@/components/elements/Link";
import Module from "@/components/modules/Module";
import SVLJoinLandingHero from "@/components/modules/hero/SVLJoinLandingHero";
import { tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import Image from "next/image";

export default function SVLJoinContent() {
  return (
    <>
      <SVLJoinLandingHero />

      {/* Categories Section - WOMEN, MEN, YOUTH */}
      <Module className="py-0 bg-syrio-black" contentClassName="px-0">
        <div className="w-full">
          <Reveal hero distance={60} duration={0.8}>
            <Image
              src={backgroundImages.highPerformance3}
              alt={svlMessages.join.categoriesImageAlt}
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </Reveal>
        </div>
      </Module>

      {/* Navigation Section */}
      <Module className="py-16 md:py-24 bg-syrio-black">
        <div className="text-center space-y-8">
          <Reveal hero distance={40} duration={0.8}>
            <UnifiedLink
              href={svlMessages.join.teamPageHref}
              className={`inline-block font-bank-gothic text-2xl md:text-3xl lg:text-4xl tracking-[${tracking.normal}] text-syrio-white uppercase hover:text-syrio-pink transition-colors duration-300`}
            >
              {svlMessages.join.teamPageLink}
            </UnifiedLink>
          </Reveal>

          <div className="space-y-2">
            <Reveal hero delay={1} distance={40} duration={0.8}>
              <div
                className={`font-bank-gothic text-xl md:text-2xl lg:text-3xl tracking-[${tracking.normal}] text-syrio-white uppercase`}
              >
                {svlMessages.join.formApplication}
              </div>
            </Reveal>
            <Reveal hero delay={2} distance={40} duration={0.8}>
              <div
                className={`font-bank-gothic text-lg md:text-xl lg:text-2xl tracking-[${tracking.normal}] text-syrio-white/80 uppercase`}
              >
                {svlMessages.join.invitationOnly}
              </div>
            </Reveal>
          </div>
        </div>
      </Module>
    </>
  );
}
