
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Braces,
  Database,
  Cpu,
} from "lucide-react";



const HeroRight = () => {
  return (
    <div className="relative flex w-full items-center justify-center  lg:right-40  lg:w-1/2">
      {/* Main visual container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 60 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          flex
          h-[360px]
          w-[300px]
          items-center
          justify-center
          sm:h-[430px]
          sm:w-[360px]
          md:h-[480px]
          md:w-[400px]
          lg:h-[500px]
          lg:w-[420px]
          xl:h-[560px]
          xl:w-[470px]
        "
      >
        {/* Ambient glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-56
            w-56
            rounded-full
            bg-cyan-400/20
            blur-[80px]
            dark:bg-cyan-500/20
            sm:h-72
            sm:w-72
          "
        />

        {/* Rotating outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            h-[280px]
            w-[280px]
            rounded-full
            border
            border-slate-300/70
            dark:border-white/10
            sm:h-[350px]
            sm:w-[350px]
            md:h-[390px]
            md:w-[390px]
          "
        >
          {/* Orbit dot */}
          <div
            className="
              absolute
              -right-1
              top-1/2
              h-3
              w-3
              rounded-full
              bg-cyan-500
              shadow-[0_0_20px_rgba(6,182,212,0.8)]
              dark:bg-cyan-400
            "
          />
        </motion.div>

        {/* Second rotating ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            h-[230px]
            w-[230px]
            rounded-full
            border
            border-dashed
            border-slate-300/60
            dark:border-white/10
            sm:h-[300px]
            sm:w-[300px]
            md:h-[340px]
            md:w-[340px]
          "
        />

        {/* Image shape */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            z-10
            h-[235px]
            w-[200px]
            overflow-hidden
            rounded-[45%_55%_52%_48%/45%_42%_58%_55%]
            border
            border-white/60
            bg-slate-100/80
            p-2
            shadow-2xl
            shadow-cyan-500/10
            backdrop-blur-xl
            dark:border-white/15
            dark:bg-white/[0.04]
            sm:h-[310px]
            sm:w-[265px]
            md:h-[350px]
            md:w-[300px]
          "
        >
          {/* Image */}
          <img
            src={"profileImage.png"}
            alt="Prince - Full Stack Developer"
            className="
            mt-5
              h-full
              w-full
              object-cover
              object-top
              transition-transform
              duration-700
              hover:scale-105
            "
          />

          {/* Image overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/20
              via-transparent
              to-cyan-400/10
              dark:from-black/30
            "
          />
        </motion.div>

        {/* Top floating card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { delay: 0.8, duration: 0.5 },
            y: {
              delay: 1,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            absolute
            left-0
            top-10
            z-20
            flex
            items-center
            gap-2
            rounded-2xl
            border
            border-slate-200
            bg-white/80
            px-3
            py-2
            shadow-lg
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-black/60
            sm:left-2
            sm:px-4
            sm:py-2.5
          "
        >
          <Code2
            size={18}
            className="text-cyan-600 dark:text-cyan-400"
          />

          <span className="text-xs font-medium text-slate-700 dark:text-slate-200 sm:text-sm">
            Full Stack
          </span>
        </motion.div>

        {/* Bottom floating card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, 8, 0],
          }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: {
              delay: 1.2,
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            absolute
            bottom-10
            right-0
            z-20
            flex
            items-center
            gap-2
            rounded-2xl
            border
            border-slate-200
            bg-white/80
            px-3
            py-2
            shadow-lg
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-black/60
            sm:right-2
            sm:px-4
            sm:py-2.5
          "
        >
          <Sparkles
            size={18}
            className="text-violet-600 dark:text-violet-400"
          />

          <span className="text-xs font-medium text-slate-700 dark:text-slate-200 sm:text-sm">
            AI Developer
          </span>
        </motion.div>

        {/* Floating tech icon - top right */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-2
            top-4
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white/80
            text-violet-600
            shadow-lg
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-black/60
            dark:text-violet-400
            sm:right-4
            sm:h-12
            sm:w-12
          "
        >
          <Braces size={20} />
        </motion.div>

        {/* Floating tech icon - bottom left */}
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-6
            left-2
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white/80
            text-emerald-600
            shadow-lg
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-black/60
            dark:text-emerald-400
            sm:left-4
            sm:h-12
            sm:w-12
          "
        >
          <Database size={20} />
        </motion.div>

        {/* Small CPU badge */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-5
            top-1/2
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white/80
            text-orange-500
            shadow-lg
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-black/60
            dark:text-orange-400
            sm:left-0
            sm:h-11
            sm:w-11
          "
        >
          <Cpu size={18} />
        </motion.div>

        {/* Decorative particles */}
        <motion.span
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="
            absolute
            right-10
            top-1/3
            h-2
            w-2
            rounded-full
            bg-cyan-500
            dark:bg-cyan-400
          "
        />

        <motion.span
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
          className="
            absolute
            bottom-1/3
            right-4
            h-1.5
            w-1.5
            rounded-full
            bg-violet-500
            dark:bg-violet-400
          "
        />
      </motion.div>
    </div>
  );
};

export default HeroRight;

