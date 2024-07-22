import { ComponentPropsWithoutRef } from "react";
import { cn } from "../cn";

type Variant = "default" | "ghost" | "outline";

type Size = "default" | "sm" | "lg";

export const Button = ({
  variant = "default",
  size = "default",
  className,
  ...props
}: ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  size?: Size;
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-transparent",
        {
          "text-foreground bg-primary hover:bg-primary/90":
            variant === "default",
          "hover:bg-accent": variant === "ghost",
          "border-border hover:bg-accent": variant === "outline",
        },
        {
          "h-10 px-4 py-2": size === "default",
          "h-9 rounded-md px-3": size === "sm",
          "h-11 rounded-md px-8": size === "lg",
        },
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};
