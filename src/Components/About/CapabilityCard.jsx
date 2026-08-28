import React, { useState } from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
    filter: "blur(7px)",
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

export default function CapabilityCard({
  icon: Icon,
  title,
  description,
}) {
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  const [pressed, setPressed] = useState(false);


  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width - 0.5) * 10;

    const y =
      ((e.clientY - rect.top) / rect.height - 0.5) * -10;

    setRotate({
      x: y,
      y: x,
    });
  };


  const resetCard = () => {
    setRotate({
      x: 0,
      y: 0,
    });

    setPressed(false);
  };


  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetCard}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: pressed ? 0.97 : 1,
      }}
      style={{
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="
        group
        relative
        min-h-[220px]
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.025]
        p-6
        backdrop-blur-xl
        transition-colors
        duration-500

        hover:border-teal-400/30
        hover:bg-white/[0.045]
        hover:shadow-[0_25px_60px_-25px_rgba(45,212,191,0.4)]
      "
    >

      {/* Gradient */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-teal-400/[0.07]
          via-transparent
          to-violet-500/[0.08]
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
          h-32
          w-32
          rounded-full
          bg-teal-400/10
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-teal-400/20
        "
      />


      <div
        className="
          relative
          z-10
        "
        style={{
          transform: "translateZ(35px)",
        }}
      >

        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.12,
          }}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-teal-400/20
            bg-teal-400/[0.06]
            text-teal-300
            transition-all
            duration-300
            group-hover:border-teal-400/40
            group-hover:bg-teal-400/10
          "
        >
          <Icon size={21} strokeWidth={1.7} />
        </motion.div>


        {/* Content */}

        <h3
          className="
            mt-6
            text-lg
            font-semibold
            text-gray-100
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:text-teal-200
          "
        >
          {title}
        </h3>


        <p
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
          {description}
        </p>

      </div>

    </motion.div>
  );
}