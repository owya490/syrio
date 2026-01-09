import { SyrioLogo } from "@/components/branding";
import Module from "@/components/modules/Module";
import Image from "next/image";

export default function LandingHero() {
  return (
    <Module
      className="h-screen"
      backgroundImage="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_HOME PAGE.png"
      backgroundImageAlt="Team Background"
      backgroundImageClassName="object-cover opacity-40"
      backgroundComponent={
        <div className="absolute -top-1/4 -left-5/12 w-full h-full pointer-events-none -rotate-30">
          <Image
            src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GOLD ACCENT_SHOP 副本.png"
            alt=""
            fill
            priority
            className="object-contain opacity-30"
          />
        </div>
      }
      contentClassName="absolute inset-0 h-screen flex items-center justify-center"
    >
      <SyrioLogo size="lg" />
    </Module>
  );
}
