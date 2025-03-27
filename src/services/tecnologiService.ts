import { supabase } from "../lib/supabase";
import { ProjectTechnology } from "../types/types";

export const fetchTechnologies =
  async (): Promise<ProjectTechnology | null> => {
    const { data, error } = await supabase
      .from("project_technologies")
      .select("*")
      .single();
    if (error) throw error;
    return data;
  };

export const insertProfile = async (
  profile: ProjectTechnology
): Promise<ProjectTechnology> => {
  const { data, error } = await supabase
    .from("profiles")
    .insert([profile])
    .single();
  if (error) throw error;
  return data;
};
