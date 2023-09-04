import About from "./components/About"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Tools from "./components/Tools"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <Intro />
      <Projects />
      <About />
      <Tools />
      <Contact />
      <Footer />
    </main>
  )
}
