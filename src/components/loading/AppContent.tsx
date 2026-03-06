"use client";

import { ReactNode, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navigation/Navbar";
import { AnimatePresence } from "framer-motion";
import LoadingOverlay from "./LoadingOverlay";
import { useNavigation } from "@/contexts/NavigationContext";
import { usePathname } from "next/navigation";
import {
  getPreloadUrls,
  NAVBAR_DROPDOWN_PRELOADS,
} from "@/config/preloadImages";
import { preloadImages } from "@/utils/preloadImages";

export default function AppContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { isNavigating } = useNavigation();
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const routeUrls = getPreloadUrls(pathname);
    preloadImages([...NAVBAR_DROPDOWN_PRELOADS, ...routeUrls]);

    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const showOverlay = isInitialLoading || isNavigating;

  return (
    <>
      <AnimatePresence>{showOverlay && <LoadingOverlay />}</AnimatePresence>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
