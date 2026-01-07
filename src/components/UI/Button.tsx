// components/ui/Button.tsx
import React, { type ButtonHTMLAttributes, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    children, 
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled,
    fullWidth = false,
    icon,
    iconPosition = 'left',
    ...props 
  }, ref) => {
    const variants = {
      primary: "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-blue-500/25",
      secondary: "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white shadow-lg hover:shadow-gray-500/25",
      outline: "border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/20",
      ghost: "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
      danger: "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white shadow-lg hover:shadow-red-500/25"
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm rounded-md",
      md: "px-5 py-2.5 text-base rounded-lg",
      lg: "px-6 py-3 text-lg rounded-lg",
      xl: "px-8 py-4 text-xl rounded-xl"
    };

    const iconSizes = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-7 h-7"
    };

    return (
      <button
        ref={ref}
        className={cn(
          "font-semibold transition-all duration-200 ease-in-out",
          "inline-flex items-center justify-center gap-2",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          "active:scale-[0.98]",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <Loader2 className={cn("animate-spin", iconSizes[size])} />
        ) : icon && iconPosition === 'left' ? (
          <span className={iconSizes[size]}>{icon}</span>
        ) : null}
        
        {children}
        
        {icon && !loading && iconPosition === 'right' && (
          <span className={iconSizes[size]}>{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;