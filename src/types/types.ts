// src/types.ts

// Tipos de datos para cada tabla
export interface Profile {
  id: string;
  name: string;
  title: string;
  about: string;
  location: string;
  phone: string;
  avatar_url: string | null;
  cv_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  image_url: string;
  demo_url: string | null;
  github_url: string | null;
  app_store_url: string | null;
  play_store_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProjectTechnology {
  id: string;
  project_id: string;
  created_at: string;
  name: string;
  icon: string;
  color: string;
  category: string;
  skills: Skill[];
}

export interface Education {
  id: string;
  profile_id: string;
  title: string;
  institution: string;
  period: string;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  type: string;
  id: string;
  profile_id: string;
  text: string;
  icon: string | null;
  created_at: string;
  updated_at: string;
}

export interface Experience {
  id: string;
  profile_id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  created_at: string;
  updated_at: string;
}
interface Skill {
  name: string;
  icon: string;
}
export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  created_at?: string;
}
