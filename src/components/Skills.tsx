import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { SectionProps, withSection } from "../hoc/withSection";
import { SkillCategory } from "../types/types";

const skillCategories: SkillCategory[] = [
  {
    title: "Technologies",
    skills: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "red",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "blue",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "orange",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "yellow",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "blue",
      },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "blue",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "purple",
      },
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "cyan",
      },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "green",
      },
      {
        name: "Appwrite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg",
        color: "green",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        color: "yellow",
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
        color: "blue",
      },
    ],
  },
];

const SkillsContent: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {skillCategories.map((category) => (
        <div key={category.title} className="space-y-6">
          <h3 className="text-xl font-semibold text-center bg-gradient-to-r from-gray-900 to-gray-700 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            {category.title}
          </h3>
          <div className="space-y-4">
            {category.skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-black/5 dark:bg-blue-950/20 backdrop-blur rounded-xl p-4 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                  <span className="text-gray-700 dark:text-blue-200/90 font-medium">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Skills = withSection<SectionProps>(
  SkillsContent,
  "skills",
  "Skills",
  <Code className="w-6 h-6" />,
  "bg-black/5 dark:bg-blue-950/20 backdrop-blur-lg"
);
