import { supabase } from "../lib/supabase";
import { ProjectTechnology } from "../types/types";

// Función para obtener las tecnologías de proyecto
export const fetchTechnologies = async (): Promise<ProjectTechnology[]> => {
  const { data, error } = await supabase
    .from("project_technologies") // Asegúrate de que el nombre de la tabla coincida con el de tu base de datos
    .select("*");

  if (error) {
    console.error("Error fetching project technologies:", error);
    return [];
  }

  return data as ProjectTechnology[];
};
