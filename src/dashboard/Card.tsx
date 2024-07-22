import { ComponentPropsWithoutRef } from "react";

export const Card = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={
        "rounded-lg border border-border bg-card" + " " + props.className
      }
    >
      {props.children}
    </div>
  );
};

export const CardHeader = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={"space-y-1 p-6" + " " + props.className}>
      {props.children}
    </div>
  );
};

export const CardContent = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={"p-6 pt-0" + " " + props.className}>{props.children}</div>
  );
};

export const CardTitle = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <p className={"text-lg font-medium" + " " + props.className}>
      {props.children}
    </p>
  );
};
