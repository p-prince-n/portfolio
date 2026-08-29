import React from "react";
import { motion } from "framer-motion";



function MobileNavItem({ item, active, onClick }) {
  const Icon = item.icon;
  const isActive = active === item.href.substring(1);

  return (
    <motion.button
      type="button"
      onClick={() => onClick(item.href)}
      whileTap={{ scale: 0.97 }}
      className="
        group
        relative
        flex
        w-full
        items-center
        gap-3
        overflow-hidden
        rounded-xl
        px-4
        py-3
        text-left

        transition-colors
        duration-500
      "
      aria-current={isActive ? "page" : undefined}
    >
      {/* Hover animation */}
      <motion.span
        className="
          absolute
          inset-0
          origin-center
          rounded-xl

          bg-emerald-500/[0.06]
          dark:bg-emerald-400/[0.07]
        "
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileHover={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      />

      {/* Active background */}
      {isActive && (
        <motion.span
          layoutId="mobile-active"
          className="
            absolute
            inset-0
            rounded-xl
            border

            border-emerald-500/20
            bg-emerald-500/10

            dark:border-emerald-400/20
            dark:bg-emerald-400/10

            transition-colors
            duration-500
          "
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 32,
          }}
        />
      )}

      {/* Active line */}
      {isActive && (
        <motion.span
          layoutId="mobile-line"
          className="
            absolute
            left-0
            top-1/2
            h-6
            w-0.5
            -translate-y-1/2
            rounded-full

            bg-emerald-600
            dark:bg-emerald-400

            transition-colors
            duration-500
          "
        />
      )}

      {/* Icon */}
      <Icon
        size={18}
        className={`relative z-10 transition-colors duration-300 ${
          isActive
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-slate-500 dark:text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
        }`}
      />

      {/* Text */}
      <span
        className={`relative z-10 text-sm transition-colors duration-300 ${
          isActive
            ? "font-semibold text-emerald-600 dark:text-emerald-400"
            : "text-slate-700 dark:text-gray-300 group-hover:text-slate-950 dark:group-hover:text-white"
        }`}
      >
        {item.name}
      </span>

      {/* Right indicator */}
      {isActive && (
        <motion.span
          layoutId="mobile-dot"
          className="
            absolute
            right-4
            h-1.5
            w-1.5
            rounded-full

            bg-emerald-600
            dark:bg-emerald-400

            shadow-[0_0_8px_rgba(5,150,105,0.55)]
            dark:shadow-[0_0_8px_rgba(52,211,153,0.7)]

            transition-colors
            duration-500
          "
        />
      )}
    </motion.button>
  );
}


export default React.memo(MobileNavItem)