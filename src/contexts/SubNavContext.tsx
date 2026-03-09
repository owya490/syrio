"use client";

import { createContext, useContext, useState } from "react";

interface SubNavContextValue {
  openSubNav: string | null;
  setOpenSubNav: (value: string | null) => void;
}

const SubNavContext = createContext<SubNavContextValue | null>(null);

export function useSubNav() {
  const ctx = useContext(SubNavContext);
  if (!ctx) {
    throw new Error("useSubNav must be used within SubNavProvider");
  }
  return ctx;
}

export function SubNavProvider({ children }: { children: React.ReactNode }) {
  const [openSubNav, setOpenSubNav] = useState<string | null>(null);
  return (
    <SubNavContext.Provider value={{ openSubNav, setOpenSubNav }}>
      {children}
    </SubNavContext.Provider>
  );
}
