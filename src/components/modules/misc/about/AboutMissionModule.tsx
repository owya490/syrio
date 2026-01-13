import { aboutMessages } from "@/app/about/messages";
import Module from "@/components/modules/Module";
import { tracking } from "@/config/design";
import Image from "next/image";

export default function AboutMissionModule() {
  return (
    <Module className="py-20 bg-syrio-black" contentClassName="px-4 md:px-8">
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className="relative">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src="/MULTIMEDIA ASSETS/2025M2/图片_20260101211321_642_5.jpg"
              alt="Syrio Player"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right side - Text */}
        <div>
          <p
            className={`font-bank-gothic text-sm tracking-[${tracking.wide}] text-syrio-white/60 mb-2`}
          >
            {aboutMessages.mission.tagline}
          </p>
          <h2 className="font-bank-gothic text-4xl md:text-5xl tracking-wider mb-6">
            {aboutMessages.mission.title}
            <br />
            {aboutMessages.mission.titleLine2}
          </h2>
          <p className="font-montserrat text-syrio-white/80 leading-relaxed mb-6">
            {aboutMessages.mission.paragraph1}
          </p>
          <p className="font-montserrat text-syrio-white/80 leading-relaxed mb-6">
            {aboutMessages.mission.paragraph2}
          </p>
          <div className="h-px w-24 bg-syrio-white/30" />
        </div>
      </div>
    </Module>
  );
}
