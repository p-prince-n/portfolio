import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";

import { MagneticButton } from "../AnimatedButton";



const formVariant = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.96,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fieldVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactForm() {
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  const [pressed, setPressed] = useState(false);
  const [status, setStatus] = useState("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm();

  // ================================
  // 3D CARD MOVEMENT
  // ================================
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX =
      ((y - centerY) / centerY) * -5;

    const rotateY =
      ((x - centerX) / centerX) * 5;

    setRotate({
      x: rotateX,
      y: rotateY,
    });
  };

  const handleMouseLeave = () => {
    setRotate({
      x: 0,
      y: 0,
    });

    setPressed(false);
  };

  // ================================
  // SEND EMAIL
  // ================================
  const onSubmit = async (data) => {
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      reset();

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={formVariant}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: pressed ? 0.985 : 1,
      }}
      style={{
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border

        border-slate-200
        bg-white

        dark:border-white/10
        dark:bg-white/[0.035]

        p-5
        backdrop-blur-xl

        transition-all
        duration-500

        hover:border-teal-500/30
        hover:bg-slate-50
        hover:shadow-[0_25px_80px_-30px_rgba(20,184,166,0.25)]

        dark:hover:border-teal-400/30
        dark:hover:bg-white/[0.05]
        dark:hover:shadow-[0_25px_80px_-30px_rgba(45,212,191,0.45)]

        sm:p-7
        md:p-8
      "
    >
      {/* =================================
          MAIN GRADIENT
      ================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl

          bg-gradient-to-br
          from-teal-500/[0.05]
          via-transparent
          to-violet-500/[0.06]

          dark:from-teal-400/[0.08]
          dark:via-transparent
          dark:to-violet-500/[0.08]

          opacity-60
          transition-opacity
          duration-700

          group-hover:opacity-100
        "
      />

      {/* =================================
          TOP LIGHT
      ================================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-px

          bg-gradient-to-r
          from-transparent
          via-teal-500
          to-transparent

          dark:via-teal-400

          opacity-40
          transition-all
          duration-500

          group-hover:opacity-100
        "
      />

      {/* =================================
          MOUSE GLOW
      ================================= */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full

          bg-teal-500/10
          dark:bg-teal-400/10

          blur-3xl

          transition-all
          duration-700

          group-hover:bg-teal-500/20
          dark:group-hover:bg-teal-400/20
        "
      />

      {/* =================================
          CONTENT
      ================================= */}
      <motion.div
        className="relative z-10"
        style={{
          transform: "translateZ(35px)",
        }}
        variants={{
          hidden: {},

          visible: {
            transition: {
              delayChildren: 0.15,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {/* TITLE */}
        <motion.h2
          variants={fieldVariant}
          className="
            new-rocker-font
            text-xl
            font-bold

            text-slate-900
            dark:text-white

            transition-colors
            duration-300

            group-hover:text-teal-700
            dark:group-hover:text-teal-100

            sm:text-2xl
          "
        >
          Send a Message
        </motion.h2>

        <motion.p
          variants={fieldVariant}
          className="
            mt-2
            text-sm

            text-slate-500
            dark:text-gray-500

            transition-colors
            duration-300

            group-hover:text-slate-600
            dark:group-hover:text-gray-400
          "
        >
          Tell me a little about your project.
        </motion.p>

        {/* =================================
            FORM
        ================================= */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-7 space-y-5"
        >
          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* NAME */}
            <motion.div variants={fieldVariant}>
              <label
                className="
                  mb-2
                  block
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  text-slate-500
                  dark:text-gray-500

                  transition-colors
                  duration-300
                "
              >
                Name
              </label>

              <input
                type="text"
                placeholder="Your full name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Enter your name",
                  },
                })}
                className="
                  w-full
                  rounded-xl
                  border

                  border-slate-200
                  bg-slate-50

                  dark:border-white/10
                  dark:bg-black/20

                  px-4
                  py-3.5
                  text-sm

                  text-slate-800
                  dark:text-white

                  outline-none

                  placeholder:text-slate-400
                  dark:placeholder:text-gray-600

                  transition-all
                  duration-300

                  focus:border-teal-500/50
                  dark:focus:border-teal-400/50

                  focus:bg-teal-500/[0.03]
                  dark:focus:bg-teal-400/[0.03]

                  focus:ring-1
                  focus:ring-teal-500/20
                  dark:focus:ring-teal-400/20
                "
              />

              {errors.name && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            {/* EMAIL */}
            <motion.div variants={fieldVariant}>
              <label
                className="
                  mb-2
                  block
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  text-slate-500
                  dark:text-gray-500

                  transition-colors
                  duration-300
                "
              >
                Email
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="
                  w-full
                  rounded-xl
                  border

                  border-slate-200
                  bg-slate-50

                  dark:border-white/10
                  dark:bg-black/20

                  px-4
                  py-3.5
                  text-sm

                  text-slate-800
                  dark:text-white

                  outline-none

                  placeholder:text-slate-400
                  dark:placeholder:text-gray-600

                  transition-all
                  duration-300

                  focus:border-teal-500/50
                  dark:focus:border-teal-400/50

                  focus:bg-teal-500/[0.03]
                  dark:focus:bg-teal-400/[0.03]

                  focus:ring-1
                  focus:ring-teal-500/20
                  dark:focus:ring-teal-400/20
                "
              />

              {errors.email && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </motion.div>
          </div>

          {/* SUBJECT */}
          <motion.div variants={fieldVariant}>
            <label
              className="
                mb-2
                block
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]

                text-slate-500
                dark:text-gray-500

                transition-colors
                duration-300
              "
            >
              Subject
            </label>

            <input
              type="text"
              placeholder="What's this about?"
              {...register("subject", {
                required: "Subject is required",
              })}
              className="
                w-full
                rounded-xl
                border

                border-slate-200
                bg-slate-50

                dark:border-white/10
                dark:bg-black/20

                px-4
                py-3.5
                text-sm

                text-slate-800
                dark:text-white

                outline-none

                placeholder:text-slate-400
                dark:placeholder:text-gray-600

                transition-all
                duration-300

                focus:border-teal-500/50
                dark:focus:border-teal-400/50

                focus:bg-teal-500/[0.03]
                dark:focus:bg-teal-400/[0.03]

                focus:ring-1
                focus:ring-teal-500/20
                dark:focus:ring-teal-400/20
              "
            />

            {errors.subject && (
              <p className="mt-1 text-xs text-red-400">
                {errors.subject.message}
              </p>
            )}
          </motion.div>

          {/* MESSAGE */}
          <motion.div variants={fieldVariant}>
            <label
              className="
                mb-2
                block
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]

                text-slate-500
                dark:text-gray-500

                transition-colors
                duration-300
              "
            >
              Message
            </label>

            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message is too short",
                },
              })}
              className="
                w-full
                resize-none
                rounded-xl
                border

                border-slate-200
                bg-slate-50

                dark:border-white/10
                dark:bg-black/20

                px-4
                py-3.5
                text-sm

                text-slate-800
                dark:text-white

                outline-none

                placeholder:text-slate-400
                dark:placeholder:text-gray-600

                transition-all
                duration-300

                focus:border-teal-500/50
                dark:focus:border-teal-400/50

                focus:bg-teal-500/[0.03]
                dark:focus:bg-teal-400/[0.03]

                focus:ring-1
                focus:ring-teal-500/20
                dark:focus:ring-teal-400/20
              "
            />

            {errors.message && (
              <p className="mt-1 text-xs text-red-400">
                {errors.message.message}
              </p>
            )}
          </motion.div>

          {/* STATUS */}
          {status === "success" && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border

                border-teal-500/20
                bg-teal-500/[0.06]
                text-teal-600

                dark:border-teal-400/20
                dark:bg-teal-400/[0.06]
                dark:text-teal-300

                px-4
                py-3
                text-sm

                transition-colors
                duration-500
              "
            >
              <CheckCircle size={17} />
              Message sent successfully!
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border

                border-red-200
                bg-red-50
                text-red-600

                dark:border-red-400/20
                dark:bg-red-400/[0.06]
                dark:text-red-300

                px-4
                py-3
                text-sm

                transition-colors
                duration-500
              "
            >
              <AlertCircle size={17} />
              Failed to send message. Please try again.
            </motion.div>
          )}

          {/* =================================
              MAGNETIC SEND BUTTON
          ================================= */}
          <motion.div variants={fieldVariant}>
            <MagneticButton
              strength={0.2}
              className="w-full"
            >
              <motion.button
                type="submit"
                disabled={
                  isSubmitting || status === "sending"
                }
                whileHover={{
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl

                  bg-gradient-to-r
                  from-teal-600
                  via-cyan-500
                  to-violet-600

                  dark:from-teal-500
                  dark:via-cyan-400
                  dark:to-violet-500

                  px-5
                  py-3.5
                  text-sm
                  font-semibold

                  text-white
                  dark:text-black

                  shadow-[0_10px_30px_-10px_rgba(20,184,166,0.35)]
                  dark:shadow-[0_10px_30px_-10px_rgba(45,212,191,0.5)]

                  transition-all
                  duration-300

                  hover:shadow-[0_15px_45px_-10px_rgba(20,184,166,0.5)]
                  dark:hover:shadow-[0_15px_45px_-10px_rgba(45,212,191,0.7)]

                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {isSubmitting || status === "sending" ? (
                  <>
                    <Loader className="text-xl animate-spin duration-300" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </MagneticButton>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
}

