import { supabase } from "../lib/supabase";
import { SocialLink } from "../types/types";

export const socialLinksService = {
  // Obtener todos los enlaces
  async getSocialLinks(): Promise<SocialLink[]> {
    const { data, error } = await supabase.from("social_links").select("*");
    if (error) throw error;
    return data;
  },

  // Agregar un nuevo enlace
  async addSocialLink(platform: string, url: string): Promise<SocialLink> {
    const { data, error } = await supabase
      .from("social_links")
      .insert([{ platform, url }])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Eliminar un enlace por ID
  async deleteSocialLink(id: string): Promise<void> {
    const { error } = await supabase.from("social_links").delete().eq("id", id);
    if (error) throw error;
  },
};
