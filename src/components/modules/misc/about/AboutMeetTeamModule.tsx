"use client";

import { aboutMessages } from "@/app/about/messages";
import { Reveal } from "@/components/animation";
import CTAButton from "@/components/elements/CTAButton";
import Module from "@/components/modules/Module";
import { tracking } from "@/config/design";
import Image from "next/image";

export default function AboutMeetTeamModule() {
  const { team } = aboutMessages;

  return (
    <Module
      className="py-20 bg-syrio-black border-t border-syrio-blue/30"
      contentClassName="px-4 md:px-8"
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-12">
        {/* Text content */}
        <Reveal
          direction="none"
          duration={0.6}
          className="max-w-2xl mx-auto text-center"
        >
          <p className={`font-bank-gothic text-sm tracking-[${tracking.wide}] text-syrio-white/60 mb-2`}>
            {team.tagline}
          </p>
          <h2 className="font-bank-gothic text-4xl md:text-5xl tracking-wider mb-6">
            {team.title}
          </h2>
          <p className="font-montserrat text-syrio-white/80 leading-relaxed mb-8">
            {team.description}
          </p>
          <div className="h-px w-24 bg-syrio-white/30 mb-8 mx-auto" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={team.coachesLinkHref} className="flex-1 text-center">{team.coachesLinkText}</CTAButton>
            <CTAButton href={team.managementLinkHref} className="flex-1 text-center">{team.managementLinkText}</CTAButton>
          </div>
        </Reveal>

        {/* Team photo */}
        <Reveal
          direction="none"
          delay={2}
          duration={0.6}
          className="relative w-full aspect-3/2 overflow-hidden rounded-sm border border-white/10 shadow-2xl"
        >
          <Image
            src={team.image}
            alt={aboutMessages.team.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
          />
        </Reveal>
      </div>
    </Module>
  );
}
