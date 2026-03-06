"use client";

import { isExternalLink } from "@/utils/links";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useNavigation } from "@/contexts/NavigationContext";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  [key: string]: any;
}

/**
 * A unified Link component that automatically handles both internal and external links.
 * For internal links, triggers the loading overlay and image preload on click.
 */
export default function UnifiedLink({
  href,
  children,
  className = "",
  onClick,
  ...otherProps
}: LinkProps) {
  const isExternal = isExternalLink(href);
  const pathname = usePathname();
  const { startNavigation } = useNavigation();

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </a>
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    const normalized = href.replace(/#.*$/, "").replace(/\/$/, "") || "/";
    const current = pathname.replace(/\/$/, "") || "/";
    if (normalized !== current) {
      startNavigation(href);
    }
    onClick?.();
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...otherProps}>
      {children}
    </Link>
  );
}
