import React from "react";

export default function Contact() {
  return (
    <section id="contact" className=" px-3 h-screen flex flex-col items-center">
      <h2 className=" text-3xl font-semibold mb-6 mr-auto ">.contact()</h2>
      <form className=" flex flex-col gap-4 w-full">
        <label className=" text-lg font-semibold text-purple-500 mb-2">Name</label>
        <input className=" border border-slate-900 rounded-md py-2 px-4" type="text" name="name" />
        <label className=" text-lg font-semibold text-purple-500 mb-2">Email</label>
        <input className=" border border-slate-900 rounded-md py-2 px-4" type="email" name="email" />
        <label className=" text-lg font-semibold text-purple-500 mb-2">Message</label>
        <textarea className=" border border-slate-900 rounded-md py-2 px-4" name="message" rows="10" />
        <button className=" bg-purple-500 text-slate-50 font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-purple-600 hover:shadow-none transition-all duration-500">
          Send
        </button>
      </form>
    </section>
  );
}
