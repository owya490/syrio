import { aboutMessages } from "@/app/about/messages";
import Module from "@/components/modules/Module";
import { tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";

export default function AboutTimelineModule() {
  return (
    <Module
      className="py-20"
      backgroundImage={backgroundImages.background}
      backgroundImageAlt="Timeline background"
      contentClassName="px-4 md:px-8"
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p
            className={`font-bank-gothic text-sm tracking-[${tracking.wide}] text-syrio-white/60 mb-2`}
          >
            {aboutMessages.timeline.tagline}
          </p>
          <h2 className="font-bank-gothic text-4xl md:text-5xl tracking-wider">
            {aboutMessages.timeline.title}
          </h2>
        </div>

        {/* Timeline items */}
        <div className="space-y-12">
          <div className="flex gap-8 items-start">
            <div className="font-bank-gothic text-3xl text-syrio-white/60 w-24 shrink-0">
              {aboutMessages.timeline.year2024.year}
            </div>
            <div>
              <h3 className="font-bank-gothic text-xl tracking-wider mb-2">
                {aboutMessages.timeline.year2024.title}
              </h3>
              <p className="font-montserrat text-syrio-white/80">
                {aboutMessages.timeline.year2024.description}
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="font-bank-gothic text-3xl text-syrio-white/60 w-24 shrink-0">
              {aboutMessages.timeline.year2025.year}
            </div>
            <div>
              <h3 className="font-bank-gothic text-xl tracking-wider mb-2">
                {aboutMessages.timeline.year2025.title}
              </h3>
              <p className="font-montserrat text-syrio-white/80">
                {aboutMessages.timeline.year2025.description}
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="font-bank-gothic text-3xl text-syrio-white/60 w-24 shrink-0">
              {aboutMessages.timeline.year2026.year}
            </div>
            <div>
              <h3 className="font-bank-gothic text-xl tracking-wider mb-2">
                {aboutMessages.timeline.year2026.title}
              </h3>
              <p className="font-montserrat text-syrio-white/80">
                {aboutMessages.timeline.year2026.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Module>
  );
}
