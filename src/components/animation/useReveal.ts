"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseRevealOptions {
  /** Fire only once (default true) */
  once?: boolean;
  /** Intersection threshold 0–1 (default 0.2) */
  amount?: number;
  /** Use the mount-delayed pattern for above-fold heroes */
  hero?: boolean;
}

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return reduced;
}

/**
 * Encapsulates ref + IntersectionObserver + optional isMounted hero logic.
 * Uses native IntersectionObserver instead of framer-motion for GPU-friendly perf.
 */
export function useReveal({
  once = true,
  amount = 0.2,
  hero = false,
}: UseRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [isMounted, setIsMounted] = useState(!hero);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        }
      },
      { threshold: amount },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [amount, once]);

  useEffect(() => {
    if (!hero) return;
    const timer = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timer);
  }, [hero]);

  const isRevealed = prefersReducedMotion || (isMounted && inView);

  return { ref, isInView: isRevealed, prefersReducedMotion };
}
