import { homeMessages } from "@/app/messages";
import Module from "@/components/modules/Module";
import { tracking } from "@/config/design";
import { accentImages, backgroundImages, promoImages } from "@/config/images";
import Image from "next/image";
import Link from "next/link";

export default function LandingAboutHero() {
  return (
    <Module
      className="py-20 overflow-visible"
      backgroundImage={backgroundImages.background}
      backgroundImageAlt="Background"
      contentClassName="px-4 md:px-8 max-w-7xl"
      backgroundComponent={
        <div className="absolute top-1/10 -right-13/16 w-[160%] h-[160%] md:w-[160%] md:h-[160%] pointer-events-none -rotate-95 scale-y-[-1] z-10">
          <Image
            src={accentImages.goldAccent}
            alt=""
            fill
            className="object-contain opacity-30"
          />
        </div>
      }
    >
      <div className="relative z-10 flex flex-col md:grid md:grid-cols-[40%_60%] gap-8 items-center">
        {/* Promo 2026 image - background behind text on mobile, left column on desktop */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-visible md:relative md:z-auto md:pointer-events-auto">
          <div className="relative w-[180vw] h-[180vw] max-w-none aspect-square opacity-80 md:opacity-100 md:w-[1200px] md:h-[1200px] md:aspect-square md:-mt-[32vh]">
            <Image
              src={promoImages.promo2026}
              alt="Syrio 2026 Promo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Text content - first on mobile, right column on desktop */}
        <div className="relative z-10 text-left -mt-32 md:-mt-[16vh] space-y-4 md:space-y-6 w-full md:w-auto order-1 md:order-2 px-4 md:px-0">
          <p
            className={`font-bank-gothic text-2xl md:text-5xl tracking-[${tracking.widest}] -ml-4 md:-ml-14`}
          >
            {homeMessages.about.tagline}
          </p>
          <h2 className="font-geek-trend text-4xl md:text-7xl font-bold tracking-wider text-center md:text-left whitespace-nowrap">
            {homeMessages.about.title}
          </h2>
          <p
            className={`font-bank-gothic text-2xl md:text-5xl tracking-[${tracking.normal}] text-syrio-white text-right -mr-4 md:text-left md:ml-28 md:mr-0`}
          >
            {homeMessages.about.subtitle}
          </p>

          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10 max-w-2xl mt-64 md:mt-0">
            {/* Photo - hidden on mobile, visible on desktop */}
            <div className="hidden md:block relative w-full md:w-72 shrink-0 py-2 ml-0 md:-ml-6 aspect-3/4 md:aspect-auto">
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
              <p className="hidden md:block font-archivo text-base text-syrio-white/80 leading-relaxed max-w-md text-justify mx-0 md:mx-4">
                {homeMessages.about.description}
              </p>

              {/* Button - visible on mobile and desktop */}
              <Link
                href="/about-us"
                className="group font-montserrat tracking-wider text-lg hover:text-syrio-white transition-colors mx-0 md:mx-4 self-center md:self-start mt-24 md:mt-0"
              >
                <span className="border-b border-transparent group-hover:border-current pb-px">
                  {homeMessages.about.cta} <span className="text-3xl">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Module>
  );
}
