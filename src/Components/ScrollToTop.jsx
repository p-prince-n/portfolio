import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: 30,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.1,
            y: -4,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className={`
            group
            fixed
            bottom-6
            right-5
            z-50

            flex
            h-11
            w-11
            items-center
            justify-center

            overflow-hidden
            rounded-full

            border
            shadow-lg

            backdrop-blur-md

            transition-all
            duration-300

            sm:bottom-7
            sm:right-7

            ${
              darkMode
                ? `
                  border-emerald-400/30
                  bg-emerald-400/10
                  text-emerald-300
                  shadow-emerald-400/10

                  hover:border-emerald-300
                  hover:bg-emerald-400
                  hover:text-black
                  hover:shadow-emerald-400/30
                `
                : `
                  border-cyan-500/30
                  bg-white/80
                  text-cyan-600
                  shadow-cyan-500/10

                  hover:border-cyan-500
                  hover:bg-cyan-500
                  hover:text-white
                  hover:shadow-cyan-500/30
                `
            }
          `}
        >
          {/* Animated background */}
          <span
            className={`
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-0
              w-0
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]

              group-hover:h-[150%]
              group-hover:w-[150%]

              ${
                darkMode
                  ? "bg-emerald-400"
                  : "bg-cyan-500"
              }
            `}
          />

          {/* Arrow */}
          <motion.span
            className="relative z-10 flex items-center justify-center"
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowUp size={19} strokeWidth={2.5} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;