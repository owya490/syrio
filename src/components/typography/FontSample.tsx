interface FontSampleProps {
  label: string;
  fontClass: string;
  sampleText: string;
  className?: string;
}

export default function FontSample({ 
  label, 
  fontClass, 
  sampleText,
  className = "" 
}: FontSampleProps) {
  return (
    <div>
      <p className="text-sm text-syrio-pink mb-1">{label}</p>
      <p className={`${fontClass} text-xl text-syrio-white ${className}`}>{sampleText}</p>
    </div>
  );
}

