import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
function HomePage() {
  return (
    <>
      <main className="w-full h-full flex flex-col overflow-hidden">
        <Hero />
        <About />
        <Experience />
      </main>
    </>
  );
}

export default HomePage;
