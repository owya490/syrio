"use client";

import { NavigationProvider } from "@/contexts/NavigationContext";
import { SubNavProvider } from "@/contexts/SubNavContext";
import { ReactNode } from "react";
import AppContent from "./AppContent";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <NavigationProvider>
      <SubNavProvider>
        <AppContent>{children}</AppContent>
      </SubNavProvider>
    </NavigationProvider>
  );
}
