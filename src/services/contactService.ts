import { supabase } from "../lib/supabase";
import { Contact } from "../types/types";

export const fetchContact = async (): Promise<Contact[]> => {
  const { data, error } = await supabase.from("contact").select("*");
  if (error) throw error;
  return data;
};

export const insertContact = async (contact: Contact): Promise<Contact> => {
  const { data, error } = await supabase
    .from("contact")
    .insert([contact])
    .single();
  if (error) throw error;
  return data;
};
