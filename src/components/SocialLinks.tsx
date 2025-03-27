import React from "react";
import { Link } from "react-router-dom"; // Importamos Link de react-router-dom
import { Github, Linkedin, X } from "lucide-react";

// Definimos el tipo de las propiedades que va a recibir el componente
interface SocialLink {
  id: string;
  platform: string;
  url: string;
}

interface SocialLinksProps {
  socialLinks: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks }) => {
  // Mapeamos las plataformas con sus iconos correspondientes
  const iconMap: Record<string, JSX.Element> = {
    github: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
    linkedin: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
    twitter: <X className="w-5 h-5 sm:w-6 sm:h-6" />,
  };

  return (
    <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          to={social.url} // Usamos 'to' en lugar de 'href'
          target="_blank" // Aseguramos que se abra en una nueva pestaña
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          {/* Añadimos un div para envolver el icono y asegurarnos de que el evento se active */}
          <div className="flex items-center justify-center">
            {iconMap[social.platform.toLowerCase()] || null}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
