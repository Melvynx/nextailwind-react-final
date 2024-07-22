import { ComponentPropsWithoutRef } from "react";
import { Avatar, AvatarImage } from "./Avatar";
import { Input } from "./Input";
import { Select } from "./Select";

export const DashboardHeader = () => {
  return (
    <header className="border-b border-border py-4">
      <div className="m-auto flex max-w-6xl items-center gap-4 px-4">
        <Select>
          <div className="flex items-center gap-4">
            <div className="size-5 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-200"></div>
            <p>Alicia Roch</p>
          </div>
        </Select>
        <DashboardLink href="#" isCurrent>
          Overview
        </DashboardLink>
        <DashboardLink href="#">Customers</DashboardLink>
        <DashboardLink href="#">Products</DashboardLink>
        <DashboardLink href="#">Settings</DashboardLink>
        <div className="flex-1" />
        <Input placeholder="Search..." />
        <Avatar>
          <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
        </Avatar>
      </div>
    </header>
  );
};

const DashboardLink = ({
  isCurrent,
  className,
  ...props
}: ComponentPropsWithoutRef<"a"> & { isCurrent?: boolean }) => {
  const cn =
    "text-sm transition hover:text-foreground hidden lg:block" +
    " " +
    className +
    " " +
    (isCurrent ? "text-foreground" : "text-muted-foreground");

  console.log(cn);
  return (
    <a href="#" {...props} className={cn}>
      Settings
    </a>
  );
};
