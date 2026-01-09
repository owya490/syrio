interface HeroCurvedLinesProps {
  side: "left" | "right";
  className?: string;
}

export default function HeroCurvedLines({ side, className = "" }: HeroCurvedLinesProps) {
  const mirrorClass = side === "right" ? "transform scale-x-[-1]" : "";

  return (
    <svg
      viewBox="0 0 100 200"
      className={`w-full h-full stroke-syrio-white fill-none ${mirrorClass} ${className}`}
    >
      <path d="M 80 0 Q 0 100 80 200" strokeWidth="0.5" />
      <path d="M 85 0 Q 5 100 85 200" strokeWidth="0.5" />
      <path d="M 90 0 Q 10 100 90 200" strokeWidth="0.5" />
      <path d="M 95 0 Q 15 100 95 200" strokeWidth="0.5" />
    </svg>
  );
}

