import CardModule from "@/components/modules/cards/CardModule";
import ContactModule from "@/components/modules/contact/ContactModule";
import LandingAboutHero from "@/components/modules/hero/LandingAboutHero";
import LandingHero from "@/components/modules/hero/LandingHero";
import QuoteModule from "@/components/modules/misc/QuoteModule";
import SocialContactModule from "@/components/modules/misc/SocialContactModule";
import { homeMessages } from "./messages";

export default function Home() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      <LandingHero />
      <LandingAboutHero />

      {/* Programs Section */}
      <CardModule
        title={homeMessages.programs.title}
        subtitle={homeMessages.programs.subtitle}
        cards={homeMessages.programs.cards}
      />

      <SocialContactModule />
      {/* Quote Section */}
      <QuoteModule />

      {/* Contact Section */}
      <ContactModule />
    </main>
  );
}
