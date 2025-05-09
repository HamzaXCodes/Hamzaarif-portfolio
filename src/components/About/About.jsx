import React from "react";
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";

const About = () => {
  const services = [
    {
      id: "web-dev",
      icon: <FaCode size={36} />,
      title: "Web Development",
      description:
        "Building modern and responsive websites using the latest technologies and frameworks.",
    },
    {
      id: "frontend",
      icon: <FaLaptopCode size={36} />,
      title: "Frontend Development",
      description:
        "Creating engaging user interfaces with React.js and modern CSS frameworks.",
    },
    {
      id: "api",
      icon: <FaServer size={36} />,
      title: "API Integration",
      description:
        "Connecting your frontend to backend services and third-party APIs.",
    },
    {
      id: "responsive",
      icon: <FaMobileAlt size={36} />,
      title: "Responsive Design",
      description:
        "Ensuring your website looks great on all devices from desktop to mobile.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-light-surface dark:bg-dark-bg">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="section-title" data-aos="fade-up">
            About Me
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
            I'm a passionate web developer with a focus on creating intuitive
            and dynamic user experiences. I specialize in modern JavaScript
            frameworks and responsive design principles.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2">
          <div data-aos="fade-right" data-aos-delay="300">
            <div className="h-full card">
              <h3 className="mb-4 text-2xl font-semibold text-accent-blue">
                My Journey
              </h3>
              <p className="mb-4 text-light-text dark:text-dark-text">
                My passion for web development started when I built my first
                website from scratch. Since then, I've been constantly learning
                and evolving my skills to keep up with the rapidly changing
                landscape of web technologies.
              </p>
              <p className="text-light-text dark:text-dark-text">
                I believe in writing clean, maintainable code and creating user
                experiences that are not only visually appealing but also highly
                functional and accessible to everyone.
              </p>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="400">
            <div className="h-full card">
              <h3 className="mb-4 text-2xl font-semibold text-accent-blue">
                My Approach
              </h3>
              <p className="mb-4 text-light-text dark:text-dark-text">
                I take a user-centered approach to development, always keeping
                the end user in mind. I believe that great websites should not
                only look good but also provide a seamless and intuitive
                experience.
              </p>
              <p className="text-light-text dark:text-dark-text">
                My technical expertise combined with an eye for design allows me
                to transform ideas into fully functional web applications that
                meet both client requirements and user needs.
              </p>
            </div>
          </div>
        </div>

        <h3
          className="mb-12 text-2xl font-semibold text-center text-accent-blue"
        >
          What I Do
        </h3>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="transition-all duration-300 card group hover:border-accent-blue"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="mb-4 transition-transform duration-300 text-accent-blue group-hover:scale-110">
                {service.icon}
              </div>
              <h4 className="mb-2 text-xl font-semibold text-light-text dark:text-dark-text">
                {service.title}
              </h4>
              <p className="text-light-subtle dark:text-dark-subtle">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
