import Image from "next/image";
import { ReactNode } from "react";
import ContentContainer from "./ContentContainer";

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
      <ContentContainer className={contentClassName}>
        {children}
      </ContentContainer>
    </section>
  );
}
