import { SyrioLogo } from "@/components/branding";
import Module from "@/components/modules/Module";
import Image from "next/image";

export default function LandingHero() {
  return (
    <Module
      className="min-h-screen overflow-visible"
      backgroundImage="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_HOME PAGE.png"
      backgroundImageAlt="Team Background"
      backgroundImageClassName="object-cover opacity-40"
      backgroundComponent={
        <div className="absolute -top-1/4 md:-top-1/4 -left-5/12 md:-left-5/12 w-full h-full pointer-events-none -rotate-30">
          <Image
            src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GOLD ACCENT_SHOP 副本.png"
            alt=""
            fill
            priority
            className="object-contain opacity-30"
          />
        </div>
      }
      contentClassName="!px-4 md:!px-8 relative min-h-screen flex items-center justify-center pt-12 pb-32 md:pt-16 md:pb-40 !max-w-none"
    >
      <div className="w-full max-w-full flex justify-center px-2">
        <div className="scale-90 sm:scale-100">
          <SyrioLogo size="lg" className="mt-6" />
        </div>
      </div>
    </Module>
  );
}
