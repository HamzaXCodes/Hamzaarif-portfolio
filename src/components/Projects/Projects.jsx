import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: "instagram",
      title: "Instagram Video Downloader",
      description:
        "Download Instagram videos easily in high quality with our fast, free, and user-friendly downloader tool.",
      image: "/insta.png",
      technologies: ["React.js", "Tailwind", "JavaScript"],
      demoUrl: "https://instagram-video-downloader-bice.vercel.app/",
      githubUrl: "https://github.com/HamzaXCodes/Instagram-video-downloader",
    },
      {
      id: "shopify",
      title: "100xElevate Shopify Agency",
      description:
        "A landing page for a Shopify development agency with smooth animations and mobile-friendly design.",
      image: "/100xelevate.png",
      technologies: ["React.js", "TailwindCSS", "Framer Motion", "GSAP"],
      demoUrl: "https://100xelevate.vercel.app/",
      githubUrl: "https://github.com/HamzaXCodes/100xelevate",
    },
    {
      id: "youtube",
      title: "Youtube to Mp4",
      description:
        "Download YouTube videos as MP4 files instantly with our fast, free, and easy-to-use tool.",
      image: "/youtubemp4.png",
      technologies: ["React.js", "Tailwind", "JavaScript"],
      demoUrl: "https://instagram-video-downloader-bice.vercel.app/",
      githubUrl: "https://github.com/HamzaXCodes/Instagram-video-downloader",
    },
    {
      id: "converter",
      title: "Image Converter Tool",
      description:
        "A web-based image converter tool allowing users to upload and convert images between formats with a clean, user-friendly interface.",
      image: "/converter.png",
      technologies: ["React.js", "Tailwind", "JavaScript"],
      demoUrl: "https://image-converter-tool-seven.vercel.app/",
      githubUrl: "https://github.com/HamzaXCodes/Image-Converter-Tool",
    },
  
    {
      id: "text-to-speech",
      title: "Text to Speech",
      description:
        "Convert text to natural-sounding speech instantly with our easy, fast, and user-friendly TTS app.",
      image: "/speech.png",
      technologies: ["React.js", "TailwindCSS", "JavaScript"],
      demoUrl: "https://text-speech-tool.vercel.app/",
      githubUrl: "https://github.com/HamzaXCodes/text-speech-tool",
    },
    {
      id: "ecommerce",
      title: "E-commerce Website",
      description:
      "A fully responsive e-commerce website with product listings, cart functionality, and user authentication.",
      image: "/watch.png",
      technologies: ["React.js", "Redux", "TailwindCSS", "Stripe API"],
      demoUrl: "https://watchshopweb.netlify.app/",
      githubUrl: "https://github.com/HamzaXCodes/WatchShop",
    },
    {
      id: "to-do",
      title: "To-do APP",
      description:
        "Organize tasks, set reminders, and boost productivity with a simple, intuitive to-do list app.",
      image: "/todo.png",
      technologies: ["React.js", "TailwindCSS", "JavaScript"],
      demoUrl: "https://to-do-app-work.vercel.app/",
      githubUrl: "https://github.com/HamzaXCodes/To-do-App",
    },
    {
      id: "whatsapp",
      title: "WhatsApp Chat Box",
      description:
        "A WhatsApp-inspired chat application with real-time messaging functionality.",
      image: "/whatsapp.png",
      technologies: ["React.js", "Firebase", "CSS3", "WebSockets"],
      demoUrl: "https://whatsapp-clone-lac.vercel.app/",
      githubUrl: "https://github.com/HamzaXCodes/WhatsApp-chatbox-clone",
    },
    {
      id: "devics",
      title: "Devics",
      description:
        "A website for a tech startup showcasing their products and services with an interactive UI.",
      image: "/devics.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      demoUrl: "https://hamzaxcodes.github.io/Devics.com/",
      githubUrl: "https://github.com/HamzaXCodes/Devics.com",
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "react", name: "React.js" },
    { id: "webdev", name: "Web Development" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => {
          switch (activeFilter) {
            case "react":
              return project.technologies.includes("React.js");
            // case "next":
            //   return project.technologies.includes("Next.js");
            case "webdev":
              return (
                project.technologies.includes("HTML5") ||
                project.technologies.includes("JavaScript")
              );
            default:
              return true;
          }
        });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="section-title" data-aos="fade-up">
            My Projects
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
            Showcasing some of my recent work. Each project demonstrates
            different skills and technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-accent-blue text-white"
                  : "bg-light-surface dark:bg-dark-surface hover:bg-light-border dark:hover:bg-dark-border text-light-text dark:text-dark-text"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="p-0 overflow-hidden transition-all duration-300 card hover:shadow-xl group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 opacity-0 bg-black/70 group-hover:opacity-100">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-900 transition-colors bg-white rounded-full hover:bg-gray-100"
                    aria-label={`View ${project.title} demo`}
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-900 transition-colors bg-white rounded-full hover:bg-gray-100"
                      aria-label={`View ${project.title} code on GitHub`}
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5">
                <h3 className="mb-2 text-xl font-bold text-accent-blue">
                  {project.title}
                </h3>
                <p className="mb-4 text-light-text dark:text-dark-text">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={`${project.id}-tech-${idx}`}
                      className="px-3 py-1 text-xs rounded-full bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium transition-colors text-accent-blue hover:text-gray-900 dark:hover:text-gray-300"
                  >
                    Live Demo
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-medium transition-colors text-accent-blue hover:text-gray-900 dark:hover:text-gray-300"
                    >
                      <FaGithub size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <a
            href="https://github.com/HamzaXCodes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary hover:bg-blue-700"
          >
            <FaGithub />
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
