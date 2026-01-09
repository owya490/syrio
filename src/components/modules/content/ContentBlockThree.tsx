import Image from "next/image";
import Link from "next/link";

interface ContentBlockThreeProps {
  subtitle?: string; // Overline
  name: string; // Headline
  role: string; // Subhead
  achievements: string[]; // Body Text
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
}

export default function ContentBlockThree({
  subtitle,
  name,
  role,
  achievements,
  ctaLabel = "ENQUIRE MORE",
  ctaHref = "#",
  imageSrc,
}: ContentBlockThreeProps) {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
          {/* Left Column: Text */}
          <div className="flex flex-col space-y-12">
            <div className="space-y-4">
              {/* Overline: Bank Gothic Medium BT, Uppercase, Black or White */}
              {subtitle && (
                <h3 className="font-bank-gothic text-xl font-medium uppercase tracking-widest text-white">
                  {subtitle}
                </h3>
              )}
              
              {/* Headline: Montserrat Bold Uppercase */}
              <h1 className="font-montserrat text-6xl font-bold uppercase tracking-widest text-white md:text-7xl">
                {name}
              </h1>
              {/* Subhead: Montserrat Bold Standard Case */}
              <h2 className="font-montserrat text-2xl font-bold tracking-wider text-white md:text-3xl">
                {role}
              </h2>
            </div>

            <ul className="space-y-4">
              {achievements.map((item, index) => (
                <li
                  key={index}
                  // Body Text: Montserrat Standard Case (Regular)
                  className="font-montserrat text-sm font-normal tracking-wide text-gray-300 md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2 border-b-2 border-white pb-1 font-bank-gothic text-lg font-medium uppercase tracking-wider text-white transition-colors hover:border-gray-400 hover:text-gray-400"
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

          {/* Right Column: Image Composition */}
          <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-full">
            {/* White Background Box */}
            <div className="absolute right-0 top-1/2 h-[90%] w-[80%] -translate-y-1/2 bg-white shadow-2xl" />
            
            {/* Image */}
            <div className="relative z-10 aspect-[3/4] w-[85%] translate-x-[-10%] overflow-hidden">
               <Image
                src={imageSrc}
                alt={name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
