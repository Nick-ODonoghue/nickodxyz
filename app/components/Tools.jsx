import React from "react";

export default function Tools() {
  const tools = {
    frontEnd: [
      "react.js",
      "next.js",
      "html",
      "css",
      "bootstrap",
      "tailwindcss",
      "react testing library",
      "jest",
      "mobile first",
      "responsive design",
    ],
    backEnd: ["node.js", "express.js", "ruby", "ruby on rails", "mongodb", "postgresql", "heroku"],
    other: ["linux/unix", "git", "axios"],
  };

  return (
    <section id="tools" className=" px-3 h-screen flex flex-col pt-28">
      <h2 className=" text-3xl font-semibold mb-6 mr-auto ">.tools()</h2>
      <p className="text-xl font-medium leading-7 tracking-wide max-w-2xl  mb-6">
        Though I maintain a language-agnostic approach, I must admit that these tools have become my favorites lately.
      </p>
      <div className=" flex flex-col gap-8">
        <div>
          <h3 className=" text-lg font-semibold text-purple-500 mb-2">Front-End</h3>
          {tools.frontEnd.map((tool) => {
            return <p className=" font-medium mb-1">{tool}</p>;
          })}
        </div>
        <div>
          <h3 className=" text-lg font-semibold text-purple-500 mb-2">Back-End</h3>
          {tools.backEnd.map((tool) => {
            return <p className=" font-medium mb-1">{tool}</p>;
          })}
        </div>
        <div>
          <h3 className=" text-lg font-semibold text-purple-500 mb-2">Other</h3>
          {tools.other.map((tool) => {
            return <p className=" font-medium mb-1">{tool}</p>;
          })}
        </div>
      </div>
    </section>
  );
}
