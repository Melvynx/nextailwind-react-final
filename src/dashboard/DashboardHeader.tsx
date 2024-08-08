import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";

export const DashboardHeader = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <header className="border-b border-border py-4">
      <div className="m-auto flex max-w-6xl items-center gap-4 px-4">
        <Select value="alicia">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="alicia">
              <div className="flex items-center gap-4">
                <div className="size-5 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-200"></div>
                <p className="line-clamp-1">Alicia Roch</p>
              </div>
            </SelectItem>
            <SelectItem value="dark">
              <div className="flex items-center gap-4">
                <div className="size-5 rounded-full bg-gradient-to-r from-blue-800 to-purple-200"></div>
                <p>Mickael</p>
              </div>
            </SelectItem>
            <SelectItem value="system">
              <div className="flex items-center gap-4">
                <div className="size-5 rounded-full bg-gradient-to-r from-red-800 to-orange-200"></div>
                <p>Jean Jack</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <DashboardLink href="#" isCurrent>
          Overview
        </DashboardLink>
        <DashboardLink href="#">Customers</DashboardLink>
        <DashboardLink href="#">Products</DashboardLink>
        <DashboardLink href="#">Settings</DashboardLink>
        <div className="flex-1" />
        <Button
          variant="outline"
          onClick={() => {
            setOpen(true);
          }}
          className="inline-flex gap-2 text-sm text-muted-foreground"
        >
          <span>Press</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>J
          </kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        <Avatar>
          <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
        </Avatar>
        <ModeToggle />
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
