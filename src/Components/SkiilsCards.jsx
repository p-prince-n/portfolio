import { motion } from "framer-motion";
import {
  Layers,
  Plug,
  Palette,
  Zap,
  Bot,
  Radio,
  Database,
  Container,
} from "lucide-react";

const CARDS = [
  {
    tag: "core",
    icon: Layers,
    title: "Full-Stack Development",
    desc: "End-to-end web apps with React.js, Node.js, Express.js, and MongoDB — from AI-powered multi-agent platforms to full e-commerce systems with role-based dashboards.",
  },
  {
    tag: "backend",
    icon: Plug,
    title: "API Engineering",
    desc: "Scalable, secure APIs built with Express.js — supporting JWT, session-based, and OAuth2 authentication, with rate limiting to stay stable under real-world load.",
  },
  {
    tag: "frontend",
    icon: Palette,
    title: "UI/UX Implementation",
    desc: "Pixel-perfect interfaces with React, Tailwind CSS, and Framer Motion, optimized across desktop, tablet, and mobile.",
  },
  {
    tag: "infra",
    icon: Zap,
    title: "System Performance",
    desc: "Faster load times through Redis caching, code splitting, and containerized deployments with Docker and Nginx.",
  },
  {
    tag: "ai",
    icon: Bot,
    title: "AI & LLM Integration",
    desc: "Multi-agent systems and AI chatbots built with LangGraph, LangChain, and OpenAI/Gemini APIs — including persistent memory and streaming responses.",
  },
  {
    tag: "realtime",
    icon: Radio,
    title: "Real-Time Systems",
    desc: "Live features like chat, order tracking, and notifications using Socket.io, Twilio, and Nodemailer.",
  },
  {
    tag: "data",
    icon: Database,
    title: "Database Architecture",
    desc: "Schema design and data management across MongoDB, MySQL, and PostgreSQL, with MongoDB Atlas for cloud-hosted deployments.",
  },
  {
    tag: "devops",
    icon: Container,
    title: "DevOps & Deployment",
    desc: "Containerized, production-ready deployments using Docker, Docker Compose, and Nginx as a reverse proxy.",
  },
];

const headingVariant = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};
const cardContainerVariant = {
  hidden: {},
  visible: { transition: { delayChildren: 0.3, staggerChildren: 0.28 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 70, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SkillCards() {
  return (
    <div id="skills" className="w-full px-6 py-16 sm:px-10 lg:px-16">
     
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
        className="flex w-full flex-col items-center justify-center"
      >
        
        {/* Label */}
        <motion.p
          variants={headingVariant}
          className=" leckerli-one-font text-lg font-semibold md:text-xl "
        >
          
          &mdash;&mdash;&mdash;&mdash; What I Build
          &mdash;&mdash;&mdash;&mdash;
        </motion.p>
        {/* Heading */}
        <motion.h1
          variants={headingVariant}
          className=" new-rocker-font text-[25px] font-bold uppercase text-teal-400 md:text-[40px] "
        >
          
          Skills
          <span className="imperial-script-regular text-5xl font-bold">
            
            &amp;&nbsp;
          </span>
          Focus Areas
        </motion.h1>
        {/* Description */}
        <motion.p
          variants={headingVariant}
          className=" mt-3 text-center text-sm text-gray-400 sm:text-base "
        >
          
          A snapshot of the stack and systems I work across, from interface to
          infrastructure.
        </motion.p>
      </motion.div>
   
      <motion.div
        className="mx-auto mt-5 lg:max-w-7/8 md:mt-10"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "1.25rem",
        }}
        variants={cardContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {CARDS.map(({ tag, icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
             className=" card-rise group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-teal-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_35px_-10px_rgba(45,212,191,0.35)] cursor-pointer "
             variants={cardVariant}
            style={{
              animationDelay: `${i * 90}ms`,
            }}
          >
          
           
            <div className=" pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
              
              <div className=" absolute -inset-px rounded-2xl bg-gradient-to-br from-teal-400/10 via-transparent to-violet-500/10 " />
            </div>
            <div className="skill-card-inner relative">
              
              <div className=" skill-card-icon inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-teal-400 transition-all duration-300 group-hover:scale-110 group-hover:border-teal-400/40 group-hover:text-teal-300 ">
                
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <div>
               
                <p className=" mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400/80 ">
                  
                  {tag}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  
                  {desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
