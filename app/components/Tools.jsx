import { tools } from "../data/tools";

export default function Tools() {
  return (
    <section id="tools" className=" px-3 h-screen flex flex-col pt-28">
      <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 mr-auto ">.tools()</h2>
      <p className="text-xl font-medium leading-7 tracking-wide max-w-2xl lg:max-w-4xl  mb-6">
        Though I maintain a language-agnostic approach, I must admit that these tools have become my favorites lately.
      </p>
      <div className=" flex flex-col lg:flex-row gap-8 lg:justify-between lg:gap-0 max-w-4xl">
        <div>
          <h3 className=" text-lg lg:text-xl font-semibold text-purple-600 mb-2">Front-End</h3>
          {tools.frontEnd.map((tool) => {
            return (
              <div className=" flex flex-wrap gap-2 mb-4">
                <p className=" bg-slate-900 text-slate-50 tracking-widest text-sm py-1 px-2 uppercase">{tool}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className=" text-lg lg:text-xl font-semibold text-purple-600 mb-2">Back-End</h3>
          {tools.backEnd.map((tool) => {
            return (
              <div className=" flex flex-wrap gap-2 mb-4">
                <p className=" bg-slate-900 text-slate-50 tracking-widest text-sm py-1 px-2 uppercase">{tool}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className=" text-lg lg:text-xl font-semibold text-purple-600 mb-2">Other</h3>
          {tools.other.map((tool) => {
            return (
              <div className=" flex flex-wrap gap-2 mb-4">
                <p className=" bg-slate-900 text-slate-50 tracking-widest text-sm py-1 px-2 uppercase">{tool}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
