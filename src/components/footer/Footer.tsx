import UnifiedLink from "@/components/elements/Link";
import { imageSizes } from "@/config/design";
import Image from "next/image";
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
            <UnifiedLink href="/" className="inline-block group">
              <Image
                src="/branding/logos/LOGO TRANSPARENT_画板 1 副本 17.png"
                alt="Syrio Volley Logo"
                width={imageSizes.navbarLogo.width * 1.5}
                height={imageSizes.navbarLogo.height * 1.5}
                className="w-20 h-20 md:w-20 md:h-20 object-contain group-hover-syrio-white-glow-image transition-all duration-300"
              />
            </UnifiedLink>
          </div>

          {/* Navigation and Social section - upper right */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Navigation Links */}
            <nav className="flex flex-col">
              {navigation.navigationTabs.map((tab) => (
                <UnifiedLink
                  key={tab.route}
                  href={tab.route}
                  className="font-bank-gothic text-sm md:text-base uppercase tracking-wider text-syrio-white hover:text-syrio-white mb-2 last:mb-0 hover-syrio-white-glow"
                >
                  {tab.english}
                </UnifiedLink>
              ))}
            </nav>

            {/* Social Media Icons */}
            <div className="flex items-start gap-4">
              {/* Instagram Icon */}
              <UnifiedLink
                href="https://www.instagram.com/syriovolleyacademy/?hl=en"
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
              </UnifiedLink>

              {/* Facebook Icon */}
              <UnifiedLink
                href="https://www.facebook.com/groups/901217364345574"
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
              </UnifiedLink>

              {/* Link Tree Icon */}
              <UnifiedLink
                href="https://linktr.ee/syriovolleyacademy?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn-hmZ249k9HrfJeRWbJ0gHgITbT71QfLZOOrTJSNW7-9KcDzC23GWkGdem1Q_aem_OA3-fBKuXaXmJrurqScDFw"
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
              </UnifiedLink>
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
            BUILT BY{" "}
            <UnifiedLink
              href="https://compassdigital.app"
              className="hover:underline"
            >
              CDG
            </UnifiedLink>
          </div>
        </div>
      </div>
    </Module>
  );
}
