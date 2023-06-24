import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <main>
      <Intro />
      <Projects />
      <About />
      <Tools />
      <Contact />
    </main>
  );
}
