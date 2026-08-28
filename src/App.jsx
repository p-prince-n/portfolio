
import React from "react";

import NavBar from "./Components/NavBar";

import HeroLeft from "./Components/Hero/HeroLeft";
import HeroRight from "./Components/Hero/HeroRight";

import SkillCards from "./Components/SkiilsCards";
import About from "./Components/About/About";
import TechArsenal from "./Components/TechArsenal";
import Education from "./Components/Education/Education";
import Expreience from "./Components/Expreience";
import Contact from "./Components/Contact/Contact";

import BackgroundAnimation from "./BackgroundAnimation";

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
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white selection:bg-emerald-400/30 selection:text-emerald-300">
      {/* Background */}
      <BackgroundAnimation />

      {/* Main content */}
      <div className="relative z-10">
        {/* Navbar */}
        <NavBar />

        {/* =====================================================
            HERO
        ====================================================== */}
        <Section
          id="hero"
          className="flex  w-full items-center justify-center px-4 pt-28 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid w-full  grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Left */}
            <div className="order-2 lg:order-1">
              <HeroLeft />
            </div>

            {/* Right */}
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <HeroRight />
            </div>
          </div>
        </Section>

        {/* =====================================================
            SKILLS
        ====================================================== */}
        <Section
          id="skills"
          className="px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto w-full ">
            <SkillCards />
          </div>
        </Section>

        {/* =====================================================
            ABOUT
        ====================================================== */}
        <Section
          id="about"
          className="px-4  sm:px-6 lg:px-8 "
        >
          <div className="mx-auto w-full ">
            <About />
          </div>
        </Section>

        {/* =====================================================
            TECHNOLOGY
        ====================================================== */}
        <Section
          id="tech-skills"
          className="px-4 sm:px-6 lg:px-8 "
        >
          <div className="mx-auto w-full ">
            <TechArsenal />
          </div>
        </Section>

        {/* =====================================================
            EDUCATION
        ====================================================== */}
        <Section
          id="education"
          className="px-4 sm:px-6 lg:px-8 "
        >
          <div className="mx-auto w-full ">
            <Education />
          </div>
        </Section>

        {/* =====================================================
            EXPERIENCE
        ====================================================== */}
        <Section
          id="experience"
          className="px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto w-full ">
            <Expreience />
          </div>
        </Section>

        {/* =====================================================
            CONTACT
        ====================================================== */}
        <Section
          id="contact"
          className="min-h-screen px-4 sm:px-6 lg:px-8 "
        >
          <div className="mx-auto flex min-h-[70vh] w-full  items-center justify-center">
            <Contact />
          </div>
        </Section>
      </div>
    </div>
  );
};

export default App;

