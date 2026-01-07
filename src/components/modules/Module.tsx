import Image from "next/image";
import { ReactNode } from "react";

interface ModuleProps {
  children?: ReactNode;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundImageClassName?: string;
  backgroundComponent?: ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function Module({
  children,
  backgroundImage,
  backgroundImageAlt = "Background",
  backgroundImageClassName = "object-cover",
  backgroundComponent,
  className = "",
  contentClassName = "",
}: ModuleProps) {
  return (
    <section className={`relative ${className}`}>
      {/* Full-width background */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            className={backgroundImageClassName}
          />
        </div>
      )}

      {/* Custom background component */}
      {backgroundComponent}

      {/* Content container with responsive max-widths */}
      <div
        className={`relative z-10 w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
