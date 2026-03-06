"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { getPreloadUrls } from "@/config/preloadImages";
import { preloadImages } from "@/utils/preloadImages";

const NAV_MIN_MS = 350;
const NAV_MAX_MS = 1500;

interface NavigationContextValue {
  isNavigating: boolean;
  startNavigation: (href: string) => void;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return ctx;
}

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const targetPathRef = useRef<string | null>(null);
  const startTimeRef = useRef<number>(0);
  const preloadPromiseRef = useRef<Promise<void> | null>(null);

  const startNavigation = useCallback((href: string) => {
    const normalized = href.replace(/#.*$/, "").replace(/\/$/, "") || "/";
    targetPathRef.current = normalized;
    startTimeRef.current = Date.now();
    const urls = getPreloadUrls(normalized);
    preloadPromiseRef.current =
      urls.length > 0 ? preloadImages(urls) : Promise.resolve();
    setIsNavigating(true);
  }, []);

  useEffect(() => {
    if (!isNavigating || !targetPathRef.current) return;

    const target = targetPathRef.current;

    const pathMatches = () => {
      const current = pathname.replace(/\/$/, "") || "/";
      if (current === target) return true;
      if (target.startsWith("/event/") && current.startsWith("/event/"))
        return true;
      return false;
    };

    if (!pathMatches()) return;

    const elapsed = Date.now() - startTimeRef.current;
    const remainingMin = Math.max(0, NAV_MIN_MS - elapsed);
    const remainingMax = Math.max(remainingMin, NAV_MAX_MS - elapsed);

    const preloadPromise = preloadPromiseRef.current ?? Promise.resolve();
    const timeoutPromise = new Promise<void>((resolve) =>
      setTimeout(resolve, remainingMax),
    );

    Promise.race([preloadPromise, timeoutPromise]).then(() => {
      targetPathRef.current = null;
      preloadPromiseRef.current = null;
      setIsNavigating(false);
    });
  }, [isNavigating, pathname]);

  return (
    <NavigationContext.Provider value={{ isNavigating, startNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
}
