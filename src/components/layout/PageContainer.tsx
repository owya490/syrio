import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`min-h-screen bg-syrio-black text-syrio-white ${className}`}>
      <div className="container mx-auto px-4 py-16">
        {children}
      </div>
    </div>
  );
}

