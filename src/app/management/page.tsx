import ContentBlockThree from "@/components/modules/content/ContentBlockThree";
import ContentBlockFour from "@/components/modules/content/ContentBlockFour";
import CardModule from "@/components/modules/cards/CardModule";
import Module from "@/components/modules/Module";
import { managementMessages } from "./messages";

export default function Management() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      {/* Section 1 - Header */}
      <Module
        className="min-h-[60vh] overflow-visible bg-syrio-black"
        contentClassName="!px-4 md:!px-8 relative min-h-[60vh] flex items-center justify-center !max-w-none"
      >
        <div className="w-full max-w-7xl mx-auto text-center">
          <h1 className="font-bank-gothic text-4xl lg:text-6xl tracking-wider text-syrio-white">
            {managementMessages.header.title}
          </h1>
          <h2 className="font-bank-gothic text-2xl lg:text-3xl tracking-wider text-syrio-white mt-2">
            {managementMessages.header.year}
          </h2>
        </div>
      </Module>

      {/* Section 2 - CardModule */}
      <CardModule
        title={managementMessages.team.title}
        subtitle={managementMessages.team.subtitle}
        cards={[
          { label: managementMessages.team.cards[0].label, href: managementMessages.team.cards[0].href, image: "/MULTIMEDIA ASSETS/CLUB/33.png" },
          { label: managementMessages.team.cards[1].label, href: managementMessages.team.cards[1].href, image: "/MULTIMEDIA ASSETS/CLUB/Yao.png" },
        ]}
      />

      {/* Section 3 - Profile: Alex */}
      <div id="section-1">
        <ContentBlockFour
          name={managementMessages.alex.name}
          role={managementMessages.alex.role}
          achievements={managementMessages.alex.achievements}
          imageSrc="/MULTIMEDIA ASSETS/CLUB/33.png"
        />
      </div>

      {/* Section 4 - Profile: Jessica */}
      <div id="section-2">
        <ContentBlockThree
          name={managementMessages.jessica.name}
          role={managementMessages.jessica.role}
          achievements={managementMessages.jessica.achievements}
          imageSrc="/MULTIMEDIA ASSETS/CLUB/Yao.png"
          backgroundImage="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
        />
      </div>
    </main>
  );
}
