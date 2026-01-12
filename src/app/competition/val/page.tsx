import ContentBlockTwo from "@/components/modules/content/ContentBlockTwo";
import VALHero from "@/components/modules/hero/VALHero";
import SocialContactModule from "@/components/modules/misc/SocialContactModule";
import ImageModule from "@/components/modules/multimedia/ImageModule";

export default function VALPage() {
  return (
    <main>
      <VALHero />
      <ContentBlockTwo
        description="The Volleyball Ascendant League (VAL) delivers a high-quality, community-driven NSW Division 3 Level Volleyball Competition. VAL bridges social volleyball and state leagues that aligns with Volleyball NSW's endorsement objectives, providing a structured pathway for emerging Men's and Women's teams and athletes in partnership with Volleyball NSW."
        ctaLabel="REGISTER NOW"
        ctaHref="#"
        backgroundImage="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
        images={{
          // Primary: Large landscape image (e.g. general about/team photo)
          primary: "/MULTIMEDIA ASSETS/2025M2/图片_20251120021438_448_5.jpg",
          // Secondary: Vertical/smaller image (e.g. generic background or logo)
          // Updated to use the specific action shot requested:
          secondary: "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
        }}
      />
      <SocialContactModule />
      <ImageModule
        imageSrc="/MULTIMEDIA ASSETS/2025M2/图片_20251120021438_448_5.jpg"
        imageAlt="VAL Hero"
      />
    </main>
  );
}
