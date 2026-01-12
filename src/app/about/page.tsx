import { DecorativeLines } from "@/components/decorative";
import { tracking } from "@/config/design";
import Image from "next/image";
import Link from "next/link";
import { aboutMessages } from "./messages";

export default function AboutUs() {
  return (
    <main className="bg-syrio-black text-syrio-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-24">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          {/* Decorative curved lines - left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 opacity-20">
            <DecorativeLines side="left" preset="fullHeight" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <p
            className={`font-montserrat text-sm tracking-[${tracking.wider}] text-syrio-pink mb-4`}
          >
            {aboutMessages.hero.tagline}
          </p>
          <h1 className="font-bank-gothic text-5xl md:text-7xl tracking-wider mb-6">
            {aboutMessages.hero.title}
          </h1>
          <p className="font-archivo text-lg text-syrio-white/80 max-w-2xl mx-auto">
            {aboutMessages.hero.description}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-syrio-black" />

        {/* Decorative lines - right side */}
        <div className="absolute right-0 top-0 bottom-0 w-24 opacity-20">
          <DecorativeLines side="right" preset="section" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/MULTIMEDIA ASSETS/CLUB/33.png"
                alt="Syrio Player"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side - Text */}
          <div>
            <p
              className={`font-montserrat text-sm tracking-[${tracking.wide}] text-syrio-pink mb-2`}
            >
              {aboutMessages.mission.tagline}
            </p>
            <h2 className="font-bank-gothic text-4xl md:text-5xl tracking-wider mb-6">
              {aboutMessages.mission.title}
              <br />
              {aboutMessages.mission.titleLine2}
            </h2>
            <p className="font-archivo text-syrio-white/80 leading-relaxed mb-6">
              {aboutMessages.mission.paragraph1}
            </p>
            <p className="font-archivo text-syrio-white/80 leading-relaxed mb-6">
              {aboutMessages.mission.paragraph2}
            </p>
            <div className="h-px w-24 bg-syrio-pink" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 px-4 md:px-8">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
            alt="Background"
            fill
            className="object-cover opacity-50"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className={`font-montserrat text-sm tracking-[${tracking.wide}] text-syrio-pink mb-2`}
            >
              {aboutMessages.values.tagline}
            </p>
            <h2 className="font-bank-gothic text-4xl md:text-5xl tracking-wider">
              {aboutMessages.values.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="border-l-4 border-syrio-pink pl-6">
              <h3 className="font-bank-gothic text-2xl tracking-wider mb-4">
                {aboutMessages.values.excellence.title}
              </h3>
              <p className="font-archivo text-syrio-white/80 leading-relaxed">
                {aboutMessages.values.excellence.description}
              </p>
            </div>

            {/* Value 2 */}
            <div className="border-l-4 border-syrio-pink pl-6">
              <h3 className="font-bank-gothic text-2xl tracking-wider mb-4">
                {aboutMessages.values.community.title}
              </h3>
              <p className="font-archivo text-syrio-white/80 leading-relaxed">
                {aboutMessages.values.community.description}
              </p>
            </div>

            {/* Value 3 */}
            <div className="border-l-4 border-syrio-pink pl-6">
              <h3 className="font-bank-gothic text-2xl tracking-wider mb-4">
                {aboutMessages.values.growth.title}
              </h3>
              <p className="font-archivo text-syrio-white/80 leading-relaxed">
                {aboutMessages.values.growth.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-4 md:px-8 bg-syrio-black">
        {/* Decorative lines - left side */}
        <div className="absolute left-0 top-0 bottom-0 w-24 opacity-20">
          <DecorativeLines side="left" preset="section" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              className={`font-montserrat text-sm tracking-[${tracking.wide}] text-syrio-pink mb-2`}
            >
              {aboutMessages.team.tagline}
            </p>
            <h2 className="font-bank-gothic text-4xl md:text-5xl tracking-wider">
              {aboutMessages.team.title}
            </h2>
          </div>

          {/* Team photos grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Women's Team */}
            <div className="relative">
              <div className="relative aspect-4/3 mb-4">
                <Image
                  src="/MULTIMEDIA ASSETS/2025W2/IMG_9402.png"
                  alt="Women's Team"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bank-gothic text-xl tracking-wider">
                {aboutMessages.team.womens.title}
              </h3>
              <p className="font-archivo text-syrio-white/60 text-sm">
                {aboutMessages.team.womens.subtitle}
              </p>
            </div>

            {/* Men's Team */}
            <div className="relative">
              <div className="relative aspect-4/3 mb-4">
                <Image
                  src="/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg"
                  alt="Men's Team"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bank-gothic text-xl tracking-wider">
                {aboutMessages.team.mens.title}
              </h3>
              <p className="font-archivo text-syrio-white/60 text-sm">
                {aboutMessages.team.mens.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
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

        {/* Decorative lines - right side */}
        <div className="absolute right-0 top-0 bottom-0 w-32 opacity-30">
          <DecorativeLines side="right" preset="dense" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p
              className={`font-montserrat text-sm tracking-[${tracking.wide}] text-syrio-pink mb-2`}
            >
              {aboutMessages.timeline.tagline}
            </p>
            <h2 className="font-bank-gothic text-4xl md:text-5xl tracking-wider">
              {aboutMessages.timeline.title}
            </h2>
          </div>

          {/* Timeline items */}
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="font-bank-gothic text-3xl text-syrio-pink w-24 shrink-0">
                {aboutMessages.timeline.year2024.year}
              </div>
              <div>
                <h3 className="font-bank-gothic text-xl tracking-wider mb-2">
                  {aboutMessages.timeline.year2024.title}
                </h3>
                <p className="font-archivo text-syrio-white/80">
                  {aboutMessages.timeline.year2024.description}
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="font-bank-gothic text-3xl text-syrio-pink w-24 shrink-0">
                {aboutMessages.timeline.year2025.year}
              </div>
              <div>
                <h3 className="font-bank-gothic text-xl tracking-wider mb-2">
                  {aboutMessages.timeline.year2025.title}
                </h3>
                <p className="font-archivo text-syrio-white/80">
                  {aboutMessages.timeline.year2025.description}
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="font-bank-gothic text-3xl text-syrio-pink w-24 shrink-0">
                {aboutMessages.timeline.year2026.year}
              </div>
              <div>
                <h3 className="font-bank-gothic text-xl tracking-wider mb-2">
                  {aboutMessages.timeline.year2026.title}
                </h3>
                <p className="font-archivo text-syrio-white/80">
                  {aboutMessages.timeline.year2026.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-syrio-black border-t border-syrio-blue/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`font-bank-gothic text-3xl md:text-4xl tracking-[${tracking.normal}] mb-6`}
          >
            {aboutMessages.cta.title}
          </h2>
          <p className="font-archivo text-syrio-white/80 mb-8 max-w-2xl mx-auto">
            {aboutMessages.cta.description}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-syrio-pink text-syrio-black font-montserrat tracking-wider text-sm px-8 py-3 hover:bg-syrio-white transition-colors"
          >
            {aboutMessages.cta.button}
            <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
