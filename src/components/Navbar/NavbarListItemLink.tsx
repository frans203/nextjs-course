import Link from "next/link";
import { NavbarListItem } from "./NavbarListItem";
import { NavbarListItemLinkProps } from "./types";
import { cn } from "@/helpers/cn";

export const NavbarListItemLink = ({
  href,
  children,
  className,
  ...props
}: NavbarListItemLinkProps) => {
  return (
    <NavbarListItem className={(cn("p-0"), className)}>
      <Link
        href={href}
        className="flex gap-2 items-center  w-full rounded-lg"
        {...props}
      >
        {children}
      </Link>
    </NavbarListItem>
  );
};
