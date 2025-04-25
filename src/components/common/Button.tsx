import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300';
  
  const variantStyles = {
    primary: 'bg-blue-800 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-blue-800 border border-blue-800 hover:bg-blue-50',
    outline: 'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={styles} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;