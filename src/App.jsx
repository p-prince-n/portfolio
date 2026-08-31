


import NavBar from "./Components/Navbar/NavBar";

import HeroLeft from "./Components/Hero/HeroLeft";
import HeroRight from "./Components/Hero/HeroRight";

import SkillCards from "./Components/SkiilsCards";
import About from "./Components/About/About";
import TechArsenal from "./Components/TechArsenal";
import Education from "./Components/Education/Education";
import Expreience from "./Components/Expreience";
import Contact from "./Components/Contact/Contact";

import BackgroundAnimation from "./BackgroundAnimation";
import { useTheme } from "./Context/ThemeContext";
import Project from "./Components/Projects/Project";
import Footer from "./Components/Footer";

const Section = ({ id, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`relative scroll-mt-28 ${className}`}
    >
      {children}
    </section>
  );
};

const App = () => {
 const { darkMode } = useTheme()
 console.log({darkMode});
 
  
  return (
    <div data-theme={darkMode? "dark": "light"} className="relative min-h-screen overflow-x-hidden  text-black  dark:text-white selection:bg-emerald-400/30 selection:text-emerald-300">
      {/* Background */}
      <BackgroundAnimation />

      {/* Main content */}
      <div className="relative z-10">
        {/* Navbar */}
        <NavBar />

        <Section
          id="hero"
          className="flex min-h-screen  w-full items-center justify-center px-4 pt-28 sm:px-6 lg:px-8"
        >
          <div className="mx-auto md:-mt-10 grid  w-full  grid-cols-1 items-center md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Left */}
            <div className="order-2 lg:order-1 -mt-15 md:mt-auto ">
              <HeroLeft />
            </div>

            {/* Right */}
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <HeroRight />
            </div>
          </div>
        </Section>

        <Section
          id="skills"
          className="px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto w-full ">
            <SkillCards />
          </div>
        </Section>

        <Section
          id="about"
          className="px-4  sm:px-6 lg:px-8 "
        >
          <div className="mx-auto w-full ">
            <About />
          </div>
        </Section>

        <Section
          id="tech-skills"
          className="px-4 sm:px-6 lg:px-8 "
        >
          <div className="mx-auto w-full ">
            <TechArsenal />
          </div>
        </Section>
        <Section
          id="projects"
          className="px-4 sm:px-6 lg:px-8 "
        >
          <div className="mx-auto w-full ">
            <Project />
          </div>
        </Section>

        <Section
          id="education"
          className="px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto w-full ">
            <Education />
          </div>
        </Section>

        <Section
          id="experience"
          className="px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto w-full ">
            <Expreience />
          </div>
        </Section>

    
        <Section
          id="contact"
          className="min-h-screen px-4 sm:px-6 lg:px-8 "
        >
          <div className="mx-auto flex min-h-[70vh] w-full  items-center justify-center">
            <Contact />
          </div>
        </Section>
        <Footer/>
      </div>
    </div>
  );
};

export default App;

