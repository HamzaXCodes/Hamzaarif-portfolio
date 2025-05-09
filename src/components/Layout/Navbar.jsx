import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { createScrollHandler } from "../../utils/scrollUtils";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && prefersDark);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "skills",
      "experience",
      "projects",
      "contact",
    ];
    const handleSectionObserver = () => {
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener("scroll", handleSectionObserver);
    return () => window.removeEventListener("scroll", handleSectionObserver);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", to: "hero", offset: -100 },
    { name: "About", to: "about", offset: -70 },
    { name: "Skills", to: "skills", offset: -70 },
    { name: "Experience", to: "experience", offset: -70 },
    { name: "Projects", to: "projects", offset: -70 },
    { name: "Contact", to: "contact", offset: -70 },
  ];

  const navbarClass = scrolled
    ? "py-4 backdrop-blur-xl bg-white/60 dark:bg-dark-bg/70 shadow-lg"
    : "py-4 backdrop-blur-xl bg-white/20 dark:bg-dark-bg/30";

  const linkClass =
    "relative px-1 py-2 transition-colors duration-200 hover:text-accent-blue cursor-pointer";
  const activeLinkClass = "text-accent-blue";
  const inactiveLinkClass = "text-light-text dark:text-dark-text";

  const menuVariants = {
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${navbarClass}`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto md:px-6">
        <button
          onClick={createScrollHandler("hero", -100)}
          className="text-2xl font-bold transition-opacity cursor-pointer text-light-text dark:text-white hover:opacity-80"
        >
          <span className="font-gradient">Hamza.dev</span>
         
        </button>

        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-10 md:flex">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={createScrollHandler(link.to, link.offset)}
                className={`${linkClass} ${activeSection === link.to ? activeLinkClass : inactiveLinkClass} nav-link`}
              >
                {link.name}
                {activeSection === link.to && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-blue"
                    layoutId="navbar-underline"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 transition-colors rounded-full cursor-pointer hover:bg-light-surface/30 dark:hover:bg-dark-surface/30 focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaSun className="text-xl text-yellow-400" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaMoon className="text-xl text-accent-blue" />
              </motion.div>
            )}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 transition-colors rounded-full cursor-pointer hover:bg-light-surface/30 dark:hover:bg-dark-surface/30"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-xl text-yellow-400" />
            ) : (
              <FaMoon className="text-xl text-accent-blue" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 transition-colors rounded-md cursor-pointer hover:bg-light-surface/30 dark:hover:bg-dark-surface/30"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="text-xl text-accent-blue" />
            ) : (
              <FaBars className="text-xl text-accent-blue" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="shadow-lg md:hidden backdrop-blur-lg bg-white/90 dark:bg-dark-bg/90"
          >
            <div className="flex flex-col px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={menuItemVariants}>
                  <button
                    onClick={() => {
                      createScrollHandler(link.to, link.offset)();
                      setIsMenuOpen(false);
                    }}
                    className={`block py-2 w-full text-left ${activeSection === link.to ? activeLinkClass : inactiveLinkClass} cursor-pointer nav-link`}
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
