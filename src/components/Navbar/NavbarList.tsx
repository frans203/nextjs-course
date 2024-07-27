import { cn } from "@/helpers/cn";
import { NavbarListProps } from "./types";

export const NavbarList = ({
  children,
  className,
  ...props
}: NavbarListProps) => {
  return (
    <ul
      className={cn(
        "flex-grow border-t border-indigo-400/20 hover:border-indigo-400/40",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
};
