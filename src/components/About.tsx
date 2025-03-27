import React from "react";
import { User } from "lucide-react";
import { withSection } from "../hoc/withSection";
import { SectionProps } from "../hoc/withSection";
import { useProfile } from "../context/ProfileContext";

const AboutContent: React.FC = () => {
  const { profile } = useProfile();

  return (
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      {profile?.about}
    </p>
  );
};

export const About = withSection<SectionProps>(
  AboutContent,
  "about",
  "About Me",
  <User className="w-6 h-6" />,
  "bg-black/5 dark:bg-blue-950/20 backdrop-blur-lg"
);
