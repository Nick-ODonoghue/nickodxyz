import React from "react";

export default function About() {
  const aboutMe = [
    {
      id: 1,
      descrition:
        "I'm a Full Stack Developer with a passion for learning and a thirst for tech. I enjoying writting code in JavaScript & building web applications with React & Next.js. I believe in 1% better everyday, there is nothing I don't know about, only the things I haven't learnt yet.",
    },
  ];

  const work = [
    {
      id: "03-23",
      title: "NickOD.xyz",
      role: "Freelance Full-Stack Web Developer",
      date: "2023 - Present",
      description: "Description here",
      techStack: ["html", "css", "tailwindcss", "javascript", "react.js", "next.js", "mongodb", "mobile first"],
    },
    {
      id: "01-23-03-23",
      title: "Le Wagon",
      role: "Student",
      date: "2023",
      description: "Description here",
      techStack: ["html", "css", "bootstrap", "javascript", "ruby", "ruby on rails", "postgresql"],
    },
    {
      id: "11-21-11-22",
      title: "Travelling",
      role: "Traveller",
      date: "2021 - 2022",
      description: "Description here",
      techStack: [],
    },
    {
      id: "03-17-10-21",
      title: "Lidl GB",
      role: "Senior IT Analyst, IT Analyst, IT Administrator",
      date: "2017 - 2021",
      description: "Description here",
      techStack: ["windows server 2016", "windows 10", "office 365", "ms exchange", "aduc", "dfs", "dhcp"],
    },
  ];

  return (
    <section id="about" className=" px-3 h-auto flex flex-col justify-center pt-28">
      <h2 className=" text-3xl font-semibold mb-6 mr-auto ">.about()</h2>
      <div className=" mb-10">
        {aboutMe.map((about) => {
          return (
            <p id={about.id} className=" text-xl font-medium leading-7 tracking-wide max-w-2xl">
              {about.descrition}
            </p>
          );
        })}
      </div>
      <div>
        {work.map((job) => {
          return (
            <div id={job.id} className=" mb-20 flex flex-col gap-2">
              <h2 className=" text-xl font-semibold">{job.title}</h2>
              <h3 className=" text-lg font-medium text-purple-600">{job.role}</h3>
              <h4 className=" text-sm font-semibold">{job.date}</h4>
              <p className=" leading-7">{job.description}</p>
              <div className=" flex flex-wrap gap-2 mb-4">
                {job.techStack.map((tech) => {
                  return (
                    <p className={tech ? "bg-slate-900 text-slate-50 tracking-widest text-sm py-1 px-2 uppercase" : ""}>
                      {tech}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
