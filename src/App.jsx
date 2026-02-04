import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antiliased selection:bg-sky-300 selection:text-sky-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        {" "}
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#191970_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <div id="technologies">
          <Technologies />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
