import CardModule from "@/components/modules/cards/CardModule";
import AboutCTAModule from "@/components/modules/misc/about/AboutCTAModule";
import AboutHeroModule from "@/components/modules/misc/about/AboutHeroModule";
import AboutMissionModule from "@/components/modules/misc/about/AboutMissionModule";
import AboutTimelineModule from "@/components/modules/misc/about/AboutTimelineModule";
import AboutValuesModule from "@/components/modules/misc/about/AboutValuesModule";
import { aboutMessages } from "./messages";

export default function AboutUs() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      {/* Hero Section */}
      <AboutHeroModule />

      {/* Mission Section */}
      <AboutMissionModule />

      {/* Values Section */}
      <AboutValuesModule />

      {/* Athletes Section */}
      <CardModule
        title={aboutMessages.team.title}
        subtitle={aboutMessages.team.tagline}
        cards={[
          {
            label: "MEN'S",
            href: "/competition/mens",
            image: "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
          },
          {
            label: "WOMEN'S",
            href: "/competition/womens",
            image: "/MULTIMEDIA ASSETS/2025W2/IMG_9402.png",
          },
          {
            label: "YOUTH",
            href: "/competition/youth",
            image: "/MULTIMEDIA ASSETS/2025M2/图片_20251120021438_448_5.jpg",
          },
          {
            label: "COACHING",
            href: "/coaching",
            image: "/MULTIMEDIA ASSETS/CLUB/33.png",
          },
        ]}
        className="bg-syrio-black"
      />

      {/* History Timeline */}
      <AboutTimelineModule />

      {/* CTA Section */}
      <AboutCTAModule
        title={aboutMessages.cta.title}
        description={aboutMessages.cta.description}
        buttonText={aboutMessages.cta.button}
        buttonHref="/contact"
      />
    </main>
  );
}
