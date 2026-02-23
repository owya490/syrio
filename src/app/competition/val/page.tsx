import UnifiedLink from "@/components/elements/Link";
import ContentBlockTwo from "@/components/modules/content/ContentBlockTwo";
import VALHero from "@/components/modules/hero/VALHero";
import SocialContactModule from "@/components/modules/misc/SocialContactModule";
import Module from "@/components/modules/Module";
import ImageModule from "@/components/modules/multimedia/ImageModule";
import Image from "next/image";

export default function VALPage() {
  return (
    <main>
      <VALHero />
      <ContentBlockTwo
        description="The Volleyball Ascendant League (VAL) delivers a high-quality, community-driven NSW Division 3 Level Volleyball Competition. VAL bridges social volleyball and state leagues that aligns with Volleyball NSW's endorsement objectives, providing a structured pathway for emerging Men's and Women's teams and athletes in partnership with Volleyball NSW."
        ctaLabel="REGISTER NOW"
        ctaHref="/contact"
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

      {/* Sign Up Button Section - Similar to SVL "Join The Team" */}
      <Module className="py-0 bg-syrio-black" contentClassName="px-0">
        <div className="w-full">
          <UnifiedLink
            href="#" // TODO: Update with VAL sign-up link when provided
            className="block hover:opacity-90 transition-opacity duration-300"
          >
            <Image
              src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_HIGHP.png"
              alt="Sign Up for VAL"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </UnifiedLink>
        </div>
      </Module>

      <ImageModule
        imageSrc="/MULTIMEDIA ASSETS/2025M2/图片_20251120021438_448_5.jpg"
        imageAlt="VAL Hero"
      />
    </main>
  );
}
