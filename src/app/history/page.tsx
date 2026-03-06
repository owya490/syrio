import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";
import HistoryTimelineModule from "@/components/modules/misc/about/HistoryTimelineModule";
import { backgroundImages } from "@/config/images";
import { historyMessages } from "./messages";

export default function History() {
  return (
    <main className="bg-syrio-black text-syrio-white">
      <HeroBannerModule
        title={historyMessages.banner.title}
        backgroundImage={backgroundImages.highPerformance2}
      />
      <HistoryTimelineModule />
    </main>
  );
}
