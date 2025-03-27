import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  Profile,
  Contact,
  Education,
  Experience,
  ProjectTechnology,
  Project,
  SocialLink,
} from "../types/types";
import { fetchProfile } from "../services/profileService";
import { fetchContact } from "../services/contactService";
import { fetchEducation } from "../services/educationService";
import { fetchExperience } from "../services/experienceService";
import { fetchTechnologies } from "../services/tecnologiService";
import { fetchProjects } from "../services/projectService";
import { socialLinksService } from "../services/socialLinksService"; // ✅ Importar servicio

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
  socialLinks: SocialLink[];
  setSocialLinks: (socialLinks: SocialLink[]) => void;
  addSocialLink: (platform: string, url: string) => Promise<void>;
  deleteSocialLink: (id: string) => Promise<void>;
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
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
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
        setProjectTechnologies(projectTechnologiesData);

        const socialLinksData = await socialLinksService.getSocialLinks(); // ✅ Cargar enlaces sociales
        setSocialLinks(socialLinksData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  // ✅ Agregar un enlace social
  const addSocialLink = async (platform: string, url: string) => {
    try {
      const newLink = await socialLinksService.addSocialLink(platform, url);
      setSocialLinks((prev) => [...prev, newLink]);
    } catch (error) {
      console.error("Error adding social link:", error);
    }
  };

  // ✅ Eliminar un enlace social
  const deleteSocialLink = async (id: string) => {
    try {
      await socialLinksService.deleteSocialLink(id);
      setSocialLinks((prev) => prev.filter((link) => link.id !== id));
    } catch (error) {
      console.error("Error deleting social link:", error);
    }
  };

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
        socialLinks,
        setSocialLinks,
        addSocialLink, // ✅ Exponer función de agregar
        deleteSocialLink, // ✅ Exponer función de eliminar
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
