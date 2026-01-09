import Image from "next/image";
import Link from "next/link";

interface ContentBlockOneProps {
  subtitle: string;
  title: string;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
  images: {
    main: string; // The larger, back image
    secondary: string; // The smaller, front image
  };
}

export default function ContentBlockOne({
  subtitle,
  title,
  features,
  ctaLabel = "LEARN MORE",
  ctaHref = "#",
  images,
}: ContentBlockOneProps) {
  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-24">
        {/* Images Column */}
        <div className="relative mx-auto h-96 w-full max-w-lg lg:h-[600px]">
          {/* Main Back Image */}
          <div className="absolute right-0 top-0 h-4/5 w-3/4 rotate-6 transform overflow-hidden rounded-lg shadow-xl transition-transform duration-500 hover:rotate-3">
            <div className="relative h-full w-full bg-gray-200">
              <Image
                src={images.main}
                alt="Main Visual"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 75vw, 33vw"
              />
            </div>
          </div>

          {/* Secondary Front Image */}
          <div className="absolute bottom-8 left-0 z-10 h-1/2 w-3/5 -rotate-3 transform overflow-hidden rounded-lg border-4 border-white shadow-2xl transition-transform duration-500 hover:rotate-0">
            <div className="relative h-full w-full bg-gray-300">
              <Image
                src={images.secondary}
                alt="Secondary Visual"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 60vw, 25vw"
              />
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-2">
            {/* Overline: Bank Gothic Medium BT, Uppercase, Black or White */}
            <h3 className="font-bank-gothic text-xl font-medium uppercase tracking-widest text-gray-800">
              {subtitle}
            </h3>
            {/* Headline: Montserrat Bold, Uppercase, Any Colour */}
            <h2 className="font-montserrat text-4xl font-bold uppercase tracking-wider text-black md:text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>

          <ul className="space-y-6">
            {/* Subhead: Montserrat Bold, Standard Case, Black or White */}
            {features.map((feature, index) => (
              <li
                key={index}
                className="font-montserrat text-sm font-bold tracking-wide text-gray-800 md:text-base"
              >
                {feature}
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
    </section>
  );
}
