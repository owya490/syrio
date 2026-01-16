import { homeMessages } from "@/app/messages";
import UnifiedLink from "@/components/elements/Link";
import Module from "@/components/modules/Module";
import { tracking } from "@/config/design";
import { accentImages, backgroundImages, promoImages } from "@/config/images";
import Image from "next/image";

export default function LandingAboutHero() {
  return (
    <Module
      className="py-20 overflow-visible"
      backgroundImage={backgroundImages.background}
      backgroundImageAlt="Background"
      contentClassName="px-4 lg:px-8 max-w-7xl"
      backgroundComponent={
        <div className="absolute top-1/10 -right-13/16 w-[160%] h-[160%] lg:w-[160%] lg:h-[160%] pointer-events-none -rotate-95 scale-y-[-1] z-10">
          <Image
            src={accentImages.goldAccent}
            alt=""
            fill
            className="object-contain opacity-30"
          />
        </div>
      }
    >
      <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-[40%_60%] gap-8 items-center">
        {/* Promo 2026 image - background behind text on mobile, left column on desktop */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-visible lg:relative lg:z-auto lg:pointer-events-auto">
          <div className="relative w-[180vw] h-[180vw] max-w-none aspect-square opacity-80 lg:opacity-100 lg:w-[1200px] lg:h-[1200px] lg:aspect-square lg:-mt-[32vh]">
            <Image
              src={promoImages.promo2026}
              alt="Syrio 2026 Promo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Text content - first on mobile, right column on desktop */}
        <div className="relative z-10 text-left -mt-32 lg:-mt-[16vh] space-y-4 lg:space-y-6 w-full lg:w-auto order-1 lg:order-2 px-4 lg:px-0">
          <p
            className={`font-bank-gothic text-2xl lg:text-5xl tracking-[${tracking.widest}] -ml-4 lg:-ml-14`}
          >
            {homeMessages.about.tagline}
          </p>
          <h2 className="font-geek-trend text-4xl lg:text-7xl font-bold tracking-wider text-center lg:text-left whitespace-nowrap">
            {homeMessages.about.title}
          </h2>
          <p
            className={`font-bank-gothic text-2xl lg:text-5xl tracking-[${tracking.normal}] text-syrio-white text-right -mr-4 lg:text-left lg:ml-28 lg:mr-0`}
          >
            {homeMessages.about.subtitle}
          </p>

          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-10 max-w-2xl mt-64 lg:mt-0">
            {/* Photo - hidden on mobile, visible on desktop */}
            <div className="hidden lg:block relative w-full lg:w-72 shrink-0 py-2 ml-0 lg:-ml-6 aspect-3/4 lg:aspect-auto">
              <div className="relative w-full h-full">
                <Image
                  src={promoImages.tempHomePhoto}
                  alt="Syrio Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-between gap-4">
              {/* Description - hidden on mobile */}
              <p className="hidden lg:block font-archivo text-base text-syrio-white/80 leading-relaxed max-w-md text-justify mx-0 lg:mx-4">
                {homeMessages.about.description}
              </p>

              {/* Button - visible on mobile and desktop */}
              <UnifiedLink
                href="/about-us"
                className="group font-montserrat tracking-wider text-lg hover:text-syrio-white transition-colors mx-0 lg:mx-4 self-center lg:self-start mt-24 lg:mt-0"
              >
                <span className="border-b border-transparent group-hover:border-current pb-px">
                  {homeMessages.about.cta} <span className="text-3xl">→</span>
                </span>
              </UnifiedLink>
            </div>
          </div>
        </div>
      </div>
    </Module>
  );
}
