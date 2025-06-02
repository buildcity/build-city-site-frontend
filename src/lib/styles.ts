import { cn } from "./utils";

// Common layout patterns
export const layouts = {
  // Page containers
  pageContainer: "min-h-screen bg-black text-white py-20",
  contentContainer: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  narrowContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  
  // Grid layouts
  cardGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",
  responsiveGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
} as const;

// Common hover and interaction effects
export const interactions = {
  // Scale effects
  hoverScale: "transition duration-300 hover:scale-105",
  hoverScaleLarge: "transform hover:scale-110 transition-transform duration-200",
  
  // Button/link hovers
  linkHover: "hover:text-white transition-colors duration-200",
  buttonHover: "transition-colors duration-200",
  
  // Background hovers
  cardHover: "hover:bg-gray-700 transition-colors duration-200",
  accentHover: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
} as const;

// Card styling patterns
export const cards = {
  base: "bg-gray-800 rounded-lg shadow-lg",
  interactive: cn("bg-gray-800 rounded-lg shadow-lg", interactions.hoverScale),
  bordered: "bg-gray-900 rounded-lg overflow-hidden shadow-lg",
  withPadding: "bg-gray-800 p-6 rounded-lg shadow-lg",
  interactiveWithPadding: cn("bg-gray-800 p-6 rounded-lg shadow-lg", interactions.hoverScale),
} as const;

// Text styling patterns
export const text = {
  pageTitle: "text-4xl font-bold mb-12 text-center",
  sectionTitle: "text-2xl font-semibold mb-6",
  cardTitle: "text-xl font-semibold text-white",
  description: "text-gray-400 mb-4",
  subtitle: "text-xl md:text-2xl text-white/80 text-center mb-12",
} as const;

// Common spacing patterns
export const spacing = {
  sectionMargin: "mb-12",
  cardPadding: "p-6",
  contentPadding: "p-4",
  itemSpacing: "space-y-4",
  gridGap: "gap-6",
} as const;

// Utility function to create combined styles
export const createStyle = (...classes: string[]) => cn(...classes);

// Pre-built component styles
export const componentStyles = {
  socialIcon: cn(interactions.hoverScaleLarge),
  navLink: "px-3 py-2 text-gray-300 hover:text-white text-sm font-medium",
  partnerCard: cn(cards.interactiveWithPadding),
  mediaCard: cn(cards.bordered, interactions.hoverScale),
  blogCard: "block bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105",
  projectCard: "bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105",
  tag: "px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded",
  githubLink: "text-gray-400 hover:text-white transition-colors z-10",
} as const;
