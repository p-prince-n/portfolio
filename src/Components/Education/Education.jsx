import React from "react";
import { motion } from "framer-motion";

import EducationDetails from "./EducationDetails";
import CourseCard from "./CourseCard";

const headingVariant = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const courses = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Web Technologies",
  "Software Engineering",
  "Computer Networks",
  "Operating Systems",
  "Programming Fundamentals",
];


export default function Education() {
  return (
    <section
      id="education"
      className="
        relative
        w-full
        overflow-hidden
        px-5
        py-16

        sm:px-8

        md:px-10
        md:py-20

        lg:px-16
        lg:py-24
      "
    >
      {/* =================================
          BACKGROUND GLOW
      ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/4
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-teal-500/[0.055]
          blur-[130px]
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
          bg-violet-500/[0.045]
          blur-[130px]
        "
      />

    

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        variants={{
          hidden: {},

          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-center
        "
      >
        {/* Label */}

        <motion.p
          variants={headingVariant}
          className="
            leckerli-one-font
            text-lg
            font-semibold
            md:text-xl
          "
        >
          &mdash;&mdash;&mdash;&mdash;
          Academic Background
          &mdash;&mdash;&mdash;&mdash;
        </motion.p>

        {/* Heading */}

        <motion.h1
          variants={headingVariant}
          className="
            new-rocker-font
            mt-2
            text-center
            text-3xl
            font-bold
            uppercase
            text-white

            sm:text-4xl
            md:text-[40px]
          "
        >
          Education{" "}

          <span className="text-teal-400">
            & Learning
          </span>
        </motion.h1>

        {/* Description */}

        <motion.p
          variants={headingVariant}
          className="
            mt-4
            max-w-2xl
            text-center
            text-sm
            leading-7
            text-gray-500
            sm:text-base
          "
        >
          My academic foundation in computer science and the
          core subjects that shaped my approach to software
          development.
        </motion.p>
      </motion.div>


      {/* =================================
          MAIN CONTENT
      ================================= */}

      <div
        className="
          relative
          z-10

          mx-auto
          mt-10

          grid
          w-full
          max-w-7xl

          grid-cols-1

          gap-8

          lg:grid-cols-[1fr_1fr]
          lg:gap-14
          xl:gap-20
          
        "
      >

      

        <EducationDetails />


  

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.15,
              },
            },
          }}
          className="w-full"
        >
          {/* Coursework heading */}

          <motion.p
            variants={headingVariant}
            className="
              mb-5
              font-mono
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-gray-300
            "
          >
            Key Coursework
          </motion.p>


          {/* Course cards */}

          <div className="grid grid-cols-1 gap-3">
            {courses.map((course, index) => (
              <CourseCard
                key={course}
                number={index + 1}
                title={course}
                index={index}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}