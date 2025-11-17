import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skill from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function HomePage() {
  return (
    <>
      <main className="w-full h-full flex flex-col overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Skill />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default HomePage;
