import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    "home",
    "about",
    "experience",
    "skills",
    "projects",
    "education",
    "contact",
  ];

  // Create refs for each section
  const sectionRefs = sections.reduce((acc, section) => {
    const [ref, inView] = useInView({
      threshold: 0.3, // Reduced threshold for better mobile responsiveness
    });

    acc[section] = { ref, inView };
    return acc;
  }, {});

  // Update activeSection when a section comes into view
  React.useEffect(() => {
    const visibleSection = sections.find(
      (section) => sectionRefs[section].inView
    );
    if (visibleSection) {
      setActiveSection(visibleSection);
    }
  }, [sections, sectionRefs]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Router>
      <div
        className={`min-h-screen ${
          darkMode ? "dark" : ""
        } transition-colors duration-300`}
      >
        <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
          <Header
            activeSection={activeSection}
            darkMode={darkMode}
            scrollToSection={scrollToSection}
            toggleDarkMode={toggleDarkMode}
          />
          <main className="pt-16 sm:pt-20">
            <Hero sectionRef={sectionRefs.home.ref} />
            <About sectionRef={sectionRefs.about.ref} />
            <Experience sectionRef={sectionRefs.experience.ref} />
            <Skills sectionRef={sectionRefs.skills.ref} />
            <Projects sectionRef={sectionRefs.projects.ref} />
            <Education sectionRef={sectionRefs.education.ref} />
            <Contact sectionRef={sectionRefs.contact.ref} />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </Router>
  );
}

export default App;
