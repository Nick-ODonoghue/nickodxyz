import { tools, toolsIntro } from "../data/tools";

export default function Tools() {
  return (
    <section id="tools" className=" px-3 h-auto flex flex-col pt-28">
      <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 mr-auto ">.tools()</h2>
      <p className="text-xl font-semibold leading-7 tracking-wide max-w-2xl lg:max-w-4xl  mb-6">{toolsIntro}</p>
      <div className=" flex flex-col md:flex-row gap-8 md:justify-between lg:gap-0 max-w-4xl">
        <div>
          <h3 className=" text-lg lg:text-xl font-semibold text-purple-600 mb-2">Front-End</h3>
          {tools.frontEnd.map((tool) => {
            return (
              <div key={tool} className=" flex flex-wrap gap-2 mb-4">
                <p className=" bg-slate-800 text-slate-50 tracking-widest text-sm font-semibold py-1 px-2 uppercase">
                  {tool}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className=" text-lg lg:text-xl font-semibold text-purple-600 mb-2">Back-End</h3>
          {tools.backEnd.map((tool) => {
            return (
              <div key={tool} className=" flex flex-wrap gap-2 mb-4">
                <p className=" bg-slate-800 text-slate-50 tracking-widest text-sm font-semibold py-1 px-2 uppercase">
                  {tool}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className=" text-lg lg:text-xl font-semibold text-purple-600 mb-2">Other</h3>
          {tools.other.map((tool) => {
            return (
              <div key={tool} className=" flex flex-wrap gap-2 mb-4">
                <p className=" bg-slate-800 text-slate-50 tracking-widest text-sm font-semibold py-1 px-2 uppercase">
                  {tool}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
