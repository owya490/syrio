"use client";

import { animation, tracking } from "@/config/design";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { navMessages } from "./messages";

interface DesktopNavbarProps {
  openSubNav: string | null;
  setOpenSubNav: (value: string | null) => void;
}

export function DesktopNavbarLinks({
  openSubNav,
  setOpenSubNav,
}: DesktopNavbarProps) {
  const handleTabClick = (
    e: React.MouseEvent,
    tab: (typeof navMessages.navigationTabs)[0]
  ) => {
    e.preventDefault();
    if (tab.subNav) {
      setOpenSubNav(openSubNav === tab.english ? null : tab.english);
    } else {
      const href = `/${tab.route}`;
      window.location.href = href;
    }
  };

  return (
    <>
      {/* Desktop Navigation - Hidden on lg and below */}
      <div className="hidden lg:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
        {navMessages.navigationTabs.map((tab) => (
          <button
            key={tab.english}
            onClick={(e) => handleTabClick(e, tab)}
            className={`font-bank-gothic text-sm lg:text-base tracking-[${
              tracking.normal
            }] text-syrio-white uppercase hover:text-syrio-white transition-all duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] ${
              openSubNav === tab.english
                ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                : ""
            }`}
          >
            {tab.english}
          </button>
        ))}
      </div>

      {/* Language Selector - Hidden on lg and below */}
      <div className="hidden lg:flex items-center shrink-0">
        <button
          className={`font-bank-gothic text-sm lg:text-base tracking-[${tracking.normal}] text-syrio-white uppercase hover:text-syrio-white transition-all duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]`}
        >
          中文/EN
        </button>
      </div>
    </>
  );
}

export function DesktopNavbarOverlay({
  openSubNav,
  setOpenSubNav,
}: DesktopNavbarProps) {
  const activeTab = openSubNav
    ? navMessages.navigationTabs.find((tab) => tab.english === openSubNav)
    : null;

  return (
    <AnimatePresence mode="wait">
      {openSubNav && activeTab?.subNav && (
        <motion.div
          key={openSubNav}
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{
            duration: animation.duration.slow,
            ease: "easeOut",
          }}
          className="fixed top-20 md:top-24 left-0 right-0 bottom-0 z-[90] hidden lg:block"
          onClick={() => setOpenSubNav(null)}
        >
          <div className="h-full flex">
            {activeTab.subNav.map((subItem) => (
              <div
                key={subItem.logo}
                className="flex-[1] hover:flex-[1.4] relative group cursor-pointer overflow-hidden transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = `/${subItem.route}`;
                }}
              >
                {/* Image with grayscale filter */}
                <div className="absolute inset-0">
                  <Image
                    src={subItem.image}
                    alt={subItem.logo}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-syrio-black/40 group-hover:bg-syrio-black/20 transition-all duration-300" />
                </div>

                {/* Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={`/${subItem.logo}`}
                    alt={subItem.logo}
                    width={200}
                    height={100}
                    className="w-48 md:w-48 lg:w-64 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
