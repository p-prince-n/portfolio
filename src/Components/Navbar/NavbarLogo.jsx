import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import React from "react";



function NavbarLogo({ onClick }) {
  return (
    <motion.button
      type="button"
      onClick={() => onClick("#hero")}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className="
        group
        flex
        min-w-0
        shrink-0
        items-center
        gap-2.5
      "
      aria-label="Go to home"
    >
      <div
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

          border-emerald-600/30
          bg-emerald-500/10

          dark:border-emerald-400/30
          dark:bg-emerald-400/10

          transition-all
          duration-500
          ease-in-out

          group-hover:border-emerald-600/50
          group-hover:bg-emerald-500/15

          dark:group-hover:border-emerald-400/50
          dark:group-hover:bg-emerald-400/15

          sm:h-11
          sm:w-11
        "
      >
        {/* Glow */}
        <motion.div
          className="
            absolute
            inset-0
            rounded-xl

            bg-emerald-500/10
            dark:bg-emerald-400/10

            transition-colors
            duration-500
          "
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <Code2
          size={22}
          className="
            relative
            z-10

            text-emerald-600
            dark:text-emerald-400

            transition-all
            duration-300

            group-hover:rotate-6
          "
        />
      </div>

      <div>
        <div
          className="
            flex
            items-center
            gap-1
            text-sm
            font-bold
            tracking-tight

            transition-colors
            duration-500

            sm:text-base
          "
        >
          <span
            className="
              text-emerald-600
              dark:text-emerald-400

              transition-colors
              duration-500
            "
          >
            Prince
          </span>

          <span
            className="
              text-slate-900
              dark:text-white

              transition-colors
              duration-500
            "
          >
            P
          </span>
        </div>

        <div
          className="
            text-[8px]
            font-medium
            uppercase
            tracking-[0.18em]

            text-slate-500
            dark:text-gray-500

            transition-colors
            duration-500

            sm:text-[9px]
          "
        >
          Full Stack Developer
        </div>
      </div>
    </motion.button>
  );
}



export default React.memo(NavbarLogo)