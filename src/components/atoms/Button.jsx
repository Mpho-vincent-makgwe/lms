import { cn } from "../../lib/utils";

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className, 
  ...props 
}) {
  const variants = {
    primary: "bg-[var(--primary)] text-white hover:opacity-90 shadow-lg shadow-violet-500/30",
    secondary: "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-[var(--text-main)]",
    outline: "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/5",
    ghost: "hover:bg-black/5 dark:hover:bg-white/5 text-[var(--text-main)]",
    premium: "btn-premium",
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
