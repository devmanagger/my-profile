// src/services/experienceService.ts

import { supabase } from "../lib/supabase";
import { Experience } from "../types";

export const fetchExperience = async (): Promise<Experience[]> => {
  const { data, error } = await supabase.from("experience").select("*");
  if (error) throw error;
  return data;
};

export const insertExperience = async (
  experience: Experience
): Promise<Experience> => {
  const { data, error } = await supabase
    .from("experience")
    .insert([experience])
    .single();
  if (error) throw error;
  return data;
};
