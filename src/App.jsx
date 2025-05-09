import { useEffect } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  // Preload theme from local storage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <Layout>
      <div style={{ overflowX: "hidden" }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
}

export default App;
