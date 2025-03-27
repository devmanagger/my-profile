import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { withSection } from "../hoc/withSection";
import { useProfile } from "../context/ProfileContext";

type SectionProps = {
  sectionRef: React.RefObject<HTMLDivElement>;
};

const ExperienceContent: React.FC = () => {
  const { experience } = useProfile();
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="space-y-12">
      {experience.map((item, index) => (
        <motion.div
          key={index}
          {...fadeInUp}
          className="relative pl-8 border-l-2 border-blue-500/30"
        >
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-gray-600 dark:text-blue-300/70 mb-2">
            {item.company} • {item.period}
          </p>
          <p className="text-gray-700 dark:text-blue-200/90">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export const Experience = withSection<SectionProps>(
  ExperienceContent,
  "experience",
  "Experience",
  <Briefcase className="w-6 h-6" />
);
