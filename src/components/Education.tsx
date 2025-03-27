import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { withSection } from '../hoc/withSection';
import { Education as EducationType } from '../types';

const education: EducationType[] = [
  {
    title: "Computer Science Degree",
    institution: "Tech University",
    period: "2018 - 2022",
  },
  {
    title: "Web Development Bootcamp",
    institution: "Code Academy",
    period: "2021",
  },
];

const EducationContent: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          {...fadeInUp}
          className="bg-black/5 dark:bg-blue-950/20 backdrop-blur rounded-xl p-6 hover:bg-blue-600/10 dark:hover:bg-blue-500/10 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold">{edu.title}</h3>
          <p className="text-gray-600 dark:text-blue-300/70">
            {edu.institution} • {edu.period}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export const Education = withSection<SectionProps>(
  EducationContent,
  'education',
  'Education',
  <GraduationCap className="w-6 h-6" />,
  'bg-black/5 dark:bg-blue-950/20 backdrop-blur-lg'
);