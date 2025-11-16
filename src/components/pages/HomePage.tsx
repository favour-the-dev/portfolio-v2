import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skill from "./components/Skills";
function HomePage() {
  return (
    <>
      <main className="w-full h-full flex flex-col overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Skill />
      </main>
    </>
  );
}

export default HomePage;
