import AOS from "aos";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "aos/dist/aos.css";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    // Check local storage or use system preference
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && prefersDark);
    setDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Initialize AOS animation library with options
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
      easing: "ease-out",
      delay: 0,
      anchorPlacement: "top-bottom",
      disable: false, // Enable on all devices for consistency
      startEvent: "DOMContentLoaded", // Earlier initialization
      debounceDelay: 50, // Lower debounce for smoother animations
    });

    // Refresh AOS when all content is loaded
    const handleLoad = () => {
      AOS.refresh();
    };
    window.addEventListener("load", handleLoad);

    // Add event listener for refreshing AOS on window resize
    const handleResize = () => {
      AOS.refresh();
    };
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    };
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

    // Refresh AOS animations when theme changes
    setTimeout(() => {
      AOS.refresh();
    }, 200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-500">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
