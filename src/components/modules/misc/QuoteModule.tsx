import Module from "@/components/modules/Module";
import { backgroundImages, iconImages } from "@/config/images";
import Image from "next/image";

interface QuoteModuleProps {
  quote?: string;
  author?: string;
}

export default function QuoteModule({
  quote = "Commitment unlocks the doors of imagination, allows vision and gives us the right stuff to turn our dreams into reality.",
  author = "James Womack",
}: QuoteModuleProps) {
  return (
    <Module
      className="py-24 md:py-32 h-[90vh] flex justify-center items-center"
      backgroundImage={backgroundImages.svl}
      backgroundImageAlt="Quote background"
      contentClassName="px-4 md:px-8"
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        {/* Quotation marks */}
        <div className="mb-4 select-none">
          <Image
            src={iconImages.quotationMark}
            alt=""
            width={100}
            height={100}
            className="w-18 h-auto"
          />
        </div>

        {/* Quote text */}
        <blockquote className="font-bank-gothic text-xl md:text-2xl lg:text-3xl text-syrio-white leading-relaxed tracking-wide italic">
          "{quote}"
        </blockquote>

        {/* Author attribution */}
        <cite className="font-bank-gothic text-lg md:text-xl text-syrio-white mt-8 not-italic tracking-wider">
          - {author}
        </cite>
      </div>
    </Module>
  );
}
