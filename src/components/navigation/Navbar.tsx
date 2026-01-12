"use client";

import ContentContainer from "@/components/modules/ContentContainer";
import { imageSizes } from "@/config/design";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DesktopNavbarLinks, DesktopNavbarOverlay } from "./DesktopNavbar";
import { MobileNavbarButton, MobileNavbarOverlay } from "./MobileNavbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubNav, setOpenSubNav] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOverWhiteSection, setIsOverWhiteSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to detect white sections
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    
    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const whiteSections = document.querySelectorAll("[data-white-section]");
      
      if (whiteSections.length === 0) {
        setIsOverWhiteSection(false);
        return;
      }

      const observerOptions = {
        root: null,
        rootMargin: "-96px 0px 0px 0px", // Offset by navbar height (h-24 = 96px)
        threshold: [0, 0.1, 0.5, 1],
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        // Check if any white section is intersecting with the navbar area
        const isIntersecting = entries.some(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0
        );
        setIsOverWhiteSection(isIntersecting);
      };

      observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      whiteSections.forEach((section) => {
        observer!.observe(section);
      });

      // Also check initial state
      whiteSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const navbarHeight = 96; // h-24 = 96px
        if (rect.top <= navbarHeight && rect.bottom > 0) {
          setIsOverWhiteSection(true);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        const whiteSections = document.querySelectorAll("[data-white-section]");
        whiteSections.forEach((section) => {
          observer!.unobserve(section);
        });
      }
    };
  }, []);

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
          openSubNav || hasScrolled || isOverWhiteSection
            ? isOverWhiteSection
              ? "bg-syrio-blue backdrop-blur-md shadow-xl border-b-2 border-syrio-blue/30"
              : "bg-syrio-blue/90 backdrop-blur-sm"
            : ""
        }`}
      >
        <ContentContainer className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-101 shrink-0">
            <Image
              src="/branding/logos/LOGO TRANSPARENT_画板 1 副本 17.png"
              alt="Syrio"
              width={imageSizes.navbarLogo.width}
              height={imageSizes.navbarLogo.height}
              className={`w-16 h-16 md:w-20 md:h-20 object-contain transition-all duration-300 ${
                isOverWhiteSection
                  ? "drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                  : "drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              }`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <DesktopNavbarLinks
            openSubNav={openSubNav}
            setOpenSubNav={setOpenSubNav}
            isOverWhiteSection={isOverWhiteSection}
          />

          {/* Mobile Menu Button */}
          <MobileNavbarButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </ContentContainer>
      </nav>

      {/* Desktop Sub-Navigation Overlay - Outside nav for full-screen */}
      <DesktopNavbarOverlay
        openSubNav={openSubNav}
        setOpenSubNav={setOpenSubNav}
      />

      {/* Mobile Menu Overlay - Outside nav for full-screen */}
      <MobileNavbarOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
