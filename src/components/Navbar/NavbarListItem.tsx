import { cn } from "@/helpers/cn";
import { NavbarListItemProps } from "./types";

export const NavbarListItem = ({
  children,
  className,
  ...props
}: NavbarListItemProps) => {
  return (
    <li
      className={cn(
        "p-2 my-2 rounded-lg bg-transparent hover:bg-indigo-400/40 cursor-pointer flex gap-2 items-center text-slate-300 hover:text-slate-100",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};
