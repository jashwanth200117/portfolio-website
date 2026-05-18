import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <div className="text-white bg-[radial-gradient(circle_at_center,_#13213d_0%,_#0b1630_45%,_#020617_100%)]">
        <Hero />
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-8"></div>
        <About />
      </div>
      <Projects />
      
      <Contact />
    </>
  );
};

export default Home;