import { aboutMessages } from "@/app/about/messages";
import Module from "@/components/modules/Module";
import { tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";

export default function AboutValuesModule() {
  return (
    <Module
      className="py-20"
      backgroundImage={backgroundImages.background}
      backgroundImageAlt="Values background"
      backgroundImageClassName="object-cover opacity-50"
      contentClassName="px-4 md:px-8"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className={`font-bank-gothic text-sm tracking-[${tracking.wide}] text-syrio-white/60 mb-2`}
          >
            {aboutMessages.values.tagline}
          </p>
          <h2 className="font-bank-gothic text-4xl md:text-5xl tracking-wider">
            {aboutMessages.values.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="border-l-4 border-syrio-white/30 pl-6">
            <h3 className="font-bank-gothic text-2xl tracking-wider mb-4">
              {aboutMessages.values.excellence.title}
            </h3>
            <p className="font-montserrat text-syrio-white/80 leading-relaxed">
              {aboutMessages.values.excellence.description}
            </p>
          </div>

          {/* Value 2 */}
          <div className="border-l-4 border-syrio-white/30 pl-6">
            <h3 className="font-bank-gothic text-2xl tracking-wider mb-4">
              {aboutMessages.values.community.title}
            </h3>
            <p className="font-montserrat text-syrio-white/80 leading-relaxed">
              {aboutMessages.values.community.description}
            </p>
          </div>

          {/* Value 3 */}
          <div className="border-l-4 border-syrio-white/30 pl-6">
            <h3 className="font-bank-gothic text-2xl tracking-wider mb-4">
              {aboutMessages.values.growth.title}
            </h3>
            <p className="font-montserrat text-syrio-white/80 leading-relaxed">
              {aboutMessages.values.growth.description}
            </p>
          </div>
        </div>
      </div>
    </Module>
  );
}
