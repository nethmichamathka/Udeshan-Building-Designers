import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => {
  return (
    <img
      src="/images/logo.png"
      className={className}
      alt="Udeshan Building Designers Logo"
    />
  );
};
