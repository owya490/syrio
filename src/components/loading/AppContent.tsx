"use client";

import { ReactNode } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navigation/Navbar";

export default function AppContent({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
