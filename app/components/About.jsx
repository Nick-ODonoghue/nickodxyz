import { aboutMe, work } from "../data/aboutMe";

export default function About() {
  return (
    <section id="about" className=" px-3 h-auto flex flex-col justify-center pt-28">
      <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 mr-auto ">.about()</h2>
      <div className=" mb-10">
        {aboutMe.map((about) => {
          return (
            <p key={about.id} className=" text-xl font-semibold leading-7 tracking-wide max-w-2xl lg:max-w-4xl">
              {about.descrition}
            </p>
          );
        })}
      </div>

      <div className=" flex flex-col gap-20">
        {work.map((job) => {
          return (
            <div key={job.id} className=" flex flex-col gap-2">
              <h2 className=" text-xl lg:text-3xl font-semibold mb-1">{job.title}</h2>
              <h3 className=" text-lg lg:text-xl font-semibold text-purple-600">{job.role}</h3>
              <h4 className=" text-sm font-semibold mb-1">{job.date}</h4>
              <p className=" leading-7 lg:text-lg mb-1 max-w-2xl lg:max-w-4xl">{job.description}</p>
              <div className=" flex flex-wrap gap-2">
                {job.techStack.map((tech) => {
                  return (
                    <p
                      key={job.id}
                      className={
                        tech
                          ? "bg-slate-800 text-slate-50 tracking-widest text-sm font-semibold py-1 px-2 uppercase"
                          : ""
                      }
                    >
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
