import  supabase from "./Supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error("Supabase getSettings error:", error);
    throw new Error("Settings could not be loaded");
  }

  return data ?? {}; // safe fallback
}

export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Supabase updateSetting error:", error);
    throw new Error("Settings could not be updated");
  }

  return data ?? {};
}