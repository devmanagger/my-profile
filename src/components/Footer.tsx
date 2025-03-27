import React, { useEffect, useRef } from "react";
import { Download } from "lucide-react"; // Cambié los iconos según tus necesidades
import { motion, useAnimation } from "framer-motion";
import { useProfile } from "../context/ProfileContext";

export const Footer: React.FC = () => {
  const { contact } = useProfile();
  const sliderRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: [0, -50, -100],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 10,
            ease: "easeOut",
          },
        },
      });
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
            className="flex gap-8 whitespace-nowrap text-center"
          >
            {contact.map((item, index) => (
              <div
                key={index}
                className="flex flex-col self-center items-center"
              >
                {/* Añadir el ícono dinámicamente */}
                <p className="text-gray-900 dark:text-blue-950/100 font-medium mt-2">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
