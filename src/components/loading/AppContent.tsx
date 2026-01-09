"use client";

import { ReactNode, useEffect, useState } from "react";
import Navbar from "../navigation/Navbar";
import LoadingOverlay from "./LoadingOverlay";

export default function AppContent({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingOverlay />
      ) : (
        <>
          <Navbar />
          {children}
        </>
      )}
    </>
  );
}
