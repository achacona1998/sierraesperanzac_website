import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL?.trim();
const key = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

export const supabase = url && key ? createClient(url, key) : null;

export async function createLead({
  name,
  email,
  message,
  phone,
  service,
  budget,
  timeline,
}) {
  if (!supabase) {
    return { error: "Supabase no configurado" };
  }

  try {
    // SOLO llamar Edge Function - sin insert directo
    const { data: fnData, error: fnError } = await supabase.functions.invoke(
      "send-lead-email", // ✅ Nombre correcto
      {
        body: {
          record: {
            // ✅ Formato que espera tu función
            name,
            email,
            message,
            phone,
            service_type: service, // ✅ Unificado con schema
            budget,
            timeline,
          },
        },
      },
    );

    if (fnError) {
      throw new Error(fnError.message);
    }

    return { data: fnData, error: null };
  } catch (err) {
    console.error("Error in createLead:", err);
    return { error: err.message };
  }
}

// getProjects y getProjectImageUrl se mantienen igual...
export async function getProjects() {
  if (!supabase) return { data: [], error: "Supabase no configurado" };

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return { data: [], error };
  }

  return { data, error: null };
}

export function getProjectImageUrl(path) {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("bg-")) return path;

  if (!supabase) return path;

  const { data } = supabase.storage.from("portfolio").getPublicUrl(path);
  return data.publicUrl;
}
