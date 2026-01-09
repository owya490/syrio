import Image from "next/image";
import Link from "next/link";

interface ContentBlockTwoProps {
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  images: {
    primary: string;   // The large landscape image (Right side)
    secondary: string; // The vertical portrait image (Left side)
  };
}

export default function ContentBlockTwo({
  description,
  ctaLabel = "LEARN MORE",
  ctaHref = "#",
  images,
}: ContentBlockTwoProps) {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Text + Vertical Image */}
          <div className="flex flex-col justify-between space-y-12 lg:col-span-4 lg:space-y-24">
            {/* Text Content */}
            <div className="space-y-8">
              {/* Body Text: Montserrat, Standard Case */}
              <p className="font-montserrat text-lg font-medium leading-relaxed tracking-wide text-gray-200">
                {description}
              </p>
              
              <div className="pt-2">
                 {/* CTA: Matching Overline style (Bank Gothic) */}
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

            {/* Vertical Image (Secondary) */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm lg:w-4/5">
               <Image
                src={images.secondary}
                alt="Secondary Visual"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Right Column: Large Landscape Image (Primary) */}
          <div className="flex items-center lg:col-span-8 lg:pl-6">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src={images.primary}
                alt="Primary Visual"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
