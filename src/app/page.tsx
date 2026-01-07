import Image from "next/image";
import Link from "next/link";
import { homeMessages } from "./messages";
import { tracking } from "@/config/design";
import { SyrioLogo } from "@/components/branding";

export default function Home() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background with team photo */}
        <div className="absolute inset-0">
          <Image
            src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_HOME PAGE.png"
            alt="Team Background"
            fill
            priority
            className="object-cover opacity-40"
          />
          {/* Decorative accent lines */}
          <div className="absolute -top-1/4 -left-5/12 w-full h-full pointer-events-none -rotate-30">
            <Image
              src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GOLD ACCENT_SHOP 副本.png"
              alt=""
              fill
              className="object-contain opacity-30"
            />
          </div>
        </div>
        
        {/* Logo and text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <SyrioLogo size="lg" />
        </div>
      </section>

      {/* About Section - Spark Your Rise */}
      <section className="relative py-20 px-4 md:px-8 overflow-visible">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Decorative accent lines - positioned to overflow into next section */}
        <div className="absolute top-1/10 -right-13/16 w-[160%] h-[160%] pointer-events-none -rotate-95 scale-y-[-1] z-20">
          <Image
            src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GOLD ACCENT_SHOP 副本.png"
            alt=""
            fill
            className="object-contain opacity-30"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-[40%_60%] gap-8 items-center">
          {/* Left side - Promo image - pulled up into hero */}
          <div className="relative -mt-[32vh] -ml-75">
            <div className="relative w-[1200px] h-[1200px]">
              <Image
                src="/MULTIMEDIA ASSETS/2025M2/2026 promo.png"
                alt="Syrio 2026 Promo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="text-left -mt-[16vh] space-y-6 ">
            <p className={`font-bank-gothic text-5xl tracking-[${tracking.widest}] -ml-14`}>{homeMessages.about.tagline}</p>
            <h2 className="font-geek-trend text-7xl md:text-7xl font-bold tracking-wider">
              {homeMessages.about.title}
            </h2>
            <p className={`font-bank-gothic text-5xl tracking-[${tracking.normal}] text-syrio-white ml-28`}>{homeMessages.about.subtitle}</p>
            
            <div className="flex items-stretch gap-10 max-w-2xl">
              {/* Photo */}
              <div className="relative w-72 shrink-0 py-2 -ml-6">
                <div className="relative w-full h-full">
                  <Image
                    src="/WEBSITE MATERIAL/TEMP HOME PHOTO.png"
                    alt="Syrio Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Text content */}
              <div className="flex flex-col justify-between">
                <p className="font-archivo text-base text-syrio-white/80 leading-relaxed max-w-md text-justify mx-4">
                  {homeMessages.about.description}
                </p>
                
                <Link href="/about-us" className="group font-montserrat tracking-wider text-lg hover:text-syrio-white transition-colors mx-4">
                  <span className="border-b border-transparent group-hover:border-current pb-px">
                    {homeMessages.about.cta} <span className="text-3xl">→</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sessions Section */}
      <section className="relative py-20 px-4 md:px-8 bg-syrio-black">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className={`font-bank-gothic text-2xl md:text-3xl tracking-[${tracking.wide}] mb-8`}>
            {homeMessages.sessions.title}<br />{homeMessages.sessions.titleLine2}
          </h2>
          
          {/* Session image */}
          <div className="relative mx-auto w-full max-w-lg aspect-4/3 mb-12 border-l-4 border-syrio-pink">
            <Image
              src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE__SESSIONS.png"
              alt="Public Sessions"
              fill
              className="object-cover object-top"
            />
          </div>
          
          {/* Development text */}
          <div className="text-left border-l-4 border-syrio-pink pl-6">
            <h3 className="font-bank-gothic text-2xl md:text-3xl tracking-wider italic">
              {homeMessages.sessions.development}<br />{homeMessages.sessions.developmentLine2}
            </h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 md:px-8">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className={`font-bank-gothic text-3xl md:text-4xl tracking-[${tracking.normal}]`}>
            {homeMessages.contact.title}
          </h2>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 md:px-8 bg-syrio-black border-t border-syrio-blue/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-montserrat text-2xl tracking-wider">{homeMessages.partners.title}</h3>
        </div>
      </section>
    </main>
  );
}
