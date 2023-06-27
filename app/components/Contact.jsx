import React from "react";

export default function Contact() {
  return (
    <section id="contact" className=" px-3 h-screen flex flex-col items-center pt-28">
      <h2 className=" text-3xl font-semibold mb-6 mr-auto ">.contact()</h2>
      <form className=" flex flex-col gap-6 w-full lg:max-w-2xl">
        <div className=" flex flex-col">
          <label className=" text-lg font-semibold text-purple-600 mb-2">Name</label>
          <input
            className=" bg-slate-100 border-none rounded-md py-2 px-4"
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className=" flex flex-col">
          <label className=" text-lg font-semibold text-purple-600 mb-2">Email</label>
          <input
            className=" bg-slate-100 border-none rounded-md py-2 px-4"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className=" flex flex-col">
          <label className=" text-lg font-semibold text-purple-600 mb-2">Message</label>
          <textarea
            className=" bg-slate-100 border-none rounded-md py-2 px-4"
            name="message"
            rows="10"
            placeholder="Message"
          />
        </div>
        <button className=" bg-purple-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-purple-400 hover:shadow-none hover:text-black transition-all duration-500">
          Send
        </button>
      </form>
    </section>
  );
}
