import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { intro } from "../data/intro";

export default function Intro() {
  return (
    <section id="top" className="px-3 h-screen flex flex-col justify-center">
      <div className=" text-center pb-10">
        <h2 className=" text-4xl sm:text-5xl lg:text-6xl font-bold py-6">
          {intro.welcome} <span className=" text-2xl lg:text-4xl">{intro.emojiWave}</span>
        </h2>
        <p className=" text-xl sm:text-2xl lg:text-5xl text-purple-600 font-semibold leading-8 tracking-wide max-w-5xl mx-auto">
          {intro.introBlurb.partOne}
          <span className=" text-2xl lg:text-4xl">{intro.emojiGaming}</span>
          {intro.introBlurb.partTwo}
          <span className=" text-2xl lg:text-4xl">{intro.emojiTravel}</span>
        </p>
      </div>
      <div className=" text-5xl flex justify-center gap-16">
        <Link href={intro.socials.linkedIn} target="_blank">
          <AiFillLinkedin className="text-slate-800  hover:text-purple-600 transition-all duration-300" />
        </Link>
        <Link href={intro.socials.github} target="_blank">
          <AiFillGithub className="text-slate-800  hover:text-purple-600 transition-all duration-300" />
        </Link>
      </div>
    </section>
  );
}
