// Shared constants for consistent spacing, colors, and sizing values

export const spacing = {
  // Page-level spacing
  pageVertical: "py-20",
  sectionVertical: "py-12",
  
  // Container padding
  containerPadding: "px-4 sm:px-6 lg:px-8",
  cardPadding: "p-6",
  contentPadding: "p-4",
  
  // Margins
  titleMargin: "mb-12",
  sectionMargin: "mb-8",
  cardMargin: "mb-4",
  
  // Gaps
  gridGap: "gap-8",
  itemGap: "gap-6",
  flexGap: "gap-4",
} as const;

export const sizing = {
  // Container max widths
  maxWidthFull: "max-w-7xl",
  maxWidthLarge: "max-w-6xl", 
  maxWidthMedium: "max-w-4xl",
  
  // Heights
  minScreenHeight: "min-h-screen",
  imageHeight: "h-32",
  iconSize: "h-6 w-6",
  
  // Responsive grid columns
  gridCols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
  gridColsResponsive: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
} as const;

export const colors = {
  // Background colors
  pageBg: "bg-black",
  cardBg: "bg-gray-800",
  cardBgDark: "bg-gray-900",
  
  // Text colors
  primaryText: "text-white",
  secondaryText: "text-gray-300",
  mutedText: "text-gray-400",
  subtleText: "text-white/80",
  
  // Border colors
  borderColor: "border-gray-800",
} as const;

export const effects = {
  // Shadows
  cardShadow: "shadow-lg",
  
  // Border radius
  rounded: "rounded-lg",
  roundedMd: "rounded-md",
  
  // Transitions
  transitionDuration: "duration-300",
  transitionDurationShort: "duration-200",
} as const;

// Combined utility classes for common patterns
export const commonClasses = {
  pageContainer: `${sizing.minScreenHeight} ${colors.pageBg} ${colors.primaryText} ${spacing.pageVertical}`,
  contentContainer: `${sizing.maxWidthFull} mx-auto ${spacing.containerPadding}`,
  narrowContainer: `${sizing.maxWidthLarge} mx-auto ${spacing.containerPadding}`,
  
  cardBase: `${colors.cardBg} ${spacing.cardPadding} ${effects.rounded} ${effects.cardShadow}`,
  gridLayout: `grid ${sizing.gridCols} ${spacing.gridGap}`,
  
  pageTitle: `text-4xl font-bold ${spacing.titleMargin} text-center`,
  sectionTitle: `text-2xl font-semibold ${spacing.sectionMargin}`,
} as const;
