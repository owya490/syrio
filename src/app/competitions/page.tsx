import CardModule from "@/components/modules/cards/CardModule";
import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";
import { backgroundImages } from "@/config/images";

export default function Competitions() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      <HeroBannerModule
        title="COMPETITIONS"
        backgroundImage={backgroundImages.competition}
      />
      <CardModule
        title="OUR COMPETITIONS"
        subtitle="COMPETITIVE PROGRAMS"
        cards={[
          {
            label: "SVL",
            href: "/svl",
            image: backgroundImages.competitionSVL,
          },
          {
            label: "VAL",
            href: "/competition/val",
            image: backgroundImages.competitionVAL,
          },
          {
            label: "SVC",
            href: "/sessions/svc",
            image: backgroundImages.competitionSVC,
          },
        ]}
        className="bg-syrio-black"
      />
    </main>
  );
}

