
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../Context/ThemeContext";


function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.9 }}
      aria-label={
        darkMode ? "Switch to light mode" : "Switch to dark mode"
      }
      className="
        relative
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border

        border-slate-200
        bg-slate-100
        text-slate-700

        dark:border-white/10
        dark:bg-white/5
        dark:text-gray-300

        transition-all
        duration-500
        ease-in-out

        hover:border-emerald-500/40
        hover:bg-emerald-50
        hover:text-emerald-600

        dark:hover:border-emerald-400/40
        dark:hover:bg-white/10
        dark:hover:text-emerald-400
      "
    >
      <AnimatePresence mode="wait" initial={false}>
        {darkMode ? (
          <motion.div
            key="moon"
            initial={{
              opacity: 0,
              rotate: -90,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: 90,
              scale: 0.5,
            }}
            transition={{ duration: 0.25 }}
          >
            <Moon size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{
              opacity: 0,
              rotate: 90,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: -90,
              scale: 0.5,
            }}
            transition={{ duration: 0.25 }}
          >
            <Sun size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}



export default React.memo(ThemeToggle);

