import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseStyles = 'font-semibold transition-colors focus:outline-none';
    const variantStyles = {
      default: 'bg-white text-black hover:bg-zinc-200',
      outline: 'border border-white/30 bg-white/5 text-white hover:bg-white/10',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className || ''}`}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';