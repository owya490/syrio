"use client";

import { useCallback, useState } from "react";

interface ChrisEasterEggProps {
  name: string;
  className?: string;
}

const COLORS = ["#ffffff", "#d39ca6", "#ffd700", "#87ceeb"];

export default function ChrisEasterEgg({
  name,
  className = "",
}: ChrisEasterEggProps) {
  const [clickCount, setClickCount] = useState(0);
  const [showFirework, setShowFirework] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (name.toUpperCase() !== "CHRIS") return;

      e.preventDefault();
      e.stopPropagation();

      const newCount = clickCount + 1;
      setClickCount(newCount);

      if (newCount >= 3) {
        setShowFirework(true);
        setClickCount(0);
        setTimeout(() => setShowFirework(false), 1200);
      }
    },
    [name, clickCount],
  );

  if (name.toUpperCase() !== "CHRIS") {
    return <span className={className}>{name}</span>;
  }

  return (
    <span className="relative inline-block">
      <span onClick={handleClick} className={className} aria-label="Chris">
        {name}
      </span>

      {showFirework && (
        <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * 360;
            const rad = (angle * Math.PI) / 180;
            const tx = Math.cos(rad) * 100;
            const ty = Math.sin(rad) * 100;
            const color = COLORS[i % COLORS.length];
            return (
              <div
                key={i}
                className="absolute h-2 w-2 rounded-full animate-chris-firework"
                style={{
                  backgroundColor: color,
                  ["--tx" as string]: `${tx}px`,
                  ["--ty" as string]: `${ty}px`,
                }}
              />
            );
          })}
        </div>
      )}
    </span>
  );
}
