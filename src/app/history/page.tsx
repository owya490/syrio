import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";
import ComingSoonModule from "@/components/modules/misc/ComingSoonModule";
import { backgroundImages } from "@/config/images";

export default function History() {
  return (
    <main>
      <HeroBannerModule
        title="HISTORY"
        backgroundImage={backgroundImages.highPerformance2}
      />
      <ComingSoonModule />
    </main>
  );
}
