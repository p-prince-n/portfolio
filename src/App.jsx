import React from "react";
import NavBar from "./Components/NavBar";
import HeroLeft from "./Components/Hero/HeroLeft";
import HeroRight from "./Components/Hero/HeroRight";
import SkillCards from "./Components/SkiilsCards";
import TechArsenal from "./Components/TechArsenal";
import BackgroundAnimation from "./BackgroundAnimation";
import Expreience from "./Components/Expreience";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";

const App = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background */}
      <BackgroundAnimation />

      {/* Content */}
      <div className="relative z-10">
        <NavBar />

        <div
          id="hero"
          className="
        relative
        flex
        min-h-[calc(100vh-80px)]
        w-full
        flex-col-reverse
        items-center
        justify-center
        overflow-x-hidden
        md:flex-row
        md:items-start
        md:justify-between
      "
        >
          <HeroLeft />
          <HeroRight />
        </div>

        <SkillCards />

        <div className="flex w-full items-center justify-center">
          <TechArsenal />
        </div>
        <Expreience/>

        {/* Contact */}
        <div id="contact" className="min-h-screen">
          {/* Contact section */}
          <Contact/>
        </div>
        
        <Education/>
      </div>
    </div>
  );
};

export default App;
