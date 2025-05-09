import { useEffect, useRef, useState } from "react";
import {
  FaCode,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const progressRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  const skills = [
    // Frontend Development
    {
      name: "HTML5",
      icon: <FaHtml5 size={40} />,
      color: "text-orange-600",
      category: "frontend",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={40} />,
      color: "text-blue-600",
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: <FaJs size={40} />,
      color: "text-yellow-400",
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={36} />,
      color: "text-blue-700",
      category: "frontend",
    },
    {
      name: "React.js",
      icon: <FaReact size={40} />,
      color: "text-sky-600",
      category: "frontend",
    },
    // {
    //   name: "Next.js",
    //   icon: <SiNextdotjs size={36} />,
    //   color: "text-light-text dark:text-dark-text",
    //   category: "frontend",
    // },
    {
      name: "Redux",
      icon: <SiRedux size={36} />,
      color: "text-accent-purple",
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={36} />,
      color: "text-teal-600",
      category: "frontend",
    },

    // Web Development
    // {
    //   name: "Node.js",
    //   icon: <FaNodeJs size={40} />,
    //   color: "text-green-700",
    //   category: "webdev",
    // },
    // {
    //   name: "Webpack",
    //   icon: <SiWebpack size={36} />,
    //   color: "text-blue-500",
    //   category: "webdev",
    // },

    // Tools
    {
      name: "Git",
      icon: <FaGitAlt size={40} />,
      color: "text-orange-700",
      category: "tools",
    },
    {
      name: "NPM",
      icon: <FaNpm size={40} />,
      color: "text-red-700",
      category: "tools",
    },
    {
      name: "VS Code",
      icon: <FaCode size={36} />,
      color: "text-blue-600",
      category: "tools",
    },
    // {
    //   name: "Figma",
    //   icon: <FaFigma size={36} />,
    //   color: "text-purple-600",
    //   category: "tools",
    // },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend Development" },
    // { id: "webdev", name: "Web Development" },
    { id: "tools", name: "Tools & Software" },
  ];

  const progressBars = [
    { skill: "Frontend Development", percentage: 90 },
    { skill: "React.js", percentage: 85 },
    { skill: "Responsive Design", percentage: 95 },
    { skill: "Development Tools", percentage: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-light-surface dark:bg-dark-bg">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="section-title" data-aos="fade-up">
            My Skills
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-6 bg-accent-blue"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <p
            className="max-w-2xl mx-auto text-lg text-light-text dark:text-dark-text"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Here are the technologies and tools that I use to bring web
            applications to life. I'm constantly learning and adding new skills
            to my repertoire.
          </p>
        </div>

        {/* Category filters */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-accent-blue text-white"
                  : "bg-light-border dark:bg-dark-border hover:bg-light-surface dark:hover:bg-dark-surface text-light-text dark:text-dark-text"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass backdrop-blur-sm rounded-xl p-6 w-full max-w-[150px] flex flex-col items-center justify-center hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
              data-aos="zoom-in"
            >
              <div
                className={`text-4xl ${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                {skill.icon}
              </div>
              <h3 className="font-medium text-center text-light-text dark:text-dark-text">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="max-w-2xl mx-auto mt-20" ref={progressRef}>
          <div className="mb-12" data-aos="fade-up">
            <h2 className="mb-4 text-center section-title">
              Professional Growth
            </h2>
            <p className="mb-8 text-center text-light-subtle dark:text-dark-subtle">
              I'm committed to continuous learning and keeping up with the
              latest web development trends.
            </p>
          </div>

          <div className="space-y-6">
            {progressBars.map((bar, index) => (
              <div
                key={bar.skill}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                className={isVisible ? "animate-fadeInUp" : "opacity-0"}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-between mb-2 text-light-text dark:text-dark-text">
                  <span>{bar.skill}</span>
                  <span>{bar.percentage}%</span>
                </div>
                <div className="w-full h-3 overflow-hidden rounded-full bg-light-border dark:bg-dark-border">
                  <div
                    className="h-full rounded-full bg-accent-blue progress-bar"
                    style={{ "--progress-width": `${bar.percentage}%` }}
                    data-aos-delay={index * 200}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
