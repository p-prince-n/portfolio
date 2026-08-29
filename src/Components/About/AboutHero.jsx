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

            text-teal-600
            dark:text-teal-400

            md:text-xl

            transition-colors
            duration-500
            ease-in-out
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

            text-slate-900
            dark:text-white

            sm:text-[48px]
            md:text-[56px]
            lg:text-[62px]

            transition-colors
            duration-500
            ease-in-out
          "
        >
          Building
          <br />

          <span
            className="
              text-teal-600
              dark:text-teal-400

              transition-colors
              duration-500
              ease-in-out
            "
          >
            Digital Systems
          </span>

          <br />

          <span
            className="
              text-slate-900
              dark:text-white

              transition-colors
              duration-500
              ease-in-out
            "
          >
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
            from-teal-600
            to-transparent

            dark:from-teal-400
            dark:to-transparent

            transition-colors
            duration-500
          "
        />

        <motion.p
          variants={textVariant}
          className="
            mt-7
            max-w-xl
            text-sm
            leading-7

            text-slate-600
            dark:text-gray-400

            sm:text-base
            sm:leading-8

            transition-colors
            duration-500
            ease-in-out
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

            border-slate-200
            bg-white

            dark:border-white/10
            dark:bg-white/[0.025]

            p-6
            backdrop-blur-xl
            sm:p-8

            transition-colors
            duration-500
          "
        >
          {/* Gradient */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-gradient-to-br
              from-teal-500/[0.05]
              via-transparent
              to-violet-500/[0.05]

              dark:from-teal-400/[0.07]
              dark:via-transparent
              dark:to-violet-500/[0.07]

              transition-colors
              duration-500
            "
          />

          <div className="relative z-10">
            <p
              className="
                font-mono
                text-xs
                uppercase
                tracking-[0.2em]

                text-teal-600
                dark:text-teal-400

                transition-colors
                duration-500
              "
            >
              Developer Profile
            </p>

            <h3
              className="
                mt-4
                text-xl
                font-semibold

                text-slate-900
                dark:text-white

                sm:text-2xl

                transition-colors
                duration-500
              "
            >
              From interfaces to intelligent systems.
            </h3>

            <p
              className="
                mt-4
                text-sm
                leading-7

                text-slate-600
                dark:text-gray-400

                sm:text-base

                transition-colors
                duration-500
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

                    border-slate-200
                    bg-slate-50
                    text-slate-600

                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:text-gray-300

                    px-3
                    py-1.5
                    text-xs

                    transition-all
                    duration-300

                    hover:border-teal-500/40
                    hover:text-teal-600

                    dark:hover:border-teal-400/40
                    dark:hover:text-teal-300
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

                border-slate-200
                dark:border-white/10

                pt-5

                transition-colors
                duration-500
              "
            >
              <div
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full

                  bg-teal-600
                  dark:bg-teal-400

                  shadow-[0_0_12px_rgba(20,184,166,0.6)]
                  dark:shadow-[0_0_12px_rgba(45,212,191,0.8)]

                  transition-colors
                  duration-500
                "
              />

              <span
                className="
                  text-xs

                  text-slate-500
                  dark:text-gray-500

                  transition-colors
                  duration-500
                "
              >
                MERN • AI • APIs • Systems
              </span>

              <ArrowUpRight
                size={15}
                className="
                  ml-auto

                  text-teal-600
                  dark:text-teal-400

                  transition-colors
                  duration-500
                "
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}