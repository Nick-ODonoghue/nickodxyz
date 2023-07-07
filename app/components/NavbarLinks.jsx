"use client";
import Link from "next/link";
import { navLinks } from "../data/navLinks";

export function NavbarLinks() {
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
    <nav className=" container fixed bottom-5 px-3 z-50 ">
      <div className="bg-purple-600 text-slate-50 rounded-full flex justify-center gap-6 sm:gap-10 px-10 py-4 max-w-fit mx-auto shadow-lg hover:shadow-none transition-all duration-500">
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
  );
}
