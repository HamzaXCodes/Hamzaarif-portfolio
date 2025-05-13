import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// SVG Icons as components for better animation control
const HtmlIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="#E34F26"
      d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
    />
  </svg>
);

const CssIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="#1572B6"
      d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"
    />
  </svg>
);

const JsIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="#F7DF1E"
      d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
    />
  </svg>
);

const ReactIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="#61DAFB"
      d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
    />
  </svg>
);

const TailwindIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="#06B6D4"
      d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
    />
  </svg>
);

// Code syntax elements - SVG path strings
const CodeElements = [
  {
    id: "react-component",
    content: `<div className="component">{children}</div>`,
    svg: (
      <svg viewBox="0 0 100 40" className="w-full">
        <text x="5" y="15" className="text-[8px] fill-current">
          <tspan x="5" dy="0" className="text-accent-blue">
            const
          </tspan>
          <tspan dx="2" className="text-accent-cyan">
            {" "}
            Component
          </tspan>
          <tspan className="text-light-text dark:text-dark-text">
            {" "}
            = () =&gt; {"{"}
          </tspan>
        </text>
        <text x="10" y="25" className="text-[8px] fill-current">
          <tspan x="10" className="text-light-text dark:text-dark-text">
            return{" "}
          </tspan>
          <tspan className="text-accent-purple">&lt;div&gt;</tspan>
          <tspan className="text-light-text dark:text-dark-text">
            Hello World
          </tspan>
          <tspan className="text-accent-purple">&lt;/div&gt;</tspan>
        </text>
        <text
          x="5"
          y="35"
          className="text-[8px] fill-current text-light-text dark:text-dark-text"
        >
          <tspan x="5">{"}"}</tspan>
        </text>
      </svg>
    ),
  },
  {
    id: "css-property",
    content: ".card { background: linear-gradient(...); }",
    svg: (
      <svg viewBox="0 0 100 40" className="w-full">
        <text x="5" y="15" className="text-[8px] fill-current">
          <tspan x="5" dy="0" className="text-accent-purple">
            .card
          </tspan>
          <tspan className="text-light-text dark:text-dark-text"> {"{"}</tspan>
        </text>
        <text x="10" y="25" className="text-[8px] fill-current">
          <tspan x="10" className="text-accent-blue">
            background
          </tspan>
          <tspan className="text-light-text dark:text-dark-text">: </tspan>
          <tspan className="text-accent-cyan">linear-gradient(...)</tspan>
          <tspan className="text-light-text dark:text-dark-text">;</tspan>
        </text>
        <text
          x="5"
          y="35"
          className="text-[8px] fill-current text-light-text dark:text-dark-text"
        >
          <tspan x="5">{"}"}</tspan>
        </text>
      </svg>
    ),
  },
  {
    id: "js-function",
    content: "function animate({ duration, easing }) { ... }",
    svg: (
      <svg viewBox="0 0 100 40" className="w-full">
        <text x="5" y="15" className="text-[8px] fill-current">
          <tspan x="5" dy="0" className="text-accent-blue">
            function
          </tspan>
          <tspan dx="2" className="text-accent-cyan">
            animate
          </tspan>
          <tspan className="text-light-text dark:text-dark-text">
            ({"{"} duration, easing {"}"}) {"{"}
          </tspan>
        </text>
        <text x="10" y="25" className="text-[8px] fill-current">
          <tspan x="10" className="text-light-text dark:text-dark-text">
            return{" "}
          </tspan>
          <tspan className="text-accent-purple">transform</tspan>
          <tspan className="text-light-text dark:text-dark-text">
            (element, duration);
          </tspan>
        </text>
        <text
          x="5"
          y="35"
          className="text-[8px] fill-current text-light-text dark:text-dark-text"
        >
          <tspan x="5">{"}"}</tspan>
        </text>
      </svg>
    ),
  },
];

// Main animated component
const AnimatedHeroCoding = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled when component mounts
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);

    // Create observer to detect class changes on html element
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "class") {
          const isDarkNow = document.documentElement.classList.contains("dark");
          setDarkMode(isDarkNow);
        }
      }
    });

    // Start observing
    observer.observe(document.documentElement, { attributes: true });

    // Clean up
    return () => observer.disconnect();
  }, []);

  // Scale animation for browser window
  const containerVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Float animation for tech stack icons
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Float and pulse animation for code elements
  const codeElementVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.4,
      },
    }),
    animate: (i) => ({
      y: [0, -(10 + i * 3), 0],
      x: [0, i % 2 === 0 ? 5 : -5, 0],
      transition: {
        duration: 4 + i * 0.5,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    }),
  };

  // Orbital/rotating animation for tech icons
  const orbitVariants = {
    animate: (i) => ({
      rotate: 360,
      transition: {
        duration: 20 + i * 5,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    }),
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main browser window/frame container */}
      <motion.div
        className="w-full overflow-hidden shadow-lg glass rounded-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Browser header bar */}
        <div className="flex items-center gap-2 p-3 border-b bg-light-surface dark:bg-dark-surface border-light-border dark:border-dark-border">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <div className="flex-1 mx-2">
            <div className="px-3 py-1 text-xs text-center truncate rounded-md bg-light-border dark:bg-dark-border text-light-subtle dark:text-dark-subtle">
              hamza-portfolio.dev
            </div>
          </div>
        </div>

        {/* Browser content area */}
        <div className="bg-frosted-glass relative h-[200px] sm:h-[300px] overflow-hidden dark:bg-dark-bg/40">
          {/* Code snippets floating inside */}
          <div className="relative flex flex-col items-center justify-center w-full h-full">
            {CodeElements.map((element, i) => (
              <motion.div
                key={element.id}
                className="absolute px-2 py-1 border rounded-lg shadow-lg bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm border-light-border dark:border-dark-border"
                style={{
                  zIndex: 10 - i,
                  maxWidth: "90%",
                }}
                custom={i}
                initial="hidden"
                animate={["visible", "animate"]}
                variants={codeElementVariants}
              >
                {element.svg}
              </motion.div>
            ))}
          </div>

          {/* Tech stack icons rotating in orbit */}
          <div className="absolute inset-0">
            {/* React logo orbiting */}
            <motion.div
              className="absolute top-[40%] left-[45%]"
              variants={orbitVariants}
              custom={1}
              animate="animate"
              style={{ transformOrigin: "center center" }}
            >
              <motion.div
                className="absolute"
                variants={itemVariants}
                style={{ x: 130, y: 30 }}
              >
                <ReactIcon className="w-12 h-12 animate-glow" />
              </motion.div>
            </motion.div>

            {/* HTML logo orbiting */}
            <motion.div
              className="absolute top-[40%] left-[55%]"
              variants={orbitVariants}
              custom={2}
              animate="animate"
              style={{ transformOrigin: "center center" }}
            >
              <motion.div
                className="absolute"
                variants={itemVariants}
                style={{ x: -110, y: 70 }}
              >
                <HtmlIcon className="w-10 h-10 animate-glow" />
              </motion.div>
            </motion.div>

            {/* CSS logo orbiting */}
            <motion.div
              className="absolute top-[50%] left-[50%]"
              variants={orbitVariants}
              custom={0}
              animate="animate"
              style={{ transformOrigin: "center center" }}
            >
              <motion.div
                className="absolute"
                variants={itemVariants}
                style={{ x: 95, y: -60 }}
              >
                <CssIcon className="w-9 h-9 animate-glow" />
              </motion.div>
            </motion.div>

            {/* JS logo orbiting */}
            <motion.div
              className="absolute top-[35%] left-[43%]"
              variants={orbitVariants}
              custom={2.5}
              animate="animate"
              style={{ transformOrigin: "center center" }}
            >
              <motion.div
                className="absolute"
                variants={itemVariants}
                style={{ x: -30, y: -90 }}
              >
                <JsIcon className="w-10 h-10 animate-glow" />
              </motion.div>
            </motion.div>

            {/* Tailwind logo orbiting */}
            <motion.div
              className="absolute top-[40%] left-[50%]"
              variants={orbitVariants}
              custom={1.5}
              animate="animate"
              style={{ transformOrigin: "center center" }}
            >
              <motion.div
                className="absolute"
                variants={itemVariants}
                style={{ x: -70, y: 0 }}
              >
                <TailwindIcon className="w-11 h-11 animate-glow" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedHeroCoding;
