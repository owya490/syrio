import ContactModule from "@/components/modules/contact/ContactModule";
import LandingAboutHero from "@/components/modules/hero/LandingAboutHero";
import LandingHero from "@/components/modules/hero/LandingHero";
import ProgramBanner from "@/components/modules/ProgramBanner";
import QuoteModule from "@/components/modules/misc/QuoteModule";
import { tracking } from "@/config/design";
import { backgroundImages } from "@/config/images";
import Image from "next/image";
import { homeMessages } from "./messages";

export default function Home() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      <LandingHero />
      <LandingAboutHero />


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
      
      {/* Quote Section */}
      <QuoteModule />

      {/* Contact Section */}
      <ContactModule />


      {/* Partners Section */}
      <section className="py-16 px-4 md:px-8 bg-syrio-black border-t border-syrio-blue/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-montserrat text-2xl tracking-wider">
            {homeMessages.partners.title}
          </h3>
        </div>
      </section>
    </main>
  );
}
