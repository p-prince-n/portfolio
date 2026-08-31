import React from "react";
import Header from "../Header";
import { MagneticButton } from "../AnimatedButton";
import ProjectShowcase from "./ProjectShowcase.jsx";
import { showProjectOverView } from "../../constants/index.js";





const Project = () => {
  return (
    <section
      id="Project"
      className="
            relative
            w-full
            overflow-hidden
            px-0
            py-5
            md:py-6
            lg:py-10
            sm:px-8
            md:px-10
            lg:px-16
    
            transition-colors
            duration-500
          "
    >
     
      <div
        className="
              pointer-events-none
              absolute
              left-1/4
              top-20
              h-[350px]
              w-[350px]
              rounded-full
    
              bg-teal-500/[0.04]
              dark:bg-teal-500/[0.055]
    
              blur-[130px]
    
              transition-colors
              duration-500
            "
      />

      <div
        className="
              pointer-events-none
              absolute
              bottom-0
              right-1/4
              h-[300px]
              w-[300px]
              rounded-full
    
              bg-violet-500/[0.035]
              dark:bg-violet-500/[0.045]
    
              blur-[130px]
    
              transition-colors
              duration-500
            "
      />

     <div className="flex  xl:px-20 flex-col  w-full md:flex-row md:items-center md:justify-between items-center justify-center ">
      <div>
         <Header
        label={"Featured Work"}
        header={
          <>
            Project that I {" "}
            <span
              className="
                    text-black
                    dark:text-white
    
                    transition-colors
                    duration-500
                    ease-in-out
                  "
            >
              Work
            </span>
          </>
        }
        description={
          ""}
      />
      </div>
       <div className=" md:-mt-15 w-full md:w-auto" >
        <MagneticButton
                      className="w-full
                        group
                        relative
                        isolate
                        overflow-hidden
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        border
      
                        border-emerald-600
                        dark:border-emerald-400
      
                        bg-transparent
                        px-6
                        py-2.5
                        cursor-pointer
                        font-semibold
      
                        text-emerald-700
                        dark:text-emerald-400
      
                        transition-all
                        duration-300
      
                        before:absolute
                        before:inset-y-0
                        before:left-0
                        before:-z-10
                        before:w-0
      
                        before:bg-emerald-500
                        dark:before:bg-emerald-400
      
                        before:transition-all
                        before:duration-500
                        hover:before:w-full
                        hover:text-black
      
                        shadow-[0_0_20px_rgba(16,185,129,0.08)]
                        dark:shadow-[0_0_20px_rgba(52,211,153,0.08)]
      
                        hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]
                        dark:hover:shadow-[0_0_30px_rgba(52,211,153,0.35)]
                      "
                      onClick={() => {
                       
                      }}
                    >
                     
      
                      <a href="https://github.com/p-prince-n" target="_blank" className="relative z-10">View All</a>
                    </MagneticButton>
       </div>
     </div>

    
<div className="w-full space-y-8 lg:space-y-10">
  {showProjectOverView.map((project) => (
    <div
      key={project.title}
      className="
        w-full
        min-w-0
        lg:h-155
      "
    >
      <ProjectShowcase {...project} />
    </div>
  ))}
</div>


    </section>
  );
};

export default Project;
