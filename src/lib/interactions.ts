import { cn } from "./utils";

// Common hover effect utilities
export const hoverEffects = {
  // Scale effects
  scale: "transition-all duration-300 hover:scale-105",
  scaleSmall: "transition-transform duration-200 hover:scale-102",
  scaleLarge: "transform hover:scale-110 transition-transform duration-200",
  
  // Background and color transitions
  bgHover: "transition-colors duration-200",
  textHover: "transition-colors duration-200",
  
  // Combined effects
  cardHover: "transition-all duration-300 hover:scale-105 hover:shadow-xl",
  buttonHover: "transition-colors duration-200 hover:bg-opacity-80",
  linkHover: "transition-colors duration-200 hover:text-white",
  
  // Interactive states
  interactive: "cursor-pointer transition-all duration-300 hover:scale-105",
  clickable: "cursor-pointer",
} as const;

// Focus and accessibility states
export const focusStates = {
  base: "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
  button: "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
  input: "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
} as const;

// Transition timing utilities
export const transitions = {
  fast: "transition-all duration-150",
  normal: "transition-all duration-300", 
  slow: "transition-all duration-500",
  
  colors: "transition-colors duration-200",
  transform: "transition-transform duration-200",
  opacity: "transition-opacity duration-300",
} as const;

// Utility function to combine hover effects
export const createHoverEffect = (...effects: string[]) => cn(...effects);

// Pre-built interactive component classes
export const interactiveElements = {
  card: cn(hoverEffects.scale, focusStates.base),
  button: cn(hoverEffects.buttonHover, focusStates.button),
  link: cn(hoverEffects.linkHover, focusStates.base),
  socialIcon: cn(hoverEffects.scaleLarge, focusStates.base),
  navItem: cn(hoverEffects.textHover, focusStates.base),
} as const;
