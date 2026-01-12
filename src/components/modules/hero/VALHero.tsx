"use client";

import Module from "@/components/modules/Module";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function AnimatedStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars on mount
    const generatedStars: Star[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.6 + 0.2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        >
          {/* 4-pointed star shape using CSS */}
          <svg
            width={star.size * 8}
            height={star.size * 8}
            viewBox="0 0 24 24"
            fill="none"
            style={{ opacity: star.opacity }}
          >
            <path
              d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
              fill="white"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function VALHero() {
  return (
    <Module
      className="h-screen bg-syrio-black"
      backgroundComponent={<AnimatedStars />}
      contentClassName="relative z-10 flex flex-col items-center justify-center h-screen"
    >
      {/* Main VAL Logo */}
      <div className="relative w-full max-w-5xl lg:max-w-6xl aspect-[16/9] flex items-center justify-center">
        <Image
          src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_VAL.png"
          alt="VAL - Victorian Academy League"
          fill
          priority
          className="object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] mt-12 md:mt-20"
        />
      </div>

      {/* Presented By Section */}
      <div className="text-center pb-8 md:pb-12">
        <p className="font-bank-gothic text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 mb-1">
          Presented by
        </p>
        <p className="font-bank-gothic text-xs md:text-sm uppercase tracking-[0.15em] text-white/70">
          SYRIOVOLLEY ACADEMY
        </p>
      </div>
    </Module>
  );
}
