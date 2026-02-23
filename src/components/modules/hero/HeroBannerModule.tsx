"use client";

import Module from "@/components/modules/Module";
import { animation } from "@/config/design";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface HeroBannerModuleProps {
  title: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundComponent?: ReactNode;
}

export default function HeroBannerModule({
  title,
  backgroundImage = "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
  backgroundImageAlt = "Hero banner background",
  backgroundComponent,
}: HeroBannerModuleProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger animation on mount (hard page refresh) with a delay for visibility
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const easing = [0.4, 0, 0.2, 1] as const;

  return (
    <Module
      className="h-48 md:min-h-[20vh] relative"
      backgroundImage={backgroundImage}
      backgroundImageAlt={backgroundImageAlt}
      backgroundImageClassName="object-cover"
      backgroundImagePriority={true}
      backgroundComponent={
        backgroundComponent || (
          <div className="absolute inset-0 bg-syrio-black/60" />
        )
      }
      contentClassName="h-full flex items-end pb-4"
    >
      <motion.h1
        className="font-bank-gothic text-3xl md:text-4xl lg:text-5xl text-syrio-white uppercase tracking-wider"
        initial={false}
        animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{
          duration: 0.8,
          ease: easing,
        }}
        style={{ opacity: 0, y: 60 }}
      >
        {title}
      </motion.h1>
    </Module>
  );
}
