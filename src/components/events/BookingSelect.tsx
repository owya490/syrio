"use client";

import { ReactNode } from "react";

const SELECT_CHEVRON = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.9)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`;

const selectClassName =
  "font-archivo w-full text-syrio-white bg-syrio-black/50 border border-syrio-white/20 rounded-lg pl-4 pr-12 py-2 focus:outline-none focus:border-syrio-white/40 disabled:opacity-50 disabled:cursor-not-allowed [&>option]:bg-syrio-black [&>option]:text-syrio-white appearance-none bg-no-repeat bg-[length:1.25rem_1.25rem] bg-[right_1rem_center]";

interface BookingSelectProps {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  children: ReactNode;
}

export default function BookingSelect({
  id,
  label,
  value,
  disabled = false,
  onChange,
  children,
}: BookingSelectProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="font-archivo text-sm text-syrio-white/80 block mb-2"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={selectClassName}
        style={{ backgroundImage: SELECT_CHEVRON }}
      >
        {children}
      </select>
    </div>
  );
}
