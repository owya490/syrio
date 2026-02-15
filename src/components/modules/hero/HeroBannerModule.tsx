import Module from "@/components/modules/Module";
import { ReactNode } from "react";

interface HeroBannerModuleProps {
  title: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundComponent?: ReactNode;
}

export default function HeroBannerModule({
  title,
  backgroundImage = "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
  backgroundImageAlt = "Hero banner background",
  backgroundComponent,
}: HeroBannerModuleProps) {
  return (
    <Module
      className="h-48 md:min-h-[20vh] relative"
      backgroundImage={backgroundImage}
      backgroundImageAlt={backgroundImageAlt}
      backgroundImageClassName="object-cover"
      backgroundComponent={
        backgroundComponent || (
          <div className="absolute inset-0 bg-syrio-black/60" />
        )
      }
      contentClassName="h-full flex items-end pb-4"
    >
      <h1 className="font-bank-gothic text-3xl md:text-4xl lg:text-5xl text-syrio-white uppercase tracking-wider">
        {title}
      </h1>
    </Module>
  );
}
