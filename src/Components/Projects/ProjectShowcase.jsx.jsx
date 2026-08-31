import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const formVariant = {
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
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ProjectShowcase = ({
  mobileImage = false,
  image,
  browser = {},
  category,
  title,
  description,
  technologies = [],
  stats = [],
  features = [],
  architecture,
}) => {
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(true);
  const [hoveredSide, setHoveredSide] = useState(null);

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
    setHoveredSide(null);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={formVariant}
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
        group relative overflow-hidden rounded-[26px]

        border border-slate-200/80
        bg-white

        shadow-[0_20px_70px_-35px_rgba(15,23,42,0.30)]

        transition-all duration-700

        hover:border-teal-500/30
        hover:shadow-[0_30px_90px_-35px_rgba(13,148,136,0.28)]

        dark:border-white/[0.08]
        dark:bg-[#0c0f12]
        dark:shadow-[0_25px_90px_-35px_rgba(0,0,0,0.75)]

        dark:hover:border-teal-400/25
        dark:hover:shadow-[0_30px_100px_-35px_rgba(45,212,191,0.20)]
      "
    >
      <div
        className="
          pointer-events-none absolute inset-0 rounded-[26px]

          bg-gradient-to-br
          from-teal-500/[0.035]
          via-transparent
          to-indigo-500/[0.035]

          opacity-80
          transition-opacity duration-700
          group-hover:opacity-100

          dark:from-teal-400/[0.055]
          dark:via-transparent
          dark:to-violet-500/[0.055]
        "
      />

      <div
        className="
          pointer-events-none absolute left-[8%] right-[8%] top-0 h-px

          bg-gradient-to-r
          from-transparent
          via-teal-500/50
          to-transparent

          opacity-60
          transition-all duration-700
          group-hover:left-[4%]
          group-hover:right-[4%]
          group-hover:opacity-100

          dark:via-teal-400/55
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-24 -top-24
          h-48 w-48
          rounded-full

          bg-teal-500/[0.07]
          blur-[70px]

          transition-all duration-700

          group-hover:bg-teal-500/[0.12]

          dark:bg-teal-400/[0.07]
          dark:group-hover:bg-teal-400/[0.12]
        "
      />

     <div
  className="
    relative
    grid
    h-[760px]
    min-h-0
    grid-cols-1

    lg:h-[620px]
    lg:grid-cols-2
  "
>
        {/* =====================================================
      PROJECT IMAGE
  ===================================================== */}

        <motion.div
          onMouseEnter={() => setHoveredSide("image")}
          animate={{
            y: hoveredSide === "image" ? 8 : hoveredSide === "content" ? -6 : 0,

            rotateX:
              hoveredSide === "image"
                ? 1.5
                : hoveredSide === "content"
                  ? -1
                  : 0,

            rotateY:
              hoveredSide === "image" ? -2 : hoveredSide === "content" ? 1 : 0,

            scale: hoveredSide === "image" ? 1.01 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 22,
          }}
          style={{
            transformPerspective: 1200,
          }}
          className="
      relative
    flex
    h-full
    min-h-0
    items-center
    justify-center

    overflow-hidden

    border-b border-slate-200/80
    bg-slate-50/80
    p-5

    dark:border-white/[0.05]
    dark:bg-[#101419]

    lg:border-b-0
    lg:border-r
    lg:p-8
    "
        >
          {/* Glow */}
          <div
            className="
        pointer-events-none
        absolute
        h-72 w-72
        rounded-full
        bg-teal-500/[0.06]
        blur-[90px]

        dark:bg-teal-400/[0.045]
      "
          />

          {/* =====================================================
        MOBILE PROJECT
    ===================================================== */}

          {mobileImage ? (
            <motion.div
              animate={{
                rotateZ: hoveredSide === "image" ? -1 : 0,
                scale: hoveredSide === "image" ? 1.015 : 1,
              }}
              transition={{ duration: 0.4 }}
              className="
          relative z-10

          flex
          h-[500px]
          max-h-full

          w-auto
          max-w-[85%]

          aspect-[9/19.5]

          overflow-hidden
          rounded-[32px]

          border-[6px]
          border-slate-900

          bg-slate-900

          shadow-[0_30px_70px_-25px_rgba(15,23,42,0.45)]

          dark:border-black
          dark:bg-black
        "
            >
              {/* Notch */}
              <div
                className="
            pointer-events-none
            absolute
            left-1/2
            top-2
            z-20

            h-5
            w-20

            -translate-x-1/2
            rounded-full

            bg-black
          "
              />

              {/* FULL MOBILE IMAGE */}
              <motion.img
                src={image}
                alt={`${title} mobile preview`}
                draggable="false"
                animate={{
                  scale: hoveredSide === "image" ? 1.01 : 1,
                }}
                transition={{ duration: 0.5 }}
                className="
            block

            h-full
            w-full

            select-none

            object-contain
            object-center

            bg-white
            dark:bg-[#101419]
          "
              />

              {/* Home Indicator */}
              <div
                className="
            pointer-events-none
            absolute

            bottom-2
            left-1/2
            z-20

            h-1
            w-16

            -translate-x-1/2
            rounded-full

            bg-white
          "
              />
            </motion.div>
          ) : (
            /* =====================================================
          WEB PROJECT
      ===================================================== */

            <motion.div
              animate={{
                rotateZ: hoveredSide === "image" ? -0.6 : 0,
                scale: hoveredSide === "image" ? 1.01 : 1,
              }}
              transition={{ duration: 0.4 }}
              className="
          relative z-10

          flex
          max-h-full
          w-full
          max-w-[560px]

          flex-col

          overflow-hidden
          rounded-[20px]

          border border-slate-200
          bg-white

          shadow-[0_25px_70px_-25px_rgba(15,23,42,0.28)]

          dark:border-white/[0.09]
          dark:bg-[#171b20]
          dark:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.70)]
        "
            >
              {/* Browser Header */}
              <div
                className="
            flex
            h-10
            shrink-0
            items-center
            gap-3

            border-b
            border-slate-200

            bg-slate-100/90
            px-3

            dark:border-white/[0.07]
            dark:bg-[#1c2127]
          "
              >
                {/* Browser dots */}
                <div className="flex shrink-0 items-center gap-1.5">
                  {(browser.dots || []).map((dot, index) => (
                    <span
                      key={index}
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor: dot,
                      }}
                    />
                  ))}
                </div>

                {/* URL */}
                <div
                  className="
              flex
              h-6
              min-w-0
              flex-1
              items-center

              overflow-hidden
              rounded-md

              bg-white
              px-3

              text-[9px]
              text-slate-500

              ring-1
              ring-slate-200/80

              dark:bg-[#252b31]
              dark:text-slate-400
              dark:ring-white/[0.06]
            "
                >
                  <span className="truncate">{browser.text}</span>
                </div>
              </div>

              {/* =================================================
            FULL WEB IMAGE
        ================================================= */}

              <div
                className="
            flex
            min-h-0
            flex-1

            items-start
            justify-center

            overflow-hidden

            bg-white
            dark:bg-[#101419]
          "
              >
                <motion.img
                  src={image}
                  alt={`${title} web preview`}
                  draggable="false"
                  animate={{
                    scale: hoveredSide === "image" ? 1.015 : 1,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
              block

              h-full
              w-full

              select-none

              object-contain
              object-top
            "
                />
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* =====================================================
      CONTENT
  ===================================================== */}

        <motion.div
          onMouseEnter={() => setHoveredSide("content")}
          animate={{
            y:
              hoveredSide === "content"
                ? -14
                : hoveredSide === "image"
                  ? 10
                  : 0,

            rotateX:
              hoveredSide === "content" ? -2 : hoveredSide === "image" ? 1 : 0,

            rotateY:
              hoveredSide === "content" ? 3 : hoveredSide === "image" ? -1 : 0,

            scale: hoveredSide === "content" ? 1.01 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 22,
          }}
          style={{
            transformPerspective: 1200,
          }}
          className="
  relative
  flex
  h-full
  min-h-0
  min-w-0

  flex-col
  justify-start

  overflow-y-auto
  overflow-x-hidden

  px-5
  py-7

  sm:px-8
  sm:py-8

  lg:px-10
  lg:py-8

  scrollbar-hide
"
        >
          {/* Category */}

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              mb-3 block
              text-xs font-semibold
              uppercase tracking-[0.18em]

              text-teal-700

              dark:text-teal-300/80
            "
          >
            {category}
          </motion.span>

          {/* Title */}

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="
              mb-3
              font-serif
              text-3xl font-bold
              tracking-tight

              text-slate-900

              sm:text-4xl

              dark:text-white
            "
          >
            {title}
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
              max-w-xl
              text-sm leading-6

              text-slate-600

              dark:text-slate-400
            "
          >
            {description}
          </motion.p>

          {/* =====================================================
              TECHNOLOGIES
          ===================================================== */}

          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology, index) => (
              <motion.span
                key={`${technology}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.25 + index * 0.05,
                }}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                className="
                  rounded-lg

                  border border-slate-200
                  bg-slate-50

                  px-3 py-1.5
                  text-xs font-medium

                  text-slate-700

                  shadow-sm
                  transition-all

                  hover:border-teal-300
                  hover:bg-teal-50
                  hover:text-teal-700

                  dark:border-white/[0.09]
                  dark:bg-white/[0.035]
                  dark:text-slate-300

                  dark:hover:border-teal-400/30
                  dark:hover:bg-teal-400/[0.07]
                  dark:hover:text-teal-300
                "
              >
                {technology}
              </motion.span>
            ))}
          </div>

          {/* =====================================================
              STATS
          ===================================================== */}

          <div className="mt-7 grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + index * 0.07,
                }}
                className="
                  min-w-0
                  rounded-xl
                  border border-slate-200/70
                  bg-slate-50/60
                  p-3

                  dark:border-white/[0.06]
                  dark:bg-white/[0.025]
                "
              >
                <div
                  className="
                    font-serif
                    text-xl font-bold

                    text-slate-900

                    dark:text-slate-100
                  "
                >
                  {stat.value}
                </div>

                <div
                  className="
                    mt-1 truncate
                    text-[11px]

                    text-slate-500

                    dark:text-slate-500
                  "
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* =====================================================
              FEATURES
          ===================================================== */}

          <div className="mt-7 flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <motion.span
                key={`${feature}-${index}`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.35 + index * 0.05,
                }}
                whileHover={{
                  y: -2,
                }}
                className="
                  rounded-lg

                  border border-slate-200
                  bg-white

                  px-3 py-1.5
                  text-[11px]

                  text-slate-600

                  shadow-sm
                  transition-all

                  hover:border-teal-200
                  hover:bg-teal-50/70
                  hover:text-teal-700

                  dark:border-white/[0.07]
                  dark:bg-white/[0.025]
                  dark:text-slate-400

                  dark:hover:border-teal-400/25
                  dark:hover:bg-teal-400/[0.05]
                  dark:hover:text-teal-300
                "
              >
                <span className="mr-1 text-teal-600 dark:text-teal-400">✓</span>

                {feature}
              </motion.span>
            ))}
          </div>

          {/* =====================================================
              ARCHITECTURE
          ===================================================== */}

          {architecture && (
            <div className="mt-7">
              <button
                type="button"
                onClick={() => setIsArchitectureOpen((previous) => !previous)}
                className="
                  flex w-full
                  items-center justify-between
                  text-left
                  text-sm font-semibold

                  text-slate-700
                  transition-colors

                  hover:text-teal-700

                  dark:text-slate-300
                  dark:hover:text-teal-300
                "
              >
                <span>{architecture.title}</span>

                <motion.span
                  animate={{
                    rotate: isArchitectureOpen ? 0 : 180,
                  }}
                  transition={{ duration: 0.3 }}
                  className="
                    rounded-full
                    border border-slate-200
                    bg-slate-50
                    p-1

                    dark:border-white/[0.08]
                    dark:bg-white/[0.035]
                  "
                >
                  <ChevronUp size={15} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isArchitectureOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                      y: -8,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ scale: 0.97 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="
                        mt-5
                        rounded-2xl

                        border border-slate-200
                        bg-slate-50

                        p-5
                        text-sm leading-6

                        text-slate-600

                        shadow-inner

                        dark:border-white/[0.07]
                        dark:bg-white/[0.025]
                        dark:text-slate-400
                      "
                    >
                      {architecture.content}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectShowcase;
