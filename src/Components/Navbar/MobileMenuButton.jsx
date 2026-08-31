import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import React from "react";





function MobileMenuButton({ mobileOpen, setMobileOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => setMobileOpen((prev) => !prev)}
      whileTap={{ scale: 0.9 }}
      aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
      aria-expanded={mobileOpen}
      className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
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

        min-[1120px]:hidden
      "
    >
      <AnimatePresence mode="wait" initial={false}>
        {mobileOpen ? (
          <motion.div
            key="close"
            initial={{
              rotate: -90,
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              rotate: 90,
              opacity: 0,
              scale: 0.6,
            }}
            transition={{ duration: 0.2 }}
          >
            <X size={21} />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{
              rotate: 90,
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              rotate: -90,
              opacity: 0,
              scale: 0.6,
            }}
            transition={{ duration: 0.2 }}
          >
            <Menu size={21} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}




export default React.memo(MobileMenuButton)