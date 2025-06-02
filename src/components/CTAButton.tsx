import React from 'react';
import { ArrowRight } from 'lucide-react';
import { createCtaButton } from './ui/button-variants';

interface CTAButtonProps {
  href: string;
  variant: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ href, variant, children, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={createCtaButton(variant, className)}
    >
      {children}
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  );
};

export default CTAButton;
