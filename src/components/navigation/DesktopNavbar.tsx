"use client";

import UnifiedLink from "@/components/elements/Link";
import { animation, tracking } from "@/config/design";
import { isExternalLink } from "@/utils/links";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { navigation } from "./navigation";

interface DesktopNavbarProps {
  openSubNav: string | null;
  setOpenSubNav: (value: string | null) => void;
}

export function DesktopNavbarLinks({
  openSubNav,
  setOpenSubNav,
}: DesktopNavbarProps) {
  const linkClass = (isActive: boolean) =>
    `font-bank-gothic text-sm lg:text-base tracking-[${tracking.normal}] text-syrio-white uppercase hover:text-syrio-white transition-all duration-300 hover-syrio-white-glow${isActive ? " syrio-white-glow-active" : ""}`;

  return (
    <div className="hidden lg:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
      {navigation.navigationTabs.map((tab) => {
        // Tabs with a submenu need a button to toggle the panel
        if (tab.subNav) {
          return (
            <button
              key={tab.english}
              onClick={() =>
                setOpenSubNav(openSubNav === tab.english ? null : tab.english)
              }
              className={`cursor-pointer ${linkClass(openSubNav === tab.english)}`}
            >
              {tab.english}
            </button>
          );
        }

        // All other tabs are real links — proper SPA navigation + right-click support
        return (
          <UnifiedLink
            key={tab.english}
            href={tab.route}
            className={linkClass(false)}
          >
            {tab.english}
          </UnifiedLink>
        );
      })}
    </div>
  );
}

export function DesktopNavbarOverlay({
  openSubNav,
  setOpenSubNav,
}: DesktopNavbarProps) {
  const activeTab = openSubNav
    ? navigation.navigationTabs.find((tab) => tab.english === openSubNav)
    : null;

  return (
    <AnimatePresence mode="wait">
      {openSubNav && activeTab?.subNav && (
        <motion.div
          key={openSubNav}
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: animation.duration.slow, ease: "easeOut" }}
          className="fixed top-20 left-0 right-0 bottom-0 z-90 hidden lg:block"
          onClick={() => setOpenSubNav(null)}
        >
          <div className="h-full flex">
            {activeTab.subNav.map((subItem) => (
              // Wrapper stops propagation so the backdrop onClick doesn't fire
              <div
                key={subItem.logo}
                className="flex-1 hover:flex-[1.4] relative group overflow-hidden transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={subItem.image}
                    alt={subItem.logo}
                    fill
                    sizes="33vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-syrio-black/40 group-hover:bg-syrio-black/20 transition-all duration-300" />
                </div>

                {/* Logo */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Image
                    src={`/${subItem.logo}`}
                    alt={subItem.logo}
                    width={200}
                    height={100}
                    sizes="(max-width: 1280px) 192px, 256px"
                    className="w-48 lg:w-64 object-contain group-hover-syrio-white-glow-image transition-all duration-300"
                  />
                </div>

                {/* Full-area link — sits on top and handles navigation */}
                <UnifiedLink
                  href={subItem.route}
                  className="absolute inset-0 z-10"
                  aria-label={subItem.logo}
                >{""}</UnifiedLink>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
