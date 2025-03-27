import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { SectionProps, withSection } from "../hoc/withSection";
import { useProfile } from "../context/ProfileContext";

const SkillsContent: React.FC = () => {
  const { projectTechnologies } = useProfile();

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {projectTechnologies.map((tech, index) => (
        <div key={index} className="space-y-6">
          <h3 className="text-xl font-semibold text-center bg-gradient-to-r from-gray-900 to-gray-700 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            {tech.name}
          </h3>
          <div className="space-y-4">
            {tech.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
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
