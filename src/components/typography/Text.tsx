import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  size?: "lg" | "base" | "sm" | "xs";
  className?: string;
  as?: "p" | "span" | "div";
}

const textStyles = {
  lg: "text-lg text-syrio-white",
  base: "text-base text-syrio-white",
  sm: "text-sm text-syrio-pink",
  xs: "text-sm text-syrio-pink",
};

export default function Text({ 
  children, 
  size = "lg",
  className = "",
  as = "p"
}: TextProps) {
  const Component = as;
  const baseStyles = textStyles[size];
  
  return (
    <Component className={`${baseStyles} ${className}`}>
      {children}
    </Component>
  );
}

