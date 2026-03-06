import UnifiedLink from "@/components/elements/Link";
import ContentBlockTwo from "@/components/modules/content/ContentBlockTwo";
import VALHero from "@/components/modules/hero/VALHero";
import SocialContactModule from "@/components/modules/misc/SocialContactModule";
import Module from "@/components/modules/Module";
import ImageModule from "@/components/modules/multimedia/ImageModule";
import { links } from "@/config/links";
import Image from "next/image";

export default function VALPage() {
  return (
    <main>
      <VALHero />
      <ContentBlockTwo
        description="The Volleyball Ascendant League (VAL) delivers a high-quality, community-driven NSW Division 3 Level Volleyball Competition. VAL bridges social volleyball and state leagues that aligns with Volleyball NSW's endorsement objectives, providing a structured pathway for emerging Men's and Women's teams and athletes in partnership with Volleyball NSW."
        ctaLabel="REGISTER NOW"
        ctaHref={links.forms.valRegistration}
        backgroundImage="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
        images={{
          primary: "/WEBSITE MATERIAL/VAL - BIGGER IMAGE ON THE RIGHT OF THE TEXT.jpg",
          secondary: "/WEBSITE MATERIAL/VAL - SMALLER IMAGE UNDER THE TEXT.jpg",
        }}
      />
      <SocialContactModule />
    </main>
  );
}
