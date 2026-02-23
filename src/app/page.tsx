import CardModule from "@/components/modules/cards/CardModule";
import ContactModule from "@/components/modules/contact/ContactModule";
import ContentBlockTwo from "@/components/modules/content/ContentBlockTwo";
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
      <ContentBlockTwo
        description="Syrio Volley Academy — Elite volleyball coaching, trials, and high-performance pathways. Join our community and stay updated on trials, programs, and events."
        ctaLabel="JOIN THE COMMUNITY"
        ctaHref="/contact"
        backgroundImage="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
        images={{
          primary: "/MULTIMEDIA ASSETS/2025M2/图片_20251120021438_448_5.jpg",
          secondary: "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
        }}
        secondaryImagePosition="25% center"
      />

      <SocialContactModule />
      {/* Quote Section */}
      <QuoteModule />

      {/* Contact Section */}
      <ContactModule />
    </main>
  );
}
