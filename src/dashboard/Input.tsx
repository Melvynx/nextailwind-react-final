import { ComponentPropsWithoutRef } from "react";
import { cn } from "../cn";

export type InputProps = ComponentPropsWithoutRef<"input">;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={cn(
        "px-4 py-2 bg-background focus:outline-none focus:border-foreground placeholder:text-muted-foreground text-foreground border border-border rounded-md",
        className
      )}
    />
  );
};
