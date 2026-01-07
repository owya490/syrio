import { decorativeLines } from "@/config/design";

type DecorativePreset = keyof typeof decorativeLines;

interface DecorativeLinesProps {
  side: "left" | "right";
  /** Use a preset configuration or provide custom values */
  preset?: DecorativePreset;
  /** Override line count (only if not using preset) */
  lineCount?: number;
  /** Override viewBox height (only if not using preset) */
  viewBoxHeight?: number;
  className?: string;
  strokeColor?: "pink" | "white";
}

export default function DecorativeLines({
  side,
  preset = "section",
  lineCount,
  viewBoxHeight,
  className = "",
  strokeColor = "pink",
}: DecorativeLinesProps) {
  const config = decorativeLines[preset];
  const lines = lineCount ?? config.lineCount;
  const height = viewBoxHeight ?? config.viewBoxHeight;
  
  const strokeClass = strokeColor === "pink" ? "stroke-syrio-pink" : "stroke-syrio-white";
  const midpoint = height / 2;

  const generatePath = (index: number) => {
    if (side === "left") {
      return `M ${index * 5} 0 Q ${50 + index * 3} ${midpoint} ${index * 5} ${height}`;
    }
    return `M ${100 - index * 5} 0 Q ${50 - index * 3} ${midpoint} ${100 - index * 5} ${height}`;
  };

  return (
    <svg
      viewBox={`0 0 100 ${height}`}
      className={`w-full h-full ${strokeClass} fill-none ${className}`}
    >
      {[...Array(lines)].map((_, i) => (
        <path key={i} d={generatePath(i)} strokeWidth="0.5" />
      ))}
    </svg>
  );
}
