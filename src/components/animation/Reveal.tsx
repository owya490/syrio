"use client";

import { animation } from "@/config/design";
import { type CSSProperties, type ReactNode } from "react";
import { useReveal } from "./useReveal";

type Direction = "up" | "down" | "left" | "right" | "none" | "scale";

interface RevealProps {
  children?: ReactNode;
  /** Animation direction (default "up") */
  direction?: Direction;
  /** Stagger multiplier applied to `animation.stagger` (default 0) */
  delay?: number;
  /** Pixel / scale offset (default 30 for directional, 0.9 for scale) */
  distance?: number;
  /** Transition duration override (default animation.duration.slow) */
  duration?: number;
  /** Use mount-delayed pattern for above-fold heroes */
  hero?: boolean;
  /** Fire only once (default true) */
  once?: boolean;
  /** Intersection threshold 0–1 (default 0.2) */
  amount?: number;
  className?: string;
  style?: CSSProperties;
}

const EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

function getTransform(direction: Direction, distance: number, revealed: boolean): string {
  if (revealed) {
    return direction === "scale" ? "scale(1)" : "translate3d(0,0,0)";
  }
  switch (direction) {
    case "up":
      return `translate3d(0,${distance}px,0)`;
    case "down":
      return `translate3d(0,${-distance}px,0)`;
    case "left":
      return `translate3d(${-distance}px,0,0)`;
    case "right":
      return `translate3d(${distance}px,0,0)`;
    case "scale":
      return `scale(${distance})`;
    case "none":
      return "none";
  }
}

function defaultDistance(direction: Direction): number {
  return direction === "scale" ? 0.9 : 30;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  distance,
  duration = animation.duration.slow,
  hero = false,
  once = true,
  amount = 0.2,
  className,
  style,
}: RevealProps) {
  const { ref, isInView, prefersReducedMotion } = useReveal({ once, amount, hero });

  const dist = distance ?? defaultDistance(direction);
  const delaySeconds = delay * animation.stagger;

  const computedStyle: CSSProperties = {
    ...style,
    opacity: isInView ? 1 : 0,
    transform: direction !== "none" ? getTransform(direction, dist, isInView) : undefined,
    willChange: isInView ? "auto" : "transform, opacity",
    transition: prefersReducedMotion
      ? "none"
      : `opacity ${duration}s ${EASING} ${delaySeconds}s, transform ${duration}s ${EASING} ${delaySeconds}s`,
  };

  return (
    <div ref={ref} className={className} style={computedStyle}>
      {children}
    </div>
  );
}
