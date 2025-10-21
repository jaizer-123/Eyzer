import React from "react";

const PrimaryButton = ({ 
  children, 
  onClick, 
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  className = "",
  type = "button",
  ...props 
}) => {
  // Base classes
  const baseClasses = "rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Size variants
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-2.5 text-base",
    large: "px-8 py-3 text-lg",
    xlarge: "px-10 py-4 text-xl"
  };
  
  // Color variants
  const variantClasses = {
    primary: "bg-gradient-to-r from-red-600 to-red-800 text-white hover:shadow-lg hover:scale-105 shadow-md hover:from-red-700 hover:to-red-900",
    secondary: "border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 bg-white hover:bg-gray-50",
    white: "bg-white text-red-600 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gray-50 border border-gray-200",
    outline: "border-2 border-red-600 text-red-600 bg-transparent hover:bg-red-600 hover:text-white",
    ghost: "text-gray-700 hover:text-red-600 hover:bg-gray-100",
    danger: "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg hover:scale-105"
  };

  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
        ${loading ? 'relative text-transparent' : ''}
      `}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {children}
    </button>
  );
};

// Icon Button Variant
export const IconButton = ({
  icon,
  onClick,
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}) => {
  const sizeClasses = {
    small: "w-8 h-8 text-sm",
    medium: "w-10 h-10 text-base",
    large: "w-12 h-12 text-lg"
  };

  const variantClasses = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    outline: "border border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600"
  };

  return (
    <button
      className={`
        rounded-xl flex items-center justify-center transition-all duration-300
        focus:outline-none focus:ring-4 focus:ring-red-500/20
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {icon}
    </button>
  );
};

// Button Group Component
export const ButtonGroup = ({ 
  children, 
  orientation = "horizontal",
  className = "" 
}) => {
  const orientationClasses = {
    horizontal: "flex flex-row space-x-2",
    vertical: "flex flex-col space-y-2"
  };

  return (
    <div className={`${orientationClasses[orientation]} ${className}`}>
      {children}
    </div>
  );
};

export default PrimaryButton;