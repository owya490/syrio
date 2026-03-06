"use client";

import { Reveal } from "@/components/animation";
import CTAButton from "@/components/elements/CTAButton";
import Module from "@/components/modules/Module";
import { animation } from "@/config/design";

interface AboutCTAModuleProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function AboutCTAModule({
  title,
  description,
  buttonText,
  buttonHref,
}: AboutCTAModuleProps) {
  return (
    <Module
      className="py-20 bg-syrio-black border-t border-syrio-blue/30 relative overflow-hidden"
      contentClassName="px-4 md:px-8"
    >
      {/* Animated border - keep as Reveal with scaleX-like effect via "none" */}
      <Reveal
        direction="none"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-syrio-blue/30 to-transparent"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="font-bank-gothic text-3xl md:text-4xl tracking-wider mb-6">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="font-montserrat text-syrio-white/80 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        </Reveal>
        <Reveal
          direction="scale"
          delay={2}
          duration={animation.duration.normal}
        >
          <CTAButton href={buttonHref}>{buttonText}</CTAButton>
        </Reveal>
      </div>
    </Module>
  );
}
