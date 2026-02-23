import Module from "@/components/modules/Module";
import Image from "next/image";

export default function SVLJoinLandingHero() {
  return (
    <Module
      className="py-0 min-h-[80vh] md:min-h-[85vh] relative"
      backgroundImage="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_HIGHP2.png"
      backgroundImageAlt="SYRIO REP Welcome"
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
              src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_HIGHP2_ICON_HIGHP2.png"
              alt="SYRIO REP Icon"
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
