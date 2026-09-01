import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";



import Header from "./Header";
import { SKILLS, CATEGORIES } from "../constants/index.js";







const cardContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.28,
    },
  },
};

const cardSkillVariant = {
  hidden: {
    opacity: 0,
    y: 70,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function TechArsenal() {
  const [active, setActive] = useState("programming");
  const tabRefs = useRef({});
  const containerRef = useRef(null);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    ready: false,
  });

  useLayoutEffect(() => {
    const measure = () => {
      const btn = tabRefs.current[active];
      const container = containerRef.current;

      if (btn && container) {
        const btnRect = btn.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        setIndicator({
          left: btnRect.left - containerRect.left,
          top: btnRect.top - containerRect.top,
          width: btnRect.width,
          height: btnRect.height,
          ready: true,
        });
      }
    };

    measure();

    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const visible =
    active === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === active);

  return (
    <div
      id="tech-skills"
      className="
        w-full
        flex
        flex-col
        items-center
        justify-center
        gap-5
        px-6
        py-5
        md:py-6
        lg:py-10
        sm:px-10
        lg:px-16
      "
    >
      <Header
        label={"Technical Arsenal"}
        header={
          <>
            Skills{" "}
            <span
              className="
                imperial-script-regular
                font-bold

                text-black
                dark:text-white

                transition-colors
                duration-500
                ease-in-out
              "
            >
              &amp;&nbsp;
            </span>
            Technologies
          </>
        }
        description={
          "A focused stack for building scalable, production-ready web and AI applications — from interface to infrastructure."
        }
      />

      <div className="flex w-full flex-col items-center justify-start">
        {/* Category tabs */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div
            ref={containerRef}
            className="
              relative
              mx-auto
              mb-10
              flex
              items-center
              justify-center
              w-max
              min-w-full
              shrink-0
              gap-3
              px-2
              lg:max-w-6xl
            "
          >
            {indicator.ready && (
              <div
                className="
                  pointer-events-none
                  absolute
                  rounded-full

                  bg-teal-500/10
                  border
                  border-teal-500/50
                  shadow-[0_0_20px_-6px_rgba(20,184,166,0.25)]

                  dark:bg-teal-400/15
                  dark:border-teal-400/60
                  dark:shadow-[0_0_20px_-6px_rgba(45,212,191,0.5)]

                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                "
                style={{
                  left: indicator.left,
                  top: indicator.top,
                  width: indicator.width,
                  height: indicator.height,
                }}
              />
            )}

            {CATEGORIES.map(({ key, label, icon: Icon }) => {
              const isActive = active === key;

              return (
                <button
                  key={key}
                  ref={(el) => (tabRefs.current[key] = el)}
                  onClick={() => setActive(key)}
                  className={`
                    relative
                    z-10
                    flex
                    cursor-pointer
                    shrink-0
                    items-center
                    gap-2
                    rounded-full
                    border
                    px-4
                    py-2
                    text-sm
                    font-medium

                    transition-all
                    duration-500
                    ease-out

                    ${
                      isActive
                        ? `
                          border-transparent

                          text-teal-600
                          dark:text-teal-300
                        `
                        : `
                          border-slate-200
                          bg-slate-100
                          text-slate-600

                          hover:border-slate-300
                          hover:bg-slate-200
                          hover:text-slate-900

                          dark:border-white/10
                          dark:bg-white/[0.03]
                          dark:text-gray-400

                          dark:hover:border-white/20
                          dark:hover:bg-white/[0.06]
                          dark:hover:text-white
                        `
                    }
                  `}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.75}
                    className={`
                      transition-all
                      duration-500

                      ${
                        isActive
                          ? "scale-110 text-teal-600 dark:text-teal-300"
                          : "text-slate-500 dark:text-gray-400"
                      }
                    `}
                  />

                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill chips */}
        <motion.div
          key={active}
          className="
            mx-auto
            grid
            w-full
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
          variants={cardContainerVariant}
          initial="hidden"
          animate="visible"
        >
          {visible.map(({ name, percentage, icon: Icon }, i) => (
            <motion.div
              key={name}
              variants={cardSkillVariant}
              className="
                skill-card
                group
                relative
                overflow-hidden
                rounded-2xl
                border

                border-slate-200
                bg-white
                p-5

                dark:border-white/10
                dark:bg-white/[0.03]

                backdrop-blur-sm

                transition-all
                duration-500

                hover:-translate-y-2

                hover:border-teal-500/40
                hover:bg-slate-50
                hover:shadow-[0_15px_40px_-15px_rgba(20,184,166,0.25)]

                dark:hover:border-teal-400/40
                dark:hover:bg-white/[0.06]
                dark:hover:shadow-[0_15px_40px_-15px_rgba(45,212,191,0.35)]
              "
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-24
                  w-24
                  rounded-full

                  bg-teal-500/10
                  blur-3xl

                  dark:bg-teal-400/10

                  transition-all
                  duration-500

                  group-hover:bg-teal-500/20
                  dark:group-hover:bg-teal-400/20
                "
              />

              {/* Top */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border

                      border-slate-200
                      bg-slate-100
                      text-xl
                      text-teal-600

                      dark:border-white/10
                      dark:bg-white/[0.05]
                      dark:text-teal-300

                      transition-all
                      duration-300

                      group-hover:scale-110

                      group-hover:border-teal-500/30
                      group-hover:bg-teal-500/10
                      group-hover:text-teal-600

                      dark:group-hover:border-teal-400/30
                      dark:group-hover:bg-teal-400/10
                      dark:group-hover:text-teal-300
                    "
                  >
                    {Icon ? (
                      <Icon />
                    ) : (
                      <span
                        className="
                          text-sm
                          font-bold

                          text-teal-600
                          dark:text-teal-300

                          transition-colors
                          duration-300
                        "
                      >
                        {name.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Skill name */}
                  <div>
                    <h3
                      className="
                        font-medium

                        text-slate-800
                        dark:text-gray-200

                        transition-colors
                        duration-300

                        group-hover:text-teal-600
                        dark:group-hover:text-teal-200
                      "
                    >
                      {name}
                    </h3>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        capitalize

                        text-slate-500
                        dark:text-gray-500

                        transition-colors
                        duration-300
                      "
                    >
                      {visible[i]?.category}
                    </p>
                  </div>
                </div>

                {/* Percentage */}
                <div
                  className="
                    percentage-counter
                    text-sm
                    font-semibold

                    text-teal-600
                    dark:text-teal-300

                    transition-colors
                    duration-300
                  "
                >
                  {percentage}%
                </div>
              </div>

              {/* Progress */}
              <div className="relative z-10 mt-5">
                {/* Progress background */}
                <div
                  className="
                    relative
                    h-1
                    overflow-hidden
                    rounded-full

                    bg-gradient-to-r
                    from-teal-500/10
                    via-cyan-400/10
                    to-violet-500/10

                    ring-1
                    ring-slate-200

                    dark:ring-white/10

                    transition-colors
                    duration-500
                  "
                >
                  {/* Background glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-gradient-to-r
                      from-teal-500/15
                      via-cyan-400/10
                      to-violet-500/15
                      blur-[2px]

                      dark:from-teal-400/20
                      dark:via-cyan-400/10
                      dark:to-violet-500/20
                    "
                  />

                  {/* Animated progress */}
                  <motion.div
                    className="
                      relative
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-teal-600
                      via-cyan-500
                      to-violet-600

                      dark:from-teal-500
                      dark:via-cyan-400
                      dark:to-violet-500

                      shadow-[0_0_12px_rgba(20,184,166,0.3)]
                      dark:shadow-[0_0_12px_rgba(45,212,191,0.45)]

                      transition-colors
                      duration-500
                    "
                    initial={{ width: "0%" }}
                    animate={{ width: `${percentage}%` }}
                    transition={{
                      duration: 1.2,
                      delay: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}


