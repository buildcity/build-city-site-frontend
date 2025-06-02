import React from 'react';
import { cn } from '../lib/utils';
import { commonClasses } from '../lib/constants';
import { fadeInClasses } from '../lib/animations';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  narrow?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  className, 
  containerClassName,
  narrow = false 
}) => {
  return (
    <div className={cn(commonClasses.pageContainer, className)}>
      <div className={cn(
        narrow ? commonClasses.narrowContainer : commonClasses.contentContainer,
        containerClassName
      )}>
        {children}
      </div>
    </div>
  );
};

interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export const PageTitle: React.FC<PageTitleProps> = ({ 
  children, 
  className, 
  animated = true 
}) => {
  return (
    <h1 className={cn(
      commonClasses.pageTitle,
      animated && fadeInClasses.base,
      className
    )}>
      {children}
    </h1>
  );
};

interface PageSubtitleProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export const PageSubtitle: React.FC<PageSubtitleProps> = ({ 
  children, 
  className, 
  animated = true 
}) => {
  return (
    <p className={cn(
      "text-xl md:text-2xl text-white/80 text-center mb-12",
      animated && fadeInClasses.delay,
      className
    )}>
      {children}
    </p>
  );
};
