import { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

export default function ContentContainer({
  children,
  className = "",
}: ContentContainerProps) {
  return (
    <div
      className={`relative z-10 w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
