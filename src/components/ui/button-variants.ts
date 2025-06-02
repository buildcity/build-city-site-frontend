import { cn } from "../../lib/utils";

export const ctaButtonVariants = {
  primary: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200",
  secondary: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200", 
  accent: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
} as const;

export const createCtaButton = (variant: keyof typeof ctaButtonVariants, className?: string) => 
  cn(ctaButtonVariants[variant], className);
