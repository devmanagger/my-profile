import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { FolderGit, X, Globe2, Github, Smartphone, Globe } from 'lucide-react';
import { withSection } from '../hoc/withSection';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Mobile App",
    type: "mobile",
    description:
      "React Native app with Expo for iOS and Android. Features include real-time messaging, push notifications, and offline support.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
      appStore: "https://apps.apple.com",
      playStore: "https://play.google.com",
    },
  },
  {
    id: 2,
    title: "E-commerce Website",
    type: "web",
    description:
      "Next.js website with dynamic routing and SSR. Includes cart management, payment processing, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    id: 3,
    title: "Task Management App",
    type: "mobile",
    description:
      "A mobile app for managing tasks and projects with team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
      appStore: "https://apps.apple.com",
      playStore: "https://play.google.com",
    },
  },
  {
    id: 4,
    title: "Portfolio Website",
    type: "web",
    description:
      "A modern portfolio website built with React and Framer Motion for smooth animations.",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
];

const ProjectsContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [selectedType, setSelectedType] = React.useState<'all' | 'web' | 'mobile'>('all');

  const filteredProjects = selectedType === 'all' 
    ? projects 
    : projects.filter(project => project.type === selectedType);

  return (
    <>
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setSelectedType('all')}
          className={`px-4 py-2 rounded-lg transition-all ${
            selectedType === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-black/5 dark:bg-blue-950/20 text-gray-700 dark:text-blue-200/90'
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setSelectedType('web')}
          className={`px-4 py-2 rounded-lg transition-all ${
            selectedType === 'web'
              ? 'bg-blue-600 text-white'
              : 'bg-black/5 dark:bg-blue-950/20 text-gray-700 dark:text-blue-200/90'
          }`}
        >
          Web Apps
        </button>
        <button
          onClick={() => setSelectedType('mobile')}
          className={`px-4 py-2 rounded-lg transition-all ${
            selectedType === 'mobile'
              ? 'bg-blue-600 text-white'
              : 'bg-black/5 dark:bg-blue-950/20 text-gray-700 dark:text-blue-200/90'
          }`}
        >
          Mobile Apps
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedProject(project)}
            className="group relative overflow-hidden rounded-xl cursor-pointer bg-black/5 dark:bg-blue-950/20"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  {project.type === 'web' ? (
                    <Globe className="w-5 h-5 text-blue-400" />
                  ) : (
                    <Smartphone className="w-5 h-5 text-blue-400" />
                  )}
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-blue-200/90">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog
            static
            open={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            className="relative z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-blue-950/90 rounded-xl shadow-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  {selectedProject.type === 'web' ? (
                    <Globe className="w-6 h-6 text-blue-500" />
                  ) : (
                    <Smartphone className="w-6 h-6 text-blue-500" />
                  )}
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                </div>

                <p className="text-gray-700 dark:text-blue-200/90 mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <Globe2 className="w-5 h-5" />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-blue-900/50 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-blue-800/50 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                </div>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export const Projects = withSection<SectionProps>(
  ProjectsContent,
  'projects',
  'Projects',
  <FolderGit className="w-6 h-6" />
);