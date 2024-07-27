import { FaHome } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { RiGuideFill } from "react-icons/ri";
import { cn } from "@/helpers/cn";
import { NavbarProps } from "./types";
import { NavbarList } from "./NavbarList";
import { NavbarListItemLink } from "./NavbarListItemLink";
import { NavbarListItemButton } from "./NavbarListItemButton";

export const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "flex h-screen flex-col gap-4 bg-slate-900 border-r-indigo-400/40 hover:border-r-indigo-400/80 w-72 p-2 pt-4",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center ">
        <p className="font-bold text-2xl text-[#F900F9] cursor-pointer">
          GAMES.IO
        </p>
      </div>
      <NavbarList className={"flex-grow"}>
        <NavbarListItemLink href="/">
          <FaHome className="w-4 h-4 " /> Home
        </NavbarListItemLink>
        <NavbarListItemLink href="/games">
          <FaGamepad className="w-4 h-4 " /> Games
        </NavbarListItemLink>
        <NavbarListItemLink href="/top-10">
          <FaTrophy className="w-4 h-4" /> Top 10
        </NavbarListItemLink>
        <NavbarListItemLink href="/walkthroughs">
          <RiGuideFill className="w-4 h-4" /> Walkthroughs
        </NavbarListItemLink>

        <NavbarListItemButton>Button Clicked</NavbarListItemButton>
      </NavbarList>

      <ul className=" border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">
          User
        </li>
      </ul>
    </nav>
  );
};
