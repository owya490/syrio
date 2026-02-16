import CardModule from "@/components/modules/cards/CardModule";
import ContentBlockTwo from "@/components/modules/content/ContentBlockTwo";
import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";

export default function Sessions() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      <HeroBannerModule
        title="SESSIONS"
        backgroundImage="/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg"
      />
      <ContentBlockTwo
        description="Syrio Volley Academy offers a range of training sessions to help you improve your skills and reach your full potential. Our sessions are designed to be fun and challenging, and are led by our experienced coaches."
        ctaLabel="VIEW OUR PROGRAMS"
        ctaHref="#session-cards"
        backgroundImage="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
        images={{
          // Primary: Large landscape image (e.g. general about/team photo)
          primary: "/MULTIMEDIA ASSETS/2025M2/图片_20251120021438_448_5.jpg",
          // Secondary: Vertical/smaller image (e.g. generic background or logo)
          // Updated to use the specific action shot requested:
          secondary: "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
        }}
      />
      <div id="session-cards">
        <CardModule
          title="OUR PROGRAMS"
          subtitle="TRAINING SESSIONS"
          cards={[
            {
              label: "INTENSIVE SKILL DEVELOPMENT",
              href: "/sessions/intensive-skill-development",
              image: "/MULTIMEDIA ASSETS/2025M2/图片_20260101224918_645_5.jpg",
            },
          ]}
          className="bg-syrio-black"
        />
      </div>
    </main>
  );
}
