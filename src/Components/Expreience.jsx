import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layers3,
  ShieldCheck,
  Blocks,
  Database,
  Users,
} from "lucide-react";
import Header from "./Header";




const cardVariant = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.96,
    filter: "blur(6px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};



const infoVariant = {
  hidden: {
    opacity: 0,
    x: -50,
    filter: "blur(6px)",
  },

  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const EXPERIENCES = [
  {
    icon: Code2,
    title: "React.js Development",
    desc: "Developed responsive and scalable interfaces using React.js with reusable components and modern frontend architecture.",
  },

  {
    icon: Blocks,
    title: "Reusable Components",
    desc: "Built modular and reusable React components to maintain consistency, improve development speed, and simplify future updates.",
  },

  {
    icon: Layers3,
    title: "Multi-Role Dashboard",
    desc: "Implemented multi-role dashboards with role-specific interfaces and features for different types of users.",
  },

  {
    icon: ShieldCheck,
    title: "RBAC & Authentication",
    desc: "Implemented authentication and authorization flows with role-based access control to protect application features and routes.",
  },

  {
    icon: Database,
    title: "REST API Integration",
    desc: "Integrated REST APIs with React applications and managed server communication, API states, and data flow using Redux Toolkit.",
  },

  {
    icon: Users,
    title: "Forms & User Experience",
    desc: "Built structured and validated forms using React Hook Form with smooth UI interactions and Framer Motion animations.",
  },
];


export default function Expreience() {
  return (
    <section
      
      className="w-full overflow-hidden  px-5  sm:px-8 md:px-10 lg:px-16 py-5 md:py-6 lg:py-10"
    >
      <Header label={"Work Experience"} id={"experience"} header={<>
        Professional &nbsp;&nbsp;

          <span className="text-white">
            Journey
          </span>
        </>} description={"A glimpse into the projects, systems, and technologies I've worked with while building production-ready frontend applications."} />

     


      {/* =================================
          MAIN EXPERIENCE LAYOUT
      ================================= */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-8
          lg:grid-cols-[0.85fr_1.6fr]
          lg:gap-12
          xl:gap-16
        "
      >


        {/* =================================
            LEFT SIDE — EXPERIENCE INFO
        ================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
          className="
            flex
            flex-col
            justify-center
            lg:sticky
            lg:top-24
            lg:h-fit
          "
        >

          {/* Internship label */}

          <motion.p
            variants={infoVariant}
            className="
              mb-4
              font-mono
              text-xs
              uppercase
              tracking-[0.2em]
              text-teal-400
              sm:text-sm
            "
          >
            Internship
          </motion.p>


          {/* Designation */}

          <motion.h2
            variants={infoVariant}
            className="
              new-rocker-font
              max-w-lg
              text-3xl
              font-bold
              leading-tight
              text-white
              sm:text-4xl
            "
          >
            Frontend Developer
          </motion.h2>


          {/* Company */}

          <motion.p
            variants={infoVariant}
            className="
              mt-2
              text-lg
              font-semibold
              text-teal-400
              sm:text-xl
            "
          >
            UpToSkills
          </motion.p>


          {/* Meta information */}

          <motion.div
            variants={infoVariant}
            className="
              mt-6
              flex
              flex-col
              gap-3
              text-sm
              text-gray-400
            "
          >

            <div className="flex items-center gap-3">
              <span className="text-teal-400">▣</span>
              <span>December 2025 — March 2026</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-teal-400">⌖</span>
              <span>Delhi · Remote</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-teal-400">◷</span>
              <span>3 Months Internship</span>
            </div>

          </motion.div>


          {/* Divider */}

          <motion.div
            variants={infoVariant}
            className="my-7 h-px w-full bg-white/10"
          />


          {/* Description */}

          <motion.p
            variants={infoVariant}
            className="
              max-w-xl
              text-sm
              leading-7
              text-gray-400
              sm:text-base
            "
          >
            Worked remotely as a Frontend Developer, contributing to
            scalable React.js applications, multi-role dashboards,
            authentication and authorization systems, and REST API
            integrations.
          </motion.p>


          {/* Technology chips */}

          <motion.div
            variants={infoVariant}
            className="mt-6 flex flex-wrap gap-2"
          >

            {[
              "React.js",
              "Framer Motion",
              "React Hook Form",
              "Redux Toolkit",
              "RBAC",
              "REST APIs",
              "Authentication",
              "Authorization",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-1.5
                  text-xs
                  text-gray-300
                  transition-all
                  duration-300
                  hover:border-teal-400/30
                  hover:bg-teal-400/[0.06]
                  hover:text-teal-300
                "
              >
                {tech}
              </span>
            ))}

          </motion.div>

        </motion.div>


        {/* =================================
            RIGHT SIDE — EXPERIENCE CARDS
        ================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                delayChildren: 0.25,
                staggerChildren: 0.22,
              },
            },
          }}
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
          "
        >

          {EXPERIENCES.map(
            ({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={cardVariant}

                /* 3D hover */
                whileHover={{
                  y: -8,
                  rotateX: 3,
                  rotateY: -3,
                  scale: 1.015,
                }}

                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}

                style={{
                  transformPerspective: 1000,
                }}

                className="
                  group
                  relative
                  min-h-[190px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-5
                  backdrop-blur-md

                  transition-all
                  duration-500
                  ease-out

                  hover:border-teal-400/40
                  hover:bg-white/[0.06]
                  hover:shadow-[0_20px_50px_-20px_rgba(45,212,191,0.35)]
                "
              >

                {/* Gradient overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  <div
                    className="
                      absolute
                      -inset-px
                      rounded-2xl
                      bg-gradient-to-br
                      from-teal-400/10
                      via-transparent
                      to-violet-500/10
                    "
                  />
                </div>


                {/* Top glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    bg-teal-400/10
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-teal-400/20
                  "
                />


                {/* Card content */}

                <div className="relative z-10">

                  {/* Icon */}

                  <div
                    className="
                      mb-7
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.05]
                      text-teal-300

                      transition-all
                      duration-300

                      group-hover:scale-110
                      group-hover:border-teal-400/40
                      group-hover:bg-teal-400/10
                      group-hover:text-teal-200
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                    />
                  </div>


                  {/* Title */}

                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-white
                      transition-all
                      duration-300

                      group-hover:translate-x-1
                      group-hover:text-teal-200
                    "
                  >
                    {title}
                  </h3>


                  {/* Description */}

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-gray-400
                      transition-colors
                      duration-300
                      group-hover:text-gray-300
                    "
                  >
                    {desc}
                  </p>

                </div>

              </motion.div>
            )
          )}

        </motion.div>

      </div>

    </section>
  );
}