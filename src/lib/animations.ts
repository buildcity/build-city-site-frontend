export const fadeInClasses = {
  base: "animate-fade-in",
  delay: "animate-fade-in-delay", 
  delay2: "animate-fade-in-delay-2"
} as const;

export type FadeInVariant = keyof typeof fadeInClasses;

// Additional animation utilities for consistency across components
export const animations = {
  fadeIn: "animate-fade-in",
  fadeInDelay: "animate-fade-in-delay",
  fadeInDelay2: "animate-fade-in-delay-2",
  
  // Transition effects
  transition: "transition duration-300",
  transitionColors: "transition-colors duration-200",
  transitionTransform: "transition-transform duration-200",
  transitionAll: "transition-all duration-300",
} as const;
