import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarLogo from "./NavbarLogo";
import DesktopNav from "./DesktopNav";
import ThemeToggle from "./ThemeToggle";
import MobileMenuButton from "./MobileMenuButton";
import MobileNav from "./MobileNav";
import { navItems } from "../../constants/index.js";

export default function NavBar() {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = "hero";

      for (const item of navItems) {
        const section = document.querySelector(item.href);

        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
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

    // Close mobile menu first
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
      // Desktop starts at 1120px
      if (window.innerWidth >= 1120) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 1120;

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
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        px-3
        pt-3
        sm:px-5
        xl:px-8
      "
    >
      <nav
        className="
          mx-auto
          max-w-7xl
          rounded-2xl
          border
          border-slate-200
          bg-white/85
          dark:border-white/10
          dark:bg-black/75
          px-3
          py-2.5
          shadow-xl
          shadow-slate-200/40
          dark:shadow-2xl
          dark:shadow-black/20
          backdrop-blur-xl
          transition-all
          duration-500
          sm:px-4
          sm:py-3
        "
      >
        <div
          className="
            flex
            min-h-10
            items-center
            justify-between
            gap-2
            sm:min-h-11
            sm:gap-4
          "
        >
          {/* Logo */}
          <NavbarLogo onClick={handleNavigation} />

          {/* Desktop navigation */}
          <DesktopNav
            active={active}
            onNavigate={handleNavigation}
          />

          {/* Right actions */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-1.5
              sm:gap-2
            "
          >
            <ThemeToggle />

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