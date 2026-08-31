
import React from "react";
import MobileNavItem from "./MobileNavItem";
import { motion } from "framer-motion";
import { navItems } from "../../constants/index.js";

function MobileNav({ active, onNavigate }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        height: 0,
        y: -8,
      }}
      animate={{
        opacity: 1,
        height: "auto",
        y: 0,
      }}
      exit={{
        opacity: 0,
        height: 0,
        y: -8,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="overflow-hidden min-[1120px]:hidden"
    >
      <div
        className="
          mt-3
          rounded-2xl
          border
          border-slate-200
          bg-white/95
          dark:border-white/10
          dark:bg-black/90
          p-2
          shadow-xl
          shadow-slate-200/50
          dark:shadow-2xl
          dark:shadow-black/30
          backdrop-blur-xl
          transition-all
          duration-500
          ease-in-out
        "
      >
        <div className="space-y-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.04,
                duration: 0.25,
              }}
            >
              <MobileNavItem
                item={item}
                active={active}
                onClick={onNavigate}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            mt-2
            border-t
            border-slate-200
            dark:border-white/10
            px-4
            pb-1
            pt-3
            text-center
            transition-colors
            duration-500
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-slate-500
              dark:text-gray-600
              transition-colors
              duration-500
            "
          >
            Building digital experiences
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default React.memo(MobileNav);

