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
        <div className="absolute top-1/10 -right-13/16 w-[160%] h-[160%] pointer-events-none -rotate-95 scale-y-[-1] z-20">
          <Image
            src={accentImages.goldAccent}
            alt=""
            fill
            className="object-contain opacity-30"
          />
        </div>
      }
    >
      <div className="relative z-10 grid md:grid-cols-[40%_60%] gap-8 items-center">
        {/* Left side - Promo image - pulled up into hero */}
        <div className="relative -mt-[32vh] -ml-75">
          <div className="relative w-[1200px] h-[1200px]">
            <Image
              src={promoImages.promo2026}
              alt="Syrio 2026 Promo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="text-left -mt-[16vh] space-y-6 ">
          <p
            className={`font-bank-gothic text-5xl tracking-[${tracking.widest}] -ml-14`}
          >
            {homeMessages.about.tagline}
          </p>
          <h2 className="font-geek-trend text-7xl md:text-7xl font-bold tracking-wider">
            {homeMessages.about.title}
          </h2>
          <p
            className={`font-bank-gothic text-5xl tracking-[${tracking.normal}] text-syrio-white ml-28`}
          >
            {homeMessages.about.subtitle}
          </p>

          <div className="flex items-stretch gap-10 max-w-2xl">
            {/* Photo */}
            <div className="relative w-72 shrink-0 py-2 -ml-6">
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
            <div className="flex flex-col justify-between">
              <p className="font-archivo text-base text-syrio-white/80 leading-relaxed max-w-md text-justify mx-4">
                {homeMessages.about.description}
              </p>

              <Link
                href="/about-us"
                className="group font-montserrat tracking-wider text-lg hover:text-syrio-white transition-colors mx-4"
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
