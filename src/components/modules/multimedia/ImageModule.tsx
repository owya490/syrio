import Module from "@/components/modules/Module";
import Image from "next/image";

interface ImageModuleProps {
  imageSrc: string;
  imageAlt?: string;
}

export default function ImageModule({
  imageSrc,
  imageAlt = "Image",
}: ImageModuleProps) {
  return (
    <Module
      className="py-24 md:min-h-[80vh] flex justify-center items-center"
      backgroundImage="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
      backgroundImageAlt="Background"
      backgroundImageClassName="object-cover"
      contentClassName="px-4 md:px-8"
    >
      <div className="relative z-10 flex items-center justify-center max-w-5xl mx-auto">
        <div className="relative w-full aspect-video">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover aspect-video"
            priority
          />
        </div>
      </div>
    </Module>
  );
}
