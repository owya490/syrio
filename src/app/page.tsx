import LandingAboutHero from "@/components/modules/hero/LandingAboutHero";
import LandingHero from "@/components/modules/hero/LandingHero";
import ProgramBanner from "@/components/modules/ProgramBanner";
import { tracking } from "@/config/design";
import Image from "next/image";
import { homeMessages } from "./messages";

export default function Home() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      <LandingHero />
      <LandingAboutHero />

      {/* Sessions Section */}
      <section className="relative py-20 px-4 md:px-8 bg-syrio-black -mt-32">
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2
            className={`font-bank-gothic text-2xl md:text-3xl tracking-[${tracking.wide}] mb-8`}
          >
            {homeMessages.sessions.title}
            <br />
            {homeMessages.sessions.titleLine2}
          </h2>

          {/* Session image */}
          <div className="relative mx-auto w-full max-w-lg aspect-4/3 mb-12 border-l-4 border-syrio-pink">
            <Image
              src="/WEBSITE MATERIAL/Screenshot SYRIO WEBSITE SESSIONS.png"
              alt="Public Sessions"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Development text */}
          <button className="text-left border-l-4 border-syrio-pink pl-6 hover:border-syrio-white hover:bg-syrio-white/5 transition-all duration-300 py-4 pr-6">
            <h3 className="font-bank-gothic text-2xl md:text-3xl tracking-wider italic">
              {homeMessages.sessions.development}
              <br />
              {homeMessages.sessions.developmentLine2}
            </h3>
          </button>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative py-20 px-4 md:px-8">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <ProgramBanner
          title={homeMessages.programs.title}
          subtitle={homeMessages.programs.subtitle}
          cards={homeMessages.programs.cards}
        />
      </section>
    </main>
  );
}
