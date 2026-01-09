import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface SubmitButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  /** Custom className to append to default styles */
  className?: string;
}

const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ children, className = "", type = "submit", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        {...props}
        className={`w-full border border-syrio-white/50 py-3 px-8 font-montserrat tracking-wider text-syrio-white hover:bg-syrio-white hover:text-syrio-blue transition-all duration-300 cursor-pointer ${className}`}
      >
        {children}
      </button>
    );
  }
);

SubmitButton.displayName = "SubmitButton";

export default SubmitButton;
