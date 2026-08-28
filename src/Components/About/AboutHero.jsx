import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const textVariant = {
  hidden: {
    opacity: 0,
    y: 45,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutHero() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className="
        grid
        grid-cols-1
        gap-10
        lg:grid-cols-[0.9fr_1.1fr]
        lg:gap-20
      "
    >

      

      <div>

        <motion.p
          variants={textVariant}
          className="
            leckerli-one-font
            text-lg
            font-semibold
            text-teal-400
            md:text-xl
          "
        >
          &mdash;&mdash;&mdash;&mdash; About Me &mdash;&mdash;&mdash;&mdash;
        </motion.p>


        <motion.h2
          variants={textVariant}
          className="
            new-rocker-font
            mt-5
            text-[38px]
            font-bold
            leading-[1.05]
            text-white
            sm:text-[48px]
            md:text-[56px]
            lg:text-[62px]
          "
        >
          Building
          <br />

          <span className="text-teal-400">
            Digital Systems
          </span>

          <br />

          <span className="text-white">
            That Scale.
          </span>
        </motion.h2>


        <motion.div
          variants={textVariant}
          className="
            mt-7
            h-px
            w-24
            bg-gradient-to-r
            from-teal-400
            to-transparent
          "
        />


        <motion.p
          variants={textVariant}
          className="
            mt-7
            max-w-xl
            text-sm
            leading-7
            text-gray-400
            sm:text-base
            sm:leading-8
          "
        >
          I'm a Computer Science graduate and Full-Stack Developer
          focused on building modern web applications with clean
          architecture, intuitive interfaces, and reliable backend
          systems.
        </motion.p>

      </div>


      {/* ================================
          RIGHT
      ================================= */}

      <motion.div
        variants={textVariant}
        className="
          relative
          flex
          flex-col
          justify-center
        "
      >

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.025]
            p-6
            backdrop-blur-xl
            sm:p-8
          "
        >

          {/* gradient */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-teal-400/[0.07]
              via-transparent
              to-violet-500/[0.07]
            "
          />


          <div className="relative z-10">

            <p
              className="
                font-mono
                text-xs
                uppercase
                tracking-[0.2em]
                text-teal-400
              "
            >
              Developer Profile
            </p>


            <h3
              className="
                mt-4
                text-xl
                font-semibold
                text-white
                sm:text-2xl
              "
            >
              From interfaces to intelligent systems.
            </h3>


            <p
              className="
                mt-4
                text-sm
                leading-7
                text-gray-400
                sm:text-base
              "
            >
              My development journey spans frontend engineering,
              backend APIs, databases, DevOps, and AI-powered
              applications. I enjoy turning complex requirements
              into maintainable, user-focused products.
            </p>


            {/* Tech highlights */}

            <div className="mt-7 flex flex-wrap gap-2">

              {[
                "React 19",
                "Node.js",
                "MongoDB",
                "FastAPI",
                "Docker",
                "LangGraph",
                "Redis",
                "REST APIs",
              ].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-3
                    py-1.5
                    text-xs
                    text-gray-300
                    transition-colors
                    duration-300
                    hover:border-teal-400/40
                    hover:text-teal-300
                  "
                >
                  {tech}
                </motion.span>
              ))}

            </div>


            {/* Bottom */}

            <div
              className="
                mt-8
                flex
                items-center
                gap-3
                border-t
                border-white/10
                pt-5
              "
            >
              <div
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-teal-400
                  shadow-[0_0_12px_rgba(45,212,191,0.8)]
                "
              />

              <span className="text-xs text-gray-500">
                MERN • AI • APIs • Systems
              </span>

              <ArrowUpRight
                size={15}
                className="ml-auto text-teal-400"
              />
            </div>

          </div>
        </div>

      </motion.div>

    </motion.div>
  );
}