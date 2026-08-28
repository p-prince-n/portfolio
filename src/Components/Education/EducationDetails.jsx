import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationVariant = {
  hidden: {
    opacity: 0,
    x: -60,
    y: 30,
    scale: 0.96,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textVariant = {
  hidden: {
    opacity: 0,
    y: 15,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

 function EducationDetails() {
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  const [pressed, setPressed] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotate({
      x: ((y - centerY) / centerY) * -3,
      y: ((x - centerX) / centerX) * 3,
    });
  };

  const handleMouseLeave = () => {
    setRotate({
      x: 0,
      y: 0,
    });

    setPressed(false);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={educationVariant}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: pressed ? 0.985 : 1,
      }}
      style={{
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.025]
        p-5
        backdrop-blur-xl

        transition-all
        duration-500

        hover:border-teal-400/20
        hover:bg-white/[0.04]
        hover:shadow-[0_25px_80px_-35px_rgba(45,212,191,0.4)]
        
        sm:p-7
        lg:border-transparent
        lg:bg-transparent
        lg:p-0
        lg:backdrop-blur-none
        lg:hover:border-transparent
        lg:hover:bg-transparent
        lg:hover:shadow-none
      "
    >
      {/* Background gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-teal-400/[0.05]
          via-transparent
          to-violet-500/[0.06]
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100

          lg:hidden
        "
      />

      <div
        className="
          relative
          z-10
          lg:transform-[translateZ(30px)]
           lg:p-5
        "
        style={{
          transform: "translateZ(30px)",
        }}
      >
        {/* Degree badge */}
        <motion.div
          variants={textVariant}
          className="flex items-center gap-3"
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-teal-400/30
              bg-teal-400/[0.07]
              text-teal-300

              transition-all
              duration-300

              group-hover:scale-110
              group-hover:border-teal-400/50
              group-hover:bg-teal-400/10
            "
          >
            <GraduationCap
              size={22}
              strokeWidth={1.7}
            />
          </div>

          <div>
            <p
              className="
                font-mono
                text-xs
                uppercase
                tracking-[0.18em]
                text-gray-300
              "
            >
              Bachelor's Degree
            </p>

            <p
              className="
                mt-1
                text-sm
                font-semibold
                text-teal-400
                transition-colors
                duration-300
                group-hover:text-teal-300
              "
            >
              S.I.E.S. College of Arts Science and Commerce
            </p>
          </div>
        </motion.div>

        {/* Degree */}
        <motion.h2
          variants={textVariant}
          className="
            new-rocker-font
            mt-7
            text-2xl
            font-bold
            leading-tight
            text-white
            transition-colors
            duration-300
            group-hover:text-teal-50

            sm:text-3xl
          "
        >
          Bachelor of Science
          <br />
          <span className="text-teal-400">
            (B.Sc. Computer Science)
          </span>
        </motion.h2>

        {/* College */}
        <motion.p
          variants={textVariant}
          className="
            mt-3
            text-sm
            leading-6
            text-gray-500
            transition-colors
            duration-300
            group-hover:text-gray-400
          "
        >
          Sion West, Mumbai – 400022
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={textVariant}
          className="
            mt-8
            grid
            grid-cols-3
            gap-3
            border-y
            border-white/10
            py-6
          "
        >
          <div className="flex flex-col items-center justify-center" >
            <p
              className="
                new-rocker-font
                text-2xl
                font-bold
                text-teal-400
                sm:text-3xl
              "
            >
              8.83
            </p>

            <p
              className="
                mt-1
                font-mono
                text-[13px]
                uppercase
                font-bold
                tracking-[0.14em]
                text-gray-300
                sm:text-base lg:text-lg
              "
            >
              CGPA
            </p>
          </div>

          <div className="flex flex-col items-center justify-center" >
            <p
              className="
                new-rocker-font
                text-2xl
                font-bold
                text-teal-400
                sm:text-3xl
              "
            >
              2026
            </p>

            <p
              className="
               mt-1
                font-mono
                text-[13px]
                uppercase
                font-bold
                tracking-[0.14em]
                text-gray-300
                sm:text-base lg:text-lg
              "
            >
              Graduated
            </p>
          </div>

          <div className="flex flex-col items-center justify-center" >
            <p
              className="
                new-rocker-font
                text-2xl
                font-bold
                text-teal-400
                sm:text-3xl
              "
            >
              3
            </p>

            <p
              className="
                mt-1
                font-mono
                text-[13px]
                uppercase
                font-bold
                tracking-[0.14em]
                text-gray-300
                sm:text-base lg:text-lg
              "
            >
              Years
            </p>
          </div>
        </motion.div>

        {/* Graduation status */}
        <motion.div
          variants={textVariant}
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-teal-400/20
            bg-teal-400/[0.05]
            px-4
            py-2
            text-xs
            font-medium
            text-teal-300
            transition-all
            duration-300
            hover:border-teal-400/40
            hover:bg-teal-400/[0.08]
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />

          Graduated — May 2026
        </motion.div>
      </div>
    </motion.div>
  );
}

export default React.memo(EducationDetails)