import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";
import ComingSoonModule from "@/components/modules/misc/ComingSoonModule";
import { backgroundImages } from "@/config/images";

export default function Shop() {
  return (
    <main>
      <HeroBannerModule
        title="SHOP"
        backgroundImage={backgroundImages.highPerformance2}
      />
      <ComingSoonModule />
    </main>
  );
}
