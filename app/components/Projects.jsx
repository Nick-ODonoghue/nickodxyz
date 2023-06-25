import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className=" h-screen flex flex-col items-center">
      <h2 className=" text-3xl font-semibold mb-6 mr-auto px-3">Projects</h2>
      <ProjectCard />
    </section>
  );
}
