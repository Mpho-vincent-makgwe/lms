import { cn } from "../../lib/utils";

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className, 
  ...props 
}) {
  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/30",
    secondary: "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-foreground",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50",
    ghost: "hover:bg-primary-50 text-foreground",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold",
  };

  return (
    <button
      className={cn(
        "rounded-2xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
