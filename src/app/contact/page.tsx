import ContactModule from "@/components/modules/contact/ContactModule";
import HeroBannerModule from "@/components/modules/hero/HeroBannerModule";
import { contactMessages } from "./messages";

export default function Contact() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      <HeroBannerModule title={contactMessages.hero.title} />
      <ContactModule />
    </main>
  );
}
