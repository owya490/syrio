import { isExternalLink } from "@/utils/links";
import Link from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  [key: string]: any; // Allow other props to be passed through
}

/**
 * A unified Link component that automatically handles both internal and external links.
 */
export default function UnifiedLink({
  href,
  children,
  className = "",
  onClick,
  ...otherProps
}: LinkProps) {
  const isExternal = isExternalLink(href);

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

  return (
    <Link href={href} className={className} onClick={onClick} {...otherProps}>
      {children}
    </Link>
  );
}
