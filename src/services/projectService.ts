// src/services/projectService.ts

import { supabase } from "../lib/supabase";
import { Project } from "../types";

export const fetchProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) throw error;
  return data;
};

export const insertProject = async (project: Project): Promise<Project> => {
  const { data, error } = await supabase
    .from("projects")
    .insert([project])
    .single();
  if (error) throw error;
  return data;
};
