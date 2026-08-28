import { motion } from "framer-motion";
import React from "react";

import { words } from "../../constants/index.js";
import TypeWriter from "./TypeWriter.jsx";
import { MagneticButton } from "../AnimatedButton.jsx";
import { Download, icons, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const leftVariant = {
  hidden: {
    opacity: 0,
    x: -70,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rightVariant = {
  hidden: {
    opacity: 0,
    x: 70,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const bottomVariant = {
  hidden: {
    opacity: 0,
    y: 45,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const heroContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.5,
    },
  },
};

const LinksData = [
  {
    id: "github",
    icons: <FaGithub />,
    link: "https://www.github.com/p-prince-n",
  },
  {
    id: "linkedin",
    icons: <FaLinkedin />,
    link: "https://www.linkedin.com/in/prince-prajapati-362806394",
  },
];

const HeroLeft = () => {
  return (
    <>
      {/* Background */}
      <div className="pointer-events-none absolute left-0 top-0 z-0">
        <img src="/images/bg.png" alt="" />
      </div>

      <motion.div
        className="
          relative
          z-10
          flex
          min-h-[calc(100vh-80px)]
          md:min-h-auto
          items-start
          justify-center
          xl:mt-20
          mt-20
        "
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <header
          className="
            flex
            flex-col
            md:w-full
            w-screen
            justify-center
            md:px-20
            px-5
            gap-0
            md:gap-10
          "
        >
          {/* --------------------------------
              Greeting
          --------------------------------- */}

          <motion.div
            variants={leftVariant}
            className="flex flex-col items-start justify-center"
          >
            <motion.p
              variants={leftVariant}
              className="leckerli-one-font text-xl font-bold"
            >
              Hey, I'm
            </motion.p>

            {/* --------------------------------
                NAME
            --------------------------------- */}

            <div
              className="
                flex
                flex-col
                pl-2
                sm:pl-5
                gap-0
                items-start
                justify-center
                gravitas-one-font
                text-[35px]
                sm:text-[45px]
                md:text-[50px]
                xl:text-[70px]
              "
            >
              {/* ==========================
                  PRINCE
              =========================== */}

              <motion.h1
                variants={leftVariant}
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  via-teal-400
                  to-emerald-500
                  bg-clip-text
                  text-transparent
                "
              >
                <motion.span
                  className="inline-block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #22d3ee, #2dd4bf, #10b981, #22d3ee)",

                    backgroundSize: "250% 100%",

                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  PRINCE
                </motion.span>
              </motion.h1>

              {/* ==========================
                  PRAJAPATI
              =========================== */}

              <motion.h1
                variants={rightVariant}
                className="
                  -mt-4
                  xl:-mt-8
                  bg-gradient-to-r
                  from-purple-600
                  via-pink-500
                  to-orange-400
                  bg-clip-text
                  text-transparent
                "
              >
                <motion.span
                  className="inline-block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #9333ea, #ec4899, #fb923c, #9333ea)",

                    backgroundSize: "250% 100%",

                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  PRAJAPATI
                </motion.span>
              </motion.h1>
            </div>

            {/* TypeWriter */}

            <motion.div variants={leftVariant}>
              <TypeWriter />
            </motion.div>
          </motion.div>

          {/* --------------------------------
              SECOND CONTENT
          --------------------------------- */}

          <motion.div
            className="flex flex-col gap-7"
            variants={{
              hidden: {},

              visible: {
                transition: {
                  staggerChildren: 0.4,
                },
              },
            }}
          >
            {/* Shaping */}

            <motion.div
              variants={rightVariant}
              className="
                flex
                pacifico-font
                flex-col
                justify-center
                md:text-[40px]
                text-[30px]
                relative
                z-10
                pointer-events-none
              "
            >
              <h1>
                Shaping
                <span
                  className="
                    absolute
                    top-3
                    md:top-2
                    pt-0
                    px-2
                    md:px-5
                    py-7.5
                    h-10
                    md:h-12
                    md:translate-y-1
                    translate-y-0
                    overflow-hidden
                  "
                >
                  <div className="wrapper">
                    {words.map((data, idx) => (
                      <span
                        key={idx}
                        className="
                          flex
                          items-center
                          md:gap-3
                          gap-1
                          pb-2
                        "
                      >
                        <img
                          src={data.imgPath}
                          alt={data.text}
                          className="
                            xl:size-10
                            md:size-10
                            size-7
                            md:p-2
                            p-1
                            rounded-full
                            bg-white
                          "
                        />

                        <span className="md:text-[30px] text-[20px]">
                          {data.text}
                        </span>
                      </span>
                    ))}
                  </div>
                </span>
              </h1>

              <h1>into Real Projects</h1>

              <h1>that Deliver Results</h1>
            </motion.div>

            {/* Description */}

            <motion.div
              variants={leftVariant}
              className="
                text-lg
                md:text-xl
                font-semibold
                text-gray-300
                charis-sil-font
              "
            >
              Transforming ideas into scalable web applications — MERN stack
              development that captivates, engages, and delivers results,
              powered by AI-driven architecture that turns complex problems into
              seamless, intelligent solutions.
            </motion.div>

            {/* Buttons */}

            <motion.div
              variants={bottomVariant}
              className="
                flex
                flex-col
                md:flex-row
                gap-5
                w-full
              "
            >
              {/* Contact */}

              <MagneticButton
                className="
                  group
                  relative
                  isolate
                  overflow-hidden
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-400
                  bg-transparent
                  px-6
                  py-2.5
                  cursor-pointer
                  font-semibold
                  text-emerald-400
                  transition-all
                  duration-300
                  before:absolute
                  before:inset-y-0
                  before:left-0
                  before:-z-10
                  before:w-0
                  before:bg-emerald-400
                  before:transition-all
                  before:duration-500
                  hover:before:w-full
                  hover:text-black
                  shadow-[0_0_20px_rgba(52,211,153,0.08)]
                  hover:shadow-[0_0_30px_rgba(52,211,153,0.35)]
                "
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <Mail size={18} />

                <span className="relative z-10">Contact Me</span>
              </MagneticButton>

              {/* Resume */}

              <MagneticButton
                className="
                  group
                  relative
                  isolate
                  overflow-hidden
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-violet-400/60
                  bg-violet-950
                  px-5
                  py-2
                  cursor-pointer
                  font-semibold
                  text-violet-200
                  transition-all
                  duration-300
                  before:absolute
                  before:inset-y-0
                  before:left-0
                  before:-z-10
                  before:w-0
                  before:rounded-full
                  before:bg-violet-400
                  before:transition-all
                  before:duration-500
                  hover:before:w-full
                  hover:text-black
                  hover:border-violet-300
                  hover:shadow-[0_0_30px_rgba(167,139,250,0.4)]
                "
                onClick={() => {
                  const link = document.createElement("a");

                  link.href = "/resume.pdf";

                  link.download = "Prince-Prajapati-Resume.pdf";

                  document.body.appendChild(link);

                  link.click();

                  document.body.removeChild(link);
                }}
              >
                <Download size={18} />

                <span className="relative z-10">Download Resume</span>
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={bottomVariant}
              className="
                flex
                flex-row
                gap-5
                w-full
              "
            >
              {LinksData.length > 0 &&
                LinksData.map((item) => (
                  <MagneticButton
                    key={item.id}
                    className="
    group
    relative
    isolate
    overflow-hidden
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    border
    border-emerald-400
    bg-transparent
    p-3
    cursor-pointer
    font-semibold
    text-emerald-400
    transition-all
    duration-300

    before:absolute
    before:left-1/2
    before:top-1/2
    before:-z-10
    before:w-0
    before:h-0
    before:-translate-x-1/2
    before:-translate-y-1/2
    before:rounded-full
    before:bg-emerald-400
    before:transition-all
    before:duration-500
    before:ease-out

    hover:before:w-full
    hover:before:h-full
    hover:text-black
    hover:scale-125

    shadow-[0_0_20px_rgba(52,211,153,0.08)]
    text-xl
    hover:shadow-[0_0_30px_rgba(52,211,153,0.35)]
  "
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icons}
                    </a>
                  </MagneticButton>
                ))}
            </motion.div>
          </motion.div>
        </header>
      </motion.div>
    </>
  );
};

export default React.memo(HeroLeft);
