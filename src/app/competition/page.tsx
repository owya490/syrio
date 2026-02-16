import CardModule from "@/components/modules/cards/CardModule";
import ContentBlockTwo from "@/components/modules/content/ContentBlockTwo";
import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";

export default function Competitions() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      <HeroBannerModule
        title="COMPETITIONS"
        backgroundImage="/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg"
      />
      <ContentBlockTwo
        description="Syrio Volley Academy participates and provides a structured pathway for our players to compete at the highest level of the game. We offer a range of competitive programs to help you improve your skills and reach your full potential."
        ctaLabel="VIEW OUR COMPETITIONS"
        ctaHref="#competition-cards"
        backgroundImage="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
        images={{
          // Primary: Large landscape image (e.g. general about/team photo)
          primary: "/MULTIMEDIA ASSETS/2025M2/图片_20251120021438_448_5.jpg",
          // Secondary: Vertical/smaller image (e.g. generic background or logo)
          // Updated to use the specific action shot requested:
          secondary: "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
        }}
      />
      <div id="competition-cards">
        <CardModule
          title="OUR COMPETITIONS"
          subtitle="COMPETITIVE PROGRAMS"
          cards={[
            {
              label: "SVL",
              href: "/svl",
              image: "/MULTIMEDIA ASSETS/2025M2/图片_20260101213227_644_5.jpg",
            },
            {
              label: "VAL",
              href: "/competition/val",
              image: "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
            },
          ]}
          className="bg-syrio-black"
        />
      </div>
    </main>
  );
}
