import CardModule from "@/components/modules/cards/CardModule";
import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";
import { backgroundImages } from "@/config/images";

export default function Sessions() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      <HeroBannerModule
        title="SESSIONS"
        backgroundImage={backgroundImages.sessions}
      />
      <CardModule
        title="OUR PROGRAMS"
        subtitle="TRAINING SESSIONS"
        cards={[
          {
            label: "SVC",
            href: "/sessions/svc",
            image: backgroundImages.competitionSVC,
          },
          {
            label: "INTENSIVE SKILL DEVELOPMENT",
            href: "/sessions/intensive-skill-development",
            image:
              "/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_DEVELOPMENT INTENSIVE SKILL DEVELOPMENT.png",
          },
        ]}
        className="bg-syrio-black"
      />
    </main>
  );
}
