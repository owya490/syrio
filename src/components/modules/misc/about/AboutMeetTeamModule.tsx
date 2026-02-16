import { aboutMessages } from "@/app/about/messages";
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
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left - Description and link */}
        <div className="order-2 md:order-1 md:pl-6">
          <p
            className={`font-bank-gothic text-sm tracking-[${tracking.wide}] text-syrio-white/60 mb-2`}
          >
            {team.tagline}
          </p>
          <h2 className="font-bank-gothic text-4xl md:text-5xl tracking-wider mb-6">
            {team.title}
          </h2>
          <p className="font-montserrat text-syrio-white/80 leading-relaxed mb-8">
            {team.description}
          </p>
          <div className="h-px w-24 bg-syrio-white/30 mb-8" />
          <CTAButton href={team.linkHref}>{team.linkText}</CTAButton>
        </div>

        {/* Right - Coaches photo */}
        <div className="order-1 md:order-2 relative w-full aspect-[3/4] max-w-xs md:max-w-[280px] mx-auto md:ml-auto overflow-hidden">
          <Image
            src={team.image}
            alt="Syrio coaching team"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 280px"
          />
        </div>
      </div>
    </Module>
  );
}
