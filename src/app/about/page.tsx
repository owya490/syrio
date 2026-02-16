import AboutCTAModule from "@/components/modules/misc/about/AboutCTAModule";
import AboutHeroModule from "@/components/modules/misc/about/AboutHeroModule";
import AboutMeetTeamModule from "@/components/modules/misc/about/AboutMeetTeamModule";
import AboutMissionModule from "@/components/modules/misc/about/AboutMissionModule";
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

      {/* Meet the team */}
      <AboutMeetTeamModule />

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
