import ContactModule from "@/components/modules/contact/ContactModule";
import LandingAboutHero from "@/components/modules/hero/LandingAboutHero";
import LandingHero from "@/components/modules/hero/LandingHero";
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

      {/* Sessions Section */}
      <section className="relative py-20 px-4 md:px-8 bg-syrio-black">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
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
              src={backgroundImages.sessions}
              alt="Public Sessions"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Development text */}
          <div className="text-left border-l-4 border-syrio-pink pl-6">
            <h3 className="font-bank-gothic text-2xl md:text-3xl tracking-wider italic">
              {homeMessages.sessions.development}
              <br />
              {homeMessages.sessions.developmentLine2}
            </h3>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <QuoteModule />
      {/* Contact Section */}
      <ContactModule />
    </main>
  );
}
