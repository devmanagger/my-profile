import React, { useEffect, useRef } from 'react';
import { Download, MapPin, Phone } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

interface ContactInfo {
  text: string;
  icon: React.ReactNode;
}

const contactInfo: ContactInfo[] = [
  {
    text: "123 Tech Street, Silicon Valley, CA",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    text: "+1 (555) 123-4567",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    text: "© 2024 John Doe. All rights reserved.",
    icon: null,
  },
];

export const Footer: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: [0, -50, -100],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        });
      }
    };

    animate();
  }, []);

  return (
    <footer className="py-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="flex justify-center mb-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>

        <div className="overflow-hidden">
          <motion.div
            ref={sliderRef}
            animate={controls}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                  >
                    {info.icon}
                    <span>{info.text}</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};