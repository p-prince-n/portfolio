import React from "react";
import { motion } from "framer-motion";

import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { contactItems } from "../../constants";
import Header from "../Header"

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



const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        px-5
        py-5 md:py-6 lg:py-10
       
        sm:px-8
        md:px-10
       
        lg:px-16
      
      "
    >
      {/* =================================
          BACKGROUND GLOW
      ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-teal-500/[0.06]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-violet-500/[0.05]
          blur-[120px]
        "
      />

     

      <Header
        label={"Get In Touch"}
        header={
          <>
            Let's Work <span className="text-teal-400">Together</span>
          </>
        }
        description={
          "  Have a project, opportunity, or idea in mind? Let's build something meaningful together."
        }
      />

     

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          top-5
          w-full
          max-w-7xl
          grid-cols-1
          gap-6
          lg:grid-cols-[1fr_1fr]
          lg:gap-8
        "
      >
        {/* =================================
            LEFT SIDE
        ================================= */}

        <div className="flex flex-col gap-4">
          {/* Availability */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={headingVariant}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.035]
              p-5
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-teal-400/20
              hover:bg-white/[0.05]
              sm:p-6
            "
          >
            <p className="text-sm leading-7 text-gray-400 sm:text-base">
              I'm currently{" "}
              <span className="font-semibold text-teal-400">
                available for opportunities
              </span>{" "}
              — full-time roles, freelance projects, or technical
              collaborations.
            </p>
          </motion.div>

          {/* Contact Cards */}

      {contactItems.map((item, index) => (
  <ContactCard
    key={item.label}
    icon={item.icon}
    label={item.label}
    value={item.value}
    href={item.href}
    index={index}
  />
))}
        </div>

     

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
