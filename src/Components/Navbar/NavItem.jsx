import { motion } from "framer-motion";
import React from "react";



function NavItem({ item, active, onClick }) {
  const Icon = item.icon;
  const isActive = active === item.href.substring(1);

  return (
    <motion.button
      type="button"
      onClick={() => onClick(item.href)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.94 }}
      className="
        group
        relative
        flex
        items-center
        gap-2
        rounded-xl
        px-3
        py-2.5
        text-sm
        font-medium

        transition-colors
        duration-500
      "
      aria-current={isActive ? "page" : undefined}
    >
      {/* Hover background */}
      <motion.span
        className="
          absolute
          inset-0
          rounded-xl

          bg-emerald-500/[0.05]
          dark:bg-emerald-400/[0.06]

          transition-colors
          duration-500
        "
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Active background */}
      {isActive && (
        <motion.span
          layoutId="desktop-active"
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
            stiffness: 500,
            damping: 35,
            mass: 0.6,
          }}
        />
      )}

      {/* Icon */}
      <Icon
        size={16}
        className={`relative z-10 transition-colors duration-300 ${
          isActive
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-slate-500 dark:text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
        }`}
      />

      {/* Text */}
      <span
        className={`relative z-10 transition-colors duration-300 ${
          isActive
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-slate-700 dark:text-gray-300 group-hover:text-slate-950 dark:group-hover:text-white"
        }`}
      >
        {item.name}
      </span>

      {/* Bottom indicator */}
      {isActive && (
        <motion.span
          layoutId="desktop-dot"
          className="
            absolute
            -bottom-1
            left-1/2
            h-1
            w-1
            -translate-x-1/2
            rounded-full

            bg-emerald-600
            dark:bg-emerald-400

            shadow-[0_0_8px_rgba(5,150,105,0.55)]
            dark:shadow-[0_0_8px_rgba(52,211,153,0.8)]

            transition-colors
            duration-500
          "
        />
      )}
    </motion.button>
  );
}



export default React.memo(NavItem)