import { supabase } from "../lib/supabase";

export default defineEventHandler(async (event) => {
  const { data, status } = await supabase.from("todos").select("*");
  if (status !== 200) {
    console.error("Failed to fetch todos");
    return;
  }
  return data;
});
