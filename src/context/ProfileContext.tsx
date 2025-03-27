// src/context/ProfileContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";

import { Profile } from "../types/types";
import { fetchProfile } from "../services/profileService";

interface ProfileContextProps {
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(
  undefined
);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      const profileData = await fetchProfile();
      setProfile(profileData);
    };

    loadProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
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
