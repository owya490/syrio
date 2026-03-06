import { svlMessages } from "@/app/competition/svl/messages";
import Module from "@/components/modules/Module";
import Image from "next/image";

export default function SVLJoinLandingHero() {
  return (
    <Module
      className="py-0 min-h-[80vh] md:min-h-[85vh] relative"
      backgroundImage={svlMessages.joinHero.backgroundImage}
      backgroundImageAlt={svlMessages.joinHero.backgroundImageAlt}
      backgroundImageClassName="object-cover"
      backgroundImagePriority={true}
      contentClassName="hidden"
      backgroundComponent={
        <>
          {/* Overlay */}
          <div className="absolute inset-0 bg-syrio-black/70 z-10" />

          {/* Icon - Fills entire module */}
          <div className="absolute inset-0 z-20">
            <Image
              src={svlMessages.joinHero.iconImage}
              alt={svlMessages.joinHero.iconAlt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </>
      }
    />
  );
}
