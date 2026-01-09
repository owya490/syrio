import Image from "next/image";
import Link from "next/link";

interface ContentBlockFourProps {
  subtitle?: string; // Overline
  name: string; // Headline
  role: string; // Subhead
  achievements: string[]; // Body Text
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
}

export default function ContentBlockFour({
  subtitle,
  name,
  role,
  achievements,
  ctaLabel = "ENQUIRE MORE",
  ctaHref = "#",
  imageSrc,
}: ContentBlockFourProps) {
  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
          {/* Left Column: Image Composition */}
          <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:order-1 lg:max-w-full">
             {/* Black Background Box */}
            <div className="absolute left-0 top-1/2 h-[90%] w-[80%] -translate-y-1/2 bg-black shadow-2xl" />
            
            {/* Image */}
            <div className="relative z-10 aspect-[3/4] w-[85%] translate-x-[10%] overflow-hidden">
               <Image
                src={imageSrc}
                alt={name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="flex flex-col space-y-12 lg:order-2">
            <div className="space-y-4">
              {/* Overline: Bank Gothic Medium BT, Uppercase, Black or White */}
              {subtitle && (
                <h3 className="font-bank-gothic text-xl font-medium uppercase tracking-widest text-black">
                  {subtitle}
                </h3>
              )}

               {/* Headline: Montserrat Bold Uppercase */}
              <h1 className="font-montserrat text-6xl font-bold uppercase tracking-widest text-black md:text-7xl">
                {name}
              </h1>
               {/* Subhead: Montserrat Bold Standard Case */}
              <h2 className="font-montserrat text-2xl font-bold tracking-wider text-black md:text-3xl">
                {role}
              </h2>
            </div>

            <ul className="space-y-4">
              {achievements.map((item, index) => (
                <li
                  key={index}
                  // Body Text: Montserrat Standard Case (Regular)
                  className="font-montserrat text-sm font-normal tracking-wide text-gray-800 md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2 border-b-2 border-black pb-1 font-bank-gothic text-lg font-medium uppercase tracking-wider text-black transition-colors hover:border-gray-600 hover:text-gray-600"
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
