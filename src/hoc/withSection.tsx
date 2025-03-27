import React from 'react';
import { motion } from 'framer-motion';

interface WithSectionProps {
  sectionRef: (node?: Element | null) => void;
  title: string;
  icon: React.ReactNode;
  className?: string;
}

export interface SectionProps {
  sectionRef: (node?: Element | null) => void;
}

export const withSection = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  sectionId: string,
  title: string,
  icon: React.ReactNode,
  className?: string
) => {
  return ({ sectionRef, ...props }: WithSectionProps & P) => {
    const fadeInUp = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
    };

    return (
      <section
        id={sectionId}
        ref={sectionRef}
        className={`py-20 ${className || ''}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <motion.div {...fadeInUp} className="flex items-center gap-2 mb-12">
            <div className="text-blue-500">{icon}</div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {title}
            </h2>
          </motion.div>
          <WrappedComponent {...(props as P)} />
        </div>
      </section>
    );
  };
};