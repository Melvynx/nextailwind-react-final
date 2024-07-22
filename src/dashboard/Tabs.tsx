import { PropsWithChildren } from "react";

export const Tabs = (props: PropsWithChildren) => {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-muted p-1.5">
      {props.children}
    </div>
  );
};

export const Tab = (props: PropsWithChildren & { isActive?: boolean }) => {
  return (
    <button
      className={
        "px-4 py-0.5 rounded-md text-lg" +
        " " +
        (props.isActive
          ? "bg-background text-foreground"
          : "text-muted-foreground")
      }
    >
      {props.children}
    </button>
  );
};
