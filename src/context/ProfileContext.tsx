import React, { createContext, useState, useEffect, ReactNode } from "react";

import {
  Profile,
  Contact,
  Education,
  Experience,
  ProjectTechnology,
  Project,
} from "../types/types";
import { fetchProfile } from "../services/profileService";
import { fetchContact } from "../services/contactService";
import { fetchEducation } from "../services/educationService";
import { fetchExperience } from "../services/experienceService";
import { fetchTechnologies } from "../services/tecnologiService";
import { fetchProjects } from "../services/projectService";

interface ProfileContextProps {
  project: Project[];
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
  contact: Contact[];
  setContact: (contact: Contact[]) => void;
  education: Education[];
  setEducation: (education: Education[]) => void;
  experience: Experience[];
  setExperience: (experience: Experience[]) => void;
  projectTechnologies: ProjectTechnology[];
  setProjectTechnologies: (projectTechnologies: ProjectTechnology[]) => void;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(
  undefined
);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [project, setProject] = useState<Project[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [contact, setContact] = useState<Contact[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [projectTechnologies, setProjectTechnologies] = useState<
    ProjectTechnology[]
  >([]);

  useEffect(() => {
    const loadData = async () => {
      const profileData = await fetchProfile();
      setProfile(profileData);

      const contactData = await fetchContact();
      setContact(contactData);

      const projectData = await fetchProjects();
      setProject(projectData);

      const educationData = await fetchEducation();
      setEducation(educationData);

      const experienceData = await fetchExperience();
      setExperience(experienceData);

      const projectTechnologiesData = await fetchTechnologies();
      setProjectTechnologies(projectTechnologiesData as any);
    };

    loadData();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        project,
        profile,
        setProfile,
        contact,
        setContact,
        education,
        setEducation,
        experience,
        setExperience,
        projectTechnologies,
        setProjectTechnologies,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = React.useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
