"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function LoadingOverlay() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
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
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-white"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
