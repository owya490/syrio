import { InputHTMLAttributes, forwardRef } from "react";

interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  /** Custom className to append to default styles */
  className?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={`w-full bg-transparent border-b border-syrio-white/30 pb-3 pt-2 text-syrio-white placeholder:text-syrio-white/60 font-montserrat focus:outline-none focus:border-syrio-white/60 transition-colors ${className}`}
      />
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
