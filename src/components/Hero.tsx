import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, X } from "lucide-react";
import { useProfile } from "../context/ProfileContext";

interface HeroProps {
  sectionRef: (node?: Element | null) => void;
}

export const Hero: React.FC<HeroProps> = ({ sectionRef }) => {
  const { profile } = useProfile();

  const socialLinks = [
    { icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />, url: "#" },
    { icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />, url: "#" },
    { icon: <X className="w-5 h-5 sm:w-6 sm:h-6" />, url: "#" },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-500/20 blur-3xl rounded-full"></div>
          <img
            src={profile?.avatar_url || ""}
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-6 object-cover shadow-lg ring-2 ring-blue-500/50 relative"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
          >
            {profile?.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6"
          >
            {profile?.title}
          </motion.p>
          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
