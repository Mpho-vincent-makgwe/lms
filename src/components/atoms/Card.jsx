import { cn } from "../../lib/utils";

export default function Card({ 
  children, 
  className, 
  hover = true,
  ...props 
}) {
  return (
    <div
      className={cn(
        "glass-card p-6",
        hover && "hover:shadow-2xl hover:-translate-y-1 transition-all duration-500",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
