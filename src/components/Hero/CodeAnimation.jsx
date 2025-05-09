import { useEffect, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeAnimation = () => {
  const codeRef = useRef(null);

  // React component code sample
  const codeString = `// Portfolio Component
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch portfolio projects
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="portfolio-container">
      <h2>My Latest Work</h2>

      {isLoading ? (
        <div className="loading-spinner" />
      ) : (
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;`;

  return (
    <div
      className="code-container bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
      ref={codeRef}
    >
      <div className="flex items-center bg-gray-800 px-4 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="ml-4 text-xs text-gray-400">portfolio.jsx</div>
      </div>

      <div className="p-2 md:p-4 overflow-auto max-h-[500px]">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          wrapLines={true}
          showLineNumbers={true}
          lineProps={(lineNumber) => {
            const style = {
              display: "block",
              width: "100%",
              opacity: 0,
              animation: `fadeIn 0.1s ease forwards ${lineNumber * 0.08}s`,
              paddingRight: "16px",
            };
            return { style };
          }}
          customStyle={{
            backgroundColor: "transparent",
            fontSize: "14px",
            margin: 0,
            padding: 0,
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeAnimation;
