import React, { useState } from "react";
import { motion } from "framer-motion";


const cardVariant = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
    filter: "blur(7px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariant = {
  hidden: {
    opacity: 0,
    x: -12,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function CourseCard({ number, title, index = 0 }) {
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

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotate({
      x: rotateX,
      y: rotateY,
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
      variants={cardVariant}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay: index * 0.12,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: pressed ? 0.975 : 1,
      }}
      style={{
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border

        border-slate-200
        bg-white

        dark:border-white/10
        dark:bg-white/[0.035]

        px-4
        py-4
        backdrop-blur-xl

        transition-all
        duration-500

        hover:border-teal-500/30
        hover:bg-slate-50
        hover:shadow-[0_20px_60px_-25px_rgba(20,184,166,0.25)]

        dark:hover:border-teal-400/30
        dark:hover:bg-white/[0.055]
        dark:hover:shadow-[0_20px_60px_-25px_rgba(45,212,191,0.45)]

        sm:px-5
        sm:py-4
      "
    >
      {/* Main gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          bg-gradient-to-br

          from-teal-500/[0.05]
          via-transparent
          to-violet-500/[0.05]

          dark:from-teal-400/[0.08]
          dark:via-transparent
          dark:to-violet-500/[0.08]

          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-28
          w-28
          rounded-full

          bg-teal-500/10
          dark:bg-teal-400/10

          blur-3xl

          transition-all
          duration-500

          group-hover:bg-teal-500/20
          dark:group-hover:bg-teal-400/20
        "
      />

      {/* Top edge */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-px

          bg-gradient-to-r
          from-transparent
          via-teal-500/70
          to-transparent

          dark:via-teal-400/70

          opacity-40
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          items-center
          gap-3
        "
        style={{
          transform: "translateZ(25px)",
        }}
      >
        {/* Number */}
        <motion.div
          variants={contentVariant}
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-lg
            border

            border-teal-500/30
            bg-teal-500/[0.06]

            dark:border-teal-400/30
            dark:bg-teal-400/[0.06]

            font-mono
            text-[10px]
            font-semibold

            text-teal-600
            dark:text-teal-300

            transition-all
            duration-300

            group-hover:scale-110

            group-hover:border-teal-500/50
            group-hover:bg-teal-500/10

            dark:group-hover:border-teal-400/50
            dark:group-hover:bg-teal-400/10
          "
        >
          {String(number).padStart(2, "0")}
        </motion.div>

        {/* Course name */}
        <motion.p
          variants={contentVariant}
          className="
            text-sm
            font-medium

            text-slate-700
            dark:text-gray-300

            transition-all
            duration-300

            group-hover:translate-x-1
            group-hover:text-slate-900

            dark:group-hover:text-white

            sm:text-[15px]
          "
        >
          {title}
        </motion.p>

        {/* Arrow */}
        <motion.span
          variants={contentVariant}
          className="
            ml-auto

            text-teal-600/50
            dark:text-teal-400/50

            transition-all
            duration-300

            group-hover:translate-x-1
            group-hover:-translate-y-1

            group-hover:text-teal-600
            dark:group-hover:text-teal-300
          "
        >
          ↗
        </motion.span>
      </div>
    </motion.div>
  );
}

export default React.memo(CourseCard);
