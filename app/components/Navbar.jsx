import Link from "next/link";
import { NavbarLinks, siteUrl } from "./NavbarLinks";
import { title } from "../data/siteTitle";

export default function Navbar() {
  return (
    <>
      <header className=" py-6 px-3 fixed z-20 bg-white/95 flex items-center justify-between container">
        <Link href={{ siteUrl }} className=" text-4xl font-semibold">
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
      <NavbarLinks />
    </>
  );
}
