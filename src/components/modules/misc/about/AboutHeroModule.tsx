import { aboutMessages } from "@/app/about/messages";
import Module from "@/components/modules/Module";
import { tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";

export default function AboutHeroModule() {
  return (
    <Module
      className="min-h-[70vh] flex flex-col items-center justify-center pt-24"
      backgroundImage={backgroundImages.background}
      backgroundImageAlt="About hero background"
      contentClassName="relative z-10 text-center px-4"
    >
      <p
        className={`font-bank-gothic text-sm tracking-[${tracking.wider}] text-syrio-white/60 mb-4`}
      >
        {aboutMessages.hero.tagline}
      </p>
      <h1 className="font-bank-gothic text-5xl md:text-7xl tracking-wider mb-6">
        {aboutMessages.hero.title}
      </h1>
      <p className="font-montserrat text-lg text-syrio-white/80 max-w-2xl mx-auto">
        {aboutMessages.hero.description}
      </p>
    </Module>
  );
}
