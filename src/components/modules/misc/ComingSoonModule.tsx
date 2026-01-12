import Module from "@/components/modules/Module";
import { backgroundImages } from "@/config/images";

interface ComingSoonModuleProps {
  message?: string;
  backgroundImage?: string;
}

export default function ComingSoonModule({
  message = "COMING SOON",
  backgroundImage = backgroundImages.background,
}: ComingSoonModuleProps) {
  return (
    <Module
      className="py-24 md:py-32 h-screen flex justify-center items-center"
      backgroundImage={backgroundImage}
      backgroundImageAlt="Coming soon background"
      contentClassName="px-4 md:px-8"
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        {/* Coming Soon text */}
        <h2 className="font-bank-gothic text-4xl md:text-5xl lg:text-6xl text-syrio-white uppercase tracking-wider leading-tight">
          {message}
        </h2>
      </div>
    </Module>
  );
}
