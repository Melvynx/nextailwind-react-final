import { PropsWithChildren } from "react";

export type AvatarProps = {
  fallback?: string;
};

export const Avatar = (props: PropsWithChildren) => {
  return (
    <div className="flex size-10 items-center justify-center overflow-hidden rounded-full border border-border">
      {props.children}
    </div>
  );
};

export const AvatarFallback = (props: { children: string }) => {
  return <span>{props.children?.[0] ?? "?"}</span>;
};

export const AvatarImage = (props: { src: string }) => {
  return <img src={props.src} className="size-full object-contain" />;
};
