import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";
import HistoryTimelineModule from "@/components/modules/misc/about/HistoryTimelineModule";
import { backgroundImages } from "@/config/images";

export default function History() {
  return (
    <main className="bg-syrio-black text-syrio-white">
      <HeroBannerModule
        title="HISTORY"
        backgroundImage={backgroundImages.highPerformance2}
      />
      <HistoryTimelineModule />
    </main>
  );
}
