import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { withSection } from '../hoc/withSection';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    title: "Frontend Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Developing responsive web applications using React and Next.js.",
  },
  {
    title: "Junior Developer",
    company: "Innovation Labs",
    period: "2021 - 2022",
    description: "Built mobile applications using React Native and Expo.",
  },
];

const ExperienceContent: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          {...fadeInUp}
          className="relative pl-8 border-l-2 border-blue-500/30"
        >
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p className="text-gray-600 dark:text-blue-300/70 mb-2">
            {exp.company} • {exp.period}
          </p>
          <p className="text-gray-700 dark:text-blue-200/90">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export const Experience = withSection<SectionProps>(
  ExperienceContent,
  'experience',
  'Experience',
  <Briefcase className="w-6 h-6" />
);