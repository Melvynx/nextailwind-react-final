import { PropsWithChildren } from "react";

export const Button = (props: PropsWithChildren) => {
  return (
    <button className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
      {props.children}
    </button>
  );
};
