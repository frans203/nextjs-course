export function Navbar() {
  return (
    <nav
      className="flex h-screen flex-col gap-4 bg-slate-900 border-r-indigo-400/40 
        hover:border-r-indigo-400/80 w-72 p-2 pt-4"
    >
      <div className="flex items-center justify-center ">
        <p className="font-bold text-blue-200 text-2xl">GAMES.IO</p>
      </div>
      <ul className="flex-grow  border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">
          Home
        </li>
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">
          Games
        </li>
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">
          Top 10
        </li>
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">
          Walkthroughs
        </li>
      </ul>

      <ul className=" border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 cursor-pointer">
          User
        </li>
      </ul>
    </nav>
  );
}
