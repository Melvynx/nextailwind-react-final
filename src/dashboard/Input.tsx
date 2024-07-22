import { ComponentPropsWithoutRef } from "react";

export type InputProps = ComponentPropsWithoutRef<"input">;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={
        "px-4 py-2 bg-background focus:outline-none focus:border-foreground placeholder:text-muted-foreground text-foreground border border-border rounded-md" +
        " " +
        className
      }
    />
  );
};
