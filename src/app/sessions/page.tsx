import CardModule from "@/components/modules/cards/CardModule";
import ContentBlockTwo from "@/components/modules/content/ContentBlockTwo";
import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";
import { sessionsMessages } from "./messages";

export default function Sessions() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      <HeroBannerModule
        title={sessionsMessages.hero.title}
        backgroundImage={sessionsMessages.hero.backgroundImage}
      />
      <ContentBlockTwo
        description={sessionsMessages.contentBlock.description}
        ctaLabel={sessionsMessages.contentBlock.ctaLabel}
        ctaHref={sessionsMessages.contentBlock.ctaHref}
        backgroundImage={sessionsMessages.contentBlock.backgroundImage}
        images={sessionsMessages.contentBlock.images}
      />
      <div id="session-cards">
        <CardModule
          title={sessionsMessages.programs.title}
          subtitle={sessionsMessages.programs.subtitle}
          cards={sessionsMessages.programs.cards}
          className="bg-syrio-black"
        />
      </div>
    </main>
  );
}
