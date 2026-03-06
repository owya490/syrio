import ContentBlockTwo from "@/components/modules/content/ContentBlockTwo";
import VALHero from "@/components/modules/hero/VALHero";
import SocialContactModule from "@/components/modules/misc/SocialContactModule";
import { links } from "@/config/links";
import { valMessages } from "./messages";

export default function VALPage() {
  return (
    <main>
      <VALHero />
      <ContentBlockTwo
        description={valMessages.contentBlock.description}
        ctaLabel={valMessages.contentBlock.ctaLabel}
        ctaHref={links.forms.valRegistration}
        backgroundImage={valMessages.contentBlock.backgroundImage}
        images={valMessages.contentBlock.images}
      />
      <SocialContactModule />
    </main>
  );
}
