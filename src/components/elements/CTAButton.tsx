import { ReactNode } from "react";
import UnifiedLink from "./Link";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function CTAButton({
  href,
  children,
  className = "",
}: CTAButtonProps) {
  return (
    <UnifiedLink
      href={href}
      className={`inline-flex items-center gap-2 bg-syrio-white text-syrio-black font-montserrat font-bold tracking-wider text-sm px-8 py-3 border-2 border-syrio-white hover-syrio-glow-white hover:bg-transparent ${className}`}
    >
      {children}
    </UnifiedLink>
  );
}
