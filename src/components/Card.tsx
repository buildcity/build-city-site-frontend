import React from 'react';
import { cn } from '../lib/utils';
import { interactions, cards } from '../lib/styles';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  variant?: 'base' | 'bordered' | 'withPadding';
  onClick?: () => void;
  href?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  interactive = false,
  variant = 'withPadding',
  onClick,
  href
}) => {
  const baseClasses = interactive ? 
    cn(cards[variant], interactions.hoverScale) : 
    cards[variant];

  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseClasses, className, "block")}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  const Component = onClick ? 'button' : 'div';
  
  return (
    <Component 
      className={cn(baseClasses, className)}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

interface CardGridProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export const CardGrid: React.FC<CardGridProps> = ({ 
  children, 
  className,
  animated = true 
}) => {
  return (
    <div className={cn(
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",
      animated && "animate-fade-in-delay",
      className
    )}>
      {children}
    </div>
  );
};
