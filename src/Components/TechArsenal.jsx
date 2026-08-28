import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Code2,
  MonitorSmartphone,
  Server,
  Database,
  Library,
  Wrench,
} from "lucide-react";

import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  // SiZustand,
  SiTailwindcss,
  SiExpress,
  SiFastapi,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiLangchain,
  SiFramer,
  SiPostman,
  SiNginx,
} from "react-icons/si";

const SKILLS = [
  { name: "Java", category: "programming", percentage: 75, icon: FaJava },
  {
    name: "JavaScript (ES6+)",
    category: "programming",
    percentage: 90,
    icon: SiJavascript,
  },
  { name: "Python", category: "programming", percentage: 80, icon: FaPython },
  { name: "SQL", category: "programming", percentage: 80, icon: null },
  { name: "Dart", category: "programming", percentage: 65, icon: null },

  { name: "React.js", category: "frontend", percentage: 90, icon: FaReact },
  { name: "Next.js", category: "frontend", percentage: 80, icon: SiNextdotjs },
  {
    name: "Redux Toolkit",
    category: "frontend",
    percentage: 85,
    icon: SiRedux,
  },
  // { name: "Zustand", category: "frontend", percentage: 80, icon: SiZustand },
  {
    name: "Tailwind CSS",
    category: "frontend",
    percentage: 90,
    icon: SiTailwindcss,
  },
  { name: "HTML5", category: "frontend", percentage: 95, icon: FaHtml5 },
  { name: "CSS3", category: "frontend", percentage: 90, icon: FaCss3Alt },
  {
    name: "Bootstrap",
    category: "frontend",
    percentage: 85,
    icon: FaBootstrap,
  },

  // Backend
  { name: "Node.js", category: "backend", percentage: 85, icon: FaNodeJs },
  { name: "Express.js", category: "backend", percentage: 85, icon: SiExpress },
  { name: "FastAPI", category: "backend", percentage: 75, icon: SiFastapi },
  { name: "REST APIs", category: "backend", percentage: 90, icon: null },
  {
    name: "JWT Authentication",
    category: "backend",
    percentage: 85,
    icon: null,
  },
  {
    name: "Socket.io",
    category: "backend",
    percentage: 75,
    icon: SiSocketdotio,
  },

  { name: "MongoDB", category: "database", percentage: 85, icon: SiMongodb },
  { name: "MySQL", category: "database", percentage: 80, icon: SiMysql },
  {
    name: "PostgreSQL",
    category: "database",
    percentage: 75,
    icon: SiPostgresql,
  },
  { name: "Redis", category: "database", percentage: 75, icon: SiRedis },

  {
    name: "LangGraph",
    category: "libraries",
    percentage: 80,
    icon: SiLangchain,
  },
  {
    name: "LangChain",
    category: "libraries",
    percentage: 80,
    icon: SiLangchain,
  },
  { name: "RAG", category: "libraries", percentage: 75, icon: null },
  {
    name: "Framer Motion",
    category: "libraries",
    percentage: 85,
    icon: SiFramer,
  },
  {
    name: "React Hook Form",
    category: "libraries",
    percentage: 85,
    icon: FaReact,
  },
  { name: "Recharts", category: "libraries", percentage: 75, icon: null },
  { name: "ExcelJS", category: "libraries", percentage: 70, icon: null },

  { name: "Docker", category: "tools", percentage: 80, icon: FaDocker },
  { name: "Docker Compose", category: "tools", percentage: 80, icon: FaDocker },
  { name: "Nginx", category: "tools", percentage: 70, icon: SiNginx },
  { name: "Git", category: "tools", percentage: 90, icon: FaGitAlt },
  { name: "GitHub", category: "tools", percentage: 90, icon: FaGithub },
  { name: "Postman", category: "tools", percentage: 85, icon: SiPostman },
  { name: "AWS S3", category: "tools", percentage: 70, icon: FaAws },
];

const CATEGORIES = [
  { key: "all", label: "All", icon: LayoutGrid },
  { key: "programming", label: "Programming", icon: Code2 },
  { key: "frontend", label: "Frontend", icon: MonitorSmartphone },
  { key: "backend", label: "Backend", icon: Server },
  { key: "database", label: "Database", icon: Database },
  { key: "libraries", label: "Libraries", icon: Library },
  { key: "tools", label: "Tools", icon: Wrench },
];

const headingVariant = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const cardContainerVariant = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.28,
    },
  },
};



const cardSkillVariant = {
  hidden: {
    opacity: 0,
    y: 70,
    filter: "blur(6px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function TechArsenal() {
  const [active, setActive] = useState("all");
  const tabRefs = useRef({});
  const containerRef = useRef(null);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    ready: false,
  });

  useLayoutEffect(() => {
    const measure = () => {
      const btn = tabRefs.current[active];
      const container = containerRef.current;
      if (btn && container) {
        const btnRect = btn.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setIndicator({
          left: btnRect.left - containerRect.left,
          top: btnRect.top - containerRect.top,
          width: btnRect.width,
          height: btnRect.height,
          ready: true,
        });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const visible =
    active === "all" ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <div
      id="tech-skills"
      className=" w-full flex flex-col items-center justify-center gap-5  px-6 py-16 sm:px-10 lg:px-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
        className="flex w-full flex-col items-center justify-center"
      >
        {/* Label */}
        <motion.p
          variants={headingVariant}
          className="leckerli-one-font text-lg font-semibold md:text-xl"
        >
          &mdash;&mdash;&mdash;&mdash; Technical Arsenal
          &mdash;&mdash;&mdash;&mdash;
        </motion.p>

        {/* Heading */}
        <motion.h1
          variants={headingVariant}
          className="new-rocker-font text-[25px] font-bold uppercase text-teal-400 md:text-[40px]"
        >
          Skills{" "}
          <span className="imperial-script-regular text-5xl font-bold">
            &amp;&nbsp;
          </span>
          Technologies
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={headingVariant}
          className="mt-3 text-sm text-gray-400 sm:text-base"
        >
          A focused stack for building scalable, production-ready web and AI
          applications — from interface to infrastructure.
        </motion.p>
      </motion.div>

      <div className="flex flex-col items-center justify-start w-full ">
        {/* Category tabs */}
        <div className="w-full overflow-x-auto   scrollbar-hide">
          <div
            ref={containerRef}
            className="relative mx-auto mb-10 flex  items-center justify-center w-max min-w-full shrink-0 gap-3 px-2 lg:max-w-6xl"
          >
            {indicator.ready && (
              <div
                className="pointer-events-none absolute rounded-full bg-teal-400/15 border border-teal-400/60 shadow-[0_0_20px_-6px_rgba(45,212,191,0.5)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  left: indicator.left,
                  top: indicator.top,
                  width: indicator.width,
                  height: indicator.height,
                }}
              />
            )}

            {CATEGORIES.map(({ key, label, icon: Icon }) => {
              const isActive = active === key;

              return (
                <button
                  key={key}
                  ref={(el) => (tabRefs.current[key] = el)}
                  onClick={() => setActive(key)}
                  className={`relative z-10 flex cursor-pointer shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-500 ease-out ${
                    isActive
                      ? "border-transparent text-teal-300"
                      : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.75}
                    className={`transition-transform duration-500 ${
                      isActive ? "scale-110" : ""
                    }`}
                  />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill chips */}
        <motion.div
          key={active}
          className="mx-auto grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={cardContainerVariant}
          initial="hidden"
          animate="visible"
        >
          {visible.map(({ name, percentage, icon: Icon }, i) => (
            <motion.div
              key={name}
              variants={cardSkillVariant}
              className="skill-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal-400/40 hover:bg-white/[0.06] hover:shadow-[0_15px_40px_-15px_rgba(45,212,191,0.35)]"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-teal-400/10 blur-3xl transition-all duration-500 group-hover:bg-teal-400/20" />

              {/* Top */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-xl text-teal-300 transition-all duration-300 group-hover:scale-110 group-hover:border-teal-400/30 group-hover:bg-teal-400/10">
                    {Icon ? (
                      <Icon />
                    ) : (
                      <span className="text-sm font-bold text-teal-300">
                        {name.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Skill name */}
                  <div>
                    <h3 className="font-medium text-gray-200 transition-colors duration-300 group-hover:text-teal-200">
                      {name}
                    </h3>

                    <p className="mt-0.5 text-xs capitalize text-gray-500">
                      {visible[i]?.category}
                    </p>
                  </div>
                </div>

                {/* Percentage */}
                <div className="percentage-counter text-sm font-semibold text-teal-300">
                  {percentage}%
                </div>
              </div>

              {/* Progress */}

              <div className="relative z-10 mt-5">
                {/* Progress background */}
                <div className="relative h-1 overflow-hidden rounded-full bg-gradient-to-r from-teal-500/10 via-cyan-400/10 to-violet-500/10 ring-1 ring-white/10">
                  {/* Background glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-400/10 to-violet-500/20 blur-[2px]" />

                  {/* Animated progress */}
                  <motion.div
                    className="relative h-full rounded-full bg-gradient-to-r from-teal-500 via-cyan-400 to-violet-500 shadow-[0_0_12px_rgba(45,212,191,0.45)]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${percentage}%` }}
                    transition={{
                      duration: 1.2,
                      delay: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
