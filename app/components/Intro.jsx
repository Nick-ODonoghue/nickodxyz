import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Intro() {
  return (
    <section className="px-3 h-screen">
      <div className=" text-center pb-10">
        <h2 className=" text-4xl font-bold py-6">Hi, I'm Nick 👋</h2>
        <p className=" text-xl font-medium text-slate-700 leading-8 max-w-2xl mx-auto">
          I'm a <span className="text-purple-500 font-semibold">Full-Stack Web Developer</span>, with a passion for
          learning. A retro game enthusiast 🕹️ and an occasional world traveler ✈️
        </p>
      </div>
      <div className=" text-5xl flex justify-center gap-16">
        <Link href={"https://github.com/Nick-ODonoghue"} target="_blank">
          <AiFillGithub className="text-slate-800  hover:text-purple-500 transition-all duration-300" />
        </Link>
        <Link href={"https://www.linkedin.com/in/nick-odonoghue/"} target="_blank">
          <AiFillLinkedin className="text-slate-800  hover:text-purple-500 transition-all duration-300" />
        </Link>
      </div>
    </section>
  );
}
