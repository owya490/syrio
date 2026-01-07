"use client";

import { DecorativeLines } from "@/components/decorative";
import { animation, tracking } from "@/config/design";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navMessages } from "./messages";

interface MobileNavbarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function MobileNavbarButton({ isOpen, setIsOpen }: MobileNavbarProps) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative z-[101] flex items-center gap-2 group lg:hidden"
    >
      <span
        className={`font-montserrat text-[10px] tracking-[${tracking.wide}] text-syrio-white group-hover:text-syrio-white transition-colors`}
      >
        {isOpen ? navMessages.menu.close : navMessages.menu.open}
      </span>
      {/* Hamburger icon - transforms to X when open */}
      <div className="flex flex-col justify-center items-center w-4 h-4 relative">
        <span
          className={`absolute block w-4 h-px bg-syrio-white group-hover:bg-syrio-white transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-45" : "-translate-y-1.5"
          }`}
        />
        <span
          className={`absolute block w-4 h-px bg-syrio-white group-hover:bg-syrio-white transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute block w-4 h-px bg-syrio-white group-hover:bg-syrio-white transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-45" : "translate-y-1.5"
          }`}
        />
      </div>
    </button>
  );
}

export function MobileNavbarOverlay({ isOpen, setIsOpen }: MobileNavbarProps) {
  const [mobileSubNav, setMobileSubNav] = useState<string | null>(null);

  // Reset mobile sub nav when menu closes
  useEffect(() => {
    if (!isOpen) {
      setMobileSubNav(null);
    }
  }, [isOpen]);

  const handleMobileTabClick = (
    e: React.MouseEvent,
    tab: (typeof navMessages.navigationTabs)[0]
  ) => {
    e.preventDefault();
    if (tab.subNav) {
      setMobileSubNav(tab.english);
    } else {
      setIsOpen(false);
      window.location.href = `/${tab.route}`;
    }
  };

  const activeMobileSubNav = mobileSubNav
    ? navMessages.navigationTabs.find((tab) => tab.english === mobileSubNav)
    : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: animation.duration.normal }}
          className="fixed inset-0 z-40 bg-syrio-black/95 backdrop-blur-sm lg:hidden"
        >
          {/* Decorative lines - left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 opacity-20">
            <DecorativeLines side="left" preset="fullHeight" />
          </div>

          {/* Decorative lines - right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 opacity-20">
            <DecorativeLines side="right" preset="fullHeight" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center justify-center h-full">
            <AnimatePresence mode="wait">
              {!mobileSubNav ? (
                // Main Navigation Tabs
                <motion.ul
                  key="main-nav"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: animation.stagger,
                      },
                    },
                  }}
                  className="space-y-6 text-center"
                >
                  {navMessages.navigationTabs.map((navTab) => (
                    <motion.li
                      key={navTab.route}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <button
                        onClick={(e) => handleMobileTabClick(e, navTab)}
                        className={`font-bank-gothic text-3xl md:text-5xl tracking-[${tracking.normal}] text-syrio-white hover:text-syrio-white transition-colors duration-300`}
                      >
                        {navTab.english}
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              ) : (
                // Sub Navigation Tabs
                <motion.div
                  key="sub-nav"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: animation.duration.normal }}
                  className="text-center"
                >
                  {/* Back Button */}
                  <button
                    onClick={() => setMobileSubNav(null)}
                    className={`font-montserrat text-sm tracking-[${tracking.wide}] text-syrio-white hover:text-syrio-white transition-colors duration-300 mb-8 flex items-center gap-2 mx-auto`}
                  >
                    <span className="text-lg">←</span>
                    <span>BACK</span>
                  </button>

                  {/* Sub Nav Title */}
                  <h3
                    className={`font-bank-gothic text-xl tracking-[${tracking.normal}] text-syrio-white mb-6`}
                  >
                    {mobileSubNav}
                  </h3>

                  {/* Sub Nav Items */}
                  <ul className="space-y-6">
                    {activeMobileSubNav?.subNav?.map((subItem, index) => (
                      <motion.li
                        key={subItem.route}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * animation.stagger }}
                      >
                        <Link
                          href={`/${subItem.route}`}
                          onClick={() => setIsOpen(false)}
                          className="block"
                        >
                          <Image
                            src={`/${subItem.logo}`}
                            alt={subItem.logo}
                            width={200}
                            height={100}
                            className="w-48 mx-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300"
                          />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: animation.delay.medium }}
              className="absolute bottom-8 left-0 right-0 text-center"
            >
              <p
                className={`font-montserrat text-xs tracking-[${tracking.normal}] text-syrio-white`}
              >
                {navMessages.tagline}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
