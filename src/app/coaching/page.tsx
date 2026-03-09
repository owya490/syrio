import CardModule from "@/components/modules/cards/CardModule";
import ContentBlockFour from "@/components/modules/content/ContentBlockFour";
import ContentBlockThree from "@/components/modules/content/ContentBlockThree";
import Module from "@/components/modules/Module";
import { backgroundImages } from "@/config/images";
import { coachingMessages } from "./messages";

export default function Coaching() {
  const { staff } = coachingMessages;

  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      {/* Section 1 - Header with text and images */}
      <Module
        className="py-20 md:py-28 overflow-visible bg-syrio-black"
        contentClassName="!px-4 md:!px-8 relative flex items-center justify-center !max-w-none"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Centered header text */}
            <div className="col-span-2 flex flex-col items-center text-center">
              <h1 className="font-bank-gothic text-4xl lg:text-6xl tracking-wider text-syrio-white">
                {coachingMessages.header.title}
              </h1>
              <h2 className="font-bank-gothic text-2xl lg:text-3xl tracking-wider text-syrio-white mt-2">
                {coachingMessages.header.year}
              </h2>
            </div>
          </div>
        </div>
      </Module>

      {/* Section 2 - CardModule */}
      <CardModule
        title={coachingMessages.coaches.title}
        subtitle={coachingMessages.coaches.subtitle}
        cards={staff.map((coach) => ({
          label: coach.name,
          href: `#${coach.id}`,
          image: coachingMessages.coaches.defaultImage,
        }))}
      />

      {/* Coach profiles - alternating layouts */}
      {staff.map((coach, index) => (
        <div key={coach.id} id={coach.id}>
          {index % 2 === 0 ? (
            <ContentBlockFour
              name={coach.name}
              role={coach.role}
              achievements={coach.achievements}
              imageSrc={coachingMessages.header.images.roger.src}
            />
          ) : (
            <ContentBlockThree
              name={coach.name}
              role={coach.role}
              achievements={coach.achievements}
              imageSrc={coachingMessages.header.images.yao.src}
              backgroundImage={backgroundImages.background}
            />
          )}
        </div>
      ))}
    </main>
  );
}
