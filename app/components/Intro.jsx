import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Intro() {
  return (
    <section className="px-3 h-screen flex flex-col justify-center">
      <div className=" text-center pb-10">
        <h2 className=" text-4xl sm:text-6xl lg:text-8xl font-bold py-6">Hi, I'm Nick 👋</h2>
        <p className=" text-xl sm:text-2xl text-purple-600 font-semibold leading-8 tracking-wide max-w-2xl lg:text-3xl mx-auto">
          I'm a Full-Stack Web Developer, with a passion for learning. A retro game enthusiast 🕹️ and an occasional
          world traveler ✈️
        </p>
      </div>
      <div className=" text-5xl flex justify-center gap-16">
        <Link href={"https://www.linkedin.com/in/nick-odonoghue/"} target="_blank">
          <AiFillLinkedin className="text-slate-800  hover:text-purple-600 transition-all duration-300" />
        </Link>
        <Link href={"https://github.com/Nick-ODonoghue"} target="_blank">
          <AiFillGithub className="text-slate-800  hover:text-purple-600 transition-all duration-300" />
        </Link>
      </div>
    </section>
  );
}
