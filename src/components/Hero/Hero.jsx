import { motion } from "framer-motion";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import TypewriterEffect from "typewriter-effect";
import { createScrollHandler } from "../../utils/scrollUtils";
import AnimatedHeroCoding from "./AnimatedHeroCoding";

const Hero = () => {
  const socialIcons = [
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      link: "https://github.com/HamzaXCodes",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      link: "https://www.linkedin.com/in/hamza-arif-924220273/",
    },
  ];

  const scrollToAbout = createScrollHandler("about", 70);
  const scrollToContact = createScrollHandler("contact", 70);
  const scrollToProjects = createScrollHandler("projects", 70);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-full overflow-hidden bg-hero-section"
    >
      <div className="absolute inset-0 bg-light-surface/10 dark:bg-dark-bg/30" />
      <div className="container relative z-10 flex flex-col justify-center h-full px-4 py-20 mx-auto lg:px-6">
        <div className="flex flex-col items-center justify-center flex-1 gap-12 lg:flex-row">
          {/* Left side - Text content */}
          <motion.div
            className="flex flex-col items-center lg:w-1/2 lg:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-2 text-xl font-medium text-light-subtle dark:text-dark-subtle">
              Hi, I'm
            </h2>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              <span className="font-gradient">Hamza Arif</span>
            </h1>

            <div className="h-12 mb-6 text-xl md:text-2xl lg:text-3xl text-accent-blue">
              <TypewriterEffect
                options={{
                  strings: [
                    "Web Developer",
                    "React Enthusiast",
                    "Front-end Specialist",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typewriter-text",
                  cursorClassName: "typewriter-cursor",
                }}
              />
            </div>

            <p className="max-w-xl mb-8 text-lg leading-relaxed text-center text-light-text dark:text-dark-text lg:text-left">
              Passionate about creating beautiful, responsive web experiences
              with modern technologies. Combining creativity and technical
              skills to build exceptional user interfaces.
            </p>

            {/* ✅ Center buttons on mobile and tablet, align left on large screens */}
            <div className="flex flex-col items-center justify-center w-full gap-4 mb-8 sm:flex-row sm:justify-center md:justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="px-6 py-3 text-center cursor-pointer btn-primary hover:bg-blue-700"
              >
                Get In Touch
              </button>

              <button
                onClick={scrollToProjects}
                className="px-6 py-[10.9px] text-center cursor-pointer btn-outline hover:bg-accent-blue"
              >
                View Projects
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-light-subtle dark:text-dark-subtle">
                Find me on:
              </span>
              <div className="flex items-center gap-4">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors cursor-pointer text-accent-blue hover:text-blue-700"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Animated Coding Display only on laptops and larger */}
          <motion.div
            className="items-center justify-center hidden lg:flex lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatedHeroCoding />
          </motion.div>
        </div>

        {/* ✅ Scroll down indicator moved lower on small screens */}
        <div className="absolute z-20 -translate-x-1/2 left-1/2 bottom-2 md:bottom-3">
          <button
            onClick={scrollToAbout}
            className="scroll-down-btn group"
            aria-label="Scroll to About section"
          >
            <span className="mb-2 text-sm font-medium transition-colors text-light-text dark:text-dark-text group-hover:text-accent-blue">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="scroll-arrow"
            >
              <FaChevronDown size={20} />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
