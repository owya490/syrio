import Module from "@/components/modules/Module";
import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";
import SessionsCalendar from "@/components/sessions/SessionsCalendar";
import { backgroundImages } from "@/config/images";
import { fetchSessionEvents, SessionEvent } from "@/types/sessions";

export default async function IntensiveSkillDevelopment() {
  let events: SessionEvent[] = [];
  try {
    events = await fetchSessionEvents();
  } catch {
    // Events will remain empty; calendar handles the empty state
  }

  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      <HeroBannerModule
        title="INTENSIVE SKILL DEVELOPMENT"
        backgroundImage={backgroundImages.intensiveSkillDevelopment}
        backgroundImageAlt="Intensive Skill Development"
        backgroundComponent={
          <div className="absolute inset-0 bg-gradient-to-b from-syrio-black/40 to-syrio-black/80" />
        }
      />

      <Module className="sm:py-10 md:py-12 lg:py-16 pb-16 md:pb-14 lg:pb-18 bg-syrio-black">
        <div className="max-w-7xl mx-auto">
          <SessionsCalendar events={events} />
        </div>
      </Module>
    </main>
  );
}
