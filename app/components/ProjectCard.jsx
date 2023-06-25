import Link from "next/link";
import Image from "next/image";
import AllofYou from "/public/AllofYou.jpg";
import EveryBiteCounts from "/public/EveryBiteCounts.jpg";
import FootySportsNews from "/public/Footy-Sports-News.jpg";

export default function ProjectCard() {
  return (
    <div className=" shadow-lg p-4 rounded-lg max-w-4xl mx-auto">
      <div className=" relative overflow-hidden rounded-md group">
        <Image src={AllofYou} alt="All of You"></Image>
        <div className=" absolute h-full w-full bg-black/90 flex items-center justify-center bottom-full group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-md px-2">
          <p className=" text-white font-medium text-center">
            A space for artists to share who they are and the work they make, and for opportunity makers to find the
            artists they need
          </p>
        </div>
      </div>
      <h2 className=" text-2xl font-medium mb-4">All of You</h2>
      <p className=" text-lg text-slate-600 mb-2">Tech Stack</p>
      <div className=" flex flex-wrap gap-2 mb-4">
        <p className=" bg-slate-900 text-slate-50 tracking-widest text-sm py-1 px-2  uppercase">HTML</p>
        <p className=" bg-slate-900 text-slate-50 tracking-widest text-sm py-1 px-2  uppercase">CSS</p>
        <p className=" bg-slate-900 text-slate-50 tracking-widest text-sm py-1 px-2  uppercase">Bootstrap</p>
        <p className=" bg-slate-900 text-slate-50 tracking-widest text-sm py-1 px-2  uppercase">JavaScript</p>
        <p className=" bg-slate-900 text-slate-50 tracking-widest text-sm py-1 px-2  uppercase">Ruby</p>
        <p className=" bg-slate-900 text-slate-50 tracking-widest text-sm py-1 px-2  uppercase">Ruby on Rails</p>
        <p className=" bg-slate-900 text-slate-50 tracking-widest text-sm py-1 px-2  uppercase">Heroku</p>
      </div>
      <p className=" text-lg text-slate-600 mb-2">Links</p>
      <div className=" flex gap-6">
        <Link
          href="https://www.AllofYou.art"
          target="_blank"
          className=" font-medium text-lg rounded-full hover:text-purple-500 transition-all duration-300"
        >
          Live Site
        </Link>
        <Link
          href="https://github.com/nikstojkov/AllofYou"
          target="_blank"
          className=" font-medium text-lg rounded-full hover:text-purple-500 transition-all duration-300"
        >
          Github
        </Link>
      </div>
    </div>
  );
}

{
  /* <Image src={EveryBiteCounts} alt="Every Bite Counts"></Image> */
}
{
  /* <Image src={FootySportsNews} alt="Footy Sports News"></Image> */
}
