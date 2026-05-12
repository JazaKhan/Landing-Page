import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import { usePortfolioData } from "./hooks/usePortfolioData";

const App = () => {
  const { data, loading } = usePortfolioData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#191970_100%)]" />
        <p className="text-neutral-400 text-sm tracking-widest animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden text-neutral-300 antiliased selection:bg-sky-300 selection:text-sky-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#191970_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <div id="hero">
          <Hero
            name={data.heroName}
            title={data.heroTitle}
            bio={data.heroBio}
          />
        </div>
        <div id="technologies">
          <Technologies />
        </div>
        <div id="experience">
          <Experience experiences={data.experiences} />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="projects">
          <Projects projects={data.projects} />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;