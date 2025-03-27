// src/services/profileService.ts

import { supabase } from "../lib/supabase";
import { Profile } from "../types/types";

export const fetchProfile = async (): Promise<Profile | null> => {
  const { data, error } = await supabase.from("profiles").select("*").single();
  if (error) throw error;
  return data;
};

export const insertProfile = async (profile: Profile): Promise<Profile> => {
  const { data, error } = await supabase
    .from("profiles")
    .insert([profile])
    .single();
  if (error) throw error;
  return data;
};
