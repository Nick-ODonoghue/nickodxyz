"use client";
import Link from "next/link";
import { navLinks } from "../data/navLinks";

export default function Navbar() {
  const title = "NickOD.xyz";

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className=" py-6 px-3 fixed z-20 bg-white/95 flex items-center justify-between container">
        <Link href={"#top"} onClick={handleScroll} className=" text-4xl font-semibold">
          {title}
        </Link>
        <Link
          href="/Nicholas O'Donoghue - Junior Full-Stack Web Developer.pdf"
          target="_blank"
          className=" font-semibold text-white bg-purple-600 py-2 px-4 rounded-full shadow-lg hover:bg-purple-400 hover:shadow-none hover:text-black transition-all duration-500"
        >
          Resume
        </Link>
      </header>
      <nav className=" container fixed bottom-5 px-3 z-50 ">
        <div className="bg-purple-600 text-slate-50 rounded-full flex justify-center gap-6 px-10 py-4 max-w-fit mx-auto shadow-lg hover:shadow-none transition-all duration-500">
          {navLinks.map((link) => {
            return (
              <Link key={link.name} href={link.path} onClick={handleScroll} className=" group font-semibold">
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
