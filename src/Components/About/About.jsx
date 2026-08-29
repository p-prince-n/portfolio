import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  ServerCog,
  Database,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import AboutHero from "./AboutHero";
import CapabilityCard from "./CapabilityCard";



const capabilities = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description:
      "Building responsive and scalable applications with React, Node.js, Express, REST APIs, and modern state management.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Multi-Agent Systems",
    description:
      "Exploring intelligent applications using LangGraph, LangChain, RAG, AI agents, memory systems, and LLM APIs.",
  },
  {
    icon: ServerCog,
    title: "Backend & Architecture",
    description:
      "Designing secure APIs with authentication, authorization, RBAC, rate limiting, Socket.io, Redis, and microservice concepts.",
  },
];



const sectionVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};



export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        px-6
        py-5 md:py-6 lg:py-10
       
        sm:px-10
        md:py-28
        lg:px-16
      "
    >

      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-15%]
          top-[15%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-teal-400/[0.06]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-15%]
          top-[35%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-500/[0.05]
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">


        <AboutHero />



        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={sectionVariant}
          className="
            mt-16
            grid
            grid-cols-1
            gap-5
            md:grid-cols-3
          "
        >
          {capabilities.map((item) => (
            <CapabilityCard
              key={item.title}
              {...item}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}