// src/services/educationService.ts

import { supabase } from "../lib/supabase";
import { Education } from "../types/types";

export const fetchEducation = async (): Promise<Education[]> => {
  const { data, error } = await supabase.from("education").select("*");
  if (error) throw error;
  return data;
};

export const insertEducation = async (
  education: Education
): Promise<Education> => {
  const { data, error } = await supabase
    .from("education")
    .insert([education])
    .single();
  if (error) throw error;
  return data;
};
