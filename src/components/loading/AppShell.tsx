"use client";

import { ReactNode } from "react";
import { NavigationProvider } from "@/contexts/NavigationContext";
import AppContent from "./AppContent";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <NavigationProvider>
      <AppContent>{children}</AppContent>
    </NavigationProvider>
  );
}
