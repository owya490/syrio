import { TextareaHTMLAttributes, forwardRef } from "react";

interface MultilineTextInputProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
  /** Custom className to append to default styles */
  className?: string;
}

const MultilineTextInput = forwardRef<
  HTMLTextAreaElement,
  MultilineTextInputProps
>(({ className = "", rows = 4, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      rows={rows}
      {...props}
      className={`w-full bg-transparent border-b border-syrio-white/30 pb-3 pt-2 text-syrio-white placeholder:text-syrio-white/60 font-montserrat focus:outline-none focus:border-syrio-white/60 transition-colors resize-none ${className}`}
    />
  );
});

MultilineTextInput.displayName = "MultilineTextInput";

export default MultilineTextInput;
