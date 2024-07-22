import { PropsWithChildren } from "react";

export const Select = ({ children }: PropsWithChildren) => {
  return (
    <div className="rounded-lg border border-border px-4 py-2">{children}</div>
  );
};
