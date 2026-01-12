import { imageSizes } from "@/config/design";
import Image from "next/image";
import Link from "next/link";
import Module from "../modules/Module";
import { navigation } from "../navigation/navigation";

export default function Footer() {
  return (
    <Module
      className="bg-syrio-black text-syrio-white"
      contentClassName="pt-8 md:pt-16 pb-8"
    >
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-syrio-white opacity-30" />

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 mb-12">
          {/* Logo section - upper left */}
          <div className="shrink-0 hidden md:block">
            <Link href="/" className="inline-block">
              <Image
                src="/branding/logos/LOGO TRANSPARENT_画板 1 副本 17.png"
                alt="Syrio Volley Logo"
                width={imageSizes.navbarLogo.width * 1.5}
                height={imageSizes.navbarLogo.height * 1.5}
                className="w-20 h-20 md:w-20 md:h-20 object-contain"
              />
            </Link>
          </div>

          {/* Navigation and Social section - upper right */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Navigation Links */}
            <nav className="flex flex-col">
              {navigation.navigationTabs.map((tab) => (
                <Link
                  key={tab.route}
                  href={tab.route}
                  className="font-bank-gothic text-sm md:text-base uppercase tracking-wider text-syrio-white hover:text-syrio-white mb-2 last:mb-0 hover-syrio-white-glow"
                >
                  {tab.english}
                </Link>
              ))}
            </nav>

            {/* Social Media Icons */}
            <div className="flex items-start gap-4">
              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group transition-all duration-300"
              >
                <Image
                  src="/svg/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6 brightness-0 invert group-hover-syrio-white-glow-image"
                />
              </a>

              {/* Facebook Icon */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group transition-all duration-300"
              >
                <Image
                  src="/svg/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="w-6 h-6 brightness-0 invert group-hover-syrio-white-glow-image"
                />
              </a>

              {/* Link Tree Icon */}
              <a
                href="#"
                aria-label="Link Tree"
                className="group transition-all duration-300"
              >
                <Image
                  src="/svg/link-tree.svg"
                  alt="Link Tree"
                  width={24}
                  height={24}
                  className="w-6 h-6 brightness-0 invert group-hover-syrio-white-glow-image"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-syrio-white/10">
          {/* Copyright - bottom left */}
          <div className="flex flex-col text-xs text-syrio-white">
            <div className="font-bank-gothic uppercase tracking-wider">
              ALL RIGHTS RESERVED
            </div>
            <div className="font-montserrat mt-1">© SYRIOVOLLEY 2026</div>
          </div>

          {/* Developer attribution - bottom right */}
          <div className="text-xs text-syrio-white font-montserrat">
            BUILT BY CDG
          </div>
        </div>
      </div>
    </Module>
  );
}
