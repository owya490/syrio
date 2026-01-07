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

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
          openSubNav || hasScrolled ? "bg-syrio-blue/90 backdrop-blur-sm" : ""
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
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <DesktopNavbarLinks
            openSubNav={openSubNav}
            setOpenSubNav={setOpenSubNav}
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
