/**
 * Design System Configuration
 * Centralized constants for consistent styling across the app
 */

// =============================================================================
// IMAGE SIZES
// =============================================================================

export const imageSizes = {
  /** Hero logo - large prominent display */
  heroLogo: { width: 600, height: 300 },
  /** Navbar logo - small header display */
  navbarLogo: { width: 80, height: 80 },
} as const;

// =============================================================================
// DECORATIVE LINES PRESETS
// =============================================================================

export const decorativeLines = {
  /** Standard section decoration - 12 lines, medium height */
  section: { lineCount: 12, viewBoxHeight: 400 },
  /** Full height decoration - for overlays and heroes */
  fullHeight: { lineCount: 12, viewBoxHeight: 600 },
  /** Dense decoration - more lines, shorter height */
  dense: { lineCount: 15, viewBoxHeight: 300 },
} as const;

// =============================================================================
// ANIMATION CONFIG
// =============================================================================

export const animation = {
  /** Standard transition duration */
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
  },
  /** Stagger delay for list items */
  stagger: 0.08,
  /** Delayed reveal timing */
  delay: {
    short: 0.3,
    medium: 0.6,
    long: 1.0,
  },
} as const;

// =============================================================================
// OPACITY LEVELS
// =============================================================================

export const opacity = {
  subtle: 20,
  light: 30,
  medium: 40,
  heavy: 50,
  overlay: 95,
} as const;

// =============================================================================
// LETTER SPACING (Tailwind arbitrary values)
// =============================================================================

export const tracking = {
  tight: "0.1em",
  normal: "0.2em",
  wide: "0.3em",
  wider: "0.4em",
  widest: "0.5em",
} as const;

// =============================================================================
// CONTAINER WIDTHS (Tailwind max-w classes)
// =============================================================================

export const containerWidth = {
  narrow: "max-w-2xl",
  medium: "max-w-4xl",
  wide: "max-w-6xl",
  full: "max-w-7xl",
} as const;

// =============================================================================
// SECTION SPACING (Tailwind classes)
// =============================================================================

export const sectionSpacing = {
  /** Horizontal padding */
  paddingX: "px-4 md:px-8",
  /** Vertical padding - standard sections */
  paddingY: "py-20",
  /** Vertical padding - compact sections */
  paddingYCompact: "py-16",
} as const;

// =============================================================================
// Z-INDEX LAYERS
// =============================================================================

export const zIndex = {
  base: 0,
  content: 10,
  overlay: 40,
  navbar: 100,
} as const;

