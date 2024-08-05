import { supabase } from "../lib/supabase";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { error } = await supabase.from("todos").insert(body);
  if (error) {
    console.error("Failed to insert todo", error);
    return;
  }
});
