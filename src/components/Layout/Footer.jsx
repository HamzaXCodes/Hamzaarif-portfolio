import {
  FaCode,
  FaEnvelope,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaRocket,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { createScrollHandler } from "../../utils/scrollUtils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={18} />,
      url: "https://github.com/HamzaXCodes",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={18} />,
      url: "https://www.linkedin.com/in/hamza-arif-924220273/",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={18} />,
      url: "https://twitter.com",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={18} />,
      url: "mailto:hamza.dev.work@gmail.com",
    },
  ];

  return (
    <footer className="border-t bg-light-surface dark:bg-dark-bg border-light-border dark:border-dark-border">
      {/* Main Footer */}
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {/* About Column */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-accent-blue">
              Hamza Arif
            </h3>
            <p className="mb-4 text-light-text dark:text-dark-text">
              A passionate web developer focused on creating beautiful,
              responsive and user-friendly websites using modern technologies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="transition-colors text-light-subtle dark:text-dark-subtle hover:text-accent-blue dark:hover:text-accent-blue"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Center Column */}
          <div className="md:text-center">
            <h3 className="mb-4 text-xl font-bold text-accent-blue">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={createScrollHandler(link.to, -70)}
                    className="transition-colors cursor-pointer text-light-text dark:text-dark-text hover:text-accent-blue dark:hover:text-accent-blue"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Right Column */}
          <div className="md:text-right">
            <h3 className="mb-4 text-xl font-bold text-accent-blue">
              Contact Me
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start md:justify-end">
                <span className="transition-colors text-light-text dark:text-dark-text hover:text-accent-blue dark:hover:text-accent-blue">
                  <a href="mailto:hamza.dev.work@gmail.com">
                    hamza.dev.work@gmail.com
                  </a>
                </span>
                <FaEnvelope className="mt-1 ml-3 text-accent-blue" />
              </li>
              <li className="flex items-start md:justify-end">
                <span className="transition-colors text-light-text dark:text-dark-text hover:text-accent-blue dark:hover:text-accent-blue">
                  <a href="tel:+923247947566">+923247947566</a>
                </span>
                <FaPhone className="mt-1 ml-3 text-accent-blue" />
              </li>
              <li className="flex items-start md:justify-end">
                <span className="transition-colors text-light-text dark:text-dark-text hover:text-accent-blue dark:hover:text-accent-blue">
                  <a href="https://wa.me/923247947566">+923247947566</a>
                </span>
                <FaWhatsapp className="mt-1 ml-3 text-accent-blue" />
              </li>
              <li className="flex items-start md:justify-end">
                <span className="text-light-text dark:text-dark-text">
                  Lahore, Pakistan
                </span>
                <FaMapMarkerAlt className="mt-1 ml-3 text-accent-blue" />
              </li>
              <li className="flex items-start md:justify-end">
  <span className="text-light-text dark:text-dark-text">
    Contact Me!
  </span>
  <FaRocket className="mt-1 ml-3 text-accent-blue" />
</li>
              {/* <li className="flex mt-4 md:justify-end">
                <button
                  onClick={createScrollHandler("contact", -70)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-white transition-colors bg-transparent rounded-lg hover:bg-blue-700"
                >
                  <span>Get In Touch</span>
                  <FaRocket size={14} />
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-light-border dark:border-dark-border bg-light-surface/50 dark:bg-dark-surface/50">
        <div className="flex flex-col items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:flex-row">
          <div className="mb-4 text-center md:text-left md:mb-0">
            <p className="text-sm text-light-subtle dark:text-dark-subtle">
              &copy; {currentYear} Hamza Arif. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-light-subtle dark:text-dark-subtle">
            <span>Made in React by</span>
            <span className="font-medium font-gradient">Hamza Arif</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
