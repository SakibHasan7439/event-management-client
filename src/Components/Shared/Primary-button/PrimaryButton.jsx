const PrimaryButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false, 
  className = '',
  type = 'button',
  ...props 
}) => {
  // Base styles that apply to all buttons
  const baseStyles = 'font-bold rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95';
  
  // Variant styles
  const variants = {
    primary: 'bg-gradient-to-r cursor-pointer from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white shadow-lg hover:shadow-xl focus:ring-orange-300',
    secondary: 'bg-white cursor-pointer hover:bg-gray-50 text-orange-500 border-2 border-orange-500 hover:border-orange-600 focus:ring-orange-300',
    outline: 'bg-transparent cursor-pointer hover:bg-orange-50 text-orange-500 border-2 border-orange-500 hover:border-orange-600 focus:ring-orange-300',
    ghost: 'bg-transparent hover:bg-orange-100 text-orange-500 focus:ring-orange-300',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl focus:ring-red-300',
    success: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl focus:ring-green-300'
  };
  
  // Size styles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3 text-lg',
    xl: 'px-10 py-5 text-xl'
  };
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;