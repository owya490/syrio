"use client";

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
  const handleTabClick = (
    e: React.MouseEvent,
    tab: (typeof navigation.navigationTabs)[0],
  ) => {
    e.preventDefault();
    if (tab.subNav) {
      setOpenSubNav(openSubNav === tab.english ? null : tab.english);
    } else if (isExternalLink(tab.route)) {
      window.open(tab.route, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = tab.route;
    }
  };

  return (
    <>
      {/* Desktop Navigation - Hidden on lg and below */}
      <div className="hidden lg:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
        {navigation.navigationTabs.map((tab) => (
          <button
            key={tab.english}
            onClick={(e) => handleTabClick(e, tab)}
            className={`font-bank-gothic text-sm lg:text-base cursor-pointer tracking-[${
              tracking.normal
            }] text-syrio-white uppercase hover:text-syrio-white transition-all duration-300 hover-syrio-white-glow ${
              openSubNav === tab.english ? "syrio-white-glow-active" : ""
            }`}
          >
            {tab.english}
          </button>
        ))}
      </div>

      {/* Language Selector - Hidden on lg and below */}
      {/* <div className="hidden lg:flex items-center shrink-0">
        <button
          className={`font-bank-gothic text-sm lg:text-base cursor-pointer tracking-[${
            tracking.normal
          }] text-syrio-white uppercase hover:text-syrio-white transition-all duration-300 hover-syrio-white-glow ${
            openSubNav === "中文/EN" ? "syrio-white-glow-active" : ""
          }`}
        >
          中文/EN
        </button>
      </div> */}
    </>
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
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{
            duration: animation.duration.slow,
            ease: "easeOut",
          }}
          style={{ willChange: "transform, opacity" }}
          className="fixed top-20 left-0 right-0 bottom-0 z-90 hidden lg:block"
          onClick={() => setOpenSubNav(null)}
        >
          <div className="h-full flex">
            {activeTab.subNav.map((subItem) => {
              const isExternal = isExternalLink(subItem.route);

              return (
                <div
                  key={subItem.logo}
                  className="flex-1 hover:flex-[1.4] relative group cursor-pointer overflow-hidden transition-[flex-grow] duration-300 ease-out"
                  style={{ willChange: "flex-grow" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isExternal) {
                      window.open(
                        subItem.route,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    } else {
                      window.location.href = subItem.route;
                    }
                  }}
                >
                  {/* Background image — opacity fade is GPU-composited */}
                  <div className="absolute inset-0">
                    <Image
                      src={subItem.image}
                      alt={subItem.logo}
                      fill
                      sizes="33vw"
                      className="object-cover opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ willChange: "opacity" }}
                    />
                    {/* Dark overlay fades out on hover — opacity is GPU-composited */}
                    <div className="absolute inset-0 bg-syrio-black/40 group-hover:bg-syrio-black/20 transition-opacity duration-300" />
                  </div>

                  {/* Logo — scale transform is GPU-composited */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={`/${subItem.logo}`}
                      alt={subItem.logo}
                      width={200}
                      height={100}
                      sizes="(max-width: 1280px) 192px, 256px"
                      className="w-48 lg:w-64 object-contain transition-transform duration-300 group-hover:scale-105"
                      style={{ willChange: "transform" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
