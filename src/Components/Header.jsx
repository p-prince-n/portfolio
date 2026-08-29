
import React from "react";
import { motion } from "framer-motion";

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

const Header = ({ label, header, description, id = "" }) => {
  return (
    <motion.div
      id={id}
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
        mb-10
        flex
        w-full
        flex-col
        items-center
        justify-center
        text-center
        md:mb-14
      "
    >
      {/* Label */}
      <motion.p
        variants={headingVariant}
        className="
          leckerli-one-font
          text-base
          font-semibold
          sm:text-lg
          md:text-xl

          text-slate-700
          dark:text-inherit

          transition-colors
          duration-500
          ease-in-out
        "
      >
        &mdash;&mdash;&mdash;&mdash; {label} &mdash;&mdash;&mdash;&mdash;
      </motion.p>

      {/* Heading */}
      <motion.h1
        variants={headingVariant}
        className="
          new-rocker-font
          mt-1
          text-[25px]
          font-bold
          uppercase

          text-teal-600
          dark:text-teal-400

          sm:text-[32px]
          md:text-[40px]

          transition-colors
          duration-500
          ease-in-out
        "
      >
        {header}
      </motion.h1>

      {/* Description */}
      {description && (
        <motion.p
          variants={headingVariant}
          className="
            mt-3
            max-w-2xl
            text-sm
            leading-relaxed

            text-gray-700
            dark:text-gray-400

            sm:text-base

            transition-colors
            duration-500
            ease-in-out
          "
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default React.memo(Header);

