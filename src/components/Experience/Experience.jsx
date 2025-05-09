import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const experienceItems = [
    {
      id: "mindlogic",
      title: "React Developer Intern",
      company: "MindLogic",
      period: "Dec 2024 – April 2025",
      description: [
        "Developed modern React applications with functional components and hooks",
        "Implemented responsive UI designs using Tailwind CSS and styled-components",
        "Collaborated with backend team to integrate RESTful APIs",
        "Participated in code reviews and contributed to team knowledge sharing",
      ],
    },
    {
      id: "shaukat-khanum",
      title: "Front-End Development Intern",
      company: "Shaukat Khanum Memorial Cancer Hospital (MIS Department)",
      period: "Aug 2024 – Oct 2024",
      description: [
        "Developed responsive web interfaces",
        "Optimized UI/UX performance",
        "Collaborated with teams to enhance functionality",
        "Debugged and improved site performance",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-light-surface dark:bg-dark-bg">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="section-title" data-aos="fade-up">
            Work Experience
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
            My professional journey in web development and the valuable
            experiences I've gained along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 z-0 w-1 h-full transform md:left-1/2 md:-translate-x-1/2 bg-accent-blue/30" />

          {experienceItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={index * 100}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 z-10 w-6 h-6 mt-2 transform -translate-x-1/2 rounded-full md:left-1/2 bg-accent-blue" />

              {/* Content */}
              <div className="pl-10 md:w-1/2 md:pl-0 md:pr-12 md:text-right">
                <h3 className="text-xl font-bold text-accent-blue">
                  {item.title}
                </h3>
                <h4 className="mb-1 text-lg font-semibold text-light-text dark:text-dark-text">
                  {item.company}
                </h4>
                <div className="flex items-center mb-4 md:justify-end">
                  <FaCalendarAlt className="mr-2 text-accent-blue" />
                  <span className="text-sm text-light-subtle dark:text-dark-subtle">
                    {item.period}
                  </span>
                </div>
              </div>

              <div className="pl-10 md:w-1/2 md:pl-12">
                <div className="card">
                  <ul className="pl-5 space-y-2 list-disc text-light-text dark:text-dark-text">
                    {item.description.map((desc, idx) => (
                      <li key={`${item.id}-desc-${idx}`}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
