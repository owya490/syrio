"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoadingOverlay() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="fixed z-[200] flex flex-col items-center justify-center bg-syrio-black"
      style={{
        top: "-100px",
        left: 0,
        right: 0,
        bottom: "-100px",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      {/* Background Image */}
      <Image
        src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Loading Logo */}
        <Image
          src="/WEBSITE MATERIAL/2026 SYRIO WEBSITE LOADING.png"
          alt="Loading"
          width={200}
          height={40}
          className="object-contain"
          priority
        />

        {/* Progress Bar */}
        <div className="h-0.5 w-64 bg-white/20 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="h-full bg-white"
          />
        </div>
      </div>
    </motion.div>
  );
}
