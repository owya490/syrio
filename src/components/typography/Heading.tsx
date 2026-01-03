import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

const headingStyles = {
  1: "text-4xl font-bold mb-8",
  2: "text-3xl font-bold mb-6",
  3: "text-2xl font-semibold mb-4",
  4: "text-xl font-semibold mb-3",
};

export default function Heading({ 
  children, 
  level = 1, 
  className = "",
  as 
}: HeadingProps) {
  const Component = as || (`h${level}` as "h1" | "h2" | "h3" | "h4");
  const baseStyles = headingStyles[level];
  
  return (
    <Component className={`${baseStyles} ${className}`}>
      {children}
    </Component>
  );
}

