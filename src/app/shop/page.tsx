import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";
import ComingSoonModule from "@/components/modules/misc/ComingSoonModule";
import { backgroundImages } from "@/config/images";
import { shopMessages } from "./messages";

export default function Shop() {
  return (
    <main>
      <HeroBannerModule
        title={shopMessages.hero.title}
        backgroundImage={backgroundImages.highPerformance2}
      />
      <ComingSoonModule />
    </main>
  );
}
