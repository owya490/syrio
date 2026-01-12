import ContentBlockThree from "@/components/modules/content/ContentBlockThree";
import ContentBlockFour from "@/components/modules/content/ContentBlockFour";
import CardModule from "@/components/modules/cards/CardModule";
import Module from "@/components/modules/Module";
import Image from "next/image";
import { coachingMessages } from "./messages";

export default function Coaching() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      {/* Section 1 - Header with text and images */}
      <Module
        className="min-h-screen overflow-visible bg-syrio-black"
        contentClassName="!px-4 md:!px-8 relative min-h-screen flex items-center justify-center !max-w-none"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>
              <h1 className="font-bank-gothic text-4xl lg:text-6xl tracking-wider text-syrio-white whitespace-nowrap">
                {coachingMessages.header.title}
              </h1>
              <h2 className="font-bank-gothic text-2xl lg:text-3xl tracking-wider text-syrio-white text-right mt-2">
                {coachingMessages.header.year}
              </h2>
            </div>

            {/* Right side - Images */}
            <div className="relative flex items-center justify-center overflow-visible">
              <div className="relative w-[160%] aspect-3/4 z-10 -mr-12">
                <Image
                  src="/MULTIMEDIA ASSETS/CLUB/Yao.png"
                  alt="Yao"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[120%] aspect-3/4 z-0 -ml-12">
                <Image
                  src="/MULTIMEDIA ASSETS/CLUB/33.png"
                  alt="Roger"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Module>

      {/* Section 2 - CardModule with 4 cards */}
      <CardModule
        title={coachingMessages.coaches.title}
        subtitle={coachingMessages.coaches.subtitle}
        cards={[
          { label: coachingMessages.coaches.cards[0].label, href: coachingMessages.coaches.cards[0].href, image: "/MULTIMEDIA ASSETS/CLUB/33.png" },
          { label: coachingMessages.coaches.cards[1].label, href: coachingMessages.coaches.cards[1].href, image: "/MULTIMEDIA ASSETS/CLUB/Yao.png" },
          { label: coachingMessages.coaches.cards[2].label, href: coachingMessages.coaches.cards[2].href, image: "/MULTIMEDIA ASSETS/CLUB/Yao.png" },
          { label: coachingMessages.coaches.cards[3].label, href: coachingMessages.coaches.cards[3].href, image: "/MULTIMEDIA ASSETS/CLUB/33.png" },
        ]}
      />

      {/* Section 3 - ContentBlockFour */}
      <div id="section-3">
        <ContentBlockFour
          name={coachingMessages.michael.name}
          role={coachingMessages.michael.role}
          achievements={coachingMessages.michael.achievements}
          imageSrc="/MULTIMEDIA ASSETS/CLUB/33.png"
        />
      </div>

      {/* Section 4 - ContentBlockThree */}
      <div id="section-4">
        <ContentBlockThree
          name={coachingMessages.sarah.name}
          role={coachingMessages.sarah.role}
          achievements={coachingMessages.sarah.achievements}
          imageSrc="/MULTIMEDIA ASSETS/CLUB/Yao.png"
          backgroundImage="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
        />
      </div>

      {/* Section 5 - ContentBlockFour */}
      <div id="section-5">
        <ContentBlockFour
          name={coachingMessages.lisa.name}
          role={coachingMessages.lisa.role}
          achievements={coachingMessages.lisa.achievements}
          imageSrc="/MULTIMEDIA ASSETS/CLUB/Yao.png"
        />
      </div>

      {/* Section 6 - ContentBlockThree */}
      <div id="section-6">
        <ContentBlockThree
          name={coachingMessages.david.name}
          role={coachingMessages.david.role}
          achievements={coachingMessages.david.achievements}
          imageSrc="/MULTIMEDIA ASSETS/CLUB/33.png"
          backgroundImage="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
        />
      </div>
    </main>
  );
}