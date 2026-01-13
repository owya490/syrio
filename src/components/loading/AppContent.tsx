"use client";

import { AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navigation/Navbar";
import LoadingOverlay from "./LoadingOverlay";

export default function AppContent({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading overlay slides up to reveal content */}
      <AnimatePresence>{isLoading && <LoadingOverlay />}</AnimatePresence>
      {/* Site content renders behind the overlay */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
