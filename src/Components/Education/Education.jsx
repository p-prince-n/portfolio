import React from "react";
import { motion } from "framer-motion";

import EducationDetails from "./EducationDetails";
import CourseCard from "./CourseCard";
import Header from "../Header";
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

export default function Education() {
  return (
    <section
      id="education"
      className="
        relative
        w-full
        overflow-hidden
        px-5
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

      <Header
        label={" Academic Background"}
        header={
          <>
            Education{" "}
            <span
              className="
                text-teal-600
                dark:text-teal-400

                transition-colors
                duration-500
                ease-in-out
              "
            >
              & Learning
            </span>
          </>
        }
        description={
          "My academic foundation in computer science and the core subjects that shaped my approach to software development."
        }
      />

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

              text-slate-700
              dark:text-gray-300

              transition-colors
              duration-500
              ease-in-out
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

