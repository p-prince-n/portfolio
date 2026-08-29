
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Code2,
  Menu,
  X,
  Sun,
  Moon,
  Home,
  User,
  Sparkles,
  GraduationCap,
  Mail,
} from "lucide-react";

import { FaLaptopCode, FaRocket } from "react-icons/fa";

/* =========================================================
   NAV ITEMS
========================================================= */

const navItems = [
  {
    name: "Home",
    href: "#hero",
    icon: Home,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: Sparkles,
  },
  {
    name: "About",
    href: "#about",
    icon: User,
  },
  {
    name: "Technology",
    href: "#tech-skills",
    icon: FaLaptopCode,
  },
  {
    name: "Education",
    href: "#education",
    icon: GraduationCap,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: FaRocket,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];


function NavbarLogo({ onClick }) {
  return (
    <motion.button
      type="button"
      onClick={() => onClick("#hero")}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className="group flex min-w-0 shrink-0 items-center gap-2.5"
      aria-label="Go to home"
    >
     
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-emerald-400/30 bg-emerald-400/10 sm:h-11 sm:w-11">
        {/* Glow */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-emerald-400/10"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <Code2
          size={22}
          className="relative z-10 text-emerald-400 transition-transform duration-300 group-hover:rotate-6"
        />
      </div>

    
      <div className="">
        <div className="flex items-center gap-1 text-sm font-bold tracking-tight sm:text-base">
          <span className="text-emerald-400">Prince</span>
          <span className="text-white">P</span>
        </div>

        <div className="text-[8px] font-medium uppercase tracking-[0.18em] text-gray-500 sm:text-[9px]">
          Full Stack Developer
        </div>
      </div>
    </motion.button>
  );
}


function NavItem({ item, active, onClick }) {
  const Icon = item.icon;
  const isActive = active === item.href.substring(1);

  return (
    <motion.button
      type="button"
      onClick={() => onClick(item.href)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.94 }}
      className="group relative flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium"
      aria-current={isActive ? "page" : undefined}
    >
     
      <motion.span
        className="absolute inset-0 rounded-xl bg-emerald-400/[0.06]"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

     
      {isActive && (
        <motion.span
          layoutId="desktop-active"
          className="absolute inset-0 rounded-xl border border-emerald-400/20 bg-emerald-400/10"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
            mass: 0.6,
          }}
        />
      )}

     
      <Icon
        size={16}
        className={`relative z-10 transition-colors duration-300 ${
          isActive
            ? "text-emerald-400"
            : "text-gray-500 group-hover:text-emerald-400"
        }`}
      />

      {/* Text */}
      <span
        className={`relative z-10 transition-colors duration-300 ${
          isActive
            ? "text-emerald-400"
            : "text-gray-300 group-hover:text-white"
        }`}
      >
        {item.name}
      </span>

      {/* Bottom indicator */}
      {isActive && (
        <motion.span
          layoutId="desktop-dot"
          className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
        />
      )}
    </motion.button>
  );
}


function DesktopNav({ active, onNavigate }) {
  return (
    <div className="hidden items-center justify-center lg:flex">
      {navItems.map((item) => (
        <NavItem
          key={item.name}
          item={item}
          active={active}
          onClick={onNavigate}
        />
      ))}
    </div>
  );
}



function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <motion.button
      type="button"
      onClick={() => setDarkMode((prev) => !prev)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.9 }}
      aria-label={
        darkMode ? "Switch to light mode" : "Switch to dark mode"
      }
      className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-400"
    >
      <AnimatePresence mode="wait" initial={false}>
        {darkMode ? (
          <motion.div
            key="moon"
            initial={{
              opacity: 0,
              rotate: -90,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: 90,
              scale: 0.5,
            }}
            transition={{ duration: 0.25 }}
          >
            <Moon size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{
              opacity: 0,
              rotate: 90,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: -90,
              scale: 0.5,
            }}
            transition={{ duration: 0.25 }}
          >
            <Sun size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}


function MobileMenuButton({ mobileOpen, setMobileOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => setMobileOpen((prev) => !prev)}
      whileTap={{ scale: 0.9 }}
      aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
      aria-expanded={mobileOpen}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-400 lg:hidden"
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


function MobileNavItem({ item, active, onClick }) {
  const Icon = item.icon;
  const isActive = active === item.href.substring(1);

  return (
    <motion.button
      type="button"
      onClick={() => onClick(item.href)}
      whileTap={{ scale: 0.97 }}
      className="group relative flex w-full items-center gap-3 overflow-hidden rounded-xl px-4 py-3 text-left"
      aria-current={isActive ? "page" : undefined}
    >
      {/* Hover animation */}
      <motion.span
        className="absolute inset-0 origin-center rounded-xl bg-emerald-400/[0.07]"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileHover={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      />

      {/* Active background */}
      {isActive && (
        <motion.span
          layoutId="mobile-active"
          className="absolute inset-0 rounded-xl border border-emerald-400/20 bg-emerald-400/10"
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 32,
          }}
        />
      )}

      {/* Active line */}
      {isActive && (
        <motion.span
          layoutId="mobile-line"
          className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-full bg-emerald-400"
        />
      )}

      {/* Icon */}
      <Icon
        size={18}
        className={`relative z-10 transition-colors duration-300 ${
          isActive
            ? "text-emerald-400"
            : "text-gray-500 group-hover:text-emerald-400"
        }`}
      />

      {/* Text */}
      <span
        className={`relative z-10 text-sm transition-colors duration-300 ${
          isActive
            ? "font-semibold text-emerald-400"
            : "text-gray-300 group-hover:text-white"
        }`}
      >
        {item.name}
      </span>

      {/* Right indicator */}
      {isActive && (
        <motion.span
          layoutId="mobile-dot"
          className="absolute right-4 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]"
        />
      )}
    </motion.button>
  );
}


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
      className="overflow-hidden lg:hidden"
    >
      <div className="mt-3 rounded-2xl border border-white/10 bg-black/90 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
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
          className="mt-2 border-t border-white/10 px-4 pb-1 pt-3 text-center"
        >
          <span className="text-[9px] uppercase tracking-[0.2em] text-gray-600">
            Building digital experiences
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}


export default function NavBar() {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);


  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "hero";

      for (const item of navItems) {
        const section = document.querySelector(item.href);

        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < bottom
        ) {
          currentSection = section.id;
          break;
        }
      }

      setActive((prev) =>
        prev === currentSection ? prev : currentSection
      );
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

 const handleNavigation = (href) => {
  const target = document.querySelector(href);

  if (!target) return;

  // Close mobile menu FIRST
  setMobileOpen(false);

  // Update active item
  setActive(href.substring(1));

  // Wait for mobile menu/body overflow to reset
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const headerOffset = 90;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
};


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


useEffect(() => {
  const isMobile = window.innerWidth < 1024;

  if (mobileOpen && isMobile) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };
}, [mobileOpen]);


  return (
    <motion.header
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 xl:px-8 "
    >
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/75 px-3 py-2.5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-4 sm:py-3">
        {/* Main row */}
        <div className="flex min-h-10 items-center justify-between gap-2 sm:min-h-11 sm:gap-4">
          {/* Logo */}
          <NavbarLogo onClick={handleNavigation} />

          {/* Desktop navigation */}
          <DesktopNav
            active={active}
            onNavigate={handleNavigation}
          />

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <ThemeToggle
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />

            <MobileMenuButton
              mobileOpen={mobileOpen}
              setMobileOpen={setMobileOpen}
            />
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence initial={false}>
          {mobileOpen && (
            <MobileNav
              active={active}
              onNavigate={handleNavigation}
            />
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

