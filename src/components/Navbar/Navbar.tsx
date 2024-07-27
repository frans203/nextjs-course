import { FaHome } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { RiGuideFill } from "react-icons/ri";
import { cn } from "@/helpers/cn";

type NavbarProps = React.ComponentProps<"nav">;
type NavbarListProps = React.ComponentProps<"ul">;
type NavbarListItemProps = React.ComponentProps<"li">;

const NavbarList = ({ children, className, ...props }: NavbarListProps) => {
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

const NavbarListItem = ({
  children,
  className,
  ...props
}: NavbarListItemProps) => {
  return (
    <li
      className={cn(
        "my-2 rounded-lg bg-transparent hover:bg-indigo-400/40 cursor-pointer flex gap-2 items-center text-slate-300 hover:text-slate-100",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};

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
        <NavbarListItem>
          <FaHome className="w-4 h-4 " /> Home
        </NavbarListItem>
        <NavbarListItem>
          <FaGamepad className="w-4 h-4 " /> Games
        </NavbarListItem>
        <NavbarListItem>
          <FaTrophy className="w-4 h-4" /> Top 10
        </NavbarListItem>
        <NavbarListItem>
          <RiGuideFill className="w-4 h-4" /> Walkthroughs
        </NavbarListItem>
      </NavbarList>

      <ul className=" border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">
          User
        </li>
      </ul>
    </nav>
  );
};
