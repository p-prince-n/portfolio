import React, { useState } from "react";
import { motion } from "framer-motion";


const cardVariant = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.96,
    filter: "blur(8px)",
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

const contentVariant = {
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

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  index = 0,
}) {
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

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

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

  const handleMouseDown = () => {
    setPressed(true);
  };

  const handleMouseUp = () => {
    setPressed(false);
  };

  const CardContent = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      variants={cardVariant}
      transition={{
        delay: index * 0.12,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
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

        p-4
        backdrop-blur-xl

        transition-all
        duration-500

        hover:border-teal-500/30
        hover:bg-slate-50
        hover:shadow-[0_20px_60px_-25px_rgba(20,184,166,0.25)]

        dark:hover:border-teal-400/30
        dark:hover:bg-white/[0.055]
        dark:hover:shadow-[0_20px_60px_-25px_rgba(45,212,191,0.45)]

        sm:p-5
      "
    >
      {/* ================================
          MAIN GRADIENT
      ================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl

          bg-gradient-to-br
          from-teal-500/[0.05]
          via-transparent
          to-violet-500/[0.06]

          dark:from-teal-400/[0.07]
          dark:via-transparent
          dark:to-violet-500/[0.08]

          opacity-0
          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* ================================
          MOUSE GLOW
      ================================= */}
      <div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-32
          w-32
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

      {/* ================================
          TOP EDGE GLOW
      ================================= */}
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

      {/* ================================
          CONTENT
      ================================= */}
      <div
        className="
          relative
          z-10
          flex
          items-center
          gap-4
        "
        style={{
          transform: "translateZ(25px)",
        }}
      >
        {/* ICON */}
        <motion.div
          variants={contentVariant}
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            border

            border-teal-500/20
            bg-teal-500/[0.06]
            text-teal-600

            dark:border-teal-400/20
            dark:bg-teal-400/[0.06]
            dark:text-teal-300

            transition-all
            duration-300

            group-hover:scale-110

            group-hover:border-teal-500/40
            group-hover:bg-teal-500/10
            group-hover:text-teal-600

            dark:group-hover:border-teal-400/40
            dark:group-hover:bg-teal-400/10
            dark:group-hover:text-teal-200
          "
        >
          <Icon size={19} strokeWidth={1.7} />
        </motion.div>

        {/* TEXT */}
        <div className="min-w-0 flex-1">
          <motion.p
            variants={contentVariant}
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.18em]

              text-slate-500
              dark:text-gray-500

              transition-colors
              duration-300

              group-hover:text-teal-600
              dark:group-hover:text-teal-400/80
            "
          >
            {label}
          </motion.p>

          <motion.p
            variants={contentVariant}
            className="
              mt-1
              truncate
              text-sm
              font-medium

              text-slate-800
              dark:text-gray-200

              transition-all
              duration-300

              group-hover:translate-x-1
              group-hover:text-slate-950

              dark:group-hover:text-white

              sm:text-[15px]
            "
          >
            {value}
          </motion.p>
        </div>

        {/* ARROW */}
        <motion.span
          variants={contentVariant}
          className="
            hidden
            text-lg

            text-teal-600/70
            dark:text-teal-400/70

            transition-all
            duration-300

            group-hover:translate-x-1
            group-hover:-translate-y-1

            group-hover:text-teal-600
            dark:group-hover:text-teal-300

            sm:block
          "
        >
          ↗
        </motion.span>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}

