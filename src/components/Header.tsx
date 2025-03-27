import React, { useState } from "react";
import {
  Terminal,
  User,
  Briefcase,
  Code,
  FolderGit,
  GraduationCap,
  Contact,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

interface HeaderProps {
  activeSection: string;
  darkMode: boolean;
  scrollToSection: (id: string) => void;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  darkMode,
  scrollToSection,
  toggleDarkMode,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", icon: <Terminal className="w-5 h-5" />, label: "DEV/SM" },
    { id: "about", icon: <User className="w-5 h-5" />, label: "About" },
    {
      id: "experience",
      icon: <Briefcase className="w-5 h-5" />,
      label: "Experience",
    },
    { id: "skills", icon: <Code className="w-5 h-5" />, label: "Skills" },
    {
      id: "projects",
      icon: <FolderGit className="w-5 h-5" />,
      label: "Projects",
    },
    {
      id: "education",
      icon: <GraduationCap className="w-5 h-5" />,
      label: "Education",
    },
    { id: "contact", icon: <Contact className="w-5 h-5" />, label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
        {/* Mobile Menu Button */}
        <div className="flex justify-between items-center md:hidden">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
          >
            <Terminal className="w-6 h-6" />
            <span>DEV/SM</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-blue-600/20 transition-all"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-blue-600/20 transition-all"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ${
            isMenuOpen
              ? "top-full opacity-100 visible"
              : "top-[110%] opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map(({ id, icon, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                  ${
                    activeSection === id
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600/20 text-gray-600 dark:text-gray-300"
                  }`}
              >
                {icon}
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-2 lg:space-x-4">
          {navItems.map(({ id, icon, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg transition-all
                  ${
                    activeSection === id
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600/20 text-gray-600 dark:text-gray-300"
                  }`}
              >
                {icon}
                <span className="hidden lg:inline">{label}</span>
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-blue-600/20 transition-all"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
