"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navMessages } from "./messages";
import { DecorativeLines } from "@/components/decorative";
import { imageSizes, animation, tracking } from "@/config/design";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 px-4 z-100 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-100">
          <Image
            src="/branding/logos/LOGO TRANSPARENT_画板 1 副本 17.png"
            alt="Syrio"
            width={imageSizes.navbarLogo.width}
            height={imageSizes.navbarLogo.height}
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
        </Link>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-100 flex items-center gap-2 group"
        >
          <span className={`font-montserrat text-[10px] tracking-[${tracking.wide}] text-syrio-white group-hover:text-syrio-pink transition-colors`}>
            {isOpen ? navMessages.menu.close : navMessages.menu.open}
          </span>
          {/* Hamburger icon - transforms to X when open */}
          <div className="flex flex-col justify-center items-center w-4 h-4 relative">
            <span className={`absolute block w-4 h-px bg-syrio-pink group-hover:bg-syrio-white transition-all duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute block w-4 h-px bg-syrio-pink group-hover:bg-syrio-white transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute block w-4 h-px bg-syrio-pink group-hover:bg-syrio-white transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-1.5"}`} />
          </div>
        </button>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: animation.duration.normal }}
            className="fixed inset-0 z-40 bg-syrio-black/95 backdrop-blur-sm"
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
              <motion.ul
                initial="hidden"
                animate="visible"
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
                {navMessages.links.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-bank-gothic text-3xl md:text-5xl tracking-[${tracking.normal}] text-syrio-white hover:text-syrio-pink transition-colors duration-300`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Bottom info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: animation.delay.medium }}
                className="absolute bottom-8 left-0 right-0 text-center"
              >
                <p className={`font-montserrat text-xs tracking-[${tracking.normal}] text-syrio-pink`}>
                  {navMessages.tagline}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
