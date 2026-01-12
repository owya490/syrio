import { imageSizes } from "@/config/design";
import Image from "next/image";

interface SyrioLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-36 md:h-48",
  md: "h-60 md:h-[20rem]",
  lg: "h-[16rem] md:h-[24rem]",
};

const textSizeClasses = {
  sm: "text-sm md:text-base",
  md: "text-lg md:text-xl",
  lg: "text-xl md:text-2xl",
};

// Text position from bottom of logo (using transform so it doesn't affect bounding box)
const textOffsetClasses = {
  sm: "bottom-4 md:bottom-6",
  md: "bottom-8 md:bottom-12",
  lg: "bottom-8 md:bottom-16",
};

export default function SyrioLogo({
  size = "lg",
  showText = true,
  className = "",
}: SyrioLogoProps) {
  return (
    <div className={`relative inline-flex flex-col items-center ${className}`}>
      <Image
        src="/branding/logos/LOGO TRANSPARENT_画板 1 副本 17.png"
        alt="Syrio Volley Logo"
        width={imageSizes.heroLogo.width}
        height={imageSizes.heroLogo.height}
        priority
        className={`w-auto object-contain ${sizeClasses[size]}`}
      />
      {showText && (
        <h1
          className={`absolute left-1/2 -translate-x-1/2 font-geek-trend tracking-wide whitespace-nowrap ${textSizeClasses[size]} ${textOffsetClasses[size]}`}
        >
          SYRIOVOLLEY
        </h1>
      )}
    </div>
  );
}
