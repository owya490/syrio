import UnifiedLink from "@/components/elements/Link";
import Module from "@/components/modules/Module";
import { imageSizes } from "@/config/design";
import { backgroundImages } from "@/config/images";
import Image from "next/image";

export default function SocialContactModule() {
  return (
    <Module
      className="py-10 md:py-16 bg-syrio-blue"
      backgroundImage={backgroundImages.background}
      backgroundImageAlt="Social contact background"
      contentClassName="px-4 md:px-8"
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        {/* Logo and SYRIOVOLLEY text */}
        <div className="flex items-center justify-center gap-2 md:gap-6 mb-8">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/branding/logos/LOGO TRANSPARENT_画板 1 副本 17.png"
              alt="Syrio Volley Logo"
              width={imageSizes.navbarLogo.width * 2}
              height={imageSizes.navbarLogo.height * 2}
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
            />
          </div>

          {/* SYRIOVOLLEY text */}
          <h2 className="font-geek-trend text-md md:text-xl lg:text-2xl text-syrio-white tracking-wide whitespace-nowrap hover-syrio-white-glow">
            SYRIOVOLLEY
          </h2>
        </div>

        {/* Social Icons and Handle */}
        <div className="flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
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
                className="w-6 h-6 md:w-8 md:h-8 brightness-0 invert group-hover-syrio-white-glow-image"
              />
            </UnifiedLink>

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
                className="w-6 h-6 md:w-8 md:h-8 brightness-0 invert group-hover-syrio-white-glow-image"
              />
            </UnifiedLink>

            {/* Link Tree / Star Icon */}
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
                className="w-6 h-6 md:w-8 md:h-8 brightness-0 invert group-hover-syrio-white-glow-image"
              />
            </UnifiedLink>
          </div>

          {/* @SYRIOVOLLEY handle */}
          <p className="font-bank-gothic text-sm md:text-base text-syrio-white tracking-wider hover-syrio-white-glow cursor-pointer">
            @SYRIOVOLLEY
          </p>
        </div>
      </div>
    </Module>
  );
}
