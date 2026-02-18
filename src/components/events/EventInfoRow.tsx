"use client";

import { ReactNode } from "react";

interface EventInfoRowProps {
  icon: ReactNode;
  label: string;
  value: string | ReactNode;
  className?: string;
}

export default function EventInfoRow({
  icon,
  label,
  value,
  className = "",
}: EventInfoRowProps) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="flex-shrink-0 text-syrio-white/80 w-5 h-5 mt-0.5">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-archivo text-xs text-syrio-white/60 uppercase tracking-wider mb-1">
          {label}
        </p>
        {typeof value === "string" ? (
          <p className="font-archivo text-sm text-syrio-white/90 leading-relaxed">
            {value}
          </p>
        ) : (
          <div className="font-archivo text-sm text-syrio-white/90 leading-relaxed">
            {value}
          </div>
        )}
      </div>
    </div>
  );
}
