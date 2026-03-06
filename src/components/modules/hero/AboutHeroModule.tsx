"use client";

import { aboutMessages } from "@/app/about/messages";
import { Reveal } from "@/components/animation";
import Module from "@/components/modules/Module";
import { tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import { sharedMessages } from "@/config/messages";

export default function AboutHeroModule() {
  return (
    <Module
      className="min-h-[70vh] flex flex-col items-center justify-center pt-24"
      backgroundImage={backgroundImages.background}
      backgroundImageAlt={sharedMessages.backgroundAlts.aboutHero}
      contentClassName="relative z-10 text-center px-4"
    >
      <div className="space-y-4">
        <Reveal hero distance={40} duration={0.8}>
          <p
            className={`font-bank-gothic text-sm tracking-[${tracking.wider}] text-syrio-white/60 mb-4`}
          >
            {aboutMessages.hero.tagline}
          </p>
        </Reveal>
        <Reveal hero delay={1} distance={60} duration={0.8}>
          <h1 className="font-bank-gothic text-5xl md:text-7xl tracking-wider mb-6">
            {aboutMessages.hero.title}
          </h1>
        </Reveal>
        <Reveal hero delay={2} distance={40} duration={0.8}>
          <p className="font-montserrat text-lg text-syrio-white/80 max-w-2xl mx-auto">
            {aboutMessages.hero.description}
          </p>
        </Reveal>
      </div>
    </Module>
  );
}
