import Link from "next/link";
import { navLinks } from "../data/navLinks";

export default function Navbar() {
  const title = "NickOD.xyz";

  return (
    <>
      <header className=" py-6 px-3 fixed z-20 bg-white/95 flex items-center justify-between container">
        <Link href={"#top"} className=" text-4xl font-semibold">
          {title}
        </Link>
        <Link
          href="../../public/Nicholas O'Donoghue - Junior Full-Stack Web Developer.pdf"
          target="_blank"
          className=" font-semibold text-white bg-purple-600 py-2 px-4 rounded-full shadow-lg hover:bg-purple-400 hover:shadow-none hover:text-black transition-all duration-500"
        >
          Resume
        </Link>
      </header>
      <nav className=" container fixed bottom-5 px-3 z-50 ">
        <div className="bg-purple-600 text-slate-50 rounded-full flex justify-center gap-6 px-10 py-4 max-w-fit mx-auto">
          {navLinks.map((link) => {
            return (
              <Link key={link.name} href={link.path} className=" group font-semibold">
                {link.name}
                <span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-50"></span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
