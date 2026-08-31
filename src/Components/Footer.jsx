
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUp,
  Code2,
  Heart,
} from "lucide-react";
import { LinksData, navItems } from "../constants/index.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  const footerNav = navItems.slice(0, 6);

  return (
    <footer
      id="footer"
      className="
        relative
        mt-20
        overflow-hidden
        border-t
        border-slate-200
        bg-white
        dark:border-white/[0.08]
        dark:bg-black
      "
    >
      {/* Background glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-cyan-400/20
          blur-[100px]
          dark:bg-cyan-500/10
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-72
          w-72
          rounded-full
          bg-violet-400/20
          blur-[100px]
          dark:bg-violet-500/10
        "
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div
          className="
            grid
            gap-12
            py-14
            sm:py-16
            lg:grid-cols-[1.4fr_1fr_1fr]
            lg:gap-16
            lg:py-20
          "
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Logo */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                group
                flex
                items-center
                gap-3
              "
            >
              <span
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
                  text-slate-800
                  shadow-sm
                  transition-all
                  duration-300
                  group-hover:border-cyan-400/50
                  group-hover:shadow-lg
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white
                "
              >
                <Code2 size={21} />
              </span>

              <div className="text-left">
                <div
                  className="
                    text-base
                    font-bold
                    tracking-tight
                    text-slate-900
                    dark:text-white
                  "
                >
                  Prince P
                </div>

                <div
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-slate-500
                    dark:text-slate-500
                  "
                >
                  Full Stack Developer
                </div>
              </div>
            </motion.button>

            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-7
                text-slate-600
                dark:text-slate-400
              "
            >
              Building scalable web applications, intelligent AI systems,
              and modern digital experiences with clean and purposeful code.
            </p>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-2.5">
              {LinksData.map((social, index) => {
                const Icon = social.icons;
                if (!Icon) return null;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                      duration: 0.3,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      text-slate-600
                      transition-all
                      duration-300
                      hover:border-cyan-400/50
                      hover:bg-cyan-50
                      hover:text-cyan-600
                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:text-slate-400
                      dark:hover:border-cyan-400/30
                      dark:hover:bg-cyan-400/10
                      dark:hover:text-cyan-400
                    "
                  >
                <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <h3
              className="
                mb-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-slate-900
                dark:text-white
              "
            >
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {footerNav.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();

                    const target = document.querySelector(item.href);

                    if (target) {
                      target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  whileHover={{ x: 4 }}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-300
                    hover:text-cyan-600
                    dark:text-slate-500
                    dark:hover:text-cyan-400
                  "
                >
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-slate-300
                      transition-all
                      duration-300
                      group-hover:w-3
                      group-hover:bg-cyan-500
                      dark:bg-slate-700
                      dark:group-hover:bg-cyan-400
                    "
                  />

                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tech / Contact */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <h3
              className="
                mb-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-slate-900
                dark:text-white
              "
            >
              Let's Connect
            </h3>

            <p
              className="
                max-w-xs
                text-sm
                leading-6
                text-slate-500
                dark:text-slate-400
              "
            >
              Have a project, idea, or opportunity? Let's build something
              meaningful together.
            </p>

            <motion.a
              href="mailto:your-email@example.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-2.5
                text-sm
                font-medium
                text-slate-700
                transition-all
                duration-300
                hover:border-cyan-400/50
                hover:bg-cyan-50
                hover:text-cyan-600
                dark:border-white/10
                dark:bg-white/[0.03]
                dark:text-slate-300
                dark:hover:border-cyan-400/30
                dark:hover:bg-cyan-400/10
                dark:hover:text-cyan-400
              "
            >
              <Mail size={16} />
              Get in touch
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="
            h-px
            w-full
            bg-slate-200
            dark:bg-white/[0.08]
          "
        />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            flex
            flex-col
            gap-4
            py-6
            text-center
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
          "
        >
          <p
            className="
              text-xs
              text-slate-500
              dark:text-slate-500
            "
          >
            © {currentYear} Prince P. All rights reserved.
          </p>

          <div
            className="
              flex
              items-center
              justify-center
              gap-1.5
              text-xs
              text-slate-500
              dark:text-slate-500
            "
          >
            Built with
            <motion.span
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex text-rose-500"
            >
              <Heart size={13} fill="currentColor" />
            </motion.span>
            using React & AI
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{
              y: -3,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              group
              mx-auto
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              text-slate-500
              transition-all
              duration-300
              hover:border-cyan-400/50
              hover:bg-cyan-50
              hover:text-cyan-600
              dark:border-white/10
              dark:bg-white/[0.03]
              dark:text-slate-400
              dark:hover:border-cyan-400/30
              dark:hover:bg-cyan-400/10
              dark:hover:text-cyan-400
              sm:mx-0
            "
            aria-label="Back to top"
          >
            <ArrowUp
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);

