import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx"; // Optional: efficient class merging, or just use template literals

interface ContentBlockProfileProps {
  subtitle?: string; // Overline
  name: string; // Headline
  role: string; // Subhead
  achievements: string[]; // Body Text
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  // Visual Options
  theme?: "dark" | "light";
  alignment?: "image-left" | "image-right";
  backgroundImage?: string; // Mainly for dark theme
}

export default function ContentBlockProfile({
  subtitle,
  name,
  role,
  achievements,
  ctaLabel = "ENQUIRE MORE",
  ctaHref = "#",
  imageSrc,
  theme = "dark",
  alignment = "image-right",
  backgroundImage,
}: ContentBlockProfileProps) {
  const isDark = theme === "dark";
  const isImageRight = alignment === "image-right";

  // Colors based on theme
  const textColor = isDark ? "text-white" : "text-black";
  const subTextColor = isDark ? "text-gray-300" : "text-gray-800";
  const borderColor = isDark ? "border-white" : "border-black";
  const hoverColor = isDark ? "hover:border-gray-400 hover:text-gray-400" : "hover:border-gray-600 hover:text-gray-600";
  const inputBoxColor = isDark ? "bg-white" : "bg-black"; // The box behind the image

  return (
    <section className={`relative overflow-hidden py-24 ${isDark ? "bg-zinc-950" : "bg-white"} ${textColor}`}>
      {/* Optional Background Image (for Dark theme typically) */}
      {isDark && backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background Texture"
            fill
            className="object-cover opacity-100"
            priority
          />
          {/* Optional Overlay */}
           <div className="absolute inset-0 bg-black/20" /> 
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
          
          {/* Image Column */}
          <div className={`relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-full ${isImageRight ? "lg:order-2" : "lg:order-1"}`}>
             {/* Offset Background Box */}
            <div 
              className={`absolute top-1/2 h-[90%] w-[80%] -translate-y-1/2 shadow-2xl ${inputBoxColor} ${isImageRight ? "right-0" : "left-0"}`} 
            />
            
            {/* Image */}
            <div className={`relative z-10 aspect-[3/4] w-[85%] overflow-hidden ${isImageRight ? "translate-x-[-10%]" : "translate-x-[10%]"}`}>
               <Image
                src={imageSrc}
                alt={name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className={`flex flex-col space-y-12 ${isImageRight ? "lg:order-1" : "lg:order-2"}`}>
            <div className="space-y-4">
              {/* Overline */}
              {subtitle && (
                <h3 className={`font-bank-gothic text-xl font-medium uppercase tracking-widest ${textColor}`}>
                  {subtitle}
                </h3>
              )}
              
              {/* Headline */}
              <h1 className={`font-montserrat text-6xl font-bold uppercase tracking-widest ${textColor} md:text-7xl`}>
                {name}
              </h1>
              {/* Subhead */}
              <h2 className={`font-montserrat text-2xl font-bold tracking-wider ${textColor} md:text-3xl`}>
                {role}
              </h2>
            </div>

            <ul className="space-y-4">
              {achievements.map((item, index) => (
                <li
                  key={index}
                  className={`font-montserrat text-sm font-normal tracking-wide ${subTextColor} md:text-base`}
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href={ctaHref}
                className={`group inline-flex items-center gap-2 border-b-2 pb-1 font-bank-gothic text-lg font-medium uppercase tracking-wider transition-colors ${borderColor} ${textColor} ${hoverColor}`}
              >
                {ctaLabel}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

